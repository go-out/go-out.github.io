// ジオコーダーコントロールを追加
let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
    zoom: 17.5,
    language: 'ja',
    country: 'jp',
    mapboxgl: mapboxgl,
    reverseGeocode: true
});

// ジオコーダー を #geocoder に配置
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
const thisAddress = document.querySelector('#address');

// ジオコーダーの結果後にドラッグ可能マーカーを設定
geocoder.on('result', function (e) {
    let marker = new mapboxgl.Marker({
        draggable: true,
        color: "red"
    })
        .setLngLat(e.result.center)
        .addTo(map);

    // マーカーの座標を表示
    function onDragEnd() {
        // Mapbox リバースジオコーディング
        let lngLat = marker.getLngLat(),
            url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lngLat.lng}&latitude=${lngLat.lat}&language=ja&limit=1&access_token=${mapboxgl.accessToken}`;

        // 地理座標（経度・緯度）を 地点名（住所）に変換
        fetchData(url).then(function (response) {
            return response.text().then(function (jsonStr) {
                var data = JSON.parse(jsonStr),
                    coordinates = [lngLat.lng, lngLat.lat],
                    name_preferred = data.features[0].properties.name_preferred,
                    full_address = data.features[0].properties.full_address.replace(/\,/g, "");

                const submitForm = document.forms.submit;
                submitForm.dataset.no = null;
                submitForm.dataset.lng = lngLat.lng;
                submitForm.dataset.lat = lngLat.lat;
                submitForm.elements.title.value = name_preferred;
                document.querySelector('#latlng').textContent = coordinates;
                document.querySelector('#address').textContent = full_address;
            });
        });
    };

    onDragEnd();
    marker.on('dragend', onDragEnd);

    if (document.querySelector('#submit').hidden == true) {
        document.querySelector('#submit').hidden = false;
    };
});