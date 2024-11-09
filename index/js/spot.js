'use strict'

async function spotJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    createHead(index);
    createBody(index);
};

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    } return array;
};

function createHead(obj) {
    document.querySelector("meta[property='og:url']").content = "/map/spot/" + obj.url;

    document.title = obj.title;
    const playBtn = document.querySelector("#title");
    const ogTitle = document.querySelector("meta[property='og:title']");
    playBtn.textContent = obj.title;
    ogTitle.content = obj.title;

    const description = document.querySelector("meta[name='description']");
    const ogDescription = document.querySelector("meta[property='og:description']");
    description.content = obj.description;
    ogDescription.content = obj.description;

    if (obj.videoAll && !obj.imgAll) {
        document.body.className = 'start';
        const allPlay = document.querySelectorAll('#title, #top h1');
        allPlay.forEach((playAll) => {
            playAll.addEventListener('click', function () {
                document.body.className = document.body.className === "start" ? "stop" : "start";
                if (document.body.className === "start") {
                    stop();
                } else if (document.body.className === "stop") {
                    start();
                };
            }, false);
        });

        function start() {
            const all = document.querySelectorAll('video');
            all.forEach((iii) => {
                iii.play();
            });
        };

        function stop() {
            const all = document.querySelectorAll('video');
            all.forEach((iii) => {
                iii.pause();
            });
        };
    };

    const lastModified = document.querySelector("#lastModified");
    lastModified.textContent = "最終更新日 " + obj.lastModified;
};

function createBody(obj) {
    const channel = document.querySelector('#channel');
    const collection = document.querySelector("#collection");

    if (obj.videoAll && !obj.imgAll) {
        let thisVideos;
        if (params.get("no")) {
            thisVideos = obj.videoAll[params.get("no")];
        } else {
            const allVideos = shuffle(obj.videoAll);
            thisVideos = allVideos[0];
        };

        const channels = shuffle(thisVideos.video);
        for (let i = 0; i < channels.length; i++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'channel');
            input.id = channels[i].id;
            input.value = channels[i].id;
            channel.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', channels[i].id);
            label.style.width = 6.5 * thisVideos.width + "rem";
            label.style.minWidth = 6.5 * thisVideos.width + "rem";
            channel.appendChild(label);

            const video = document.createElement('video');
            video.setAttribute('playsinline', 'true');
            video.setAttribute('poster', thisVideos.directory + channels[i].poster);
            label.appendChild(video);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                video.muted = true;
                video.setAttribute('muted', 'true');
            };

            const canvas = document.querySelector("main canvas");
            let canvasCtx = canvas.getContext('2d');
            canvas.style.backgroundImage = `url(${thisVideos.directory}${thisVideos.cover})`;

            window.onresize = tmResize;
            function tmResize() {
                if (typeof pageResize == "function") {
                    pageResize();
                };
            };

            function windowScreen() {
                const canvas = document.querySelector("main canvas");
                canvas.width = window.innerHeight * thisVideos.width;
                canvas.height = window.innerHeight * 1;
            };

            function pageResize() {
                windowScreen();
            };

            windowScreen();

            function canvasUpdate() {
                canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
                requestAnimationFrame(canvasUpdate);
            };

            if (i === 0) {
                canvasUpdate();
            };

            if (channels[i].src) {
                let ii = 0;
                const allVideo = shuffle(channels[i].src);
                const source = document.createElement('source');
                source.setAttribute("type", "video/mp4");
                source.src = thisVideos.directory + allVideo[ii];
                video.appendChild(source);

                video.addEventListener('ended', () => {
                    if (allVideo.length === 0) {
                        ii = 0;
                        source.src = thisVideos.directory + allVideo[ii];
                    } else if (ii === allVideo.length - 1) {
                        ii = 0;
                        source.src = thisVideos.directory + allVideo[ii];
                    } else if (ii < allVideo.length - 1) {
                        ii++;
                        source.src = thisVideos.directory + allVideo[ii];
                    };

                    canvasUpdate();
                    video.load();
                    video.play();
                    input.checked = true;
                }, false);
            };

            video.addEventListener('click', function () {
                canvasUpdate();;
            }, false);
        };

        const subtitle = document.querySelector("#top h1 strong");
        const thisInfo = thisVideos.info;
        if (thisInfo.title) {
            subtitle.innerHTML = thisInfo.title;
        } else {
            subtitle.remove();
        };

        const h2 = document.querySelector("#description");
        if (thisInfo.description) {
            h2.textContent = thisInfo.description;
        } else {
            h2.textContent = obj.description;
        };

        const year = document.querySelector("#year");
        const month = document.querySelector("#month");
        const day = document.querySelector("#day");
        if (thisInfo.year) {
            year.textContent = thisInfo.year;
        } else {
            year.remove();
        };

        if (thisInfo.month && thisInfo.day) {
            month.textContent = thisInfo.month;
            day.textContent = thisInfo.day;
        } else {
            month.remove();
            day.remove();
        };

        const note = document.querySelector("#note");
        if (thisInfo.note) {
            for (const textEach of thisInfo.note) {
                note.innerHTML += textEach + '<br/>';
            };
        } else {
            if (obj.info.note) {
                for (const textEach of obj.info.note) {
                    note.innerHTML += textEach + '<br/>';
                };
            } else {
                note.remove();
            };
        };

        if (thisInfo.links || obj.info.note) {
            const p = document.createElement('p');
            p.innerHTML = '<u>関連ページ Related Pages</u>';
            document.querySelector("#links").appendChild(p);

            if (thisInfo.links) {
                for (const eachLink of thisInfo.links) {
                    const a = document.createElement('a');
                    a.href = eachLink.url;
                    a.textContent = eachLink.text;
                    a.setAttribute('target', eachLink.target);
                    p.appendChild(a);
                };
            } else if (!thisInfo.links && obj.info.links) {
                if (obj.info.links) {
                    for (const eachLink of obj.info.links) {
                        const a = document.createElement('a');
                        a.href = eachLink.url;
                        a.textContent = eachLink.text;
                        a.setAttribute('target', eachLink.target);
                        p.appendChild(a);
                    };
                };
            };
        };

        if (obj.videoAll.length > 1) {
            const select = document.createElement('option');
            select.textContent = "Select a Date";
            collection.appendChild(select);
            collection.hidden = false;

            for (let no = 0; no < obj.videoAll.length; no++) {
                const option = document.createElement('option');
                option.value = no;
                option.textContent = no;

                if (obj.videoAll[no].info) {
                    let thisInfo = obj.videoAll[no].info;
                    if (thisInfo.title) {
                        option.textContent += ' ' + thisInfo.title.replace("<br>", '');
                    };
                    if (thisInfo.year && thisInfo.month && thisInfo.day) {
                        option.textContent += ' (' + thisInfo.year + '年' + thisInfo.month + '月' + thisInfo.day + '日)';
                    };
                };
                collection.appendChild(option);
            };

            collection.addEventListener('change', function (event) {
                location.replace(`${obj.url}&no=${event.currentTarget.value}`);
            }, false);
        };
    };
};