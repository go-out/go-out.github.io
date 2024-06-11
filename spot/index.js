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
    document.title = obj.title;
    const description = document.querySelector("meta[name='description']")
    description.content = obj.description;

    if (obj.style) {
        const link = document.createElement('link')
        link.href = 'css/' + obj.style + '.css?d=' + new Date()
        link.setAttribute('rel', 'stylesheet')
        document.head.appendChild(link)
    }

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
        month.remove()
    }

    const day = document.querySelector("#day")
    if (obj.day) {
        day.textContent = obj.day;
    } else {
        day.remove()
    }

    const article = document.querySelector("article")
    const h3 = document.querySelector("#title")
    h3.innerHTML = obj.info.title + "<br>";

    if (obj.info.address && obj.info.google) {
        const google = document.createElement('a')
        google.textContent = obj.info.address;
        google.href = obj.info.google;
        google.setAttribute('target', '_blank')
        h3.appendChild(google);
    }

    if (obj.info.text && !obj.info.markdown) {
        const text = document.createElement('p')
        for (const texteach of obj.info.text) {
            text.innerHTML += texteach + '<br/>';
        }
        article.appendChild(text);
    } else if (obj.info.markdown && !obj.info.text) {
        const text = document.createElement('p')
        article.appendChild(text)
        text.id = "markdown";
        readmeMD("#markdown", obj.info.markdown)
    }

    if (obj.links) {
        const links = document.createElement('section')
        links.innerHTML += '<u>関連ページ Related Pages</u><br/>';
        for (const eachA of obj.links) {
            links.innerHTML += eachA;
        }
        article.appendChild(links)
    }

    const strong = document.querySelector("header h1 strong")
    const playBtn = document.querySelector("#play")

    if (obj.video && !obj.img) {
        playBtn.textContent = obj.title;
    } else if (!obj.video && obj.img) {
        strong.textContent = obj.title;
        strong.style.fontSize = "150%";
        playBtn.textContent = obj.description;
    } else {
        strong.textContent = obj.title;
        strong.style.fontSize = "150%";
        playBtn.remove();
    }

    if (obj.video && !obj.img) {
        document.querySelector("header").addEventListener('click', function () {
            document.body.className = document.body.className === "start" ? "stop" : "start";
            if (document.body.className === "start") {
                playBtn.textContent = obj.title;
                stop();
            } else if (document.body.className === "stop") {
                playBtn.innerHTML = obj.description;
                start();
            }
        }, false)
    }

    function start() {
        const all = document.querySelectorAll('video')
        all.forEach((iii) => {
            iii.play();
        })
    }

    function stop() {
        const all = document.querySelectorAll('video')
        all.forEach((iii) => {
            iii.pause();
        })
    }

    window.onresize = tmResize;
    function tmResize() {
        if (typeof pageResize == "function") {
            pageResize();
        }
    }

    function windowScreen() {
        const canvas = document.querySelector("main canvas")
        canvas.width = window.innerHeight / obj.width;
        canvas.height = window.innerHeight / obj.height;
    }

    function pageResize() {
        windowScreen();
    }

    windowScreen();
}

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    }
    return array;
}

function videoAll(obj) {
    const randomdRaggable = document.querySelector('main fieldset')

    if (obj.video && !obj.img) {
        const playAll = shuffle(obj.video)
        for (let i = 0; i < playAll.length; i++) {
            const input = document.createElement('input')
            input.setAttribute('type', 'radio')
            input.setAttribute('name', 'video')
            input.id = playAll[i].id;
            input.value = playAll[i].id;
            randomdRaggable.appendChild(input)

            const label = document.createElement('label')
            label.setAttribute('for', playAll[i].id)
            label.style.width = `calc(17.5vw / ${obj.width})`;
            label.style.maxWidth = `calc(7.5rem / ${obj.width})`;
            randomdRaggable.appendChild(label)

            const video = document.createElement('video')
            video.setAttribute('playsinline', 'true')
            video.setAttribute('poster', obj.directory + playAll[i].poster)
            label.appendChild(video)

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                video.muted = true;
                video.setAttribute('muted', 'true')
            }

            const canvas = document.querySelector("main canvas")
            let canvasCtx = canvas.getContext('2d')

            function canvasUpdate() {
                canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height)
                requestAnimationFrame(canvasUpdate)
            };

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
                    canvasUpdate()
                    video.load()
                    video.play()
                }, false)
            }

            if (i === 0) {
                canvasUpdate();
                canvas.style.backgroundImage = `url(${obj.directory}${playAll[i].poster})`;
            }

            video.addEventListener('click', function () {
                canvasUpdate()
            })
        }
    } else if (!obj.video && obj.img) {
        const pre = document.createElement('button')
        pre.setAttribute('type', 'button')
        pre.textContent = '←';
        randomdRaggable.appendChild(pre)

        const next = document.createElement('button')
        next.setAttribute('type', 'button')
        next.textContent = '→';
        randomdRaggable.appendChild(next)

        const canvas = document.querySelector("main canvas")

        function bgImg(src) {
            canvas.style.backgroundImage = `url(${src})`;
        }


        let n = 0;
        bgImg(obj.directory + obj.img[n])

        pre.addEventListener('click', function () {
            if (n == 0) {
                n = obj.img.length - 1;
            } else if (n < obj.img.length - 1) {
                n--;
            } else if (n == obj.img.length - 1) {
                n--;
            }
            bgImg(obj.directory + obj.img[n])
        }, false)

        next.addEventListener('click', function () {
            if (n == 0) {
                n++;
            } else if (n < obj.img.length - 1) {
                n++;
            } else if (n == obj.img.length - 1) {
                n = 0;
            }
            bgImg(obj.directory + obj.img[n]);
        }, false)
    } else if (obj.youtube) {
        const main = document.querySelector("main")
        const header = document.querySelector("header")
        header.remove()

        const iframe = document.createElement('iframe')
        iframe.id = "player";
        iframe.src = "https://www.youtube.com/embed/" + obj.youtube;
        main.style.height = `calc(100vw * ${obj.height})`;
        main.appendChild(iframe)
    } else if (obj.vr) {
        const main = document.querySelector("main")
        const iframe = document.createElement('iframe')
        iframe.src = obj.vr;
        iframe.id = "vr";
        iframe.setAttribute("allowfullscreen", "")
        iframe.setAttribute("loading", "lazy")
        iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade")
        main.appendChild(iframe)
    }
}

window.addEventListener("load", () => {
    const scrollElement = document.querySelector('main fieldset')
    scrollElement.addEventListener('wheel', (e) => {
        e.preventDefault()

        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
        if (
            (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
            (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
        )
            return;
        scrollElement.scrollLeft += e.deltaY;
    });
});
