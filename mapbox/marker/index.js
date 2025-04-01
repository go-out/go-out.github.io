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
    let thisDescription,
        thisTitle = each.properties.title,
        thisGeo = [Number(each.geometry.coordinates[0]), Number(each.geometry.coordinates[1])];

    if (!each.properties.description) {
        thisDescription = each.geometry.address;
    } else {
        thisDescription = each.properties.description.replace(/\r?\n/g, "<br>");;
    };

    const el = document.createElement('div');
    if (each.properties.icon) {
        el.style.width = each.properties.icon[1];
        el.style.height = each.properties.icon[2];
        el.style.backgroundImage = `url(${each.properties.icon[0]})`;
    } else {
        el.className = 'goout';
    };

    new mapboxgl.Marker(el)
        .setLngLat(thisGeo)
        .setPopup(
            new mapboxgl.Popup({
                className: "goout"
            }).setHTML(`
            <b>${thisTitle}</b><br>
            ${thisDescription}
            `)
        ).addTo(map);

    el.addEventListener('click', () => {
        map.flyTo({
            center: thisGeo,
            essential: true,
            offset: [0, 100],
            zoom: 17.5
        })
    }, false);
};
