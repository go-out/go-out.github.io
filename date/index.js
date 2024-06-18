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
    if (obj.youtube) {
        const ytimg = 'https://i.ytimg.com/vi/' + obj.youtube + '/sddefault.jpg';
        const ogimg = document.querySelector('[property="og:image"]')
        const twimg = document.querySelector('[name="twitter:image"]')
        ogimg.content = ytimg;
        twimg.content = ytimg;
    }

    const ogurl = document.querySelector('[property="og:url"]')
    const twurl = document.querySelector('[property="twitter:url"]')
    ogurl.content = 'https://creative-community.space/map/date/' + obj.url;
    twurl.content = 'https://creative-community.space/map/date/' + obj.url;

    const video = document.querySelector('#video')
    video.setAttribute('poster', obj.directory + obj.cover)
    const mp4 = document.querySelector('#mp4')
    mp4.src = obj.directory + obj.video[0].src;
    const captions = document.querySelector('#captions')
    captions.src = obj.video[0].track;
    video.load()

    if (obj.link) {
        const footer = document.querySelector('footer')
        const u = document.createElement('u')
        u.textContent = '関連ページ Related Pages';
        footer.appendChild(u)
        for (const linkEach of obj.link) {
            const a = document.createElement('a')
            a.href = linkEach.url;
            a.textContent = linkEach.text;
            a.setAttribute('target', linkEach.target)
            footer.appendChild(a)
        }
    }

    if (obj.u) {
        const u = document.querySelector('h1 u')
        u.textContent = obj.u;
    }

    if (obj.strong) {
        const strong = document.querySelector('h1 strong')
        strong.innerHTML = obj.strong;
    }

    if (obj.readme) {
        readmeMD("#readme header", obj.readme)
    } else {
        readmeMD("#readme header", "README.md")
    }
}

function videoAll(obj) {
    let n = 0;

    const cover = document.querySelector('#cover')
    const playBtn = document.querySelector('[data-playing]')
    playBtn.value = '▶️ ' + obj.date;

    const video = document.querySelector('#video')
    const mp4 = document.querySelector('#mp4')
    const captions = document.querySelector('#captions')

    const chapter = document.querySelector('#readme section')
    const ol = document.createElement('ol')
    chapter.appendChild(ol)

    for (let i = 0; i < obj.video.length; i++) {
        const li = document.createElement('li')
        li.textContent = obj.video[i].title;
        ol.appendChild(li)
        li.addEventListener('click', function () {
            cover.style.opacity = "0";

            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ ' + obj.video[i].title;
            mp4.src = obj.directory + obj.video[i].src;
            captions.src = obj.video[i].track;
            video.muted = false;
            video.load()
            video.play()
            n = i;

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.documentElement.requestFullscreen();
            }
        }, false)
    }

    video.addEventListener('ended', () => {
        if (n >= obj.video.length - 1) {
            n = 0;
        } else {
            n++;
        }

        playBtn.dataset.playing = 'true';
        playBtn.value = '⏸️ ' + obj.video[n].title;
        mp4.src = obj.directory + obj.video[n].src;
        captions.src = obj.video[n].track;
        video.muted = false;
        video.load()
        video.play()
    }, false)

    playBtn.addEventListener('click', function () {
        if (playBtn.dataset.playing == 'false') {
            cover.style.opacity = "0";
            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ ' + obj.video[n].title;
            video.muted = false;
            video.play()
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.documentElement.requestFullscreen()
            }
        } else {
            cover.style.opacity = "1";
            playBtn.dataset.playing = 'false';
            playBtn.value = '▶️ ' + convertTime(video.currentTime)
            video.muted = true;
            video.pause()
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.exitFullscreen()
            }
        }
    }, false)
}

const convertTime = function (time_position) {
    time_position = Math.floor(time_position)
    let res = null;
    if (60 <= time_position) {
        res = Math.floor(time_position / 60)
        res += ":" + Math.floor(time_position % 60).toString().padStart(2, '0')
    } else {
        res = "0:" + Math.floor(time_position % 60).toString().padStart(2, '0')
    }
    return res;
}

function changeHidden() {
    const articleAll = document.querySelectorAll('article')
    articleAll.forEach(article => {
        if (article.hidden == false) {
            article.hidden = true;
        } else {
            article.hidden = false;
        }
    }, false)
}