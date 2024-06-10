'use strict'

const osakaBayarea = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41478295447018, 34.64411832595768]
            },
            'properties': {
                'title': 'シーサイドコスモ（コスモスクエア海浜緑地）',
                'address': 'コスモスクエア駅のすぐ北側にある全長1.4kmにも及ぶ海辺の遊歩道',
                'date': '',
                'youtube': 'EoFg1eMWADg',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'relax',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41497842130116, 34.63819701597478]
            },
            'properties': {
                'title': '大阪府咲洲庁舎（さきしまコスモタワー）',
                'address': '1階広場「フェスパ」 何をする訳でもなく、ただぼーっと過ごす',
                'date': '',
                'youtube': '9E8UZio4SJM',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'relax',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41350734785573, 34.63624539461653]
            },
            'properties': {
                'title': 'ATC（アジア太平洋トレードセンター）',
                'address': '大阪南港の大型複合施設 海辺のテラスから大阪湾を一望できる',
                'date': '',
                'youtube': 'O84LelQJNbA',
                'zoom': 17
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4009426793867, 34.634856973620536]
            },
            'properties': {
                'title': '大阪南港野鳥園',
                'address': '人工干潟と緑地で環境を構成整備した野鳥のためのサンクチュアリー',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'relax',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4016286962231, 34.61486617414742]
            },
            'properties': {
                'title': '南港魚つり園護岸',
                'address': '南港南の西の果て 大きな空と海を一望できる気持ちのいい場所',
                'date': '',
                'youtube': '9DRiQ5CVcjE',
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4295128158298, 34.640197836668946]
            },
            'properties': {
                'title': '咲洲コンテナターミナル',
                'address': '咲洲の東側一帯は、コンテナ埠頭と呼ばれるエリアの一部らしい',
                'date': '',
                'youtube': 'rlfyH_v-fTk',
                'iconSize': ['date/img/mobile.png', '4rem', '4rem'],
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.432590487285, 34.65732762031574]
            },
            'properties': {
                'title': '天保山',
                'address': '日本一低い山として知られる築山（標高4.53m）<br>周辺は、海遊館・大観覧車・遊覧船などがあるベイエリアを代表する観光スポット',
                'date': '',
                'iconSize': ['date/img/mobile.png', '4rem', '4rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'relax',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.40659262899638, 34.66557295811907]
            },
            'properties': {
                'title': '大阪広域環境施設組合 舞洲工場',
                'address': '建物内の見学は事前予約制<br>1階エントランスホールは月曜日から金曜日（年末年始、祝日は除く）9時から17時のみ一般開放',
                'date': '',
                'youtube': 'mJw6qQt_T9o',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4724489929233, 34.66372194488258]
            },
            'properties': {
                'title': '泉光園',
                'address': '金光教泉尾会の敷地内にある、20,000㎡(6,000坪)という広大かつ手入れのよく行き届いた庭園',
                'date': '',
                'zoom': 17
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaBayarea.features)
}, false)
