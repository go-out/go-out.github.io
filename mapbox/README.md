# Mapboxを用いて、カスタムデザイン地図を作成

[クイックスタート](https://docs.mapbox.com/mapbox-gl-js/ja/guides)
* [Mapboxアカウント](https://account.mapbox.com/) を作成
* アクセストークン[^1] と スタイルURL[^2] を取得
* Mapbox GL JS (JavaScriptとCSS) を HTML の head に 設定
* デジタル地図 を HTML の BODY に 設定

[^1]:[はじめてのMapbox](https://docs.mapbox.com/jp/help/getting-started/)
[^2]:[Mapbox Styles API](https://docs.mapbox.com/api/maps/styles/)
___

**Mapbox GL JS**（*JavaScript* と *CSS*）を HTML の ***head*** に 設定
```
<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
```

例） *CSS* で **マップの表示サイズ** を 指定
```
#map {
    width: 100%;
    height: 100dvh;
}
```

## [カスタムデザイン地図　を　ウェブページに表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/simple-map/)

HTML の *BODY*内 に **次のコード** を記述
```
<div id="map"></div>

<script>
mapboxgl.accessToken = 'アクセストークン';

let css = 'スタイルURL',
    center = [マップの開始位置の座標],
    zoom = '初期に表示する地図のズームレベル';

const map = new mapboxgl.Map({
    container: 'map', // 地図要素の ID名
    style: css,
    center: center,
    pitch: 0,
    bearing: 0,
    zoom: 'zoom',
    scrollZoom: false,
    projection: 'mercator',
    attributionControl: false
});
</script>
```
* [Display a map on a webpage](https://docs.mapbox.com/mapbox-gl-js/ja/example/simple-map/)
___

## [Mapbox Styles API](https://docs.mapbox.com/api/maps/styles/)
*Mapboxがデザインしたスタイルシート*から**スタイルURL**を選択[^3]

| *Mapboxがデザインしたスタイルシート* | **スタイルURL** |
| :--- | :--- |
| Mapbox Standard | mapbox://styles/mapbox/standard |
| Mapbox Standard Satellite | mapbox://styles/mapbox/standard-satellite |
| [Mapbox Streets](https://www.mapbox.com/maps/streets) | mapbox://styles/mapbox/streets-v12 |
| [Mapbox Outdoors](https://www.mapbox.com/maps/outdoors) | mapbox://styles/mapbox/outdoors-v12 |
| [Mapbox Light](https://www.mapbox.com/maps/light) | mapbox://styles/mapbox/light-v11 |
| [Mapbox Dark](https://www.mapbox.com/maps/dark) | mapbox://styles/mapbox/dark-v11 |
| [Mapbox Satellite Streets](https://www.mapbox.com/maps/satellite) | mapbox://styles/mapbox/satellite-streets-v12 |

[^3]: [Map design](https://docs.mapbox.com/help/getting-started/map-design/) 

***
マップの開始位置の座標 = [lng(経度), lat(緯度)](https://docs.mapbox.com/jp/help/glossary/lat-lon/)

地理的座標系 経度（-90〜90）・緯度（-180〜180） の形式で、地図上の位置を表現します。
___

[地図上に表示される世界の範囲を決定する23段階の値](https://docs.mapbox.com/jp/help/glossary/zoom-level/)
| ズームレベル | 見える範囲 |
| :--- | :--- |
| ***0*** | 地球 |
| ***3*** | 大陸 |
| ***4*** | 大きな島 |
| ***6*** | 大きな川 |
| ***10*** | 幹線道路 |
| ***15*** | ビル |
| ***22*** | 最も高いズームレベル |

[スクロールズームの無効化](https://docs.mapbox.com/jp/mapbox-gl-js/example/disable-scroll-zoom/)
***

[プロジェクション](https://docs.mapbox.com/jp/mapbox-gl-js/style-spec/projection/)  
マップがどのプロジェクションでレンダリングされるかを設定します。
___

[ピッチとベアリングの設定](https://docs.mapbox.com/jp/mapbox-gl-js/example/set-perspective/)

ピッチはマップを傾け、遠近効果を生み出します。  
値（0〜85） : 地面からの垂線に対する地面方向への傾斜角

ベアリングは、マップをその中心を中心に回転させます。  
値（-360〜360） : 北方位からの角度（時計回りがプラス、反時計回りがマイナス）
___

### [アトリビューションコントロールの既定値を変更](https://docs.mapbox.com/mapbox-gl-js/ja/example/attribution-position/)[^4]
[^4]: [Markers and controls](https://docs.mapbox.com/mapbox-gl-js/api/markers/)
```
// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }), 'bottom-right'
);
```

`attributionControl: false`

カスタムAttributionを表示
```
map.addControl(new mapboxgl.AttributionControl({
    customAttribution: 'Map design by me'
}));
```

コントロールの既定位置を変更
* `map.addControl(new mapboxgl.AttributionControl(), 'bottom-left');`

* `map.addControl(new mapboxgl.NavigationControl());`
[マップナビゲーションコントロールの表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/navigation/)

* `map.addControl(new mapboxgl.FullscreenControl());`
[現在ビューと全画面表示モードを切り替える](https://docs.mapbox.com/jp/mapbox-gl-js/example/fullscreen/)

```
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    // デバイスの位置の変更に応じて位置情報を更新
    trackUserLocation: true,
    // デバイスが向いている方向を矢印で描画
    showUserHeading: true
  })
);
```
[現在位置を取得し、マップ上での現在位置を追跡](https://docs.mapbox.com/jp/mapbox-gl-js/example/locate-user/)

***

* [地図に回転するアニメーションエフェクトを設定する](rotating.js)
* [Add 3D terrain to a map](https://docs.mapbox.com/mapbox-gl-js/ja/example/add-terrain/)
* [Display buildings in 3D](https://docs.mapbox.com/mapbox-gl-js/ja/example/3d-buildings/)
* [Rain and Snow Playground](https://docs.mapbox.com/playground/ja/rain-and-snow/)