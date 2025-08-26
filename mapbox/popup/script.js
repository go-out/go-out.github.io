// popupJSON("./index.json")
async function popupJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    addPopups(index);
};

// JSONファイルからポップアップを生成
function addPopups(obj) {
    for (const marker of obj.features) {
        addPopup(marker);
    };
};

function addPopup(each) {
    let thisTitle = each.properties.title,
        thisDescription,
        thisGeo = each.geometry.coordinates;

    if (!each.properties.description) {
        thisDescription = each.geometry.address;
    } else {
        if (!each.properties.link) {
            thisDescription = each.properties.description;
        } else {
            thisDescription = `<a href="${each.properties.link[0]}" target="${each.properties.link[1]}">
            ${each.properties.description}
            </a>`;
        };
    };

    new mapboxgl.Popup({
        closeOnClick: false,
        className: "goout"
    })
        .setLngLat(thisGeo)
        .setHTML(`
        <b>${thisTitle}</b><br>
        ${thisDescription}`)
        .addTo(map)
};