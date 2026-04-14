"use strict"

mapboxgl.accessToken = "pk.eyJ1IjoicGVodSIsImEiOiJja3R4Y3diNmIybTg5Mm9waWgwYTdsc3FyIn0.lVvnPZ3aa6332EaWJIxPaQ";
let map, style = "mapbox://styles/pehu/ckx1e2xhw13kw14s4rjhaiv17", center, bounds, zoom, spots = 0;

const siki = [
    ["January", "冬", "winter"],
    ["February", "冬", "winter"],
    ["March", "春", "spring"],
    ["April", "春", "spring"],
    ["May", "春", "spring"],
    ["June", "夏", "summer"],
    ["July", "夏", "summer"],
    ["August", "夏", "summer"],
    ["September", "秋", "autumne"],
    ["October", "秋", "autumne"],
    ["November", "秋", "autumne"],
    ["December", "冬", "winter"]
];
const sikiNow = siki[new Date().getMonth()][2];

async function collectionJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    createMap(index);
};

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
};

function createMap(obj) {
    const thisTitle = document.querySelector("header #title strong"),
        thisBy = document.querySelector("header #title u"),
        thisDscription = document.querySelector("#collection #description b"),
        countCollection = document.querySelector("#index summary"),
        spotOpen = document.querySelector("#spot"),
        spotClose = document.querySelector("#spot button.close");

    if (obj.title) {
        thisTitle.innerHTML = obj.title[0];
        if (obj.title[1]) {
            document.title = obj.title[1] + " | " + obj.title[0];
            thisBy.innerHTML = obj.title[1];
            thisBy.hidden = false;
            spotClose.innerHTML = obj.title[1];
        } else {
            document.title = obj.title[0];
            spotClose.innerHTML = obj.title[0];
            if (obj.author) {
                thisBy.textContent = "by " + obj.author.name;
                thisBy.hidden = false;
            } else {
                thisBy.hidden = true;
            };
        };
    } else {
        if (obj.author) {
            thisBy.textContent = obj.author.name;
            thisBy.hidden = false;
        } else {
            thisBy.hidden = true;
        };
    };

    if (obj.description) {
        document.querySelector(`meta[name="description"]`).content = obj.description.replaceAll("\n", " ");
        thisDscription.innerHTML = obj.description.replaceAll("\n", "<br>");
    };

    if (obj.cover) {
        createCover(obj);
    };

    if (obj.info) {
        if (obj.info.markdown) {
            fetch(obj.info.markdown)
                .then(response => response.text())
                .then(text => {
                    const eachP = document.createElement("p");
                    eachP.innerText = text;
                    document.querySelector("#notes").appendChild(eachP);
                }, false);
        } else if (obj.info.note) {
            document.querySelector("#notes").innerHTML = "";
            for (const note of obj.info.note) {
                const eachP = document.createElement("p");
                eachP.innerHTML = note;
                document.querySelector("#notes").appendChild(eachP);
            };
        } else {
            document.querySelector("#notes").hidden = true;
        };

        if (obj.info.links) {
            document.querySelector("#links").hidden = false;
            for (const link of obj.info.links) {
                const a = document.createElement("a");
                a.href = link.url;
                a.target = link.target;
                a.textContent = link.text;
                document.querySelector("#links").appendChild(a);
            };
        } else {
            document.querySelector("#links").hidden = true;
        };
    } else {
        document.querySelector("#notes").hidden = true;
        document.querySelector("#links").hidden = true;
    };

    if (obj.map) {
        if (obj.map.center) {
            center = obj.map.center;
            weatherAPI(obj.map.center[1], obj.map.center[0]);
        } else {
            center = [getRandomInt(0, 360), getRandomInt(-90, 90)];
        };

        if (obj.map.bounds) {
            bounds = obj.map.bounds;
        } else {
            bounds = null;
        };

        if (obj.map.zoom) {
            zoom = obj.map.zoom;
        } else {
            zoom = getRandomInt(1.5, 3);
        };
    } else {
        center = [getRandomInt(0, 360), getRandomInt(-90, 90)];
        bounds = null;
        zoom = getRandomInt(1.5, 3);
    };

    map = new mapboxgl.Map({
        container: "map",
        center: center,
        style: style,
        bearing: 0,
        pitch: 0,
        zoom: zoom,
        scrollZoom: 1,
        maxBounds: bounds,
        projection: "globe",
        attributionControl: false
    });
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    if (obj.date || obj.events) {
        document.querySelector("#events").hidden = false;
        if (obj.date) {
            document.querySelector(`#events input[id=${sikiNow}]`).checked = true;

            new Promise((resolve) => {
                for (const jsonEach of obj.date) {
                    dateJson(jsonEach);
                };
                resolve();
            }).then(() => {
                const radios = document.querySelectorAll(`#events input[name="siki"]`);
                radios.forEach(radio => {
                    radio.addEventListener("change", (e) => {
                        document.querySelectorAll("#events section").forEach(ii => {
                            if (ii.classList.contains(e.target.id)) {
                                ii.hidden = false;
                            } else {
                                ii.hidden = true;
                            }
                        });
                    });
                });
            }, false);
        } else if (obj.events) {
            new Promise((resolve) => {
                allEvents(obj.events);
                resolve();
            }).then(() => {
                const labelAll = document.querySelectorAll("#events input, #events label");
                labelAll.forEach(i => {
                    i.remove();
                });
                const eventAll = document.querySelectorAll("#events section");
                eventAll.forEach(ii => {
                    ii.hidden = false;
                });
            }, false);
        }
    };

    if (obj.features) {
        spots = spots + obj.features.length;
        countCollection.innerHTML = "このコレクションの" + spots + "の場所";
        for (const each of obj.features) {
            addMarker(each);
        };
        listItems(obj.features);
        document.querySelector("#index").hidden = false;
    } else {
        // 右クリックイベント
        map.on("contextmenu", (e) => { // ポップアップに投稿フォームを表示
            new mapboxgl.Popup({
                className: "goout"
            })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .setHTML(`${e.lngLat.lng}, ${e.lngLat.lat}`).addTo(map);
        });
        document.querySelector("#index").hidden = true;
    };

    if (obj.featuresJSON) {
        for (const json of obj.featuresJSON) {
            featuresJSON(json);
        };
        document.querySelector("#index").hidden = false;
    };

    spotClose.addEventListener("click", () => {
        spotOpen.close();
    }, false);
};

async function dateJson(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    if (index.events) {
        allEvents(index.events);
    };
};

function allEvents(obj) {
    for (const i of obj) {
        let thisSiki;
        const eventEach = document.createElement("section");
        eventEach.hidden = true;
        document.querySelector("#events").appendChild(eventEach);

        if (i.info) {
            const thisInfo = document.querySelector("#thisEvent #thisInfo");
            if (i.info.note || i.info.markdown) {
                const moreinfo = document.createElement("button");
                moreinfo.textContent = "もっと詳しく";
                eventEach.appendChild(moreinfo);

                moreinfo.addEventListener("click", () => {
                    if (i.info.note) {
                        if (i.title) {
                            const h3 = document.createElement("h3");
                            h3.textContent = `${i.title[0]} `;
                            thisInfo.appendChild(h3);

                            if (i.title[1]) {
                                const small = document.createElement("small");
                                small.textContent = i.title[1];
                                h3.appendChild(small);
                            };
                        };

                        if (i.note) {
                            const note = document.createElement("ruby");
                            note.textContent = `${i.note[1]} `;
                            thisInfo.appendChild(note);

                            if (i.note[0]) {
                                const en = document.createElement("rt");
                                en.textContent = i.note[0];
                                note.appendChild(en);
                            }
                        };

                        for (const note of i.info.note) {
                            const eachP = document.createElement("p");
                            eachP.innerHTML = note;
                            thisInfo.appendChild(eachP);
                        };
                    } else if (i.info.markdown) {
                        fetch(i.info.markdown)
                            .then(response => response.text())
                            .then(text => {
                                thisInfo.innerText = text;
                            }, false);
                    };

                    if (i.info.links) {
                        for (const link of i.info.links) {
                            const a = document.createElement("a");
                            a.href = link.url;
                            a.target = link.target;
                            a.textContent = link.text;
                            document.querySelector("#thisLink").appendChild(a);
                        };
                        document.querySelector("#thisLink").hidden = false;
                    } else {
                        document.querySelector("#thisLink").hidden = true;
                    };
                    document.querySelector("#thisEvent").showModal();
                }, false);
            };
        };

        if (i.date && i.date.month == "毎") {
            eventEach.className = "all";
        } else if (i.date && i.date.month <= 12) {
            thisSiki = siki[i.date.month - 1][2];
            if (thisSiki == sikiNow) {
                eventEach.hidden = false;
                if (i.date.month - 1 == new Date().getMonth()) {
                    eventEach.style.background = "#fff";
                };
            };
            eventEach.className = thisSiki;
        } else if (i.month) {
            for (const eachMonth of i.month) {
                thisSiki = siki[eachMonth - 1][2];
                if (thisSiki == sikiNow) {
                    eventEach.hidden = false;
                    if (eachMonth - 1 == new Date().getMonth()) {
                        eventEach.style.background = "#fff";
                    };
                };
                eventEach.classList.add(thisSiki);
            };
        };

        if (i.note) {
            const note = document.createElement("ruby");
            note.textContent = `${i.note[1]} `;
            eventEach.appendChild(note);

            if (i.note[0]) {
                const en = document.createElement("rt");
                en.textContent = i.note[0];
                note.appendChild(en);
            };
        };

        if (i.title) {
            const h3 = document.createElement("h3");
            h3.textContent = `${i.title[0]} `;
            eventEach.appendChild(h3);

            if (i.title[1]) {
                const small = document.createElement("small");
                small.textContent = i.title[1];
                h3.appendChild(small);
            };
        };

        if (i.description) {
            const description = document.createElement("p");
            description.textContent = i.description;
            eventEach.appendChild(description);
        };
    };
};

async function featuresJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    if (index.features) {
        spots = spots + index.features.length;
        document.querySelector("#index summary").innerHTML = "このコレクションの" + spots + "の場所";
        for (const each of index.features) {
            addMarker(each);
        };
        listItems(index.features);
    };
};

document.querySelector("#thisEvent button.close").addEventListener("click", () => {
    document.querySelector("#thisEvent #thisInfo").textContent = "";
    document.querySelector("#thisLink").textContent = "";
    document.querySelector("#thisLink").hidden = true;
    document.querySelector("#thisEvent").close();
}, false);