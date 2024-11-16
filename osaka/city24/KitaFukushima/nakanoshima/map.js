'use strict'

const nakanoshimamap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51258972264702, 34.69133871733602]
            },
            'properties': {
                'title': '中之島公園 芝生広場',
                'address': '芝生広場の先にある剣先噴水は、10時～20時30分までの毎時0分・30分に約5分間放水',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50847675175675, 34.692191661936775]
            },
            'properties': {
                'title': '中之島バラ園',
                'address': '例年5月中旬~下旬・10月中旬~下旬、北区の花「薔薇」が見頃を迎える',
                'link': null,
                'tag': ['spot'],
                'zoom': 18
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5059947039718, 34.692941429555574]
            },
            'properties': {
                'title': 'アートエリア B1',
                'address': '京阪電車中之島線「なにわ橋駅」地下1階コンコースにあるコミュニティスペース',
                'link': null,
                'tag': ['spot'],
                'zoom': 18.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50643443643992, 34.693115284827755]
            },
            'properties': {
                'title': 'こども本の森 中之島',
                'address': '安藤忠雄より大阪市に寄贈された本や芸術文化を通じて子どもたちが豊かな創造力を育むための文化施設',
                'link': null,
                'tag': ['spot'],
                'zoom': 18.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4985346533332, 34.694737051583715]
            },
            'properties': {
                'title': '中之島ガーデンブリッジ',
                'address': '堂島川（大江橋と渡辺橋の間）に架かる歩行者専用の橋<br>橋の中央には憩い空間・松岡阜の彫刻「そよかぜ」がある',
                'link': null,
                'tag': ['spot'],
                'zoom': 18
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4981908666473, 34.691967059316596]
            },
            'properties': {
                'title': '三井住友銀行大阪本店ビル（住友ビルディング）',
                'address': '旧住友財閥（現住友グループ）の拠点として建てられた建築物',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49546300230242, 34.69337389274894]
            },
            'properties': {
                'title': 'コンラッド大阪',
                'address': '大阪・中之島のラグジュアリーホテル',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49201154295412, 34.691814971635765]
            },
            'properties': {
                'title': '国立国際美術館',
                'address': 'Welcome to NMAO',
                'link': null,
                'tag': ['spot'],
                'zoom': 18
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49141818677504, 34.69236572071053]
            },
            'properties': {
                'title': '中之島美術館',
                'address': '19世紀後半から21世紀の現代までの近代美術・現代美術を収集・保管・展示',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48723665694865, 34.69039008183887]
            },
            'properties': {
                'title': 'リーガロイヤルホテル',
                'address': 'Rihga Royal Hotel Osaka',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
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
                            [135.49683495845989, 34.69302626281767],
                            [135.49778088618484, 34.69314381499997],
                            [135.49886209468758, 34.69334456574353],
                            [135.50071263258218, 34.693311788541735]
                        ]
                    },
                    'properties': {
                        'title': '中之島緑道',
                        'address': '公募より選定された「水・緑・光」がテーマの10点の彫刻作品が設置されている自然とパブリックアートが共存した散歩道',
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