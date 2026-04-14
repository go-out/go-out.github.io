'use strict'

// markerJSON("./index.json")
async function markerJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    addMarkers(index);
};

// JSONファイルからマーカーを生成
function addMarkers(obj) {
    for (const marker of obj.features) {
        addMarker(marker);
    };
};

// 地図にマーカーを追加
function addMarker(each) {
    let thisGeo = [Number(each.geometry.coordinates[0]), Number(each.geometry.coordinates[1])],
        thisDescription, zoom;

    const el = document.createElement("span");
    if (each.properties.description) {
        thisDescription = each.properties.description.replaceAll("\n", "<br>");
    } else {
        thisDescription = each.geometry.address;
    };

    if (each.properties.icon) {
        el.style.width = each.properties.icon[1];
        el.style.height = each.properties.icon[2];
        el.style.backgroundImage = `url(${each.properties.icon[0]})`;
        if (each.properties.icon[3]) {
            el.style.zIndex = each.properties.icon[3];
        };
    } else if (each.properties.googlePhotos) {
        const url = each.properties.googlePhotos[0].url[0] + "=w172-h111-p-k-no";
        el.style.width = "7rem";
        el.style.height = "4.5rem";
        el.style.borderRadius = "0.5rem";
        el.style.backgroundImage = `url(https://lh3.googleusercontent.com/${url})`;
    } else if (each.properties.archive) {
        const url = each.properties.archive[0].identifier + "/" + each.properties.archive[0].identifier + ".thumbs/" + each.properties.archive[0].cover;
        el.style.width = "7rem";
        el.style.height = "4.5rem";
        el.style.borderRadius = "0.5rem";
        el.style.backgroundSize = "cover";
        el.style.backgroundImage = `url(https://archive.org/download/${url})`;
    } else {
        el.classList.add("goout");
    };

    new mapboxgl.Marker(el)
        .setLngLat(thisGeo)
        .addTo(map);

    el.addEventListener("click", () => {
        if (each.properties.googlePhotos || each.properties.archive) {
            new Promise((resolve) => {
                thisSpot(each.properties);
                if (each.properties.googlePhotos) {
                    spotImage(each.properties, each.properties.googlePhotos[0]);
                } else if (each.properties.archive[0].cover) {
                    spotVideo(each.properties, each.properties.archive[0]);
                };
                resolve();
            }).then(() => {
                document.querySelector("#spot").showModal();
            }, false);
        } else {
            const thisInfo = document.querySelector("#thisEvent #thisInfo");
            const h3 = document.createElement("h3");
            h3.innerHTML = each.properties.title;
            thisInfo.appendChild(h3);
            const description = document.createElement("p");
            description.innerHTML = `<b>${thisDescription}</b>`;
            thisInfo.appendChild(description);

            if (each.properties.note) {
                for (const noteEach of each.properties.note) {
                    const p = document.createElement("p");
                    p.innerHTML = noteEach;
                    thisInfo.appendChild(p);
                };
            };

            if (each.properties.links) {
                for (const linkEach of each.properties.links) {
                    const a = document.createElement("a");
                    a.href = linkEach.url;
                    a.target = linkEach.target;
                    a.textContent = linkEach.text;
                    document.querySelector("#thisLink").appendChild(a);
                };
                document.querySelector("#thisLink").hidden = false;
            } else {
                document.querySelector("#thisLink").hidden = true;
            };

            document.querySelector("#thisEvent").showModal();
        };

        if (each.properties.zoom) {
            zoom = each.properties.zoom;
        } else {
            zoom = 17.5;
        };

        map.flyTo({
            center: thisGeo,
            essential: true,
            offset: [0, 0],
            zoom: zoom
        }, false);
    }, false);
};

function thisSpot(info) {
    const spotNote = document.querySelector("#spot #info section"),
        spotLinks = document.querySelector("#spot #info aside"),
        selectLog = document.querySelector("#spot select#log");

    document.querySelector("#spot #thisDescription").innerHTML = info.description.replaceAll("\n", "<br>");
    if (info.note) {
        for (const noteEach of info.note) {
            const p = document.createElement("p");
            p.innerHTML = noteEach;
            spotNote.appendChild(p);
        };
        spotNote.hidden = false;
    } else {
        spotNote.hidden = true;
    };

    if (info.links) {
        for (const linkEach of info.links) {
            const a = document.createElement("a");
            a.href = linkEach.url;
            a.target = linkEach.target;
            a.textContent = linkEach.text;
            spotLinks.appendChild(a);
        };
        spotLinks.hidden = false;
    } else {
        spotLinks.hidden = true;
    };

    if (info.googlePhotos) {
        if (info.googlePhotos.length > 1) {
            console.log(info.googlePhotos);
            selectLog.hidden = false;
            for (let i = 0; i < info.googlePhotos.length; i++) {
                if (info.googlePhotos[i].year && info.googlePhotos[i].month) {
                    const option = document.createElement("option");
                    option.innerHTML = `${info.googlePhotos[i].year}年${info.googlePhotos[i].month}月${info.googlePhotos[i].date}日`;
                    if (info.googlePhotos[i].title) {
                        option.textContent += info.googlePhotos[i].title;
                    };
                    option.value = i;
                    selectLog.appendChild(option);
                };
            };

            selectLog.addEventListener("change", () => {
                for (const removeEl of document.querySelectorAll("#vewAll input, #vewAll label")) {
                    removeEl.remove();
                };
                spotImage(info, info.googlePhotos[Number(selectLog.value)]);
            });
        } else {
            selectLog.hidden = true;
        };
    } else if (info.archive) {
        if (info.archive.length > 1) {
            selectLog.hidden = false;
            for (let i = 0; i < info.archive.length; i++) {
                if (info.archive[i].year && info.archive[i].month) {
                    const option = document.createElement("option");
                    option.innerHTML = `${info.archive[i].year}年${info.archive[i].month}月${info.archive[i].date}日`;
                    if (info.archive[i].title) {
                        option.textContent += info.archive[i].title;
                    };
                    option.value = i;
                    selectLog.appendChild(option);
                };
            };

            selectLog.addEventListener("change", () => {
                for (const removeEl of document.querySelectorAll("#vewAll input, #vewAll label")) {
                    removeEl.remove();
                };
                spotVideo(info, info.archive[Number(selectLog.value)]);
            });
        } else {
            selectLog.hidden = true;
        };
    } else {
        selectLog.hidden = true;
    };

    document.querySelector("#spot button.close").addEventListener("click", () => {
        document.querySelector("#spot").close();
        resetAll();
    }, false);
};

function resetAll() {
    stop("dialog#spot #vewAll label video");
    document.querySelector("#spot div").style.backgroundImage = null;
    document.querySelector("#spot h2").className = null;
    document.querySelector("#spot h3").hidden = false;
    document.querySelector("#spot #video").hidden = true;

    for (const resetEl of document.querySelectorAll("#spot h2 strong, #spot h2 #year, #spot h3 #month, #spot h3 #date")) {
        resetEl.textContent = "";
    };

    for (const removeEl of document.querySelectorAll("#vewAll input, #vewAll label, #spot #info section p, #spot #info aside a, #spot select#log option")) {
        removeEl.remove();
    };
};

function spotImage(info, imgArr) {
    const spotTitle = document.querySelector("#spot h2 strong"),
        logYYYY = document.querySelector("#spot h2 #year"),
        logMM = document.querySelector("#spot h3 #month"),
        logDD = document.querySelector("#spot h3 #date");

    spotTitle.hidden = false;
    if (imgArr.title) {
        spotTitle.innerHTML = imgArr.title;
    } else {
        spotTitle.innerHTML = info.title;
    };

    if (imgArr.year) {
        logYYYY.hidden = false;
        logYYYY.textContent = imgArr.year;
    } else {
        logYYYY.hidden = true;
    };
    if (imgArr.month) {
        logMM.hidden = false;
        logMM.textContent = imgArr.month;
    } else {
        logMM.hidden = true;
    };
    if (imgArr.date) {
        logDD.hidden = false;
        logDD.textContent = imgArr.date;
    } else {
        logDD.hidden = true;
    };

    const imgAll = shuffle(imgArr.url), directory = "https://lh3.googleusercontent.com/";
    document.querySelector("#spot div").style.backgroundImage = `url(${directory}${imgAll[0]}=w1280-h720-p-k-no)`;
    if (!imgAll.length == 0) {
        for (let i = 0; i < imgAll.length; i++) {
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "channel");
            input.id = `img${i}`;
            input.value = `img${i}`;
            document.querySelector("#vewAll").appendChild(input);

            const url = directory + imgAll[i] + "=w172-h111-p-k-no";
            const label = document.createElement("label");
            label.setAttribute("for", `img${i}`);
            label.style.display = "block";
            label.style.height = "6.25rem";
            label.style.backgroundImage = `url(${url})`;
            document.querySelector("#vewAll").appendChild(label);

            input.addEventListener("change", () => {
                document.querySelector("#spot div").style.backgroundImage = `url(${directory}${imgAll[i]}=w1280-h720-p-k-no)`;
            });
        };
    };
};

function spotVideo(info, videoArr) {
    const spotTitle = document.querySelector("#spot h2 strong"),
        logYYYY = document.querySelector("#spot h2 #year"),
        logMM = document.querySelector("#spot h3 #month"),
        logDD = document.querySelector("#spot h3 #date");

    let thisTitle;
    if (videoArr.title) {
        thisTitle = videoArr.title;
    } else {
        thisTitle = info.title;
    };
    document.querySelector("#spot h2").dataset.title = thisTitle;
    spotTitle.hidden = false;

    if (videoArr.year) {
        logYYYY.hidden = false;
        logYYYY.textContent = videoArr.year;
    } else {
        logYYYY.hidden = true;
    };
    if (videoArr.month) {
        logMM.hidden = false;
        logMM.textContent = videoArr.month;
    } else {
        logMM.hidden = true;
    };
    if (videoArr.date) {
        logDD.hidden = false;
        logDD.textContent = videoArr.date;
    } else {
        logDD.hidden = true;
    };

    const directory = "https://archive.org/download/",
        canvas = document.querySelector("#spot #video"),
        canvasCtx = canvas.getContext("2d");

    let coverImg = `${directory}${videoArr.identifier}/${videoArr.identifier}.thumbs/${videoArr.cover}`;
    if (videoArr.files) {
        spotTitle.innerHTML = "▶️ " + thisTitle;
        const playAll = shuffle(videoArr.files);
        if (!playAll.length == 0) {
            for (let i = 0; i < videoArr.count; i++) {
                const input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "channel");
                input.id = `ch${i}`;
                input.value = `ch${i}`;
                document.querySelector("#vewAll").appendChild(input);

                const label = document.createElement("label");
                label.setAttribute("for", `ch${i}`);
                label.style.display = "block";
                label.style.height = "6.25rem";
                document.querySelector("#vewAll").appendChild(label);

                const video = document.createElement("video");
                const url = videoArr.identifier + "/" + videoArr.identifier + ".thumbs/" + playAll[i];
                video.poster = `${directory}${url}_000001.jpg`;
                label.appendChild(video);

                const source = document.createElement("source");;
                source.setAttribute("type", "video/mp4");
                source.src = `${directory}${videoArr.identifier}/${playAll[i]}${videoArr.formats}`;
                video.appendChild(source);

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    video.muted = true;
                    video.setAttribute("muted", "true");
                    video.setAttribute("playsinline", "true");
                };

                function canvasUpdate() {
                    canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    requestAnimationFrame(canvasUpdate);
                };

                input.addEventListener("change", () => {
                    canvasUpdate();
                });

                if (i === 0) {
                    input.checked = true;
                    canvasUpdate();
                };

                let ii = i;
                video.addEventListener("ended", () => {
                    ii = ii + videoArr.count;
                    if (ii < playAll.length) {
                        console.log(ii);
                    } else {
                        ii = ii - Number(playAll.length);
                        console.log(ii);
                    };
                    source.src = `${directory}${videoArr.identifier}/${playAll[ii]}${videoArr.formats}`;
                    video.load();
                    video.play();
                    input.checked = true;
                    canvasUpdate();
                }, false);
            };
        };
        document.querySelector("#spot h2").className = "start";
    } else {
        spotTitle.innerHTML = thisTitle;
        canvas.hidden = true;
    };
    document.querySelector("#spot div").style.backgroundImage = `url(${coverImg})`;
};