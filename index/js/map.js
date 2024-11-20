'use strict'

const mapSpot = [
    ["osaka", "ferry", "index", "YYYY-MM-DD"],
    ["osaka/city24", "yodogawa", "index", "YYYY-MM-DD"],
    ["osaka/city24", "KitaFukushima", "index", "YYYY-MM-DD"],
    ["osaka/city24", "ChuoNishi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "tennoji", "index", "YYYY-MM-DD"],
    ["osaka/city24", "naniwa", "index", "YYYY-MM-DD"],
    ["osaka/city24", "NishinariAbeno", "index", "YYYY-MM-DD"],
    ["osaka/city24", "MiyakojimaAsahi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "JotoTsurumi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "HigashinariIkuno", "index", "YYYY-MM-DD"],
    ["osaka/city24", "sumiyoshi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "hirano", "index", "YYYY-MM-DD"],
    ["osaka/city24", "konohana", "index", "YYYY-MM-DD"],
    ["osaka/city24", "MinatoTaisho", "index", "YYYY-MM-DD"],
    ["osaka/city24", "suminoe", "index", "YYYY-MM-DD"],
    ["osaka", "hokusetsu", "toyono", "YYYY-MM-DD"],
    ["osaka", "hokusetsu", "mishima", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Kita", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Naka", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Minami", "YYYY-MM-DD"],
    ["osaka", "senshu", "senboku", "YYYY-MM-DD"],
    ["osaka", "senshu", "sennan", "YYYY-MM-DD"]
];

const today = new Date(),
    thisYear = today.getFullYear();

const monthAll = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "日 SUN",
    "月 MON",
    "火 TUE",
    "水 WED",
    "木 THU",
    "金 FRI",
    "土 SAT",
];

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    thisMap(index);
};

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    } return array;
};

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
};

function thisMap(obj) {
    let spotArr;
    if (obj.jsonAll) {
        spotArr = obj.jsonAll;
    } else {
        spotArr = mapSpot;
    };

    spotArr.forEach(function (eachArr) {
        const js = document.createElement('script');
        js.src = directory + eachArr[0] + '/' + eachArr[1] + '/' + eachArr[2] + '.js?' + obj.lastModified;
        document.head.appendChild(js);
    }, false);

    if (obj.lineArr) {
        obj.lineArr.forEach(function (eachArr) {
            const js = document.createElement('script');
            js.src = directory + eachArr + '?' + obj.lastModified;
            document.head.appendChild(js);
        }, false);
    };

    document.title = obj.title;
    const playBtn = document.querySelector("h1 u");
    const ogTitle = document.querySelector("meta[property='og:title']");
    playBtn.textContent = obj.title;
    ogTitle.content = obj.title;

    const description = document.querySelector("meta[name='description']");
    const ogDescription = document.querySelector("meta[property='og:description']");
    const h2 = document.querySelector("#info details summary");
    description.content = obj.description;
    ogDescription.content = obj.description;
    h2.textContent = obj.description;

    const ogUrl = document.querySelector("meta[property='og:url']");
    ogUrl.content = obj.url;

    if (obj.info.youtube) {
        const youtubeAll = shuffle(obj.info.youtube);
        const ytimg = 'https://i.ytimg.com/vi/' + youtubeAll[0] + '/sddefault.jpg';
        document.querySelector('meta[property="og:image"]').content = ytimg;
        document.querySelector('meta[name="twitter:image"]').content = ytimg;
    };

    const subtitle = document.querySelector("h1 strong");
    subtitle.innerHTML = obj.subtitle;

    if (obj.cover) {
        const coverAll = shuffle(obj.cover);
        for (let i = 0; i < 9; i++) {
            createLi(i, obj.directory + coverAll[i]);
        };
    };

    const readme = document.querySelector("#readme");
    if (obj.info.markdown && !obj.info.note) {
        readmeMD("#readme", directory + obj.info.markdown);
    } else if (!obj.info.markdown && obj.info.note) {
        if (obj.info.note) {
            for (const textEach of obj.info.note) {
                readme.innerHTML += textEach + '<br/>';
            };
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

    window.addEventListener("load", () => {
        if (obj.area) {
            creatIndex(obj.area);
        };

        if (obj.sort) {
            createSort(obj.sort);
        } else {
            document.querySelector("#sort").remove();
        };

        if (obj.map) {
            map.flyTo({
                center: obj.map.center,
                essential: true,
                zoom: obj.map.zoom
            });
            map.setMaxBounds(obj.map.bounds);
        };

        spotArr.forEach(function (eachArr) {
            let arr = eval(eachArr[1] + eachArr[2]);
            Function(createMarker(arr))();

            if (!obj.area) {
                Function(createList(arr))();
            };
        }, false);

        if (obj.info.youtube) {
            const youtubeAll = shuffle(obj.info.youtube);
            youtubeID = youtubeAll[0];
            player.loadVideoById({ videoId: youtubeID })
            document.querySelector('#player').style.display = "block";
        };
    }, false);
};

function createLi(number, poster) {
    const cover = document.querySelector('#cover');
    const li = document.createElement('li');
    li.dataset.number = number;
    li.style.backgroundImage = `url(${poster})`;
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
        }, false);
    };
};

function createMarker(arr) {
    for (const marker of arr.features) {
        const el = document.createElement('div');

        if (marker.properties.iconSize) {
            const url = marker.properties.iconSize[0];
            el.style.width = marker.properties.iconSize[1];
            el.style.height = marker.properties.iconSize[2];
            el.style.backgroundImage = `url(${directory}${url})`;
            if (marker.properties.iconSize[3]) {
                el.style.zIndex = marker.properties.iconSize[3];
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

function createFeatured(query, marker, featuredEach) {
    const li = document.createElement("li");
    document.querySelector(query).appendChild(li);

    const h4 = document.createElement("h4");
    li.appendChild(h4);
    if (featuredEach.title) {
        h4.textContent = featuredEach.title;
    } else {
        h4.textContent = marker.properties.title;
    };

    if (featuredEach.thisYear) {
        let thisDay;

        for (const eachYear of featuredEach.thisYear) {
            if (eachYear.year == thisYear || eachYear.year == 'every') {
                if (eachYear.date) {
                    const date = document.createElement("p");
                    li.appendChild(date);

                    for (const eachDate of eachYear.date) {
                        if (featuredEach.month == 'every') {
                            date.innerHTML += `
                            <ruby>
                            <b>${eachDate}</b>
                            </ruby>
                            `;
                        } else if (eachYear.year == thisYear || eachYear.year == 'every') {
                            thisDay = new Date(thisYear, thisMonth - 1, eachDate);
                            date.innerHTML += `
                            <ruby>
                            <b>${eachDate}</b>
                            <rt>${weekdays[thisDay.getDay()]}</rt>
                            </ruby>
                            `;
                        };
                    };
                    date.innerHTML += '日';

                    if (eachYear.time) {
                        const time = document.createElement("time");
                        time.textContent = eachYear.time;
                        li.appendChild(time);
                    };
                } else {
                    const time = document.createElement("time");
                    time.textContent = featuredEach.date;
                    li.appendChild(time);

                    if (eachYear.time) {
                        time.textContent += ' ' + eachYear.time;
                    };
                };

                if (eachYear.note) {
                    for (const eachNote of eachYear.note) {
                        const notes = document.createElement("small");
                        notes.innerHTML = eachNote;
                        li.appendChild(notes);
                    };
                };
            };
        };
    } else if (!featuredEach.thisYear && featuredEach.date) {
        const date = document.createElement("time");
        date.textContent = featuredEach.date;
        li.appendChild(date);
    };

    if (featuredEach.note) {
        for (const eachNote of featuredEach.note) {
            const notes = document.createElement("small");
            notes.innerHTML = eachNote;
            li.appendChild(notes);
        };
    };

    li.addEventListener('click', () => {
        flyToCenter(marker, marker.properties.zoom);
        infoMore(marker.properties, marker.geometry.coordinates);
        scrollEvent("map");
        //
    }, false);
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

            for (const city of name.city) {
                const small = document.createElement('small');
                small.textContent = city;
                label.appendChild(small);
            };

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
    }

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

function infoMore(marker, coordinates) {
    const title = document.querySelector("#title");
    title.textContent = marker.title;
    const link = document.querySelector("#link");
    if (marker.link) {
        link.hidden = false;
        link.href = `${directory}${marker.link}`;
    } else {
        link.hidden = true;
    };
    const address = document.querySelector("#description");
    address.innerHTML = marker.address;
    weatherAPI(coordinates[1], coordinates[0])
    document.querySelector("dialog").showModal();
};

function weatherAPI(lat, lon) {
    // Weather API ID
    const api = "557b466129cf7d7427b03e5b7886a4bb";

    // https://openweathermap.org/current
    const base =
        `http://api.openweathermap.org/data/2.5/weather` +
        `?lat=${lat}&lon=${lon}&appid=${api}&lang=ja`;

    // Current weather data
    const kelvin = 273.15;
    let icon0,
        weather0,
        temp_current,
        temp_max,
        temp_min,
        clouds,
        wind,
        sunrise,
        sunset;

    fetch(base)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            icon0 = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            weather0 = data.weather[0].description + ", " + data.weather[0].main;
            temp_current = Math.floor(data.main.temp - kelvin) + "°C";
            temp_max = Math.floor(data.main.temp_max - kelvin) + "°C";
            temp_min = Math.floor(data.main.temp_min - kelvin) + "°C";
            clouds = data.clouds.all;
            wind = data.wind.speed;
            sunrise = data.sys.sunrise;
            sunset = data.sys.sunset;

            const weather = document.querySelector('#weather');
            weather.innerHTML = `
            <img src="${icon0}" alt="${weather0}">
            <p>
            <strong>${weather0}</strong>
            </p>
            <p>
            <strong>
            <small>日の出 Sunrise</small>
            ${new Date(sunrise * 1000).toLocaleTimeString()}
            </strong>
            </p>
            <p>
            <strong>
            <small>日の入 Sunset</small>
            ${new Date(sunset * 1000).toLocaleTimeString()}
            </strong>
            </p>
            <p>
            <small>気温 ${temp_current} | 最高気温 ${temp_max} | 最低気温 ${temp_min} | 雲量 ${clouds}% | 風速 ${wind}m/s</small>
            </p>
            `;
        });
};

function closeDialog() {
    document.querySelector("#title").textContent = "行ったことのない場所へ行く";
    document.querySelector("#description").textContent = "知っていることの 外へ わからないところまで 出かける";
    document.querySelector("#weather").textContent = "";
    document.querySelector("#link").hidden = true;
    document.querySelector("dialog").close();
};

function flyToCenter(e, zoom) {
    map.flyTo({
        center: e.geometry.coordinates,
        essential: true,
        zoom: zoom
    });
};

function videoAll(obj) {
    let orientation =
        (screen.orientation || {}).type ||
        screen.mozOrientation || screen.msOrientation;

    if (
        orientation === "landscape-primary" ||
        orientation === "landscape-secondary"
    ) {
        // 画面が縦向き（縦長）の場合
    } else if (
        orientation === "portrait-primary" ||
        orientation === "portrait-secondary"
    ) {
        // 画面が横向き（横長）の場合
    } else if (orientation === undefined) {
        console.log("このブラウザは画面方向 API に対応していません :(");
    };
};

function featureSpot(arr) {
    for (const marker of arr.features) {
        if (marker.featured) {
            for (const featuredEach of marker.featured) {
                if (featuredEach.month) {
                    for (const eachMonth of featuredEach.month) {
                        if (eachMonth == thisMonth) {
                            createFeatured('#spot', marker, featuredEach);
                        };
                    };
                    if (featuredEach.month == 'every') {
                        createFeatured('#every', marker, featuredEach);
                    };
                };
            };
        };
    };
};