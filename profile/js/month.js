'use strict'

const now = new Date()
let thismonth = now.getMonth() + 1;

async function monthJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    monthAll(index)
}

async function eventsJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    eventAll(index)
}

function monthAll(obj) {
    for (const eachMonth of obj.annualAll) {
        const radio = document.createElement('input')
        radio.setAttribute('type', 'radio')
        radio.setAttribute('name', 'month')
        radio.setAttribute('id', eachMonth.en)
        radio.setAttribute('value', eachMonth.en)
        document.querySelector('nav').appendChild(radio)

        const label = document.createElement('label')
        label.setAttribute('for', eachMonth.en)
        label.textContent = eachMonth.month + '月';
        document.querySelector('nav').appendChild(label)

        const article = document.createElement('article')
        article.dataset.id = eachMonth.en;
        document.querySelector('#month').appendChild(article)

        const section = document.createElement('section')
        section.dataset.id = eachMonth.en;
        document.querySelector('#feature').appendChild(section)

        if (eachMonth.month === thismonth) {
            article.hidden = false;
            section.hidden = false;
            radio.setAttribute('checked', false)
        } else {
            article.hidden = true;
            section.hidden = true;
        }
    }

    let filter = document.querySelectorAll("#month nav input")
    let targets = document.querySelectorAll("#month article, #feature section")

    for (let i of filter) {
        i.addEventListener('change', () => {
            let thisLabel = document.querySelector(`#month nav label[for='${i.value}']`)
            let thisMonth = document.querySelector("#thismonth strong")
            let thisEn = document.querySelector("#thismonth small")
            for (let ii of targets) {
                if (i.value === ii.dataset.id) {
                    ii.hidden = false;
                    thisMonth.textContent = thisLabel.textContent;
                    thisEn.textContent = ii.dataset.id;
                } else {
                    ii.hidden = true;
                }
            }
        }, false)
    }
}

function eventAll(obj) {
    for (const eachMonth of obj.annualAll) {
        const section = document.createElement('section')
        document.querySelector(`#month article[data-id="${eachMonth.en}"]`).appendChild(section)

        if (eachMonth.events) {
            for (const eachEvent of eachMonth.events) {
                function createEvent() {
                    const div = document.createElement('div')
                    section.appendChild(div)

                    const p = document.createElement('p')
                    p.innerHTML = `<u>${eachEvent.date}</u><br><i>${eachEvent.venue}</i>`;
                    p.className = 'ja';
                    div.appendChild(p)

                    const h3 = document.createElement('h3')
                    h3.className = 'goout';
                    div.appendChild(h3)

                    if (eachEvent.link) {
                        const a = document.createElement('a')
                        a.href = directory + eachEvent.link;
                        a.textContent = eachEvent.title;
                        h3.appendChild(a)
                    } else {
                        h3.textContent = eachEvent.title;
                    }
                }

                if (location.search) {
                    const queryString = location.search;
                    const params = new URLSearchParams(queryString)
                    if (params.get("area") === eachEvent.area) {
                        createEvent()
                    }
                } else {
                    createEvent()
                }
            }
        }
    }
}


window.addEventListener("load", () => {
    const scrollElementAll = document.querySelectorAll('#feature section');
    for (const scrollElement of scrollElementAll) {
        scrollElement.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
            if (
                (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
                (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
            )
                return;

            e.preventDefault();
            scrollElement.scrollLeft += e.deltaY;
        });
    }
}, false)