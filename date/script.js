"use strict"

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    createCover(index);
    createMenu(requestURL, index);
};

async function fetchText(url) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            document.querySelector("#readme section div").innerText = text
        }, false);
};

// fetch（非同期）
async function gateDate(target) {
    const response = await fetch(target);
    if (response.ok) {
        return response;
    } else {
        throw new Error('The data could not be read');
    };
};

// 更新日取得
function getModified(target) {
    const headers = target.headers;
    let lastModified = "";
    //　更新日時を取得（GMT）
    for (var pair of headers.entries()) {
        if (pair[0] === "last-modified") {
            lastModified = pair[1];
        };
    };
    return lastModified;
};

const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
]

function formatDate(targetDate) {
    const modified = new Date(targetDate);
    const year = modified.getFullYear();
    const month = modified.getMonth() + 1;
    const date = modified.getDate();
    const day = modified.getDay();
    return +year + "." + month + "." + date + " (" + days[day] + ")";
};

function coverTitle(obj) {
    const thisTitle = document.querySelector("#cover h1 strong");
    if (obj.title) {
        thisTitle.innerHTML = `<b>${obj.title[0]}</b>`;
        if (obj.title[1]) {
            thisTitle.innerHTML += `<br><small>${obj.title[1]}</small>`;
        } else {
        };
    } else {
        thisTitle.hidden = true;
    };

    const thisDescription = document.querySelector("#cover h1 u");
    if (obj.description) {
        thisDescription.textContent = obj.description;
        document.querySelector('meta[name="description"]').content = obj.description;
    } else {
        thisDescription.hidden = true;
    };

    const thisNote = document.querySelector("#cover h2"),
        note0 = document.querySelector("#cover h2 small"),
        note1 = document.querySelector("#cover h2 i");
    if (obj.note) {
        note0.textContent = obj.note[0];
        note1.textContent = obj.note[1];
    } else {
        thisNote.hidden = true;
    };
};

function createCover(obj) {
    if (obj.cover) {
        coverTitle(obj.cover);
        if (obj.cover.title) {
            if (obj.cover.title[1]) {
                document.title = `${obj.cover.title[0]} - ${obj.cover.title[1]}`;
            } else {
                document.title = obj.cover.title[0];
            };
        };

        let directory;
        const cover = document.querySelector("#cover");
        if (obj.cover.directory && obj.cover.url) {
            directory = obj.cover.directory;
            cover.style.backgroundImage = `url(${directory}${obj.cover.url[0]})`;
        } else if (!obj.cover.directory && obj.cover.url) {
            directory = "https://lh5.googleusercontent.com/";
            cover.style.backgroundImage = `url(${directory}${obj.cover.url[0]}=w1280-h720-k-no)`;
        };
    };
};

function readmeThis(info, obj) {
    let textAll = "";
    if (info.markdown) {
        fetchText(info.markdown);
    } else {
        textAll = `${obj.title[0]} ${obj.title[1]}`;
        textAll += "<p>" + obj.note[1] + "<br>" + obj.note[0] + "</p>";
        textAll += `<p>${obj.description}</p>`;
        if (info.note) {
            for (const textEach of info.note) {
                textAll += "<br>" + textEach;
            };
        };
        document.querySelector("#readme section div").innerHTML = textAll;
    };

    const links = document.querySelector('#links');
    links.innerHTML = "";
    if (info.links) {
        links.hidden = false;
        for (const eachLink of info.links) {
            const a = document.createElement('a');
            a.href = eachLink.url;
            a.textContent = eachLink.text;
            a.setAttribute('target', eachLink.target);
            links.appendChild(a);
        };
    } else {
        links.hidden = true;
    };
};

async function createMenu(json, obj) {
    // 更新日時を取得
    const latestUpdate = document.querySelector("#cover header input[type='button']");
    if (!obj.date) {
        //　データを非同期で取得
        const modified = getModified(await gateDate(json));
        latestUpdate.value = formatDate(modified);
    } else {
        latestUpdate.value = obj.date;
    };

    const readmeH3 = document.querySelector("#readme nav h3");
    readmeH3.addEventListener("click", (e) => {
        e.preventDefault();
        createCover(obj);
        if (obj.info) {
            readmeThis(obj.info, obj);
        };
        document.querySelector("#cover").scrollIntoView({
            top: 0,
            behavior: "smooth"
        }, false);
    });

    if (obj.info) {
        if (obj.info.index) {
            readmeH3.textContent = obj.info.index;
        };
        readmeThis(obj.info, obj.cover);
    };

    const menu = document.querySelector("#readme nav");
    if (obj.events) {
        for (const indexEach of obj.events) {
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            menu.appendChild(button);
            const ruby = document.createElement("ruby");
            button.appendChild(ruby);

            if (indexEach.title[1]) {
                const b = document.createElement("b");
                b.innerHTML = `${indexEach.title[0]} <small>${indexEach.title[1]}</small>`;
                ruby.appendChild(b);
            } else {
                const b = document.createElement("b");
                b.innerHTML = `${indexEach.title[0]}`;
                ruby.appendChild(b);
            };

            if (indexEach.date) {
                const rt = document.createElement("rt");
                let thisDate = "";
                if (indexEach.date.year) {
                    thisDate += `<b>${indexEach.date.year}</b> <sup>年</sup>`;
                };
                if (indexEach.date.month) {
                    thisDate += `<b>${indexEach.date.month}</b> <sup>月</sup>`;
                };
                if (indexEach.date.date) {
                    if (Array.isArray(indexEach.date.date) == true) {
                        thisDate += `<b>${indexEach.date.date}</b> <sup>日</sup>`;
                    } else {
                        thisDate += ` <sup>${indexEach.date.date}</sup>`;
                    }
                };
                rt.innerHTML = thisDate;
                ruby.appendChild(rt);
            };

            if (indexEach.month) {
                const rt = document.createElement("rt");
                rt.innerHTML = `<b>${indexEach.month}</b> <sup>月</sup>`;
                ruby.appendChild(rt);
            };

            button.addEventListener("click", (e) => {
                e.preventDefault();

                let directory;
                const cover = document.querySelector("#cover");
                if (indexEach.cover && indexEach.cover.url) {
                    coverTitle(indexEach);
                    if (indexEach.cover.directory) {
                        directory = indexEach.cover.directory;
                        cover.style.backgroundImage = `url(${directory}${indexEach.cover.url[0]})`;
                    } else if (!indexEach.cover.directory) {
                        directory = "https://lh3.googleusercontent.com/";
                        cover.style.backgroundImage = `url(${directory}${indexEach.cover.url[0]}=w1280-h720-k-no)`;
                    };

                    document.querySelector("#cover").scrollIntoView({
                        top: 0,
                        behavior: "smooth"
                    }, false);
                } else {
                    createCover(obj);
                    document.querySelector("#readme section").scrollIntoView({
                        top: 0,
                        behavior: "smooth"
                    }, false);
                };

                if (indexEach.info) {
                    readmeThis(indexEach.info, indexEach);
                };
            });
        };
    };

    const scrollIndex = document.querySelector("#cover header input[type='button']");
    scrollIndex.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#readme").scrollIntoView({
            top: 0,
            behavior: "smooth"
        }, false);
    });
};

async function addEvents(json) {
    const request = new Request(json);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    eventAll(index);
};

function eventAll(obj) {
    function thisEvent(query, eventEach) {
        const p = document.createElement("p");
        query.appendChild(p);
        p.innerHTML = `
        <b>${eventEach.name[0]}</b>
        <small>${eventEach.venue[0]}</small><br>
        <small>${eventEach.name[1]} at ${eventEach.venue[1]}</small>
        `;
    };

    obj.events.forEach(function (eventEach) {
        let thisQuery;
        if (!eventEach.week) {
            if (eventEach.date.thisYear) {
                eventEach.date.thisYear.forEach(function (eachYear) {
                    if (eachYear.year == yyyy) {
                        if (eachYear.month) {
                            eachYear.date.forEach(function (eachDate) {
                                thisQuery = document.querySelector(`#today .date[data-month="${eachYear.month}"][data-date="${eachDate}"]`);
                                thisEvent(thisQuery, eventEach);
                            }, false);
                        } else {
                            eachYear.date.forEach(function (eachDate) {
                                thisQuery = document.querySelector(`#today .date[data-month="${eventEach.date.month}"][data-date="${eachDate}"]`);
                                thisEvent(thisQuery, eventEach);
                            }, false);
                        };
                    };
                }, false);
            } else {
                if (eventEach.date.date) {
                    eventEach.date.date.forEach(function (eachDate) {
                        thisQuery = document.querySelector(`#today .date[data-month="${eventEach.date.month}"][data-date="${eachDate}"]`);
                        thisEvent(thisQuery, eventEach);
                    }, false);
                };
            };
        } else if (eventEach.week) {
            thisQuery = document.querySelector(`#today .date[data-month="${eventEach.date.month}"][data-day="${eventEach.week[0]}"][data-week="${eventEach.week[1]}"]`);
            thisEvent(thisQuery, eventEach);
        };
    }, false);
};