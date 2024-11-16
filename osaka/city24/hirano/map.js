'use strict'

const hiranomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.55495588160528, 34.628939577833876]
            },
            'properties': {
                'title': '杭全神社',
                'address': '元は熊野権現社 熊野三所権現 全国唯一の連歌所',
                'link': "spot/?id=osaka-city24&area=hirano&name=kumata",
                'tag': ['legacy'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5504967187009, 34.62725036562907]
            },
            'properties': {
                'title': '大念佛寺',
                'address': '融通念佛宗の総本山 本堂は大阪府下最大の木造建築物',
                'link': "spot/?id=osaka-city24&area=hirano&name=dainenbutsuji",
                'tag': ['legacy'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.55531265330484, 34.62338983628612]
            },
            'properties': {
                'title': '全興寺',
                'address': '生きながらにして地獄・極楽を体験できる寺',
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
                'coordinates': [135.55312135908514, 34.62479918763741]
            },
            'properties': {
                'title': '長寶寺',
                'address': '中世から現在に至るまで、広く信仰を集める閻魔信仰の拠点',
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
                'coordinates': [135.55934497529614, 34.62252251428066]
            },
            'properties': {
                'title': '平野公園',
                'address': '近代河内音頭発祥の地 「河内音頭宗家初音家礎之地」',
                'link': null,
                'tag': ['park'],
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
                            [135.55199448794923, 34.623917424423524],
                            [135.5561742110845, 34.62360342924349],
                            [135.55827482581645, 34.62345110723898]
                        ]
                    },
                    'properties': {
                        'title': 'サンアレイ平野',
                        'address': '平野本町通商店街・平野東商店会',
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