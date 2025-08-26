'use strict'

const inputName = document.querySelector('#by'),
    inputTitle = document.querySelector('#title'),
    thisDscription = document.querySelector('#description'),
    countCollection = document.querySelector('#index summary');

// input要素でJSONファイルを受け取る
function previewFile() {
    const deleteAll = document.querySelectorAll('#list li');
    deleteAll.forEach((eachLi) => {
        eachLi.remove();
    });

    const reader = new FileReader(),
        [file] = document.querySelector("#file").files;
    if (file) {
        reader.readAsText(file);
    };

    reader.addEventListener("load", () => {
        // this will then display a text file
        var obj = JSON.parse(reader.result);
        if (obj.title) {
            document.title = obj.title;
            inputTitle.textContent = obj.title;
        };
        if (obj.description) {
            document.querySelector("meta[name='description']").content = obj.description.replaceAll("\n", " ");
            thisDscription.innerText = obj.description;
        };
        if (obj.author) {
            inputName.textContent = 'by ' + obj.author.name;
        };
        if (obj.map) {
            map.flyTo({
                center: obj.map.center,
                zoom: obj.map.zoom
            })
            if (obj.map.bounds) {
                map.fitBounds(obj.map.bounds);
            };
            weatherAPI(obj.map.center[1], obj.map.center[0]);
        } else {
            map.flyTo({
                center: obj.features[0].geometry.coordinates,
                zoom: 5
            }, false);
            weatherAPI(obj.features[0].geometry.coordinates[1], obj.features[0].geometry.coordinates[0]);
        };

        map.addSource('collection', {
            type: 'geojson',
            data: JSON.parse(reader.result)
        });
        map.addLayer({
            'id': 'collection',
            'type': 'circle',
            'source': 'collection',
            'paint': {
                'circle-radius': 10,
                'circle-stroke-width': 2,
                'circle-color': 'lemonchiffon',
                'circle-stroke-color': 'lightskyblue'
            }
        });
        map.on('mouseenter', 'collection', (e) => {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'collection', () => {
            map.getCanvas().style.cursor = '';
        });
        map.on('click', 'collection', (e) => {
            let thisDescription,
                thisTitle = e.features[0].properties.title,
                thisGeo = e.features[0].geometry.coordinates.slice();

            if (!e.features[0].properties.description) {
                thisDescription = e.features[0].geometry.address;
            } else {
                thisDescription = e.features[0].properties.description.replace(/\r?\n/g, "<br>");;
            };

            new mapboxgl.Popup({
                className: "goout"
            })
                .setLngLat(thisGeo)
                .setHTML(`
                <b>${thisTitle}</b><br>
                ${thisDescription}
                `)
                .addTo(map);

            map.flyTo({
                center: thisGeo,
                offset: [0, 100],
                zoom: 17
            });
        });
        countCollection.innerHTML = "このコレクションの<b>" + obj.features.length + "</b>の場所";
        listItems(obj.features);
    }, false);
};