'use strict'

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
            let thisTitle = indexJson[i].properties.title, thisDescription;
            if (!indexJson[i].properties.description) {
                thisDescription = indexJson[i].geometry.address;
            } else {
                thisDescription = indexJson[i].properties.description;
            };

            const li = document.createElement('li');
            document.querySelector("#list").appendChild(li);
            if (indexJson == yourJson) {
                const input = document.createElement('input');
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
                if (indexJson[i].googleMap) {
                    li.addEventListener("click", () => {
                        new Promise((resolve) => {
                            spotInfo(indexJson[i]);
                            resolve();
                        }).then(() => {
                            document.querySelector("#spot").showModal();
                        }, false);
                    });
                };

                li.addEventListener("click", () => {
                    map.flyTo({
                        center: indexJson[i].geometry.coordinates,
                        essential: true,
                        zoom: 15
                    }, false);
                    document.querySelector('#mapbox').scrollIntoView({
                        behavior: 'smooth'
                    }, false);
                });
            };
            const p = document.createElement('p');
            p.innerHTML = `<b>${thisTitle}</b>${thisDescription.replaceAll("\n", "<br>")}`;
            li.appendChild(p);
        };
    } else {
        const p = document.createElement('p');
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

/* #cover 要素にカバー画像を生成
"cover": {
    "title": "タイトル",
    "url": [
        "__=w575-h325-p-k-no"
    ]
}
*/
const coverAll = [];
function createCover(obj) {
    const cover = document.querySelector('#cover'),
        directory = "https://lh3.googleusercontent.com/";
    new Promise((resolve) => {
        for (const i of obj.features) {
            if (i.properties.google) {
                coverAll.push(i.properties.google[0]);
            };
        };
        if (obj.cover.url) {
            for (const ii of obj.cover.url) {
                coverAll.push(ii);
            };
        };
        resolve();
    }).then(() => {
        if (coverAll.length >= 9) {
            cover.hidden = false;
            const imgArr = shuffle(coverAll);
            for (let i = 0; i < 9; i++) {
                const li = document.createElement('li');
                li.style.backgroundImage = `url(${directory + imgArr[i] + "=w575-h325-p-k-no"})`;
                li.dataset.number = i;
                cover.appendChild(li);
            };
            if (obj.cover.title) {
                const p = document.createElement('p');
                p.innerHTML = `
                <strong>${obj.cover.title}</strong>
                <small>${obj.title}</small>
                `;
                cover.appendChild(p);
                document.querySelector('#title').hidden = true;
            };
        };
    }, false);
};

function spotInfo(info) {
    const spotTitle = document.querySelector('#spot h3 strong'),
        logYYYY = document.querySelector('#spot h3 #year'),
        logMM = document.querySelector('#spot h3 #month'),
        logDD = document.querySelector('#spot h3 #date'),
        spot = document.querySelector('#spot #info'),
        spotNotes = document.querySelector('#spot #info section'),
        spotLinks = document.querySelector('#spot #info aside');

    spotTitle.innerHTML = info.properties.title;
    spotTitle.hidden = false;
    if (info.googleMap[0].year) {
        logYYYY.hidden = false;
        logYYYY.textContent = info.googleMap[0].year;
    } else {
        logYYYY.hidden = true;
    };
    if (info.googleMap[0].month) {
        logMM.hidden = false;
        logMM.textContent = info.googleMap[0].month;
    } else {
        logMM.hidden = true;
    };
    if (info.googleMap[0].date) {
        logDD.hidden = false;
        logDD.textContent = info.googleMap[0].date;
    } else {
        logDD.hidden = true;
    };

    spot.hidden = false;
    spotNotes.innerHTML = `${info.properties.description}<br>`;
    if (info.properties.note) {
        for (const eachP of info.properties.note) {
            spotNotes.innerHTML += `${eachP}<br>`;
        };
    };

    spotLinks.innerHTML = "";
    if (info.properties.links) {
        const u = document.createElement('u');
        u.textContent = "関連ページ Related Pages";
        spotLinks.appendChild(u);
        for (const eachA of info.properties.links) {
            const a = document.createElement('a');
            a.href = eachA.url;
            a.target = eachA.target;
            a.textContent = eachA.text;
            spotLinks.appendChild(a);
        };
    } else {
        spotLinks.hidden = true;
    };
    spotImage(info.googleMap[0].url);
};

function spotImage(imgArr) {
    const imgAll = shuffle(imgArr), directory = "https://lh3.googleusercontent.com/";
    for (const daletaEl of document.querySelectorAll('#vewAll input, #vewAll label')) {
        daletaEl.remove();
    };
    document.querySelector('#spot div').style.backgroundImage = `url(${directory}${imgArr[0]}=w1280-h720-p-k-no)`;
    for (let i = 0; i < imgAll.length; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'channel');
        input.id = `img${i}`;
        input.value = `img${i}`;
        document.querySelector('#vewAll').appendChild(input);

        const url = directory + imgAll[i] + "=w172-h111-p-k-no";
        const label = document.createElement('label');
        label.setAttribute('for', `img${i}`);
        label.style.display = "block";
        label.style.height = "6.25rem";
        label.style.backgroundImage = `url(${url})`;
        document.querySelector('#vewAll').appendChild(label);

        input.addEventListener("change", () => {
            document.querySelector('#spot div').style.backgroundImage = `url(${directory}${imgAll[i]}=w1280-h720-p-k-no)`;
        });
    };
};