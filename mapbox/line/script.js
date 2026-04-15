function addLine(lineArr) {
    console.log(lineArr);
    map.on("load", () => {
        map.addSource("route", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": lineArr
            }
        });
        map.addLayer({
            "id": "route-layer",
            "type": "line",
            "source": "route",
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "lightskyblue",
                "line-width": 14.5
            }
        });

        // ラインにホバーイベントを追加
        map.on("mouseenter", "route-layer", () => map.getCanvas().style.cursor = "pointer");
        map.on("mouseleave", "route-layer", () => map.getCanvas().style.cursor = "");

        // ラインにクリックイベントを設定
        map.on("click", "route-layer", (e) => {
            // クリックされたフィーチャーを取得
            const clickedLine = e.features[0].properties;
            let zoom;

            if (clickedLine.googlePhotos || clickedLine.archive) {
                new Promise((resolve) => {
                    const spotNote = document.querySelector("#spot #info section"),
                        spotLinks = document.querySelector("#spot #info aside"),
                        selectLog = document.querySelector("#spot select#log");

                    document.querySelector("#spot #thisDescription").innerHTML = clickedLine.description.replaceAll("\n", "<br>");
                    if (clickedLine.note) {
                        for (const noteEach of JSON.parse(clickedLine.note)) {
                            const p = document.createElement("p");
                            p.innerHTML = noteEach;
                            spotNote.appendChild(p);
                        };
                        spotNote.hidden = false;
                    } else {
                        spotNote.hidden = true;
                    };

                    if (clickedLine.links) {
                        for (const linkEach of JSON.parse(clickedLine.links)) {
                            const a = document.createElement("a");
                            a.href = linkEach.url;
                            a.target = linkEach.target;
                            a.textContent = linkEach.text;
                            spotLinks.appendChild(a);
                        };
                        spotLinks.hidden = false;
                    } else {
                        spotLinks.hidden = true;
                    };

                    if (clickedLine.archive || clickedLine.googlePhotos) {
                        let i = 0;

                        if (clickedLine.archive) {
                            JSON.parse(clickedLine.archive).forEach((archiveEach, index) => {
                                i == i++;
                                const option = document.createElement("option");
                                option.value = "archive-" + index;
                                selectLog.appendChild(option);

                                if (archiveEach.year && archiveEach.month) {
                                    option.innerHTML = `${archiveEach.year}年${archiveEach.month}月${archiveEach.date}日`;
                                } else {
                                    option.innerHTML = "[" + i + "] ";
                                    if (archiveEach.title) {
                                        option.textContent += archiveEach.title;
                                    } else {
                                        option.textContent += info.title;
                                    };
                                };

                                if (i == 2) {
                                    selectLog.hidden = false;
                                };
                            });
                        };

                        if (clickedLine.googlePhotos) {
                            JSON.parse(clickedLine.googlePhotos).forEach((imageEach, index) => {
                                i == i++;
                                const option = document.createElement("option");
                                option.value = "image-" + index;
                                selectLog.appendChild(option);

                                if (imageEach.year && imageEach.month) {
                                    option.innerHTML = `${imageEach.year}年${imageEach.month}月${imageEach.date}日`;
                                } else {
                                    option.innerHTML = "[" + i + "] ";
                                    if (imageEach.title) {
                                        option.textContent += imageEach.title;
                                    } else {
                                        option.textContent += clickedLine.title;
                                    };
                                };

                                if (i == 2) {
                                    selectLog.hidden = false;
                                };
                            });
                        };

                        selectLog.addEventListener("change", (e) => {
                            console.log(e.target)
                            for (const removeEl of document.querySelectorAll("#vewAll input, #vewAll label")) {
                                removeEl.remove();
                            };

                            if (e.target.value.includes("archive")) {
                                let archiveCH = e.target.value.split("-");
                                console.log(e.target.value, "archive: " + Number(archiveCH[1]));
                                spotVideo(clickedLine, JSON.parse(clickedLine.archive)[Number(archiveCH[1])]);
                            } else if (e.target.value.includes("image")) {
                                let imageCH = e.target.value.split("-");
                                console.log(e.target.value, "image: " + Number(imageCH[1]));
                                spotImage(clickedLine, JSON.parse(clickedLine.googlePhotos)[Number(imageCH[1])]);
                            };
                        });
                    } else {
                        selectLog.hidden = true;
                    };

                    if (clickedLine.archive) {
                        spotVideo(clickedLine, JSON.parse(clickedLine.archive)[0]);
                    } else if (clickedLine.googlePhotos) {
                        spotImage(clickedLine, JSON.parse(clickedLine.googlePhotos)[0]);
                    };
                    resolve();
                }).then(() => {
                    document.querySelector("#spot").showModal();
                }, false);
            } else {
                const thisInfo = document.querySelector("#thisEvent #thisInfo");
                const h3 = document.createElement("h3");
                h3.innerHTML = clickedLine.title;
                thisInfo.appendChild(h3);
                const description = document.createElement("p");
                description.innerHTML = `<b>${clickedLine.description}</b>`;
                thisInfo.appendChild(description);

                if (clickedLine.note) {
                    for (const noteEach of JSON.parse(clickedLine.note)) {
                        const p = document.createElement("p");
                        p.innerHTML = noteEach;
                        thisInfo.appendChild(p);
                    };
                };

                if (clickedLine.links) {
                    for (const linkEach of JSON.parse(clickedLine.links)) {
                        const a = document.createElement("a");
                        a.href = linkEach.url;
                        a.target = linkEach.target;
                        a.textContent = linkEach.text;
                        document.querySelector("#thisLink").appendChild(a);
                    };
                    document.querySelector("#thisLink").hidden = false;
                } else {
                    document.querySelector("#thisLink").hidden = true;
                };

                document.querySelector("#thisEvent").showModal();
            };

            if (clickedLine.zoom) {
                zoom = clickedLine.zoom
            } else {
                zoom = 17.5
            };

            map.flyTo({
                center: e.lngLat,
                essential: true,
                offset: [0, 0],
                zoom: zoom
            }, false);
        });
    });
};