# 地図にマーカーを追加する
[Mapbox GL JSでカスタムマーカーを追加する](https://docs.mapbox.com/help/ja/tutorials/custom-markers-gl-js/)

```
new mapboxgl.Marker()
    .setLngLat([マーカーの座標])
    .addTo(map);
```
* [Add a default marker to a web map](https://docs.mapbox.com/mapbox-gl-js/ja/example/add-a-marker/)
* [Add a marker using a place name](https://docs.mapbox.com/mapbox-gl-js/ja/example/marker-from-geocode/)

```
new mapboxgl.Marker({
    color: "色コード",
    draggable: true
})
    .setLngLat([マーカーの座標])
    .addTo(map);
```
* [Create a draggable Marker](https://docs.mapbox.com/mapbox-gl-js/ja/example/drag-a-marker/)
* [Create a draggable point](https://docs.mapbox.com/mapbox-gl-js/ja/example/drag-a-point/)
___

## JSONデータ[^1]　を読み込み、地図に複数のマーカーを追加
[^1]: 例） [index.json](index.json)
```
for (const marker of JSON.features) {
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
}
```

* [Sources | Mapbox GL JS | Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/sources/)
* [Load data from an external GeoJSON file](https://docs.mapbox.com/mapbox-gl-js/ja/example/external-geojson/)
```
map.on('load', () => {
    map.addSource('earthquakes', {
        type: 'geojson',
        data: JSON.parse(reader.result)
    });

    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color': 'white'
        }
    });
});
```

### マーカーにイベントを追加
```
map.on('click', 'places', (e) => {
  // レイヤーの表示領域をクリックしたときに処理を実行するイベント
});

map.on('mouseenter', 'places', (e) => {
  // マウスカーソルがレイヤーの表示領域に入ったときに処理を実行するイベント
});

map.on('mouseleave', 'places', (e) => {
  // マウスカーソルがレイヤーの表示領域から出たときに処理を実行するイベント
});
```
* [Center the map on a clicked feature](https://docs.mapbox.com/mapbox-gl-js/ja/example/center-on-feature/)
* [Attach a popup to a marker instance](https://docs.mapbox.com/mapbox-gl-js/ja/example/set-popup/)
* [Display a popup on click](https://docs.mapbox.com/mapbox-gl-js/ja/example/popup-on-click/)
* [Display a popup on hover](https://docs.mapbox.com/mapbox-gl-js/ja/example/popup-on-hover/)
___

マーカーをクリックした時、地図の中心がマーカーの座標に移動する
```
el.addEventListener('click', (e) => {
  map.flyTo({
    center: marker.geometry.coordinates,
    zoom: 3,
    bearing: 0,

    // These options control the flight curve, making it move
    // slowly and zoom out almost completely before starting
    // to pan.
    speed: 0.75, // make the flying slow
    curve: 1, // change the speed at which it zooms out

    // This can be any easing function: it takes a number between
    // 0 and 1 and returns another number between 0 and 1.
    easing: (t) => t,

    // this animation is considered essential with respect to prefers-reduced-motion
    essential: true
  });
})
```
* [Fly to a location](https://docs.mapbox.com/mapbox-gl-js/ja/example/flyto/)
* [Slowly fly to a location](https://docs.mapbox.com/mapbox-gl-js/ja/example/flyto-options/)
___

カスタムアイコンマーカーを設定
* [Add custom icons with Markers](https://docs.mapbox.com/mapbox-gl-js/ja/example/custom-marker-icons/)
* [Add custom vector icons](https://docs.mapbox.com/mapbox-gl-js/ja/example/custom-colorized-vector-icons/)
* [Add markers to a web map with a symbol layer](https://docs.mapbox.com/mapbox-gl-js/ja/example/geojson-markers/)

* [Category:Ionicons - Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Ionicons)

***

* [Markers and controls](https://docs.mapbox.com/mapbox-gl-js/api/markers/)