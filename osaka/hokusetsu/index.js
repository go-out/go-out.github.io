'use strict'

const osakaHokusetsu = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'spot',
            'area': 'hokusetsu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.6563300094346, 34.8544115728934]
            },
            'properties': {
                'title': '鵜殿のヨシ原',
                'address': '「大阪みどりの百選」「関西自然に親しむ風景100選」「美しい日本の歩きたくなるみち500選」',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=hokusetsu&name=udono-yoshihara',
                'youtube': '0ncmnMdeRCw',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.54759195940795, 34.84746324592541]
            },
            'properties': {
                'title': '新屋坐天照御魂神社',
                'address': '神・自然・人の共生 心身再生の神をまつる',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=hokusetsu&name=niiyajinja',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'feature': [
                {
                    'month': 5,
                    'text': '円形花壇などで、豊中市の花「バラ」が春の見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '園内各所に植えられた、豊中市の木「キンモクセイ」やギンモクセイ、秋の「バラ」が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4842513604408, 34.7763142625666]
            },
            'properties': {
                'title': '服部緑地',
                'address': '緑豊かな森や庭、10以上の池、自然に満ちた大阪府下最大級の緑地公園',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=hokusetsu&name=hattori-ryokuchi',
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45350971571364, 34.77095600443577]
            },
            'properties': {
                'title': '千里川土手',
                'address': '飛行機撮影の聖地 伊丹空港へ着陸する飛行機が間近に見える魅力スポット',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=hokusetsu&name=itami-airport',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kita',
            'feature': [
                {
                    'month': 10,
                    'text': '例年10月上旬～11月上旬、アメリカフウ（紅葉葉楓）が紅葉する'
                },
                {
                    'month': 11,
                    'text': '例年10月上旬～11月上旬、アメリカフウ（紅葉葉楓）が紅葉する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4908943905528, 34.75389767240482]
            },
            'properties': {
                'title': 'リーニュ・ブランシュの庭',
                'address': '彫刻家マルタ・パンによる「都市と自然の美しい調和」をテーマとした３つの作品が展示されている、近現代彫刻作品の美術館「スキュルチュール江坂」をとりまく庭',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'feature': [
                {
                    'month': 6,
                    'text': '6月上旬、約60種6000株のハナショウブが見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.44057194230854, 34.81712639592502]
            },
            'properties': {
                'title': '水月公園',
                'address': 'ダイナミックな人工滝と四季折々の花々が彩る「水の公園」',
                'date': '',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50936893299647, 34.91759141859515]
            },
            'properties': {
                'title': '北大阪ネオポリス',
                'address': '別称「希望ケ丘」 郊外型ニュータウン',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'feature': [
                {
                    'month': 5,
                    'text': '例年5月~6月、社叢林のコジイ（ツブラジイ）の花が咲く'
                },
                {
                    'month': 6,
                    'text': '例年5月~6月、社叢林のコジイ（ツブラジイ）の花が咲く'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.65370134999105, 34.89226108992393]
            },
            'properties': {
                'title': '若山神社',
                'address': '自然環境保全地域となっている千年以上の森の中にある神社',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=hokusetsu&name=wakayamajinja',
                'zoom': 17
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaHokusetsu.features)
}, false)