'use strict'

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    } return array;
};

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    thisMap(index);
};

function thisMap(obj) {
    let spotArr;
    if (obj.jsonAll) {
        spotArr = obj.jsonAll;
    } else {
        spotArr = mapJsonAll;
    };

    spotArr.forEach(function (eachArr) {
        const js = document.createElement('script');
        js.src = mapIndex + eachArr[0] + '/' + eachArr[1] + '/' + eachArr[2] + '.js?' + obj.lastModified;
        document.head.appendChild(js);
    }, false);

    document.title = obj.title;
    const ogTitle = document.querySelector("meta[property='og:title']");
    ogTitle.content = obj.title;

    const description = document.querySelector("meta[name='description']");
    const ogDescription = document.querySelector("meta[property='og:description']");
    description.content = obj.description;
    ogDescription.content = obj.description;

    const ogUrl = document.querySelector("meta[property='og:url']");
    ogUrl.content = window.location.href;

    const coverAll = shuffle(obj.cover);
    const coverIMG = obj.directory + coverAll[0];
    document.querySelector('meta[property="og:image"]').content = coverIMG;
    document.querySelector('meta[name="twitter:image"]').content = coverIMG;

    window.addEventListener("load", () => {
        for (let i = 0; i < 9; i++) {
            createCover(i, obj.directory + coverAll[i]);
        };

        const playBtn = document.querySelector("h1 u");
        const subtitle = document.querySelector("h1 strong");
        const h2 = document.querySelector("#info details summary");
        playBtn.textContent = obj.title;
        subtitle.innerHTML = obj.subtitle;
        h2.textContent = obj.description;

        if (obj.map) {
            map.flyTo({
                center: obj.map.center,
                essential: true,
                zoom: obj.map.zoom
            });
            map.setMaxBounds(obj.map.bounds);
        };

        if (obj.area) {
            creatIndex(obj.area);
        };

        if (obj.sort) {
            createSort(obj.sort);
        } else {
            document.querySelector("#sort").remove();
        };

        spotArr.forEach(function (eachArr) {
            let arr = eval(eachArr[1] + eachArr[2]);
            Function(createMarker(arr))();

            if (!obj.area) {
                Function(createList(arr))();
            };
        }, false);

        const readme = document.querySelector("#readme");
        if (obj.info.markdown && !obj.info.note) {
            readmeMD("#readme", mapIndex + obj.info.markdown);
        } else if (!obj.info.markdown && obj.info.note) {
            for (const textEach of obj.info.note) {
                readme.innerHTML += textEach + '<br/>';
            };
        } else {
            readme.remove();
        };

        if (obj.info.links) {
            const p = document.createElement('p');
            p.innerHTML = '<u>関連ページ Related Pages</u>';
            document.querySelector("#links").appendChild(p);

            for (const eachLink of obj.info.links) {
                const a = document.createElement('a');
                a.href = eachLink.url;
                a.textContent = eachLink.text;
                a.setAttribute('target', eachLink.target);
                p.appendChild(a);
            };
        };

        if (obj.lineArr) {
            obj.lineArr.forEach(function (eachArr) {
                let thisLine = eval(eachArr);
                thisLine.forEach(function (lineArr) {
                    lineJson.features.push(lineArr);
                }, false);
            }, false);

            console.log(lineJson);
            map.addSource('line', {
                type: 'geojson',
                lineMetrics: true,
                data: lineJson
            });

            map.addLayer({
                type: 'line',
                source: 'line',
                id: 'line',
                paint: {
                    'line-color': 'lightskyblue',
                    'line-width': 11
                },
                layout: {
                    'line-cap': 'round',
                    'line-join': 'round'
                }
            });

            map.on('mouseenter', 'line', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'line', () => {
                map.getCanvas().style.cursor = '';
            });

            map.on('click', 'line', (e) => {
                map.flyTo({
                    center: e.lngLat,
                    essential: true,
                    zoom: e.features[0].properties.zoom
                });
                infoMore(e.features[0].properties);
            });
        };

        const details = document.querySelector("#info details");
        let orientation =
            (screen.orientation || {}).type ||
            screen.mozOrientation || screen.msOrientation;

        if (
            orientation === "landscape-primary" ||
            orientation === "landscape-secondary"
        ) {
            // 画面が横向き（横長）の場合
            details.open = true;
        } else if (orientation === undefined) {
            console.log("このブラウザは画面方向 API に対応していません :(");
        };
    }, false);
};

function createCover(number, poster) {
    const cover = document.querySelector('#cover');
    const li = document.createElement('li');
    li.style.backgroundImage = `url(${poster})`;
    li.dataset.number = number;
    cover.appendChild(li);
};

function createList(arr) {
    const ul = document.createElement('ul');
    document.querySelector("#area").appendChild(ul);

    for (const marker of arr.features) {
        const li = document.createElement('li');
        li.innerHTML = `
        <button><b>${marker.properties.title}</b></button><br>
        <small>${marker.properties.address}</small>
        `;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            if (marker.properties.zoom) {
                flyToCenter(marker, marker.properties.zoom);
            } else {
                flyToCenter(marker, 15.5);
            };
            scrollEvent("map");
            infoMore(marker.properties, marker.geometry.coordinates);
        }, false);
    };
};

function creatIndex(arr) {
    const area = document.querySelector("#area");
    const region = document.createElement('ul');
    area.appendChild(region);

    for (const area of arr) {
        const local = document.createElement('li');
        local.id = area.id;
        local.innerHTML = `
        <ruby class ="lr">${area.name[0]}
        <rt>${area.name[1]}</rt>
        </ruby>
        `;
        region.appendChild(local);

        for (const name of area.area) {
            const input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'indexArea');
            input.id = name.id;
            input.value = name.id;
            local.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', name.id);
            label.innerHTML = `
            <ruby>${name.name[0]}
            <rt>${name.name[1]}</rt>
            </ruby>
            `;
            local.appendChild(label);

            if (name.city) {
                for (const city of name.city) {
                    const small = document.createElement('small');
                    small.textContent = city;
                    label.appendChild(small);
                };
            }

            input.addEventListener('change', () => {
                if (name.zoom) {
                    map.flyTo({
                        center: name.coordinates,
                        zoom: name.zoom
                    });
                    map.setMaxBounds(name.bounds);
                } else {
                    map.flyTo({
                        center: name.coordinates,
                        zoom: 11
                    });
                    map.setMaxBounds(name.bounds);
                };

                scrollEvent("map");
            }, false);
        };
    };
};

function createMarker(arr) {
    for (const marker of arr.features) {
        const el = document.createElement('div');

        if (marker.properties.iconSize || marker.properties.google) {
            if (marker.properties.iconSize) {
                const url = marker.properties.iconSize[0];
                el.style.backgroundImage = `url(${mapIndex}${url})`;
                el.style.width = marker.properties.iconSize[1];
                el.style.height = marker.properties.iconSize[2];
                if (marker.properties.iconSize[3]) {
                    el.style.zIndex = marker.properties.iconSize[3];
                };
            } else if (marker.properties.google) {
                const url = marker.properties.google[0] + "=w172-h111-p-k-no";
                el.style.backgroundImage = `url(https://lh5.googleusercontent.com/p/${url})`;
                el.style.width = "7rem";
                el.style.height = "4.5rem";
                el.style.borderRadius = "0.5rem";
                if (marker.properties.google[1]) {
                    el.style.zIndex = marker.properties.google[1];
                };
            }
        } else {
            el.classList.add("goout");
        };

        if (marker.properties.tag) {
            for (const tag of marker.properties.tag) {
                el.classList.add(tag);
            };
        };

        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', () => {
            infoMore(marker.properties, marker.geometry.coordinates);
            if (marker.properties.zoom) {
                flyToCenter(marker, marker.properties.zoom);
            } else {
                flyToCenter(marker, 15.5);
            };
        }, false);
    };
};

function createSort(arr) {
    arr.forEach(function (checkbox) {
        const nav = document.querySelector("#sort");
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'indexSpot');
        input.id = checkbox[0];
        input.value = checkbox[0];
        nav.appendChild(input);

        const label = document.createElement('label');
        label.setAttribute('for', checkbox[0]);
        label.textContent = checkbox[1];
        nav.appendChild(label);

        input.addEventListener('change', () => {
            indexSort();
        }, false);
    }, false);
};

function indexSort() {
    const values = [];
    const checkboxAll = document.querySelectorAll('input[name="indexSpot"]:checked');
    for (let i = 0; i < checkboxAll.length; i++) {
        values.push(checkboxAll[i].value);
    };
    const markerAll = document.querySelectorAll('.mapboxgl-marker');
    for (const marker of markerAll) {
        marker.hidden = true;
        for (const valueEach of values) {
            if (marker.classList.contains(valueEach)) {
                marker.hidden = false;
            };
        };
    };
};

function flyToCenter(e, zoom) {
    map.flyTo({
        center: e.geometry.coordinates,
        essential: true,
        zoom: zoom
    });
};

function scrollEvent(id) {
    const element = document.getElementById(id);
    const targetDOMRect = element.getBoundingClientRect();
    const targetTop = targetDOMRect.top + window.scrollY;
    window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
    }), false;
};

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
};