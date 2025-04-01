const script = document.getElementById('search-js');
// wait for the Mapbox Search JS script to load before using it
script.onload = function () {
    // instantiate a search box instance
    const searchBox = new mapboxsearch.MapboxSearchBox()

    // set the mapbox access token, search box API options
    searchBox.accessToken = mapboxgl.accessToken
    searchBox.options = {
        language: 'ja',
        country: 'jp'
    }

    // set the mapboxgl library to use for markers and enable the marker functionality
    searchBox.mapboxgl = mapboxgl;
    searchBox.marker = false;

    // ユーザーが提案を選択したときに発生
    const submitForm = document.forms.submit;
    searchBox.addEventListener('retrieve', (e) => {
        console.log(e.detail.features);
        let thisSpot = e.detail.features[0];
        let marker = new mapboxgl.Marker({
            draggable: true,
            color: "red"
        })
            .setLngLat(thisSpot.geometry.coordinates)
            .addTo(map);

        // マーカーの地理座標（経度・緯度）を 地点名（住所）に変換
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
        marker.on('dragend', onDragEnd);

        submitForm.dataset.no = null;
        submitForm.dataset.lng = thisSpot.geometry.coordinates[0];
        submitForm.dataset.lat = thisSpot.geometry.coordinates[1];
        submitForm.elements.title.value = thisSpot.properties.name;
        document.querySelector('#latlng').textContent = thisSpot.geometry.coordinates;
        document.querySelector('#address').textContent = thisSpot.properties.address;

        if (document.querySelector('#submit').hidden == true) {
            document.querySelector('#submit').hidden = false;
        };
    }, false)

    // bind the search box instance to the map instance
    searchBox.bindMap(map)

    // append <mapbox-search-box> to the document
    document.querySelector('#search').appendChild(searchBox);
};