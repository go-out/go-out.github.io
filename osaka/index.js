'use strict'

const osakaIndex = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4924739000841, 34.69866331140863]
            },
            'properties': {
                'title': 'OSAKA GARDEN CITY',
                'address': '西梅田地区の大半を占める、オフィスビル・商業施設・ホテル・専門学校などで構成される超高層ビル群',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=gardencity',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49007322334347, 34.70526093056243]
            },
            'properties': {
                'title': '新梅田シティ',
                'address': '梅田スカイビル・ウェスティンホテルからなる複合都市<br>「自然との共存」をテーマに開発された、 緑にあふれたやすらぎの場所',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=shinumeda',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 17
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'kita',
            'feature': [
                {
                    'month': 4,
                    'text': '4月上旬、都島区の花「サクラ」が大川沿全域で見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5213657152636, 34.7023205956932]
            },
            'properties': {
                'title': '毛馬桜之宮公園',
                'address': '大川の流れに沿ったプロムナード・リバーサイドパーク',
                'date': 'More Info',
                'href': 'date/sakuranomiya/',
                'iconSize': ['osaka/kita/icon/miyakojima.gif', '3.5rem', '3.5rem'],
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'kita',
            'feature': [
                {
                    'month': 5,
                    'text': '5月中旬~下旬、北区の花が咲き誇る「バラ園」が春の見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '10月中旬~下旬、北区の花が咲き誇る「バラ園」が秋の見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50788864110478, 34.692395405365495]
            },
            'properties': {
                'title': '中之島',
                'address': '堂島川と土佐掘川にはさまれた緑あふれる都心のオアシス<br>芝生広場の先にある剣先噴水は、10時～20時30分までの毎時0分・30分に約5分間放水',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=nakanoshima',
                'iconSize': ['osaka/kita/icon/kita.png', '3.5rem', '3.5rem'],
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49903070142145, 34.72263836673182]
            },
            'properties': {
                'title': '淀川区',
                'address': '大阪の玄関口「新大阪駅」 新淀川大橋 十三大橋 新十三大橋',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=yodogawa',
                'iconSize': ['osaka/kita/icon/yodogawa.png', '3rem', '3rem'],
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'feature': [
                {
                    'month': 3,
                    'text': '3月中旬から、東淀川区の花「こぶし」が桜より少し早い早春に咲き始める'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52918504347852, 34.74086344550958]
            },
            'properties': {
                'title': '東淀川区',
                'address': '大阪市の北東部 最北端 淀川と神崎川に挟まれた閑静な住宅街',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=higashi-yodogawa',
                'iconSize': ['osaka/kita/icon/hyodo.png', '3rem', '3rem'],
                'zoom': 13.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'feature': [
                {
                    'month': 1,
                    'text': '区内の公園や「大野川緑陰道路」などで、西淀川区の花「サザンカ」が咲き誇る'
                },
                {
                    'month': 12,
                    'text': '区内の公園や「大野川緑陰道路」などで、西淀川区の花「サザンカ」が咲き誇る'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4517040627458, 34.70558070017778]
            },
            'properties': {
                'title': '西淀川区',
                'address': '淀川と神崎川に挟まれた中州の地域 西端は大阪湾に面する',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=nishi-yodogawa',
                'iconSize': ['osaka/kita/icon/nyodo.gif', '3.5rem', '3.5rem'],
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'kita',
            'feature': [
                {
                    'month': 4,
                    'text': '4月上旬~中旬、春日神社・下福島公園・阪神野田駅前広場などで「ふじ」の花が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47983788186522, 34.68980343022029]
            },
            'properties': {
                'title': '福島区 野田・玉川',
                'address': '日本の三大名藤「野田藤」発祥の地',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=kita&name=noda',
                'iconSize': ['osaka/kita/icon/fukushima.gif', '3.5rem', '3.5rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'chuo',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52296085487433, 34.67992404080561]
            },
            'properties': {
                'title': '難波宮',
                'address': '日本という国号・元号の使用が始まったとされる、大阪が日本の都であったことを示す宮殿の跡',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=chuo&name=naniwanomiya',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'legacy',
            'area': 'chuo',
            'feature': [
                {
                    'month': 2,
                    'text': '2月中旬（献梅祭の時期）から、中央区の花「梅」が咲き始める'
                },
                {
                    'month': 4,
                    'text': '桜が見頃を迎える4月上旬、境内および高津公園にて夜桜を公開'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5138989318507, 34.66881262520526]
            },
            'properties': {
                'title': '高津宮',
                'address': '大阪市歌の一番で歌われる、由緒あるお宮<br>「高津の宮の昔より、よよの栄を重ねきて、民のかまどに立つ煙」',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=chuo&name=kouzu',
                'youtube': 'oYLY36voXiw',
                'iconSize': ['osaka/chuo/icon/chuo.png', '3.5rem', '3.5rem'],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'chuo',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49821528169355, 34.69200708466718]
            },
            'properties': {
                'title': '住友村',
                'address': '旧住友財閥（住友グループ）系のオフィスビルなど、レトロビルが立ち並ぶ地域',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=chuo&name=retro-building',
                'zoom': 18
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'chuo',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5308529947035, 34.69272530891007]
            },
            'properties': {
                'title': 'OBP（大阪ビジネスパーク）',
                'address': '超高層ビル群と都市公園で構成された再開発地域',
                'date': '',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'chuo',
            'feature': [
                {
                    'month': 5,
                    'text': '5月上旬~下旬、「バラ園」が春の見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '10月上旬~下旬、「バラ園」が秋の見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49409716476222, 34.68576978269506]
            },
            'properties': {
                'title': '靱公園',
                'address': '西区を象徴する「バラ園」がある、ビジネス街の憩いの場・スポーツの場',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=chuo&name=utsubo-park',
                'iconSize': ['osaka/chuo/icon/nishi.gif', '2.75rem', '2.75rem'],
                'zoom': 15,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'minami',
            'feature': [
                {
                    'month': 3,
                    'text': '3月中旬、上汐公園・大阪市立天王寺図書館周辺などで天王寺区の花「モモ」が咲き始め'
                },
                {
                    'month': 4,
                    'text': '4月上旬、上汐公園・大阪市立天王寺図書館周辺などで天王寺区の花「モモ」が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51845515966454, 34.66561724407276]
            },
            'properties': {
                'title': '上本町（谷九・上六）',
                'address': '現在の大阪の基礎となる上町台地の頂 風情や緑が数多く残る上町の中心',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=minami&name=uehonmachi',
                'iconSize': ['osaka/minami/icon/tennouji.png', '2.75rem', '2.75rem'],
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'minami',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49039156126494, 34.66484424824761]
            },
            'properties': {
                'title': '浪速区',
                'address': '道頓堀より南・木津川より東・南海線より西・環状線より北',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=minami&name=naniwa',
                'iconSize': ['osaka/minami/icon/naniwa.gif', '3rem', '3rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'minami',
            'feature': [
                {
                    'month': 3,
                    'text': '3月中旬、阿倍野区の花「モモ」が桃ヶ池公園などで咲き始める'
                },
                {
                    'month': 4,
                    'text': '4月上旬、桃ヶ池公園の「モモ」「サクラ」が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52145867952675, 34.630879917621115]
            },
            'properties': {
                'title': '阿倍野区',
                'address': '阪堺上町線より東・南海通より北・阪和線より西',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=minami&name=abeno',
                'iconSize': ['osaka/minami/icon/abeno.gif', '3.5rem', '3.5rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'minami',
            'feature': [
                {
                    'month': 9,
                    'text': '9月~10月中旬頃、西成区の花「ハギ」が見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '9月~10月中旬頃、西成区の花「ハギ」が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50086761936493, 34.64472975956409]
            },
            'properties': {
                'title': '萩之茶屋（釜ヶ崎・あいりん地区）',
                'address': '日本最大の日雇い労働者の街（ドヤ街）',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=minami&name=haginochaya',
                'iconSize': ['osaka/minami/icon/nnari.png', '3.5rem', '3.5rem'],
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'minami',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49667502941267, 34.63010957809519]
            },
            'properties': {
                'title': '天下茶屋',
                'address': '',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=minami&name=tengachaya',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'higashi',
            'feature': [
                {
                    'month': 5,
                    'text': '5月下旬から、旭区の花「ハナショウブ」の名所「城北菖蒲園」が開園する'
                },
                {
                    'month': 6,
                    'text': '6月中旬まで、旭区の花「ハナショウブ」の名所「城北菖蒲園」が開園する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53800408403114, 34.728795961757776]
            },
            'properties': {
                'title': '城北公園',
                'address': '旧淀川の河川敷を利用して造られた、大きな池と菖蒲園のある公園',
                'date': '',
                'iconSize': ['osaka/higashi/icon/asahi.png', '3.5rem', '3.5rem'],
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'higashi',
            'feature': [
                {
                    'month': 1,
                    'text': '鶴見区の花のうち、冬の「ツバキ」が園内各所で咲き始める'
                },
                {
                    'month': 4,
                    'text': '鶴見区の花のうち「チューリップ」が、大花壇など緑地の風車のもと見頃を迎える'
                },
                {
                    'month': 5,
                    'text': '鶴見区の花のうち「ハナミズキ」が、園内各所で花を咲かせる'
                },
                {
                    'month': 8,
                    'text': '鶴見区の花のうち、夏の炎天下でも咲き続ける「ニチニチソウ」が園内各所に咲き誇る'
                },
                {
                    'month': 10,
                    'text': '鶴見区の花のうち、秋の紅葉と赤い実の美しい「ハナミズキ」が、中央噴水の南側・緑地西橋の下の道路沿いなどで紅葉を始める'
                },
                {
                    'month': 11,
                    'text': '11月下旬から12月上旬、「緑地西橋」から西口まで約480mにわたるメタセコイアの並木道（136本）が美しく紅葉する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.57502064404602, 34.711793763367595]
            },
            'properties': {
                'title': '鶴見緑地公園',
                'address': '国際花と緑の博覧会（花の万博）の会場跡地、広大な都市公園',
                'date': '',
                'iconSize': ['osaka/higashi/icon/tsurumi.png', '3rem', '3rem'],
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'higashi',
            'feature': [
                {
                    'month': 3,
                    'text': '3月下旬、中浜公園などで城東区の花「モクレン」が咲き始める'
                },
                {
                    'month': 7,
                    'text': '初夏、大きな藤棚が美しい花を咲かせる'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5421042130831, 34.68696836838546]
            },
            'properties': {
                'title': '城東区',
                'address': '',
                'date': '',
                'iconSize': ['osaka/higashi/icon/joto.png', '4.75rem', '4.75rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'higashi',
            'feature': [
                {
                    'month': 4,
                    'text': '東成区の花「バラ」「パンジー」が、「東成区役所」などで見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.54129687845824, 34.66991179182996]
            },
            'properties': {
                'title': '東成区',
                'address': '',
                'date': '',
                'iconSize': ['osaka/higashi/icon/hnari.gif', '4.25rem', '4.25rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'higashi',
            'feature': [
                {
                    'month': 6,
                    'text': '生野区の花「あじさい」が、「生野東公園」などで見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53926217864876, 34.661002343046945]
            },
            'properties': {
                'title': '大阪コリアタウン',
                'address': '在日韓国・朝鮮人はじめ地元の人々の生活スペースでありながら、観光客が多く訪れる大規模なコリアタウン',
                'date': '',
                'iconSize': ['osaka/higashi/icon/ikuno.gif', '4rem', '4rem'],
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'sumiyoshi',
            'feature': [
                {
                    'month': 12,
                    'text': '住之江区の花「さざんか」、椿・ナンテン（南天）・蝋梅（ロウバイ）など、冬の植物が見頃'
                },
                {
                    'month': 1,
                    'text': '住之江区の花「さざんか」、椿・ナンテン（南天）・蝋梅（ロウバイ）など、冬の植物が見頃'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47561189325947, 34.611269066903496]
            },
            'properties': {
                'title': '住之江公園',
                'address': '花と緑とふれあう、スポーツを楽しめる公園',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=suminoe',
                'iconSize': ['osaka/sumiyoshi/icon/suminoe.png', '3.5rem', '3.5rem'],
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'sumiyoshi',
            'feature': [
                {
                    'month': 5,
                    'text': '5月上旬~中旬、大歳神社（住吉大社境外末社）・細江川のせせらぎ などで、住吉区の花「カキツバタ」が咲く'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5011012270029, 34.60917300907834]
            },
            'properties': {
                'title': '住吉区南部',
                'address': '墨江・清水丘・遠里小野・殿辻・沢之町・南住吉・山之内',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=sumiyoshi&name=nanbu',
                'iconSize': ['osaka/sumiyoshi/icon/sumiyoshi.png', '3.75rem', '3.75rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52013342164904, 34.612452544109814]
            },
            'properties': {
                'title': '長居公園',
                'address': '',
                'date': '',
                'iconSize': ['osaka/sumiyoshi/icon/hsumiyoshi.png', '3.25rem', '3.25rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'sumiyoshi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5770684709109, 34.63149777736382]
            },
            'properties': {
                'title': '久宝寺緑地',
                'address': '大阪4大緑地のひとつ 甲子園球場の約10倍もの広さを誇る大阪府営の緑地公園',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=sumiyoshi&name=kyuhouji',
                'href': 'park/?area=osaka&name=kyuhouji',
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'spot',
            'area': 'sumiyoshi',
            'feature': [
                {
                    'month': 8,
                    'text': '8月上旬~下旬、平野区の花「わたの花」が隣接する「区民わた畑」で見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.558498349879, 34.601169311617646]
            },
            'properties': {
                'title': '瓜破霊園',
                'address': '四季折々の植樹がなされた広々とした大阪市設霊園（8万平方メートル）',
                'date': '',
                'iconSize': ['osaka/higashi/icon/hirano.png', '3.5rem', '3.5rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'feature': [
                {
                    'month': 7,
                    'text': '毎年7月 南港花のまち公園 で 夏祭り が開催される'
                },
                {
                    'month': 8,
                    'text': '毎年8月 南港太陽のまち公園 で 納涼大会 が開催される'
                },
                {
                    'month': 9,
                    'text': '毎年9月または10月 南港緑公園 で 緑フェスタ が開催される'
                },
                {
                    'month': 11,
                    'text': '毎年11月 南港海のまち公園 で 秋まつり が開催される'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.42281018597942, 34.63336377556088]
            },
            'properties': {
                'title': '南港（咲洲）',
                'address': '大阪市ベイエリアの南側一体「南港（なんこう）」・人工島「咲洲（さきしま）」',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=bayarea&name=port-town',
                'youtube': '8az_VW2ssbs',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'feature': [
                {
                    'month': 4,
                    'text': '4月上旬、舞洲緑地などで此花区の花「サクラ」が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.39572648489252, 34.664439624148315]
            },
            'properties': {
                'title': '北港（舞洲・桜島）',
                'address': '大阪市の最西端に浮かぶ人工島「舞洲（まいしま）」と埋立地「桜島」',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=bayarea&name=hokko',
                'youtube': 'RGVn0OmDrJA',
                'iconSize': ['osaka/bayarea/icon/konohana.png', '4rem', '4rem'],
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'area': 'bayarea',
            'feature': [
                {
                    'month': 4,
                    'text': '4月下旬~5月上旬、公園内の築山「昭和山」一帯で大正区の花「ツツジ」が見頃を迎える'
                },
                {
                    'month': 5,
                    'text': '4月下旬~5月上旬、公園内の築山「昭和山」一帯で大正区の花「ツツジ」が見頃を迎える'
                },
                {
                    'month': 9,
                    'text': '9月 第2日曜日 千島公園グランドにて「エイサー祭り」が開催される'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4740969357722, 34.64892520164277]
            },
            'properties': {
                'title': '千島公園',
                'address': '大正区役所のすぐ隣に整備されている大きな公園 港の見える丘',
                'date': 'More Info',
                'href': 'spot/?id=osaka&area=bayarea&name=chishima-park',
                'iconSize': ['osaka/bayarea/icon/taisho.gif', '3.5rem', '3.5rem'],
                'zoom': 16
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'feature': [
                {
                    'month': 8,
                    'text': '8月第4日曜日 平尾公園（平尾商店街近く）にて「River大正エイサーまつり」が開催される'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47267405968358, 34.639780543989126]
            },
            'properties': {
                'title': '大正区 平尾',
                'address': '大阪市のリトル沖縄 大正区の中でも沖縄の雰囲気が特に色濃い地域',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=bayarea&name=hirao',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4569471986814, 34.66444189673407]
            },
            'properties': {
                'title': '弁天町エリア',
                'address': '築港・海岸通を除く港区',
                'date': '',
                'iconSize': ['osaka/bayarea/icon/minato.gif', '5.5rem', '5.5rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'higashi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.6290973, 34.66921940429396]
            },
            'properties': {
                'title': '東大阪・花園',
                'address': 'ラグビーのまち 技術力の高い中小企業が多数立地するものづくりのまち',
                'date': '',
                'iconSize': ['osaka/kawachi/icon/higashiosaka.png', '4rem', '4rem'],
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kawachi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.70294033098938, 34.76546422022179]
            },
            'properties': {
                'title': 'くろんどの森',
                'address': '京阪私市（きさいち）駅から奈良県の「くろんど池」に至るハイキングコースの大阪側',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kawachi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.68531866155413, 34.75288722426604]
            },
            'properties': {
                'title': 'ほしだの森',
                'address': '全長280m・高さ50mの巨大吊橋「星のブランコ」、天孫降臨伝説のある「哮が峰（たけるがみね）」をはじめ、多くの巨石が散在するアクティビティと冒険の森',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kawachi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.66608790057353, 34.72756698791349]
            },
            'properties': {
                'title': 'むろいけの森',
                'address': '笑顔が集まる緑育空間。家族で学びにふれる森。',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'kawachi',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.6540752780118, 34.655827759177306]
            },
            'properties': {
                'title': 'なるかわの森',
                'address': 'なるかわ、くさか、ぬかた、みずのみの4つのエリアからなる 広大な場所',
                'date': '',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'hokusetsu',
            'feature': [
                {
                    'month': 5,
                    'text': '豊中市の花「バラ」が春の見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '豊中市の木「キンモクセイ」やギンモクセイ、豊中市の花「バラ」が秋の見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4772407584678, 34.76998564565496]
            },
            'properties': {
                'title': '豊中市 🌹 中部・東部・西部',
                'address': '中部は市街地（曽根・桜塚・長興寺等は高級住宅街）・東部は服部緑地',
                'date': 'More Info',
                'href': 'vr/?id=osaka&area=hokusetsu&name=toyonaka-chubu',
                'iconSize': ['profile/img/mobile.png', '4rem', '4rem'],
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'area': 'hokusetsu',
            'feature': [
                {
                    'month': 5,
                    'text': '5月下旬~6月上旬、千里東町公園内の竹林「千里の竹林」の葉が新旧入れ替わる'
                },
                {
                    'month': 6,
                    'text': '5月下旬~6月上旬、千里東町公園内の竹林「千里の竹林」の葉が新旧入れ替わる'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49504601803227, 34.81006074294664]
            },
            'properties': {
                'title': '千里ニュータウン',
                'address': '1962年にまちびらきを開始した日本初の大規模ニュータウン',
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
                    'text': '5月上旬、五月山周辺・城跡公園などで池田市の花「さつきつつじ」が見頃を迎える'
                },
                {
                    'month': 9,
                    'text': '9月頃、五月山周辺・市民の森・城跡公園が紅葉する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.42898848190222, 34.83124468416658]
            },
            'properties': {
                'title': '五月山公園',
                'address': 'ウォンバットやワラビーがいる動物園を併設する総合公園 近くには五月山緑地都市緑化植物園も',
                'date': '',
                'zoom': 15.5
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaIndex.features)
}, false)

// ?id=osaka&area=エリア
if (location.search) {
    const queryString = location.search;
    const params = new URLSearchParams(queryString)

    if (params.get("id") === 'osaka') {
        if (params.get("area")) {
            if (params.get("area") === 'bayarea') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/bayarea", "index"],
                    ["osaka/ferry", "index"],
                    ["osaka", "line"]
                ]

                center = [135.42872404242706, 34.65462309365647];
                bounds = [
                    [135.3437243596614, 34.60829846093506], // 南西座標
                    [135.48218612903673, 34.68547442174669] // 北東座標
                ]
                zoom = 12.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'chuo') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/chuo", "index"],
                    ["osaka", "line"]
                ]

                center = [135.50987338526778, 34.681187142064886];
                bounds = [
                    [135.47958780746262, 34.667871638990064], // 南西座標
                    [135.535959773211, 34.69576884875232] // 北東座標
                ]
                zoom = 14.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'higashi') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/higashi", "index"],
                    ["osaka", "line"]
                ]

                center = [135.5598338602805, 34.68751557507677];
                bounds = [
                    [135.52373491013066, 34.63311462122401], // 南西座標
                    [135.60260767024874, 34.742944833281726] // 北東座標
                ]
                zoom = 14;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'hokusetsu') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/hokusetsu", "index"],
                    ["osaka", "line"]
                ]

                center = [135.55905251463872, 34.830078046438615];
                bounds = [
                    [135.35370889521238, 34.736950169429704], // 南西座標
                    [135.73123768093225, 35.02741818806101] // 北東座標
                ]
                zoom = 12.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'kawachi') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/kawachi", "index"],
                    ["osaka", "line"]
                ]

                center = [135.65072330853974, 34.66994460100712];
                bounds = [
                    [135.58371367188641, 34.571122022], // 南西座標
                    [135.74940772762903, 34.89676688490299] // 北東座標
                ]
                zoom = 12.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'kita') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/kita", "index"],
                    ["osaka", "line"]
                ]

                center = [135.49768172955453, 34.703197524345484];
                bounds = [
                    [135.40982161628477, 34.670631768604935], // 南西座標
                    [135.56077328151952, 34.7573560429971] // 北東座標
                ]
                zoom = 13.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'minami') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/minami", "index"],
                    ["osaka/ferry", "index"],
                    ["osaka", "line"]
                ]

                center = [135.5062480893037, 34.652403484554824];
                bounds = [
                    [135.47596673180095, 34.620797469125364], // 南西座標
                    [135.53350023221066, 34.67560335965379] // 北東座標
                ]
                zoom = 14.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'senboku') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/senboku", "index"],
                    ["osaka/ferry", "index"],
                    ["osaka", "line"]
                ]

                center = [135.50012524849802, 34.5239972993108];
                bounds = [
                    [135.38526278033711, 34.40613068725279], // 南西座標
                    [135.6752160271494, 34.60276528719615] // 北東座標
                ]
                zoom = 12.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'senshu') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/senshu", "index"],
                    ["osaka", "line"]
                ]

                center = [135.31714877542356, 34.41112732960826];
                bounds = [
                    [135.0948588569328, 34.27236024823], // 南西座標
                    [135.67799380900885, 34.52583422863785] // 北東座標
                ]
                zoom = 11.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            } else if (params.get("area") === 'sumiyoshi') {
                jsArr = [
                    ["osaka", "cycling"],
                    ["osaka", "268"],
                    ["osaka/sumiyoshi", "index"],
                    ["osaka/ferry", "index"],
                    ["osaka", "line"]
                ]

                center = [135.52014912493667, 34.61246680749784];
                bounds = [
                    [135.4632947758127, 34.58751531219775], // 南西座標
                    [135.58565488963143, 34.645628700753576] // 北東座標
                ]
                zoom = 13.5;
                window.addEventListener("DOMContentLoaded", () => {
                    //
                });
            }
        } else if (!params.get("area")) {
            jsArr = [
                ["osaka", "cycling"],
                ["osaka", "268"],
                ["osaka/ferry", "index"],
                ["osaka/bayarea", "index"],
                ["osaka/chuo", "index"],
                ["osaka/higashi", "index"],
                ["osaka/hokusetsu", "index"],
                ["osaka/kawachi", "index"],
                ["osaka/kita", "index"],
                ["osaka/minami", "index"],
                ["osaka/senboku", "index"],
                ["osaka/senshu", "index"],
                ["osaka/sumiyoshi", "index"]
            ]

            center = [135.5020763952882, 34.69376772507822];
            bounds = [
                [135.0948588569328, 34.27236024823], // 南西座標
                [135.73123768093225, 35.02741818806101] // 北東座標
            ]
            zoom = 12.3;
            window.addEventListener("DOMContentLoaded", () => {
                //
            });
        }
    }
}

window.addEventListener("load", () => {
    if (location.search) {
        const queryString = location.search;
        const params = new URLSearchParams(queryString)

        if (params.get("area")) {
            const allMarker = document.querySelectorAll('.hello, .yu, .onsen')
            allMarker.forEach(areaThis => {
                if (areaThis.dataset.area === params.get("area")) {
                    areaThis.hidden = false;
                } else {
                    areaThis.hidden = true;
                    areaThis.remove()
                }
            })
        }
    }
}, false)