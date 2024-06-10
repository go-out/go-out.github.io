'use strict'

const osakaKita = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'spot',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49882344601633, 34.70251955199873]
            },
            'properties': {
                'title': '阪急梅田コンコース',
                'address': '阪急うめだ本店の阪急電車側、人々が行き交うコンコースを眺められる場所。',
                'date': 'More Info',
                'href': 'relax/?id=spot&area=osaka&name=hankyu-umeda',
                'youtube': 'qzIy_qtpNh8',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'feature': [
                {
                    'month': 6,
                    'text': '6月上旬、流れるせせらぎにホタルが舞う'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49015201516642, 34.70454139923444]
            },
            'properties': {
                'title': '中自然の森',
                'address': '新梅田シティの敷地内にある庭園施設 都会に生まれた鎮守の森',
                'date': 'More Info',
                'href': 'park/?area=osaka&name=skybldg',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52321201539763, 34.71184263555778]
            },
            'properties': {
                'title': '櫻宮御旅所',
                'address': '境内にある「渡辺綱・駒つなぎの樟」と呼ばれるクスノキの大樹は、大阪府史蹟名勝天然記念物第一号',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52089606493735, 34.71124351717242]
            },
            'properties': {
                'title': '飛翔橋',
                'address': '他に例のない二重のアーチ橋（ニールセン・ローゼ桁）の歩行者専用橋',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5243151742358, 34.6947685223501]
            },
            'properties': {
                'title': '藤田邸跡公園（旧藤田邸庭園）',
                'address': '大阪経済の基礎を築いた関西実業界の中心人物 藤田傳三郎（藤田財閥）の大邸宅の跡に開かれた都市公園',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5243151742358, 34.6947685223501]
            },
            'properties': {
                'title': '中之島ガーデンブリッジ',
                'address': '堂島川（大江橋と渡辺橋の間）に架かる歩行者専用の橋<br>橋の中央には憩い空間・松岡阜の彫刻「そよかぜ」がある',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4449331455768, 34.70832661888589]
            },
            'properties': {
                'title': '大阪マスジド',
                'address': 'パキスタン・インドネシア・エジプト・スーダンなど、世界各国にルーツを持つイスラム教徒が集う西日本最大級のモスク',
                'date': '',
                'zoom': 18
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaKita.features)
}, false)