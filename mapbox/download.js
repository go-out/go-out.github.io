'use strict'

window.addEventListener("load", function () {
    const download = document.forms.download,
        modal = document.querySelector('dialog'),
        closeButton = document.querySelector('dialog button'),
        deleteAll = document.querySelector('dialog #delete');

    // Your Name 名前
    const yourName = download.elements.name;
    yourName.addEventListener('input', function (event) {
        localStorage.setItem('yourName', event.currentTarget.value);
    }, false);

    if (localStorage.getItem('yourName')) {
        yourName.value = localStorage.getItem('yourName');
    };

    // Email メールアドレス
    const yourEmail = download.elements.email;
    yourEmail.addEventListener('input', function (event) {
        localStorage.setItem('yourEmail', event.currentTarget.value);
    }, false);
    if (localStorage.getItem('yourEmail')) {
        yourEmail.value = localStorage.getItem('yourEmail');
    };

    // Title このコレクションの題名
    const thisTitle = download.elements.title;
    thisTitle.addEventListener('input', function (event) {
        localStorage.setItem('title', event.currentTarget.value);
    }, false);
    if (localStorage.getItem('title')) {
        thisTitle.value = localStorage.getItem('title');
    };

    // Description このコレクションの説明
    const textarea = download.elements.description;
    textarea.addEventListener('input', function (event) {
        localStorage.setItem('description', event.currentTarget.value);
    }, false);
    if (localStorage.getItem('description')) {
        textarea.value = localStorage.getItem('description');
    };

    download.addEventListener("submit", (e) => {
        e.preventDefault();
        let thisCollection = {
            type: "FeatureCollection",
            title: localStorage.getItem('title'),
            description: localStorage.getItem('description'),
            author: {
                name: localStorage.getItem('yourName'),
                email: localStorage.getItem('yourEmail')
            },
            features: JSON.parse(localStorage.getItem("mapJSON"))
        };
        const blob = new Blob([JSON.stringify(thisCollection)], { type: 'application\/json' });
        const url = URL.createObjectURL(blob);

        if (typeof modal.showModal === "function") {
            modal.showModal();
            const json = document.querySelector('#json');
            if (localStorage.getItem('title') && localStorage.getItem("mapJSON")) {
                json.href = url;
                json.addEventListener('click', () => {
                    json.download = new Date().valueOf() + '.json';
                }, false);

                deleteAll.addEventListener('click', () => {
                    localStorage.removeItem("title");
                    localStorage.removeItem("mapJSON");
                    if (localStorage.getItem('description')) {
                        localStorage.removeItem("description");
                    };
                    this.location.reload()
                }, false);
            } else {
                json.hidden = true;
                deleteAll.hidden = true;
            };
        } else {
            alert("The dialog API is not supported by this browser");
        };
    }, false);

    closeButton.addEventListener('click', () => {
        modal.close();
    }, false);
}, false);