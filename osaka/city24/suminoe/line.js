'use strict'

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
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [135.47146386827245, 34.609321829677],
                            [135.4574741169689, 34.61081596196347],
                            [135.44734419136574, 34.6138015358478],
                            [135.43382953510434, 34.613907109890135],
                            [135.43385144843262, 34.61169118729816],
                            [135.41843968425383, 34.61184220479092],
                            [135.41730047899017, 34.61548320882365],
                            [135.41141605710726, 34.61545785643571],
                            [135.40865560733192, 34.614595779048614],
                            [135.4037844060449, 34.61458318751603]
                        ]
                    },
                    'properties': {
                        'title': '21 Minute Cycling Suminoe Park to Nanko Fishing Port 🇯🇵 Osaka, Japan',
                        'address': '住之江公園駅から南港南の西の果てまで',
                        'link': null,
                        'href': 'osaka/vr/?area=bayarea&name=nanko-minami',
                        'youtube': 'tinBEuiKqzU',
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
