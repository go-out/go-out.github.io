'use strict'

async function createIndex(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    linkAll(index);
};

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
    const thisTitle = document.querySelector('#title'),
        thisDscription = document.querySelector('#description'),
        thisBy = document.querySelector('#by'),
        countCollection = document.querySelector('#index summary'),
        header = document.querySelector('header button'),
        spotOpen = document.querySelector('#spot'),
        spotClose = document.querySelector('#spot button');

    document.title = obj.title;
    thisTitle.textContent = obj.title;
    document.querySelector("meta[name='description']").content = obj.description.replaceAll("\n", " ");
    thisDscription.innerHTML = obj.description.replaceAll("\n", "<br>");

    if (obj.author) {
        thisBy.textContent = 'by ' + obj.author.name;
    } else {
        document.querySelector('h1').hidden = true;
    };

    if (obj.info) {
        if (obj.info.note) {
            for (const note of obj.info.note) {
                const p = document.createElement('p');
                p.innerHTML = note;
                document.querySelector("#notes").appendChild(p);
            };
        };
        if (obj.info.links) {
            const u = document.createElement('u');
            u.textContent = "関連ページ Related Pages";
            document.querySelector("#links").appendChild(u);
            for (const link of obj.info.links) {
                const a = document.createElement('a');
                a.href = link.url;
                a.target = link.target;
                a.textContent = link.text;
                document.querySelector("#links").appendChild(a);
            };
        };
    };

    let center, bounds, zoom;
    if (obj.map.center) {
        center = obj.map.center;
        weatherAPI(obj.map.center[1], obj.map.center[0]);
    } else {
        center = null;
        document.querySelector("#weather").remove();
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

    map = new mapboxgl.Map({
        container: 'map',
        center: center,
        style: style,
        bearing: 0,
        pitch: 0,
        zoom: zoom,
        scrollZoom: 1,
        maxBounds: bounds,
        projection: 'globe',
        attributionControl: false
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    countCollection.innerHTML = "このコレクションの<b>" + obj.features.length + "</b>の場所";
    for (const each of obj.features) {
        addMarker(each);
    };
    listItems(obj.features);

    if (obj.cover) {
        createCover(obj);
        spotClose.textContent = obj.title;
        header.addEventListener("click", () => {
            new Promise((resolve) => {
                const spotTitle = document.querySelector('#spot h3 strong');
                spotTitle.innerHTML = obj.cover.title;
                spotTitle.hidden = false;
                document.querySelector('#spot h3 #year').hidden = true;
                document.querySelector('#spot h3 #month').hidden = true;
                document.querySelector('#spot h3 #date').hidden = true;
                document.querySelector('#spot #info').hidden = true;
                spotImage(coverAll);
                resolve();
            }).then(() => {
                spotOpen.showModal();
            }, false);
        }, false);
    } else {
        header.addEventListener("click", () => {
            history.back();
        }, false);
    };
    spotClose.addEventListener("click", () => {
        spotOpen.close();
    }, false);

    if (obj.line) {
        const lineJson = {
            'type': 'FeatureCollection',
            'features': []
        };
        new Promise((resolve) => {
            obj.line.forEach(function (lineArr) {
                lineJson.features.push(lineArr);
                if (lineArr.googleMap) {
                    const li = document.createElement('li');
                    document.querySelector("#list").appendChild(li);
                    const p = document.createElement('p');
                    p.innerHTML = `
                    <b>${lineArr.properties.title}</b>
                    ${lineArr.properties.description.replaceAll("\n", "<br>")}
                    `;
                    li.appendChild(p);
                    li.addEventListener("click", () => {
                        new Promise((resolve) => {
                            spotInfo(lineArr);
                            resolve();
                        }).then(() => {
                            document.querySelector("#spot").showModal();
                        }, false);
                    });
                }
            }, false);
            resolve();
        }).then(() => {
            map.on('load', () => {
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
            });
        }, false);
    };
};

function linkAll(obj) {
    document.querySelector('#index summary').innerHTML = "<b>" + obj.features.length + "</b> の 地図 の コレクション";
    for (const i of obj.features) {
        const li = document.createElement('li');
        document.querySelector("#list").appendChild(li);
        const p = document.createElement('p');
        p.innerHTML = `
        <a href="${i.link}">${i.title}</a>
        ${i.description}`;
        li.appendChild(p);
    };
};