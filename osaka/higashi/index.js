'use strict'

const osakaHigashi = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5359834816478, 34.654466425764554]
            },
            'properties': {
                'title': '御勝山',
                'address': '御勝山（おかちやま）古墳の後円部（標高14mの墳丘）<br>古墳の中央を勝山通が貫き、前方部は崩され「御勝山南公園」として整備されている',
                'date': '',
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5998086141279, 34.69826713506951]
            },
            'properties': {
                'title': '鴻池新田会所跡',
                'address': '国史跡・重要文化財 令和5年3月31日をもって休館（工事終了後のリニューアルオープンは令和7年度中を予定）',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.58530223681055, 34.67196948657574]
            },
            'properties': {
                'title': '天神社（御厨神社）',
                'address': '',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.59245087918023, 34.657578873574785]
            },
            'properties': {
                'title': '八戸の里公園',
                'address': '',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.57941321445426, 34.64272596777309]
            },
            'properties': {
                'title': '金岡公園',
                'address': '',
                'date': '',
                'zoom': 16.5
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaHigashi.features)
}, false)
