'use strict'

// markerJSON("./index.json")
async function markerJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    addMarkers(index);
};

// JSONファイルからマーカーを生成
function addMarkers(obj) {
    for (const marker of obj.features) {
        addMarker(marker);
    };
};

// 地図にマーカーを追加
function addMarker(each) {
    let thisTitle = each.properties.title,
        thisDescription,
        thisGeo = [Number(each.geometry.coordinates[0]), Number(each.geometry.coordinates[1])],
        offset;

    if (!each.properties.description) {
        thisDescription = each.geometry.address;
    } else {
        thisDescription = each.properties.description.replaceAll("\n", "<br>");;
    };

    const el = document.createElement('div');
    if (each.properties.tag) {
        for (const tag of each.properties.tag) {
            el.classList.add(tag);
        };
    };

    if (each.properties.icon) {
        el.style.width = each.properties.icon[1];
        el.style.height = each.properties.icon[2];
        el.style.backgroundImage = `url(${each.properties.icon[0]})`;
        if (each.properties.icon[3]) {
            el.style.zIndex = each.properties.icon[3];
        };
    } else if (each.properties.google) {
        el.style.width = "7rem";
        el.style.height = "4.5rem";
        el.style.borderRadius = "0.5rem";
        const url = each.properties.google[0] + "=w172-h111-p-k-no";
        el.style.backgroundImage = `url(https://lh3.googleusercontent.com/${url})`;
        if (each.properties.google[1]) {
            el.style.zIndex = each.properties.google[1];
        };
        new mapboxgl.Marker(el).setLngLat(thisGeo).addTo(map);
    } else {
        el.classList.add("goout");
    };

    if (each.googleMap) {
        offset = [0, 0];
        new mapboxgl.Marker(el)
            .setLngLat(thisGeo).addTo(map);
    } else {
        new mapboxgl.Marker(el)
            .setLngLat(thisGeo)
            .setPopup(
                new mapboxgl.Popup({
                    className: "goout"
                }).setHTML(`<b>${thisTitle}</b><br>${thisDescription}`)
            ).addTo(map);
        offset = [0, 100];
    }

    el.addEventListener('click', () => {
        let zoom;
        if (each.properties.zoom) {
            zoom = each.properties.zoom;
        } else {
            zoom = 17.5;
        }
        map.flyTo({
            center: thisGeo,
            essential: true,
            offset: offset,
            zoom: zoom
        }, false);
    }, false);
};
