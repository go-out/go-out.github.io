# [Search Box API](https://docs.mapbox.com/api/ja/search/search-box/)
住所、または名前で場所を検索

* [Search Box - Web Quickstart](https://docs.mapbox.com/mapbox-search-js/ja/guides/search/web/)
* [Add Search Box to a Web Map](https://docs.mapbox.com/mapbox-search-js/example/add-search-box-to-map/)
___

# [Geocoding API](https://docs.mapbox.com/api/ja/search/geocoding/)
名前（フォワード検索）または座標（リバース検索）で住所や場所を検索

JSON データを取得
```
async function fetchData(url) {
    const res = await fetch(url);
    const data = await res;
    return data;
};
```

## フォワードジオコーディング
検索テキストの文字列を使用して場所を検索

* [Add a geocoder](https://docs.mapbox.com/mapbox-gl-js/ja/example/mapbox-gl-geocoder/)
* [Place the geocoder input outside the map](https://docs.mapbox.com/mapbox-gl-js/ja/example/mapbox-gl-geocoder-outside-the-map/)

***

## リバースジオコーディングAPIリクエスト
地理座標（経度・緯度）を地点名（日本語の住所）に変換

リクエストURL `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${e.lngLat.lng}&latitude=${e.lngLat.lat}&language=ja&limit=1&access_token=${mapboxgl.accessToken}`
```
fetchData(url).then(function (response) {
    return response.text().then(function (jsonStr) {
        var data = JSON.parse(jsonStr);
        var coordinates = data.features[0].geometry.coordinates;
        var full_address = data.features[0].properties.full_address.replace(/\,/g, "");
    });
}).catch(err => { console.log(err); });
```

[Geodcoding APIプレイグラウンド](https://docs.mapbox.com/playground/ja/geocoding/)