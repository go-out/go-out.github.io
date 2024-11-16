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
