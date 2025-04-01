'use strict'

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

mapboxgl.accessToken = 'pk.eyJ1IjoicGVodSIsImEiOiJja3R4Y3diNmIybTg5Mm9waWgwYTdsc3FyIn0.lVvnPZ3aa6332EaWJIxPaQ';
let center, bounds, zoom;
if (!location.search) {
    let map = new mapboxgl.Map({
        container: 'map',
        center: [getRandomInt(0, 360), getRandomInt(-90, 90)],
        style: 'mapbox://styles/pehu/ckx1e2xhw13kw14s4rjhaiv17',
        bearing: 0,
        pitch: 0,
        zoom: getRandomInt(1.5, 3),
        scrollZoom: 1,
        projection: 'globe',
        attributionControl: false
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // 右クリックイベント
    map.on("contextmenu", (e) => {
        // ポップアップに投稿フォームを表示
        var coordinates = [e.lngLat.lng, e.lngLat.lat];
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            ${e.lngLat.lng},
            ${e.lngLat.lat}
            `).addTo(map);
    }, false)

    window.addEventListener("load", function () {
        const readme = document.querySelector('#modal p');
        fetch('README.md')
            .then(response => response.text())
            .then(innerText => {
                readme.innerText = innerText;
            });

        const submit = document.forms.submit,
            inputName = document.querySelector('h1 strong'),
            inputTitle = document.querySelector('h2 b'),
            thisDscription = document.querySelector('h3 b'),
            modal = document.querySelector('dialog'),
            closeButton = document.querySelector('dialog button'),
            deleteAll = document.querySelector('dialog #delete');

        // Your Name 名前
        const yourName = submit.elements.name;
        yourName.addEventListener('input', function (event) {
            inputName.textContent = 'by ' + event.currentTarget.value;
            localStorage.setItem('yourName', event.currentTarget.value);
        }, false);
        if (localStorage.getItem('yourName')) {
            inputName.textContent = 'by ' + localStorage.getItem('yourName');
            yourName.value = localStorage.getItem('yourName');
        };

        // Email メールアドレス
        const yourEmail = submit.elements.email;
        yourEmail.addEventListener('input', function (event) {
            localStorage.setItem('yourEmail', event.currentTarget.value);
        }, false);
        if (localStorage.getItem('yourEmail')) {
            yourEmail.value = localStorage.getItem('yourEmail');
        };

        // Title このコレクションの題名
        const thisTitle = submit.elements.title;
        thisTitle.addEventListener('input', function (event) {
            inputTitle.textContent = event.currentTarget.value;
            localStorage.setItem('title', event.currentTarget.value);
        }, false);
        if (localStorage.getItem('title')) {
            inputTitle.textContent = localStorage.getItem('title');
            thisTitle.value = localStorage.getItem('title');
        };

        // Description このコレクションの説明
        const textarea = submit.elements.description;
        textarea.addEventListener('input', function (event) {
            thisDscription.innerHTML = event.currentTarget.value.replace(/\r?\n/g, "<br>");
            localStorage.setItem('description', event.currentTarget.value);
        }, false);
        if (localStorage.getItem('description')) {
            thisDscription.innerHTML = localStorage.getItem('description').replace(/\r?\n/g, "<br>");
            textarea.value = localStorage.getItem('description');
        };

        submit.addEventListener("submit", (e) => {
            e.preventDefault();
            let thisCollection = {
                title: localStorage.getItem('title'),
                description: localStorage.getItem('description'),
                author: {
                    name: localStorage.getItem('yourName'),
                    email: localStorage.getItem('yourEmail')
                },
                collection: JSON.parse(localStorage.getItem("mapJSON"))
            };
            const blob = new Blob([JSON.stringify(thisCollection)], { type: 'application\/json' });
            const url = URL.createObjectURL(blob);

            if (typeof modal.showModal === "function") {
                modal.showModal();
                const download = document.querySelector('#json');
                if (localStorage.getItem('title') && localStorage.getItem("mapJSON")) {
                    download.href = url;
                    download.download = new Date().valueOf() + '.json';
                    download.addEventListener('click', () => {
                    }, false);

                    deleteAll.addEventListener('click', () => {
                        localStorage.removeItem("title");
                        localStorage.removeItem("mapJSON");
                        if (localStorage.getItem('description')) {
                            localStorage.removeItem("description");
                        };
                        this.location.replace("/")
                    }, false);
                } else {
                    download.hidden = true;
                    deleteAll.hidden = true;
                };
            } else {
                alert("The dialog API is not supported by this browser");
            };
        }, false);

        closeButton.addEventListener('click', () => {
            modal.close();
        }, false);

        const countCollection = document.querySelector('#index summary'),
            submitButtton = document.querySelector('#submit input[type="submit"]');

        if (!yourJson.length == 0) {
            for (let i = 0; i < yourJson.length; i++) {
                let thisDescription,
                    thisTitle = yourJson[i].properties.title,
                    thisGeo = yourJson[i].geometry.coordinates;

                if (!yourJson[i].properties.description) {
                    thisDescription = yourJson[i].geometry.address;
                } else {
                    thisDescription = yourJson[i].properties.description.replace(/\r?\n/g, "<br>");;
                };

                const el = document.createElement('div');
                if (yourJson[i].properties.icon) {
                    el.style.width = yourJson[i].properties.icon[1];
                    el.style.height = yourJson[i].properties.icon[2];
                    el.style.backgroundImage = `url(${yourJson[i].properties.icon[0]})`;
                } else {
                    el.className = 'goout';
                };

                new mapboxgl.Marker(el)
                    .setLngLat(thisGeo)
                    .setPopup(
                        new mapboxgl.Popup({
                            className: "goout"
                        }).setHTML(`
                        <b>${thisTitle}</b><br>
                        ${thisDescription}
                        `)
                    ).addTo(map);

                el.addEventListener('click', () => {
                    map.flyTo({
                        center: thisGeo,
                        essential: true,
                        offset: [0, 100],
                        zoom: 17.5
                    })
                }, false);

                const li = document.createElement('li');
                document.querySelector("#list").prepend(li);
                const p = document.createElement('p');
                p.innerHTML = `<b>${thisTitle}</b>${thisDescription}`;
                li.appendChild(p);

                li.addEventListener("click", () => {
                    document.querySelector('#mapbox').scrollIntoView({
                        behavior: 'smooth'
                    }, false);

                    map.flyTo({
                        center: thisGeo,
                        essential: true,
                        zoom: 15
                    })
                });

                if (i == yourJson.length - 1) {
                    map.flyTo({
                        center: yourJson[i].geometry.coordinates,
                        essential: true,
                        zoom: 5
                    })
                };
            };
            submitButtton.hidden = false;
        } else {
            const p = document.createElement('p');
            p.className = "empty";
            p.textContent = "まだ投稿がありません";
            document.querySelector("#list").prepend(p);
            submitButtton.hidden = true;
        };
        countCollection.innerHTML = "このコレクションの<b>" + yourJson.length + "</b>の場所";
    }, false);
} else {
    const params = new URLSearchParams(location.search);
    collectionJSON(params.get("id") + ".json");
};

function createMap(obj) {
    center = obj.map.center;
    bounds = obj.map.bounds;
    zoom = obj.map.zoom;

    let map = new mapboxgl.Map({
        container: 'map',
        center: center,
        style: 'mapbox://styles/pehu/ckx1e2xhw13kw14s4rjhaiv17',
        bearing: 0,
        pitch: 0,
        zoom: zoom,
        scrollZoom: 1,
        maxBounds: bounds,
        projection: 'mercator',
        attributionControl: false
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const submit = document.forms.submit,
        inputName = document.querySelector('h1 strong'),
        inputTitle = document.querySelector('h2 b'),
        thisDscription = document.querySelector('h3 b'),
        countCollection = document.querySelector('#index summary');

    inputName.textContent = 'by ' + obj.author.name;
    inputTitle.textContent = obj.title;
    thisDscription.innerHTML = obj.description.replace(/\r?\n/g, "<br>");
    countCollection.innerHTML = "このコレクションの<b>" + obj.collection.length + "</b>の場所";
    submit.hidden = true;

    for (const i of obj.collection) {
        let thisDescription,
            thisTitle = i.properties.title,
            thisGeo = i.geometry.coordinates;

        if (!i.properties.description) {
            thisDescription = i.geometry.address;
        } else {
            thisDescription = i.properties.description.replace(/\r?\n/g, "<br>");;
        };

        const el = document.createElement('div');
        if (i.properties.icon) {
            el.style.width = i.properties.icon[1];
            el.style.height = i.properties.icon[2];
            el.style.backgroundImage = `url(${i.properties.icon[0]})`;
        } else {
            el.className = 'goout';
        };

        new mapboxgl.Marker(el)
            .setLngLat(thisGeo)
            .setPopup(
                new mapboxgl.Popup({
                    className: "goout"
                }).setHTML(`
                <b>${thisTitle}</b><br>
                ${thisDescription}
                `)
            ).addTo(map);

        el.addEventListener('click', () => {
            map.flyTo({
                center: thisGeo,
                essential: true,
                offset: [0, 100],
                zoom: 17.5
            })
        }, false);

        const li = document.createElement('li');
        document.querySelector("#list").prepend(li);
        const p = document.createElement('p');
        p.innerHTML = `<b>${thisTitle}</b>${thisDescription}`;
        li.appendChild(p);

        li.addEventListener("click", () => {
            document.querySelector('#mapbox').scrollIntoView({
                behavior: 'smooth'
            }, false);

            map.flyTo({
                center: thisGeo,
                essential: true,
                zoom: 15
            })
        });
    };
};