'use strict'

const toyonakamap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4842513604408, 34.7763142625666]
            },
            'properties': {
                'title': '服部緑地',
                'address': '緑豊かな森や庭、10以上の池、自然に満ちた大阪府下最大級の緑地公園',
                'link': "spot/?id=osaka&area=hokusetsu-toyonaka&name=hattori-ryokuchi",
                'tag': ['park'],
                'zoom': 14.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46931691244765, 34.76703142243228]
            },
            'properties': {
                'title': '豊島公園',
                'address': 'バラ園、ライトアップされる大きな噴水などがある豊中市のほぼ中央に位置する公園',
                'link': null,
                'tag': ['park'],
                'zoom': 16
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46536192386725, 34.762296005834145]
            },
            'properties': {
                'title': 'ふれあい緑地界隈',
                'address': 'みどり豊かな文化・スポーツの中心エリア',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45321526119318, 34.771081175400866]
            },
            'properties': {
                'title': '千里川土手',
                'address': '飛行機撮影の聖地 伊丹空港へ着陸する飛行機が間近に見える魅力スポット',
                'link': "spot/?id=osaka&area=hokusetsu-toyonaka&name=itami-airport",
                'tag': ['spot'],
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4697874879776, 34.769827161771175]
            },
            'properties': {
                'title': '豊中市立文化芸術センター',
                'address': '',
                'link': null,
                'tag': ['spot'],
                'zoom': 16
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4793511128629, 34.769290498833044]
            },
            'properties': {
                'title': '松景園',
                'address': '高級住宅街',
                'link': null,
                'tag': ['park'],
                'zoom': 16.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47669164982722, 34.7704115194572]
            },
            'properties': {
                'title': 'さわ病院',
                'address': '社会医療法人北斗会',
                'link': null,
                'tag': ['spot'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4740253696849, 34.77251733362806]
            },
            'properties': {
                'title': '豊中ビームス',
                'address': '',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46722313141464, 34.772643672278065]
            },
            'properties': {
                'title': '阪急曽根駐輪センター',
                'address': '営業時間 7:00～21:00 | 普通車 1日320円 / 電動車 1日420円',
                'link': null,
                'tag': ['spot'],
                'iconSize': ['spot/bicycle.png', '3.21rem', '3.21rem', 2],
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46448093257192, 34.78057457459724]
            },
            'properties': {
                'title': '阪急岡町北駐輪センター',
                'address': '営業時間 6:30～22:00 | 普通車 1日320円 / 電動車 1日420円',
                'link': null,
                'tag': ['spot'],
                'iconSize': ['spot/bicycle.png', '3.21rem', '3.21rem', 2],
                'zoom': 16
            }
        }
    ]
}

map.on('load', () => {
    map.addSource('addLine', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [135.48033520865715, 34.76991681353756],
                            [135.48021241987954, 34.77116489613496],
                            [135.4802442433521, 34.77220633330573],
                            [135.48044460841317, 34.77282035421268],
                            [135.48078355703, 34.7737375607673],
                            [135.4808400867285, 34.7746208577157],
                            [135.4810346746948, 34.77493401443627]
                        ]
                    },
                    'properties': {
                        'title': '天竺川の松並木',
                        'address': '服部緑地の西端 天竺川橋から広田橋付近にかけて続く松並木',
                        'link': null,
                        'zoom': 16
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'line',
        'type': 'line',
        'source': 'addLine',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'lightskyblue',
            'line-width': 11
        }
    });
});

map.on('mouseenter', 'line', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'line', () => {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'line', (e) => {
    map.flyTo({
        center: e.lngLat,
        essential: true,
        zoom: e.features[0].properties.zoom
    });
    infoMore(e.features[0].properties, e.features[0].geometry.coordinates[0]);
});