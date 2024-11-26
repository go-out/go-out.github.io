'use strict'

const korigaokamap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.65399897980524, 34.79119198561476]
            },
            'properties': {
                'title': 'CONOBA香里ヶ丘',
                'address': 'けやき通りに面したライフスタイルショッピングセンター（商業施設）',
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
                'coordinates': [135.65027906193126, 34.791178703408164]
            },
            'properties': {
                'title': '香里団地 D地区',
                'address': '入居開始当時の古き良き住棟「星型棟（スターハウス）」が残る地区',
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
                'coordinates': [135.64856887764614, 34.79593896605215]
            },
            'properties': {
                'title': '以楽公園',
                'address': '春の桜・秋の紅葉の時期にのみ限定で一般開放される日本庭園',
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
                'coordinates': [135.64363908912344, 34.79438368159579]
            },
            'properties': {
                'title': '妙見山の煙突（旧陸軍香里製造所）',
                'address': '枚方市の平和のモニュメント 旧陸軍・香里製造所で火薬乾燥に使われた戦争遺跡',
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
                'coordinates': [135.6538606302518, 34.79431184640845]
            },
            'properties': {
                'title': '桜公園',
                'address': '旧陸軍施設の跡地を再整備された桜の名所公園',
                'link': null,
                'tag': ['spot'],
                'zoom': 16.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.653028900432, 34.78880997368002]
            },
            'properties': {
                'title': '観音山公園',
                'address': '交野ヶ原を見渡せる景観豊かな公園 桜の名所',
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
                'coordinates': [135.65128637930252, 34.789746341336425]
            },
            'properties': {
                'title': '新香里バスロータリー広場',
                'address': '京阪本線「枚方市駅」「香里園駅」「枚方公園駅」の3方向への京阪バスの拠点',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        }
    ]
};

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
                            [135.65858341225464, 34.791485543928985],
                            [135.65532241727533, 34.7911791320422],
                            [135.65485748812478, 34.79109406641889],
                            [135.65408122565066, 34.79083467578465],
                            [135.6530393408574, 34.790300866849506],
                            [135.65232011048568, 34.790054234705906],
                            [135.65125470442757, 34.78989157430556],
                            [135.65025338867662, 34.78973439933151],
                            [135.64717265461013, 34.78836434633001],
                            [135.6463351649757, 34.787711361096115]
                        ]
                    },
                    'properties': {
                        'title': 'けやき通り',
                        'address': 'メインストリート',
                        'link': null,
                        'zoom': 14
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [135.64268285702877, 34.79219234684419],
                            [135.64394732824348, 34.79263384301049],
                            [135.64422786773378, 34.7926229732702],
                            [135.6443912848432, 34.79256698670123],
                            [135.64460634344852, 34.79241055641225],
                            [135.64602813758802, 34.79055044445059],
                            [135.64624557208776, 34.79030192291083],
                            [135.64701399320222, 34.78989265447444],
                            [135.64722129190955, 34.789727332131264],
                            [135.64736120356588, 34.78957767211172],
                            [135.64797157332998, 34.788752799555596]
                        ]
                    },
                    'properties': {
                        'title': 'いちょう通り',
                        'address': 'けやき通りから淀見通りに抜ける、銀杏並木が続く道路',
                        'link': null,
                        'zoom': 14
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