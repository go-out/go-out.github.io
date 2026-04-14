"use strict"

// localStorage のデータを取得
let yourJson = [];
if (localStorage.getItem("mapJSON")) {
    let yourMap = JSON.parse(localStorage.getItem("mapJSON"));
    for (let i = 0; i < yourMap.length; i++) {
        yourJson.push(yourMap[i]);
    };
};

// 地図にマーカーを追加
function listItems(indexJson) {
    if (!indexJson.length == 0) {
        for (let i = 0; i < indexJson.length; i++) {
            let thisTitle = indexJson[i].properties.title, thisDescription, zoom;
            if (!indexJson[i].properties.description) {
                thisDescription = indexJson[i].geometry.address;
            } else {
                thisDescription = indexJson[i].properties.description.replaceAll("\n", "<br>");
            };

            if (indexJson[i].properties.zoom) {
                zoom = indexJson[i].properties.zoom;
            } else {
                zoom = 17.5;
            };

            const li = document.createElement("li");
            li.innerHTML = `<b>${thisTitle}</b>${thisDescription.replaceAll("\n", "<br>")}`;
            document.querySelector("#list").appendChild(li);

            if (indexJson == yourJson) {
                const input = document.createElement("input");
                input.setAttribute("type", "button");
                input.value = "Delete 消去";
                li.appendChild(input);
                input.addEventListener("click", () => {
                    indexJson.splice(i, 1);
                    localStorage.setItem("mapJSON", JSON.stringify(indexJson));
                    location.reload();
                });

                if (i == indexJson.length - 1) {
                    map.flyTo({
                        center: [Number(indexJson[i].geometry.coordinates[0]), Number(indexJson[i].geometry.coordinates[1])],
                        essential: true,
                        zoom: 10
                    });
                };
            } else {
                li.addEventListener("click", () => {
                    map.flyTo({
                        center: indexJson[i].geometry.coordinates,
                        essential: true,
                        offset: [0, 0],
                        zoom: zoom
                    }, false);

                    if (indexJson[i].properties.googlePhotos || indexJson[i].properties.archive) {
                        new Promise((resolve) => {
                            thisSpot(indexJson[i].properties);
                            if (indexJson[i].properties.googlePhotos) {
                                spotImage(indexJson[i].properties, indexJson[i].properties.googlePhotos[0]);
                            } else if (indexJson[i].properties.archive[0].cover) {
                                spotVideo(indexJson[i].properties, indexJson[i].properties.archive[0]);
                            };
                            resolve();
                        }).then(() => {
                            document.querySelector("#spot").showModal();
                        }, false);
                    };

                    document.querySelector("#mapbox").scrollIntoView({
                        behavior: "smooth"
                    }, false);
                });
            };
        };
    } else {
        const p = document.createElement("p");
        p.textContent = "まだ投稿がありません";
        document.querySelector("#list").prepend(p);
    };
};

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    } return array;
};

const coverAll = [];
function createCover(obj) {
    let directory;
    const header = document.querySelector("header"),
        ul = document.querySelector("header ul");

    new Promise((resolve) => {
        if (obj.features) {
            for (const i of obj.features) {
                if (i.properties.googlePhotos) {
                    directory = "https://lh3.googleusercontent.com/";
                    coverAll.push(directory + i.properties.googlePhotos[0].url[0] + "=w575-h325-p-k-no");
                } else if (i.properties.archive) {
                    const url = i.properties.archive[0].identifier + "/" + i.properties.archive[0].identifier + ".thumbs/" + i.properties.archive[0].cover;
                    coverAll.push("https://archive.org/download/" + url);
                };
            };
        };

        if (obj.cover.url) {
            if (!obj.cover.directory) {
                directory = "https://lh3.googleusercontent.com/";
                for (const ii of obj.cover.url) {
                    coverAll.push(`${directory + ii + "=w575-h325-p-k-no"}`);
                };
            } else {
                directory = obj.cover.directory;
                for (const ii of obj.cover.url) {
                    coverAll.push(`${directory + ii}`);
                };
            };
        };
        resolve();
    }).then(() => {
        console.log(coverAll)
        if (coverAll.length >= 9) {
            header.id = "cover";
            ul.hidden = false;
            const imgArr = shuffle(coverAll);
            for (let i = 0; i < 9; i++) {
                const li = document.createElement("li");
                li.style.backgroundImage = `url(${imgArr[i]})`;
                li.dataset.number = i;
                ul.appendChild(li);
            };
        };
    }, false);
};