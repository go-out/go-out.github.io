// JSON データを取得
async function fetchData(url) {
    const res = await fetch(url);
    const data = res;
    return data;
};

// 右クリックイベント
map.on("contextmenu", (e) => {
    // Mapbox リバースジオコーディング
    let url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${e.lngLat.lng}&latitude=${e.lngLat.lat}&language=ja&limit=1&access_token=${mapboxgl.accessToken}`;

    // 地理座標（経度・緯度）を地点名（日本語の住所）に変換
    fetchData(url).then(function (response) {
        return response.text().then(function (jsonStr) {
            var data = JSON.parse(jsonStr),
                coordinates = [e.lngLat.lng, e.lngLat.lat],
                name_preferred = data.features[0].properties.name_preferred,
                full_address = data.features[0].properties.full_address.replace(/\,/g, "");

            map.flyTo({
                center: coordinates,
                offset: [0, 123],
                essential: true,
                zoom: 17
            })

            // ポップアップに投稿フォームを表示
            new mapboxgl.Popup({
                className: "goout"
            })
                .setLngLat(coordinates)
                .setHTML(`
                <form id="${data.features[0].id}">
                    <p>
                        <label>場所の名前</label><br>
                        <input type="text" name="title" value="${name_preferred}">
                    </p>
                    <p>
                        <label>場所の説明</label><br>
                        <textarea name="description"></textarea>
                    </p>
                    <input type="submit" value="コレクションに場所を追加">
                </form>
                `).addTo(map);

            let thisID = data.features[0].id,
                thisForm = document.forms[thisID],
                thisTitle = thisForm.elements.title,
                thisDescription = thisForm.elements.description;

            thisForm.addEventListener("submit", (e) => {
                e.preventDefault();
                let thisInfo = {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: coordinates,
                        address: full_address
                    },
                    properties: {
                        title: thisTitle.value,
                        description: thisDescription.value
                    }
                };
                console.log(thisInfo);
                yourJson.push(thisInfo);
                localStorage.setItem("mapJSON", JSON.stringify(yourJson));
                location.reload();
            });
        });
    }).catch(err => { console.log(err); });
});