let heaedPopup = [
    {
        'LngLat': [135.4827971, 34.6096113],
        'properties': {
            'title': 'things that i (we) heard around OTO building',
            'address': '私（わたしたち）が 音ビル周辺で聞いた言葉',
            'date': 'Sun Jan 5 2020 - Sun May 22 2022',
            'link': 'https://things-that-i-we-heard.web.app/otobuilding/'
        }
    },
    {
        'LngLat': [135.76854055131543, 35.00017558944718],
        'properties': {
            'title': 'things that i (we) heard around BnA Alter Museum',
            'address': '私（わたしたち）が 京都・河原町周辺で聞いた言葉',
            'date': 'Thu Jul 21 2022 - Mon Aug 15 2022',
            'link': 'https://things-that-i-we-heard.web.app/bnaaltermuseum/'
        }
    }
]

map.on('load', () => {
    for (const heaed of heaedPopup) {
        new mapboxgl.Popup({
            closeOnClick: false,
            className: "heard"
        })
            .setLngLat(heaed.LngLat)
            .setHTML(`
            <a href="${heaed.properties.link}" target="_blank">
            ${heaed.properties.title}
            </a>
            <p>
            ${heaed.properties.date}<br>
            ${heaed.properties.address}
            </p>
            `)
            .addTo(map)
    };

    // Add a data source containing GeoJSON data.
    map.addSource('heardPolygon', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [135.41646125175373, 34.644835465657366],
                                [135.40521722270876, 34.64091208776662],
                                [135.40186180115649, 34.63971830261745],
                                [135.39875502756036, 34.63862999860284],
                                [135.3984396828182, 34.638165686486275],
                                [135.39838045669813, 34.631358349283914],
                                [135.39923425046834, 34.62074762984233],
                                [135.40210389657403, 34.61211503607777],
                                [135.4168992459248, 34.61198349222289],
                                [135.41734225246944, 34.6106162228007],
                                [135.44599691627246, 34.61045638155555],
                                [135.4695931635718, 34.60262873686311],
                                [135.48058245187042, 34.59799415584017],
                                [135.4908715178401, 34.59556642364127],
                                [135.49261213430646, 34.600170525585256],
                                [135.4978481655421, 34.604328422630374],
                                [135.50015519766055, 34.60918849992227],
                                [135.49652025305903, 34.6283279986997],
                                [135.5042879399163, 34.645643739948525],
                                [135.46628052247934, 34.64467951122917],
                                [135.45911042808723, 34.64363359138417],
                                [135.45846888742864, 34.644525078401756],
                                [135.4550374464833, 34.646708021227425],
                                [135.45077947657427, 34.645331034302075],
                                [135.4509680261163, 34.64419220324308],
                                [135.45092173971648, 34.644188741448616],
                                [135.4512128040676, 34.64253179508279],
                                [135.44710088586282, 34.64128261248912],
                                [135.4394598444103, 34.64132405340797],
                                [135.4323551659894, 34.64420425077935],
                                [135.42432379038155, 34.6430182992716],
                                [135.41646125175373, 34.644835465657366]
                            ]
                        ]
                    },
                    'properties': {
                        'title': 'things that i (we) heard around OTO building',
                        'address': '私（わたしたち）が 音ビル周辺で聞いた言葉',
                        'date': 'Sun Jan 5 2020 - Sun May 22 2022',
                        'link': 'https://things-that-i-we-heard.web.app/otobuilding/'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [135.77312149868084, 35.003904158889554],
                                [135.77219513002285, 34.999123571236],
                                [135.77177305525015, 34.99491688229689],
                                [135.7656832310185, 34.99514253876916],
                                [135.7660204704793, 34.99571491462517],
                                [135.76097942875214, 34.99594638060009],
                                [135.76106216355305, 35.00382798093429],
                                [135.77312149868084, 35.003904158889554]
                            ]
                        ]
                    },
                    'properties': {
                        'title': 'things that i (we) heard around BnA Alter Museum',
                        'address': '私（わたしたち）が 京都・河原町周辺で聞いた言葉',
                        'date': 'Thu Jul 21 2022 - Mon Aug 15 2022',
                        'link': 'https://things-that-i-we-heard.web.app/bnaaltermuseum/'
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'heardFill',
        'type': 'fill',
        'source': 'heardPolygon',
        'layout': {},
        'paint': {
            'fill-color': '#CDCBCC',
            'fill-opacity': 0.75
        }
    });
});