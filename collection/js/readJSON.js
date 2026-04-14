"use strict"

// input要素でJSONファイルを受け取る
function previewFile() {
    const deleteAll = document.querySelectorAll("#list li, #notes p, #links a");
    deleteAll.forEach((eachLi) => {
        eachLi.remove();
    });

    const reader = new FileReader(),
        [file] = document.querySelector("#file").files;
    if (file) {
        reader.readAsText(file);
    };

    reader.addEventListener("load", async () => {
        const thisTitle = document.querySelector("header #title strong"),
            thisBy = document.querySelector("header #title u"),
            thisDscription = document.querySelector("#collection #description b"),
            countCollection = document.querySelector("#index summary");

        // this will then display a text file
        var obj = JSON.parse(reader.result);
        if (obj.title) {
            thisTitle.innerHTML = obj.title[0];
            if (obj.title[1]) {
                document.title = obj.title[0] + " | " + obj.title[1];
                thisBy.innerHTML = obj.title[1];
                thisBy.hidden = false;
                document.querySelector("#spot button.close").innerHTML = obj.title[1];
            } else {
                document.title = obj.title[0];
                document.querySelector("#spot button.close").innerHTML = obj.title[0];
                if (obj.author) {
                    thisBy.textContent = "by " + obj.author.name;
                    thisBy.hidden = false;
                } else {
                    thisBy.hidden = true;
                };
            };
        } else {
            thisTitle.hidden = true;
            thisBy.hidden = true;
        };

        if (obj.description) {
            document.querySelector(`meta[name="description"]`).content = obj.description.replaceAll("\n", " ");
            thisDscription.innerHTML = obj.description.replaceAll("\n", "<br>");
        };

        if (obj.info) {
            if (obj.info.note) {
                for (const note of obj.info.note) {
                    const eachP = document.createElement("p");
                    eachP.innerHTML = note;
                    document.querySelector("#notes").appendChild(eachP);
                };
            } else {
                document.querySelector("#notes").hidden = true;
            };

            if (obj.info.links) {
                document.querySelector("#links").hidden = false;
                for (const link of obj.info.links) {
                    const a = document.createElement("a");
                    a.href = link.url;
                    a.target = link.target;
                    a.textContent = link.text;
                    document.querySelector("#links").appendChild(a);
                };
            } else {
                document.querySelector("#links").hidden = true;
            };
        } else {
            document.querySelector("#notes").hidden = true;
            document.querySelector("#links").hidden = true;
        };

        if (obj.cover) {
            createCover(obj);
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

        map.addSource("collection", {
            type: "geojson",
            data: JSON.parse(reader.result)
        });
        map.addLayer({
            "id": "collection",
            "type": "circle",
            "source": "collection",
            "paint": {
                "circle-radius": 10,
                "circle-stroke-width": 2,
                "circle-color": "lemonchiffon",
                "circle-stroke-color": "lightskyblue"
            }
        });
        map.on("mouseenter", "collection", (e) => {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "collection", () => {
            map.getCanvas().style.cursor = "";
        });

        map.on("click", "collection", (e) => {
            let thisDescription,
                thisTitle = e.features[0].properties.title,
                thisGeo = e.features[0].geometry.coordinates.slice(),
                zoom;

            if (!e.features[0].properties.description) {
                thisDescription = e.features[0].geometry.address;
            } else {
                thisDescription = e.features[0].properties.description.replace(/\r?\n/g, "<br>");;
            };

            if (e.features[0].properties.zoom) {
                zoom = e.features[0].properties.zoom;
            } else {
                zoom = 17;
            }

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
                zoom: zoom
            });
        });

        countCollection.innerHTML = "このコレクションの<b>" + obj.features.length + "</b>の場所";
        document.querySelector("#index").hidden = false;
        listItems(obj.features);
    }, false);
};