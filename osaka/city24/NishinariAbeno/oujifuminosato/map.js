'use strict'

const oujifuminosatomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52162134942552, 34.630751772047915]
            },
            'properties': {
                'title': '桃ヶ池公園',
                'address': '桃ケ池を囲む遊歩道は阿倍野区の花「モモ」の名所',
                'link': null,
                'google': ['AF1QipPUqH0Js8fbrRyCyVe93cUn9nmAzbdQA95kluK9'],
                'tag': ['park'],
                'zoom': 16
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5091447238354, 34.6310503018434]
            },
            'properties': {
                'title': '阿倍王子神社',
                'address': '大阪府下に唯一現存する熊野権現の王子社',
                'link': "spot/?id=osaka-city24&area=NishinariAbeno&name=abeouji",
                'google': ['AF1QipOvJkuLiNvF_ii_Bz-n43hSPF2VCJ_cNNh7x37m'],
                'tag': ['legacy'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50925916615893, 34.631784685090196]
            },
            'properties': {
                'title': '安倍晴明神社',
                'address': '陰陽道の祖として知られる安倍晴明が生まれたとされている地にある神社',
                'link': "spot/?id=osaka-city24&area=NishinariAbeno&name=abeouji",
                'tag': ['legacy'],
                'zoom': 18.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5156199535944, 34.63563734660693]
            },
            'properties': {
                'title': '日本基督教団 南大阪教会',
                'address': '大阪を代表する建築家 村野藤吾が設計した教会建築',
                'link': null,
                'google': ['AF1QipPjVD-IEoVFxOqNqr-yqj4Vc3gheI9bM_isBU8_'],
                'tag': ['legacy'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51661348673503, 34.628897825240045]
            },
            'properties': {
                'title': '大阪聖アンデレ教会',
                'address': '日本聖公会大阪教区の教会',
                'link': null,
                'tag': ['legacy'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5190078178838, 34.63751039787121]
            },
            'properties': {
                'title': '大阪府立工芸高等学校',
                'address': 'ドイツのヴァイマル工芸学校（後のバウハウス）をモデルとして設計された本館は大阪市指定有形文化財',
                'link': null,
                'google': ['AF1QipNgc7lkOxX0uNsItFHZ3N6L2FX7LLluEJhs0Wbv'],
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51828799074582, 34.63268023591715]
            },
            'properties': {
                'title': 'Coffee House 再會',
                'address': 'レトロな雰囲気と喫茶と軽食のお店',
                'link': null,
                'tag': ['legacy'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51641226854082, 34.63702501451381]
            },
            'properties': {
                'title': '苗代田公園',
                'address': '開門午前九時 閉門夕方午後五時',
                'link': "spot/?id=osaka-city24&area=NishinariAbeno&name=nawashiroda",
                'google': ['AF1QipMKu0NViFggGB4J_PV82uBprSpbDpqmSZBVa4iW'],
                'tag': ['park'],
                'zoom': 17.5
            },
            'featured': null
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
                                [135.51087778444935, 34.62715304314109],
                                [135.51091123428506, 34.62765949740907],
                                [135.51096775956944, 34.62819913563436],
                                [135.51111839737638, 34.62893163484834],
                                [135.51116910137762, 34.62920900671617]
                            ]
                        },
                        'properties': {
                            'title': 'あべの王子商店街',
                            'address': '__',
                            'link': null,
                            'zoom': 16.5
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [135.5096998544263, 34.63088640958705],
                                [135.51135801162212, 34.63071275249911]
                            ]
                        },
                        'properties': {
                            'title': '王子本通商店街',
                            'address': '__',
                            'link': null,
                            'zoom': 17
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [135.51792221778533, 34.63143658904505],
                                [135.51801085844, 34.63212081066759],
                                [135.51807681173517, 34.63252787496849],
                                [135.51825776391615, 34.63329077854192],
                                [135.5185876354692, 34.6347058618054],
                                [135.5192868563555, 34.63460326312884],
                                [135.51956826959184, 34.63476375177831],
                                [135.5201097612977, 34.634778452819916]
                            ]
                        },
                        'properties': {
                            'title': '文の里商店街',
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
        });
    });
};