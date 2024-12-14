'use strict'

const MinatoTaishoindex = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45463975222788, 34.67280033825497]
            },
            'properties': {
                'title': '弁天町',
                'address': '築港・海岸通を除く港区',
                // 'link': 'index/?id=osaka-city24&area=MinatoTaisho-bentencho',
                'tag': ['feature'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.44717233394294, 34.66048855778932]
            },
            'properties': {
                'title': '八幡屋公園',
                'address': 'アリーナ、プールなど、スポーツ施設を有する総合公園',
                'link': "spot/?id=osaka-city24&area=MinatoTaisho&name=yahatayapark",
                'tag': ['park'],
                'zoom': 15
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47247762415878, 34.66380078574967]
            },
            'properties': {
                'title': '泉光園',
                'address': '金光教泉尾会の敷地内にある広大な庭園',
                'link': null,
                'tag': ['park'],
                'zoom': 17
            }
        }
    ]
}