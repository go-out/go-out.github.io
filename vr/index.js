'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    playThis(index)
    videoAll(index)
}

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
}

function playThis(obj) {
    const year = document.querySelector("#year")
    if (obj.year) {
        year.textContent = obj.year;
    } else {
        year.remove()
    }

    const month = document.querySelector("#month")
    if (obj.month) {
        month.textContent = obj.month;
    } else {
        document.querySelector("header h2").remove()
    }

    const day = document.querySelector("#day")
    if (obj.day) {
        day.textContent = obj.day;
    }

    document.title = obj.title;
    const header = document.querySelector("main header")
    const playBtn = document.querySelector("#play")
    const title = document.querySelector("#title")
    playBtn.textContent = document.title;
    title.textContent = obj.title;

    const metaContent = document.querySelector("meta[name='description']")
    metaContent.content = obj.description;

    header.addEventListener('click', function () {
        document.body.className = document.body.className === "start" ? "stop" : "start";
        if (document.body.className === "start") {
            playBtn.textContent = document.title;
            stop()
        } else if (document.body.className === "stop") {
            playBtn.textContent = obj.description;
            start()
        }
    }, false)

    function start() {
        const all = document.querySelectorAll('video')
        all.forEach((iii) => {
            iii.play()
        })
    }

    function stop() {
        const all = document.querySelectorAll('video')
        all.forEach((iii) => {
            iii.pause()
        })
    }
}

function videoAll(obj) {
    const main = document.querySelector('main')

    if (obj.youtube && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const header = document.querySelector("main header")
        header.remove()

        const iframe = document.createElement('iframe')
        iframe.id = "player";
        iframe.src = "https://www.youtube.com/embed/" + obj.youtube;
        iframe.style.height = `calc(100vw * ${obj.height})`;
        iframe.style.maxWidth = `calc(100vh / ${obj.height})`;
        main.appendChild(iframe)
    } else {
        if (obj.video) {
            const playAll = shuffle(obj.video);
            for (let i = 0; i < playAll.length; i++) {
                const video = document.createElement('video')
                video.setAttribute('playsinline', 'true')
                video.setAttribute('poster', obj.directory + playAll[i].poster)
                main.appendChild(video)
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    video.muted = true;
                    video.setAttribute('muted', 'true')
                }
                if (playAll[i].src) {
                    let ii = 0;
                    const source = document.createElement('source')
                    source.setAttribute("type", "video/mp4")
                    source.src = obj.directory + playAll[i].src[ii];
                    video.appendChild(source)

                    video.addEventListener('ended', () => {
                        if (playAll[i].src.length === 0) {
                            ii = 0;
                            source.src = obj.directory + playAll[i].src[ii];
                        } else if (ii === playAll[i].src.length - 1) {
                            ii = 0;
                            source.src = obj.directory + playAll[i].src[ii];
                        } else if (ii < playAll[i].src.length - 1) {
                            ii++;
                            source.src = obj.directory + playAll[i].src[ii];
                        }
                        video.load()
                        video.play()
                    }, false);
                }
            }

            window.onresize = tmResize;
            function tmResize() {
                if (typeof pageResize == "function") {
                    pageResize()
                }
            }

            function pageResize() {
                const mediaQueryList = window.matchMedia('screen and (min-width: 1000px)')
                if (mediaQueryList.matches) {
                    /* orientation は landscape（現在ビューポートは横長） */
                    main.style.gridTemplateColumns = obj.landscape;
                } else {
                    /* orientation は landscape ではない（現在ビューポートは縦長） */
                    main.style.gridTemplateColumns = obj.portrait;
                }
            }

            pageResize()
        } else if (obj.youtube && !obj.video) {
            const header = document.querySelector("main header")
            header.remove()

            const iframe = document.createElement('iframe')
            iframe.id = "player";
            iframe.src = "https://www.youtube.com/embed/" + obj.youtube;
            iframe.style.height = `calc(100vw * ${obj.height})`;
            iframe.style.maxWidth = `calc(100vh / ${obj.height})`;
            main.appendChild(iframe)
        }
    }

    if (obj.info && !obj.markdown) {
        for (const infoP of obj.info) {
            const info = document.querySelector("#info")
            const p = document.createElement('p')
            p.innerHTML = infoP;
            info.appendChild(p)
        }
    } else if (obj.markdown && !obj.info) {
        readmeMD("#info", obj.markdown)
    }

    if (obj.links) {
        const links = document.querySelector("#links")
        links.hidden = false;
        for (const link of obj.links) {
            links.innerHTML += link;
        }

        if (obj.contrib) {
            const p = document.createElement('p')
            links.appendChild(p)
            p.id = "contrib";
            for (const contrib of obj.contrib) {
                const a = document.createElement('a')
                a.innerHTML = contrib.name;
                a.href = "https://www.google.com/maps/contrib/" + contrib.id + "/";
                a.setAttribute("target", "_blank")
                p.appendChild(a)
            }
        }
    }
}

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    }
    return array;
}