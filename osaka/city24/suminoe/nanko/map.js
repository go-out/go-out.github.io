'use strict'

const nankomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41496044264392, 34.63822132497246]
            },
            'properties': {
                'title': '大阪府咲洲庁舎（さきしまコスモタワー）',
                'address': '1階広場「フェスパ」 何をする訳でもなく、ただぼーっと過ごす',
                'link': null,
                'tag': ['spot'],
                'youtube': [
                    '9E8UZio4SJM'
                ],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41350734785573, 34.63624539461653]
            },
            'properties': {
                'title': 'ATC（アジア太平洋トレードセンター）',
                'address': '大阪南港の大型複合施設 海辺のテラスから大阪湾を一望できる',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41478295447018, 34.64411832595768]
            },
            'properties': {
                'title': 'シーサイドコスモ（コスモスクエア海浜緑地）',
                'address': 'コスモスクエア駅のすぐ北側にある全長1.4kmにも及ぶ海辺の遊歩道',
                'link': null,
                'area': ['osaka', '24', 'suminoe'],
                'tag': ['spot'],
                'youtube': [
                    'EoFg1eMWADg'
                ],
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.40094726261435, 34.63493353582439]
            },
            'properties': {
                'title': '大阪南港野鳥園',
                'address': '人工干潟と緑地で環境を構成整備した野鳥のためのサンクチュアリー',
                'link': null,
                'tag': ['nature'],
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4295128158298, 34.640197836668946]
            },
            'properties': {
                'title': '咲洲コンテナターミナル',
                'address': '咲洲の東側一帯は、コンテナ埠頭と呼ばれるエリアの一部らしい',
                'link': null,
                'tag': ['spot'],
                'youtube': [
                    'rlfyH_v-fTk'
                ],
                'zoom': 15.5
            }
        }
    ]
};

window.onload = () => {
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
                                [135.41242549009365, 34.638461373083416],
                                [135.42053883035527, 34.63089786792125],
                                [135.4306430763076, 34.63077239124429],
                                [135.43712825653267, 34.61386196885539],
                                [135.44734419136574, 34.6138015358478],
                                [135.4574741169689, 34.61081596196347],
                                [135.47146386827245, 34.609321829677]
                            ]
                        },
                        'properties': {
                            'title': 'New Tram (Osaka, Japan) 🇯🇵 Trade Center mae ⇄ Suminoekouen',
                            'address': 'ニュートラム（トレードセンター前⇄住之江公園）',
                            'link': null,
                            'youtube': 'jDv57WWjJ58',
                            'zoom': 14.5
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
    });
};