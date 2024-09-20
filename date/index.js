'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    playThis(index);
    videoAll(index);
};

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
};

function playThis(obj) {
    const ogurl = document.querySelector('meta[property="og:url"]');
    ogurl.content = '/date/' + obj.url;

    if (obj.youtube) {
        const ytimg = 'https://i.ytimg.com/vi/' + obj.youtube + '/sddefault.jpg';
        document.querySelector('meta[property="og:image"]').content = ytimg;
        document.querySelector('meta[name="twitter:image"]').content = ytimg;
    }

    if (obj.info) {
        const strong = document.querySelector('#cover h1 strong');
        strong.innerHTML = obj.info.title;
        const u = document.querySelector('#cover h1 u');
        u.textContent = obj.info.subTitle;

        const ogtitle = document.querySelector('meta[property="og:title"]');
        document.title = strong.textContent + ' | ' + u.textContent;
        ogtitle.content = strong.textContent + ' | ' + u.textContent;

        if (obj.info.address) {
            const description = document.querySelector('meta[name="description"]');
            const ogdescription = document.querySelector('meta[property="og:description"]');
            const i = document.querySelector('#cover h2 i');
            description.content = obj.info.address[0] + ' | ' + obj.info.address[1];
            ogdescription.content = obj.info.address[0] + ' | ' + obj.info.address[1];
            i.textContent = obj.info.address[0];
            const small = document.querySelector('#cover h2 small');
            small.textContent = obj.info.address[1];
        };

        if (obj.info.readme) {
            readmeMD("#readme section", obj.info.readme);
        } else {
            document.querySelector('#readme section').remove()
        };
    };

    if (obj.link) {
        const footer = document.querySelector('footer');
        const p = document.createElement('p');
        const u = document.createElement('u');
        u.textContent = '関連ページ Related Pages';
        footer.appendChild(p);
        p.appendChild(u);

        for (const eachLink of obj.link) {
            const a = document.createElement('a');
            a.href = eachLink.url;
            a.textContent = eachLink.text;
            a.setAttribute('target', eachLink.target);
            footer.appendChild(a);
        };
    };
};

function videoAll(obj) {
    let n = 0;

    const playBtn = document.querySelector('[data-playing]');
    const video = document.querySelector('#video');
    const mp4 = document.querySelector('#mp4');
    const captions = document.querySelector('#captions');
    const coverAll = document.querySelectorAll('#cover h1, #cover h2');

    playBtn.value = '▶️ ' + obj.date;
    video.setAttribute('poster', obj.directory + obj.cover);
    mp4.src = obj.directory + obj.video[n].src;
    if (obj.video[n].track) {
        captions.src = obj.video[n].track;
    };

    video.load();

    const chapter = document.querySelector('#readme nav');
    const ol = document.createElement('ol');
    chapter.appendChild(ol);

    for (let i = 0; i < obj.video.length; i++) {
        const li = document.createElement('li');
        li.textContent = obj.video[i].title;
        ol.appendChild(li);
        li.addEventListener('click', function () {
            coverAll.forEach((cover) => cover.style.opacity = "0");

            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ ' + obj.video[i].title;
            mp4.src = obj.directory + obj.video[i].src;
            captions.src = obj.video[i].track;
            video.muted = false;
            video.load();
            video.play();
            n = i;

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.documentElement.requestFullscreen();
            };
        }, false);
    };

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
        video.load();
        video.play();
    }, false)

    playBtn.addEventListener('click', function () {
        if (playBtn.dataset.playing == 'false') {
            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ ' + obj.video[n].title;
            video.muted = false;
            video.play();
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.documentElement.requestFullscreen();
            };
            coverAll.forEach((cover) => cover.style.opacity = "0");
        } else {
            playBtn.dataset.playing = 'false';
            playBtn.value = '▶️ ' + convertTime(video.currentTime)
            video.muted = true;
            video.pause();
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.exitFullscreen()
            };
            coverAll.forEach((cover) => cover.style.opacity = "1");
        }
    }, false)
}

const convertTime = function (time_position) {
    time_position = Math.floor(time_position);
    let res = null;
    if (60 <= time_position) {
        res = Math.floor(time_position / 60)
        res += ":" + Math.floor(time_position % 60).toString().padStart(2, '0')
    } else {
        res = "0:" + Math.floor(time_position % 60).toString().padStart(2, '0')
    };
    return res;
};

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