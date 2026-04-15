```
map.on("load", () => {
    map.addSource("route", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [[-122.4, 37.7], [-122.5, 37.8]] // ライン1
                    },
                    "properties": {}
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [[-122.45, 37.75], [-122.55, 37.85]] // ライン2
                    },
                    "properties": {}
                }
            ]
        }
    });

    // ラインのスタイルを指定
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
            "line-width": 4
        }
    });

    // ラインにホバーイベントを追加
    map.on("mouseenter", "route-layer", () => map.getCanvas().style.cursor = "pointer");
    map.on("mouseleave", "route-layer", () => map.getCanvas().style.cursor = "");

    // ラインにクリックイベントを設定
    map.on("click", "route-layer", (e) => {
        // クリックされたフィーチャーを取得
        const clickedLine = e.features[0].properties;
        
        map.flyTo({
            center: e.lngLat,
            essential: true,
            offset: [0, 0],
            zoom: 17.5
        }, false);

        // プロパティを取得して処理を分岐
        const lineTitle = clickedLine.title,
            lineDescription = clickedLine.description,
            lineZoom = clickedLine.zoom;

        console.log("Clicked line ID:", lineTitle, lineDescription, lineZoom);
    });
});
```