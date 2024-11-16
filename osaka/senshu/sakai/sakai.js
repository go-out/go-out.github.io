'use strict'

const sakaisakai = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4758476222288, 34.57369924435177]
            },
            'properties': {
                'title': '旧・花時計',
                'address': '文字盤の箇所が堺市章 フェニックス通り・土居川公園が交差する歩道橋からよく見える',
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
                'coordinates': [135.47021826143606, 34.576011671938474]
            },
            'properties': {
                'title': 'さかい利晶の杜',
                'address': '茶室を併設する堺の人々の歴史と文化を紹介する博物館',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4729004919281, 34.574749498509334]
            },
            'properties': {
                'title': '住吉大社宿院頓宮',
                'address': '摂津 和泉 両国一の宮の御旅所 住吉大社の御旅所であり大鳥大社の摂社',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48201851965143, 34.58328697333718]
            },
            'properties': {
                'title': '本願寺堺別院（堺御坊）',
                'address': '堺市内最大の木造建築で｢北の御坊｣とも呼ばれる府指定の史跡',
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
                'coordinates': [135.4813826268351, 34.58120182275802]
            },
            'properties': {
                'title': '妙國寺庭園',
                'address': '国の天然記念物に指定されている「妙国寺のソテツ」を取り巻く石組と、本堂東側庭園',
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
                'coordinates': [135.4756467818811, 34.57438984870785]
            },
            'properties': {
                'title': '祥雲寺庭園',
                'address': '庭全体を平らとする平庭式の枯山水(かれさんすい)様式の庭園',
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
                'coordinates': [135.47741589361658, 34.5828565071608]
            },
            'properties': {
                'title': '堺伝匠館（堺伝統産業会館）',
                'address': 'SAKAI TRADITIONAL CRAFTS MUSEUM',
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
                'coordinates': [135.4753572541087, 34.581504033919174]
            },
            'properties': {
                'title': '戎公園（ザビエル公園）',
                'address': '聖フランシスコ・ザヴィエルに関連した石碑などが点在する公園',
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
                'coordinates': [135.47380634129877, 34.58121066560574]
            },
            'properties': {
                'title': '堺戎島DOCK',
                'address': '内川河川敷の遊歩道・イベントスペース',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46910266742583, 34.58179169411463]
            },
            'properties': {
                'title': '堺駅観光案内所（レンタサイクル）',
                'address': '営業時間 9:00 ~ 17:30 | 普通自転車 500円、電動アシスト自転車 1,000円',
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
                            [135.4680753923913, 34.578197186131845],
                            [135.4759440637631, 34.57327664128124],
                            [135.48230878833408, 34.56987746494687]
                        ]
                    },
                    'properties': {
                        'title': 'フェニックス通り',
                        'address': '__',
                        'link': null,
                        'zoom': 16
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [135.4858239386541, 34.59095590705509],
                            [135.4804505721869, 34.57631417677456],
                            [135.47994118005568, 34.57499393772659],
                            [135.47588646286016, 34.57367105222079],
                            [135.47148147115433, 34.568958659729006]
                        ]
                    },
                    'properties': {
                        'title': '土居川公園',
                        'address': '__',
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