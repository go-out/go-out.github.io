'use strict'

// index.html のコンテンツを動的に生成
async function fetchHTML(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(query).innerHTML = html;
        })
}

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        readmeMD('dialog div', 'README.md')
    } else if (event.target.readyState === "complete") {
        const goout = document.querySelector('#map')
        const title = document.querySelector('#title')
        const dialog = document.querySelector("dialog")
        const close = document.querySelector('dialog #close')
        const menu = document.querySelector('footer button')

        title.hidden = true;
        goout.style.pointerEvents = 'auto';
        goout.style.userSelect = 'auto';

        close.addEventListener('click', function () {
            dialog.close()
        })

        menu.hidden = false;
        menu.addEventListener('click', function () {
            dialog.showModal()
        })
    }
})
