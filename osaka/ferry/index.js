'use strict'

const osakaFerry = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.43109856854932, 34.658746822143925]
            },
            'properties': {
                'title': '天保山渡船場',
                'address': '安治川（港区築港3丁目 ⇄ 此花区桜島3丁目）を 15 ~ 30分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=tempozan',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'zoom': 16,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46246523088013, 34.656554003191715]
            },
            'properties': {
                'title': '甚兵衛渡船場',
                'address': '尻無川（大正区泉尾7丁目 ⇄ 港区福崎1丁目）を 随時 ~ 15分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=zonbee',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45854569618052, 34.646324348745]
            },
            'properties': {
                'title': '千歳渡船場',
                'address': '大正内港（大正区鶴町4丁目 ⇄ 同区北恩加島2丁目）を 10 ~ 20分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=chitose',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'zoom': 16,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47882918904605, 34.64972048487182]
            },
            'properties': {
                'title': '落合上渡船場',
                'address': '木津川（大正区千島1丁目 ⇄ 西成区北津守4丁目）を 10 ~ 15分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=ochiaikami',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47911523706694, 34.643336261453044]
            },
            'properties': {
                'title': '落合下渡船場',
                'address': '木津川（大正区平尾1丁目 ⇄ 西成区津守2丁目）を 10 ~ 15分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=ochiaishimo',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47569470365949, 34.631793416745694]
            },
            'properties': {
                'title': '千本松渡船場',
                'address': '木津川（大正区南恩加島1丁目 ⇄ 西成区南津守2丁目）を 10 ~ 15分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=senbonmatsu',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'youtube': 'SNw7eE2K0c0',
                'zoom': 16,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45798171771384, 34.632950453586275]
            },
            'properties': {
                'title': '船町渡船場',
                'address': '木津川運河（大正区鶴町1丁目 ⇄ 同区船町1丁目）を 10 ~ 20分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=funamachi',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'youtube': 'Z8Von0j_br8',
                'zoom': 17,
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'area': 'bayarea',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46177705603935, 34.62555875027091]
            },
            'properties': {
                'title': '木津川渡船場',
                'address': '木津川（大正区船町1丁目 ⇄ 住之江区平林北1丁目）を 10 ~ 45分毎 運航',
                'date': 'More Info',
                'href': 'osaka/ferry/?name=kizugawa',
                'iconSize': ['osaka/ferry/icon.png', '2.5rem', '2.5rem'],
                'youtube': 'JDQjc70a1T8',
                'zoom': 16,
            }
        }
    ]
}

window.addEventListener("load", () => {
    addMarker(osakaFerry.features)
}, false)