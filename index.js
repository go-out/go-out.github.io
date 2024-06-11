'use strict'

if (!location.search) {
    center = [135.5020763952882, 34.69376772507822];
    bounds = false;
    zoom = '3.75';
    jsArr = [
        ["osaka/ferry", "index"],
        ["osaka", "line"]
    ]
}

switch (document.readyState) {
    case "loading":
        jsArr.forEach(function (thisJS) {
            const js = document.createElement('script')
            js.src = thisJS[0] + '/' + thisJS[1] + '.js?d=' + new Date();
            document.head.appendChild(js);
        }, false)
        break;
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        addMarker(gooutArr.features)
        monthJSON('japan/date.json')
        document.querySelector('#copy time').innerHTML = year;
    } else if (event.target.readyState === "complete") {
        eventsJSON("osaka/date.json")
    }
}, false)