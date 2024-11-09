'use strict'

const hyodomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53853829191456, 34.74926248385614]
            },
            'properties': {
                'title': '瑞光寺公園',
                'address': '区役所前の通り（通称「こぶし通り」）は、こぶし並木',
                'link': null,
                'tag': ['park'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52591083050748, 34.738947590411826]
            },
            'properties': {
                'title': '菅中児童遊園',
                'address': '夏期のみ無料で開放される児童用プールがある',
                'link': null,
                'tag': ['park'],
                'zoom': 18
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5339546935943, 34.75801410895569]
            },
            'properties': {
                'title': '阪急相川駅東西通り',
                'address': '__',
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
                'coordinates': [135.5404746741031, 34.75454434375871]
            },
            'properties': {
                'title': '松山神社',
                'address': '梅の名所 2月末には、毎年梅花祭が開催',
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
                'coordinates': [135.53324047816687, 34.75192507846913]
            },
            'properties': {
                'title': '阪急上新庄駐輪センターはこべ館',
                'address': '営業時間 6:30～22:00 年末年始休 | ◆普通車◆ 1日1回利用 320円',
                'link': null,
                'tag': ['spot'],
                'iconSize': ['spot/bicycle.png', '3.21rem', '3.21rem', 2],
                'zoom': 18
            },
            'featured': null
        }
    ]
};

window.addEventListener("load", () => {
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
                                [135.52537115876675, 34.742149982953805],
                                [135.52759872670111, 34.74137168111106],
                                [135.53183192971255, 34.739998981519264]
                            ]
                        },
                        'properties': {
                            'title': 'こぶし通り',
                            'address': '区役所前のこぶし並木（通称「こぶし通り」）',
                            'link': null,
                            'center': [135.52922581955266, 34.74085191047763],
                            'zoom': 14.5
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [135.5221977714795, 34.73371619729498],
                                [135.52665091247349, 34.7351908441462],
                                [135.53474582596675, 34.73618688037786],
                                [135.54354801519014, 34.73653479264105],
                                [135.5494056090343, 34.73880246974265],
                                [135.55287615085638, 34.74233602767856],
                                [135.55294386738638, 34.74764998705743],
                                [135.5547891779973, 34.7524628552204],
                                [135.55789483140052, 34.75539773592983],
                                [135.56185547668616, 34.75759788593699]
                            ]
                        },
                        'properties': {
                            'title': 'なにわ自転車道（淀川右岸）',
                            'address': '大阪市 東淀川・淀川・西淀川区〜旭区を結ぶ21.6kmの大規模自転車道',
                            'link': null,
                            'center': [135.5494056090343, 34.73880246974265],
                            'zoom': 14
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [135.55635804805962, 34.75622117447794],
                                [135.55481366967473, 34.756623632770825],
                                [135.54716141687527, 34.757013081896076],
                                [135.54407837283497, 34.75701308186244],
                                [135.53683256109042, 34.75601163710266],
                                [135.5282495388118, 34.75328837500557],
                                [135.52282246310722, 34.75011749439865],
                                [135.51908381300757, 34.749473394428776],
                                [135.51450095054685, 34.74838336860239],
                                [135.50892860342458, 34.744122220623765],
                                [135.50760198534294, 34.74397357195588],
                                [135.50591356233411, 34.74429564685809],
                                [135.50329047658443, 34.745360952247864]
                            ]
                        },
                        'properties': {
                            'title': 'なにわ自転車道（神崎川左岸）',
                            'address': '大阪市 東淀川・淀川・西淀川区〜旭区を結ぶ21.6kmの大規模自転車道',
                            'link': null,
                            'center': [135.525567094723, 34.75172176336484],
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