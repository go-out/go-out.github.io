'use strict'

const mapJsonAll = [
    ["osaka", "city24", "index", "YYYY-MM-DD"],
    ["osaka/city24", "KitaFukushima", "index", "YYYY-MM-DD"],
    ["osaka/city24", "ChuoNishi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "tennoji", "index", "YYYY-MM-DD"],
    ["osaka/city24", "naniwa", "index", "YYYY-MM-DD"],
    ["osaka/city24", "NishinariAbeno", "index", "YYYY-MM-DD"],
    ["osaka/city24", "sumiyoshi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "hirano", "index", "YYYY-MM-DD"],
    ["osaka/city24", "konohana", "index", "YYYY-MM-DD"],
    ["osaka/city24", "MinatoTaisho", "index", "YYYY-MM-DD"],
    ["osaka/city24", "suminoe", "index", "YYYY-MM-DD"],
    ["osaka/city24", "yodogawa", "index", "YYYY-MM-DD"],
    ["osaka/city24", "MiyakojimaAsahi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "JotoTsurumi", "index", "YYYY-MM-DD"],
    ["osaka/city24", "HigashinariIkuno", "index", "YYYY-MM-DD"],
    ["osaka", "hokusetsu", "toyono", "YYYY-MM-DD"],
    ["osaka", "hokusetsu", "mishima", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Kita", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Naka", "YYYY-MM-DD"],
    ["osaka", "kawachi", "Minami", "YYYY-MM-DD"],
    ["osaka", "senshu", "senboku", "YYYY-MM-DD"],
    ["osaka", "senshu", "sennan", "YYYY-MM-DD"]
];

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

var player,
    youtubeID;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: youtubeID,
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0
        }
    });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
        infoMore(marker.properties);
    }, false);
};

function infoMore(marker) {
    const title = document.querySelector("#title");
    title.textContent = marker.title;

    const link = document.querySelector("#link");
    if (marker.link) {
        link.hidden = false;
        link.href = `${mapIndex}${marker.link}`;
    } else {
        link.hidden = true;
    };

    if (marker.youtube) {
        let youtubeAll = shuffle(marker.youtube);
        player.loadVideoById({ videoId: youtubeAll[0] })
        document.querySelector('#player').hidden = false;
    } else {
        document.querySelector('#player').hidden = true;
    };

    const address = document.querySelector("#description");
    address.innerHTML = marker.address;
    document.querySelector("dialog").showModal();
};

function closeDialog() {
    document.querySelector("#title").textContent = "Go Out";
    document.querySelector("#description").textContent = "行ったことのない場所へ行く";
    document.querySelector("#link").hidden = true;
    document.querySelector('#player').hidden = true;
    if (document.querySelector('#player').hidden = true) {
        player.stopVideo();
    };
    document.querySelector("dialog").close();
};