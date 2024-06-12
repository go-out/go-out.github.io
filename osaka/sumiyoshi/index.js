'use strict'

const osakaSumiyoshi = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'legacy',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49237250787706, 34.6129733697545]
            },
            'properties': {
                'title': '住吉大社',
                'address': '全国に2300社ある住吉神社の総本社 年間百三十回をもこえる神事が執り行われる',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=sumiyoshitaisha',
                'youtube': 'wbOguTvuV0Q',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48969770207242, 34.61317201110916]
            },
            'properties': {
                'title': '住吉公園 花と水の広場',
                'address': 'ウォーターカーテン（噴水）は、毎日10:30・13:00・15:30の3回20分',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=sumiyoshi',
                'youtube': 'gfwP_viCeZg',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4883216199499, 34.611700718642865]
            },
            'properties': {
                'title': '住吉公園 心字池',
                'address': 'かつて浜であった公園開設当初の佇まいを今に伝える場所',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=sumiyoshi',
                'youtube': 'mkioDOspLbs',
                'zoom': 17.25
            }
        },
        {
            'type': 'Feature',
            'tags': 'legacy',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49682232943638, 34.621565133427865]
            },
            'properties': {
                'title': '帝塚山',
                'address': '帝塚山古墳の墳丘（標高は19.88m） 関西を代表する高級住宅街の一つ',
                'date': 'more info',
                'href': 'vr/?id=osaka&area=sumiyoshi&name=tezukayama',
                'iconSize': ['date/img/mobile.png', '4rem', '4rem'],
                'youtube': 'KuYJ3IW7z4k',
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50183216544207, 34.61987240976515]
            },
            'properties': {
                'title': '万代池公園',
                'address': '万代池を取り囲むように、遊歩道・花壇・遊具などが整備された気持ちの良い公園',
                'date': '',
                'youtube': '-7DEl_jxuW8',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4751648749464, 34.60246659776148]
            },
            'properties': {
                'title': '加賀屋新田会所跡・加賀屋緑地',
                'address': '開館時間 10:00 ~ 16:30（最終入館時間 16:00） 休園日 毎週月曜日',
                'date': 'More Info',
                'href': 'date/kagaya-shinden-kaisho/',
                'youtube': 'zAZUC1x1-H0',
                'zoom': 18
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50961775825405, 34.59109016669457]
            },
            'properties': {
                'title': '浅香中央公園',
                'address': '広々とした芝生広場「獅子が空を翔ぶ日に」',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=asakachuo-park',
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.55051227356563, 34.627310959994205]
            },
            'properties': {
                'title': '大念佛寺',
                'address': '「万部おねり（阿弥陀経万部読誦聖聚来迎会）」で知られる寺院（融通念仏宗の総本山） 本堂は大阪府下最大の木造建築物',
                'date': '',
                'zoom': 16
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaSumiyoshi.features)
}, false)