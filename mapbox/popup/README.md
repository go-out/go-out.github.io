# 地図にポップアップを追加する
```
const popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([ポップアップの座標])
.setHTML('<p>ポップアップに表示するHTML</p>')
.addTo(map);
```
* [Display a popup](https://docs.mapbox.com/mapbox-gl-js/ja/example/popup/)
* [Attach a popup to a marker instance](https://docs.mapbox.com/mapbox-gl-js/ja/example/set-popup/)
* [Display a popup on click](https://docs.mapbox.com/mapbox-gl-js/ja/example/popup-on-click/)
* [Display a popup on hover](https://docs.mapbox.com/mapbox-gl-js/ja/example/popup-on-hover/)

## ポップアップをスタイリングするCSS
例）
```
.mapboxgl-popup {
  max-width: 200px;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
```