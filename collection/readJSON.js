'use strict'

const inputName = document.querySelector('#by'),
    inputTitle = document.querySelector('#title'),
    thisDscription = document.querySelector('#description'),
    countCollection = document.querySelector('#index summary');

// input要素でJSONファイルを受け取る
function previewFile() {
    const reader = new FileReader(),
        [file] = document.querySelector("#file").files;

    if (file) {
        reader.readAsText(file);
    }

    reader.addEventListener("load", () => {
        const deleteAll = document.querySelectorAll('#list li');
        deleteAll.forEach((eachLi) => {
            eachLi.remove();
        });

        // this will then display a text file
        var obj = JSON.parse(reader.result);
        if (obj.author) {
            inputName.textContent = 'by ' + obj.author.name;
        };
        if (obj.title) {
            inputTitle.textContent = obj.title;
        };
        if (obj.description) {
            thisDscription.textContent = obj.description;
        };
        countCollection.innerHTML = "このコレクションの<b>" + obj.features.length + "</b>の場所";

        if (obj.map) {
            map.flyTo({
                center: obj.map.center,
                zoom: obj.map.zoom
            })

            if (obj.map.bounds) {
                map.fitBounds(obj.map.bounds);
            };
        } else {
            for (let i = 0; i < obj.features.length; i++) {
                if (i == 0) {
                    map.flyTo({
                        center: obj.features[i].geometry.coordinates,
                        zoom: 5
                    })
                };
            };
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

        for (const i of obj.features) {
            let thisDescription,
                thisTitle = i.properties.title;

            if (!i.properties.description) {
                thisDescription = i.geometry.address;
            } else {
                thisDescription = i.properties.description.replace(/\r?\n/g, "<br>");;
            };

            const li = document.createElement('li');
            document.querySelector("#list").appendChild(li);
            const p = document.createElement('p');
            p.innerHTML = `<b>${thisTitle}</b>${thisDescription}`;
            li.appendChild(p);

            li.addEventListener("click", () => {
                map.flyTo({
                    center: i.geometry.coordinates,
                    essential: true,
                    zoom: 15
                })

                document.querySelector('#mapbox').scrollIntoView({
                    behavior: 'smooth'
                }, false);
            });
        };
    }, false);
}