'use strict'

const h1 = document.querySelector("main h1"),
    h3 = document.querySelector("main section h3"),
    modal = document.querySelector('#modal'),
    download = document.querySelector('#download'),
    closeButton = document.querySelector('#modal button');

if (localStorage.getItem("mapJSON")) {
    listItems();
    for (let i = 0; i < yourJson.length; i++) {
        addMarker(yourJson[i]);
        if (i == yourJson.length - 1) {
            map.flyTo({
                center: [Number(yourJson[i].geometry.coordinates[0]), Number(yourJson[i].geometry.coordinates[1])],
                essential: true,
                zoom: 10
            })
        };
    };
    h1.hidden = true;
    h3.hidden = true;
} else {
    const p = document.createElement('p');
    p.textContent = "まだ投稿がありません";
    document.querySelector("#list").prepend(p);
    download.hidden = true;
};

function enter() {
    if (h1.hidden == false && h3.hidden == false) {
        h1.hidden = true;
        h3.hidden = true;
        userInteracting = !0;
    };

    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        alert("The dialog API is not supported by this browser");
    };
};

closeButton.addEventListener('click', () => {
    modal.close();
});

const mapbox = document.querySelector("#mapbox");
const index = document.querySelector("#index");
function main() {
    if (h1.hidden == false && h3.hidden == false) {
        h1.hidden = true;
        h3.hidden = true;
        userInteracting = !0;
    };

    if (index.hidden == true) {
        index.hidden = false;
        mapbox.hidden = true;
    } else if (index.hidden == false) {
        index.hidden = true;
        mapbox.hidden = false;
    };
};