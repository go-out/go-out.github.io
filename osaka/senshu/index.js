'use strict'

const osakaSenshu = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.39438143215764, 34.469778995434595]
            },
            'properties': {
                'title': '岸和田市立まなび中央公園',
                'address': '',
                'date': '',
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.34349543057837, 34.37376766776334]
            },
            'properties': {
                'title': '日根神社',
                'address': '「ゆ祭」の奉納踊り、「まくら祭」で渡御の際に唄われる「五社音頭」、独自の唄が歌い継がれる',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.38561261786114, 34.398960121470864]
            },
            'properties': {
                'title': '水間寺',
                'address': '総檜作りの三重の塔をはじめ、往時の栄華が薫る美しい水間寺',
                'date': '',
                'zoom': 17
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.43400569961165, 34.34817995173066]
            },
            'properties': {
                'title': '和泉葛城山',
                'address': '自然の息吹を体感できる原生林（国の天然記念物）',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41090631088974, 34.41595008535816]
            },
            'properties': {
                'title': '意賀美神社',
                'address': '',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.37815470783357, 34.341630929483834]
            },
            'properties': {
                'title': '犬鳴山',
                'address': '葛城修験の根本道場、七宝瀧寺から 経塚や行場のある頂へ',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.15177573557727, 34.31928265981883]
            },
            'properties': {
                'title': '国玉神社',
                'address': '',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.1415887387415, 34.31856339099838]
            },
            'properties': {
                'title': '深日洲本ライナー深日港のりば',
                'address': '',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'senshu',
            'feature': [
                {
                    'month': 10,
                    'text': '「キトラ」と呼ばれる花ススキの白い穂（花の集まり）が、見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.55114031534507, 34.3734676593833]
            },
            'properties': {
                'title': '岩湧山',
                'address': '大阪平野・大阪湾を臨むことができる山頂のススキの大草原は、大阪屈指の名スポット',
                'date': '',
                'zoom': 14.5
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaSenshu.features)
}, false)