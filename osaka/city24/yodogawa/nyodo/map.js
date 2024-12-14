'use strict'

const nyodomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45159142666427, 34.70645539527047]
            },
            'properties': {
                'title': '西淀公園',
                'address': '大野川遊歩道と阪神高速神戸線に挟まれた広々公園',
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
                'coordinates': [135.44891294381182, 34.71354783708735]
            },
            'properties': {
                'title': '佃ふれあい公園',
                'address': '緑に囲まれた川の見える公園',
                'link': null,
                'tag': ['park'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.43644195393597, 34.70235937096476]
            },
            'properties': {
                'title': '大野せせらぎの里',
                'address': '大野下水処理場内 潤いのある空間',
                'link': null,
                'tag': ['park'],
                'zoom': 16.25
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46946421329375, 34.71230887099571]
            },
            'properties': {
                'title': '駅リンくん 塚本店',
                'address': '営業時間 6:30～21:00 年末年始休 | 1回利用（翌日の10時まで）500円',
                'link': null,
                'tag': ['spot'],
                'iconSize': ['spot/bicycle.png', '3.21rem', '3.21rem', 2],
                'zoom': 18
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
                                [135.46105649664975, 34.716697607461455],
                                [135.4532321262492, 34.70590539729817],
                                [135.45277508520593, 34.70572590376295],
                                [135.44935236166026, 34.70525046710489],
                                [135.44845607715303, 34.704797033152815],
                                [135.44726964338912, 34.70447340588301],
                                [135.4448793010448, 34.704337732892796],
                                [135.44395303658155, 34.70398919494872],
                                [135.44352982277485, 34.70357522688185],
                                [135.44251349394267, 34.70137939898632],
                                [135.44143535892243, 34.70006340285762],
                                [135.44118179567658, 34.699414307792196],
                                [135.4409587698513, 34.69810061879757],
                                [135.44053902639274, 34.69678170923743],
                                [135.43936269768193, 34.69507385069636],
                                [135.43675482915597, 34.692816117521204],
                                [135.43618030261086, 34.69255010275165]
                            ]
                        },
                        'properties': {
                            'title': '大野川緑陰道路',
                            'address': '歩行者・自転車専用道路 区の花「サザンカ」が多く咲く',
                            'link': null,
                            'zoom': 14
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [135.43299840142316, 34.69240921396893],
                                [135.4319831470237, 34.69469331121907],
                                [135.431905063582, 34.69991426044017],
                                [135.4322849484118, 34.70047445976053],
                                [135.433266733884, 34.70122658597002],
                                [135.43322768682526, 34.70295094816362],
                                [135.43230593891235, 34.70432135842978],
                                [135.43410805659317, 34.706242486273666],
                                [135.43626558202476, 34.70747357065511]
                            ]
                        },
                        'properties': {
                            'title': '西島川自転車歩行者道',
                            'address': '西島川両岸に整備されている 歩行者・自転車専用道路',
                            'link': null,
                            'zoom': 15
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