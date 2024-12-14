'use strict'

const hyodomap = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52928835653, 34.74094558513961]
            },
            'properties': {
                'title': '東淀川区役所',
                'address': '区役所前の通りは、東淀川区の花「辛夷」の名所',
                'link': null,
                'google': ['AF1QipP0Pp3lxtTzGSJON5g0KEEXjX-I5FfdzjN-eLam', 3],
                'tag': ['park'],
                'zoom': 17
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5339546935943, 34.75801410895569]
            },
            'properties': {
                'title': '阪急相川駅東西通り',
                'address': '__',
                'link': null,
                'tag': ['spot'],
                'zoom': 17
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53853829191456, 34.74926248385614]
            },
            'properties': {
                'title': '瑞光寺公園',
                'address': '公園の南側を走る東海道新幹線が見える公園',
                'link': null,
                'tag': ['park'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5404746741031, 34.75454434375871]
            },
            'properties': {
                'title': '松山神社',
                'address': '梅の名所 2月末には、毎年梅花祭が開催',
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
                'coordinates': [135.52591083050748, 34.738947590411826]
            },
            'properties': {
                'title': '菅中児童遊園',
                'address': '夏期のみ無料で開放される児童用プールがある公園',
                'link': null,
                'google': ['AF1QipPsnADdSpMXtW3bSAYgbb1evYROf3MSCSggbBC8'],
                'tag': ['park'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51812456017495,34.74522685345936]
            },
            'properties': {
                'title': '新庄温泉',
                'address': '営業時間15:00 ~ 23:30 | 定休日 毎週木曜日',
                'link': null,
                'tag': ['park'],
                'zoom': 18.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52141728931787, 34.73461313237344]
            },
            'properties': {
                'title': 'エバーグリーン淀川',
                'address': '東淀川スポーツセンターの東側・なにわ自転車道の入口付近にある集合住宅',
                'link': null,
                'tag': ['spot'],
                'google': ['AF1QipNJGnCgY77dxZXi4SlwIvyN45KJtj77N9g8KCdV'],
                'zoom': 17
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.51904995375776,34.75004376454005]
            },
            'properties': {
                'title': '緑風橋',
                'address': '東淀川区と吹田市（中の島公園）を結ぶ歩行者専用橋',
                'link': null,
                'tag': ['spot'],
                'zoom': 17.5
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53617218498334, 34.73352785179286]
            },
            'properties': {
                'title': '菅原城北大橋',
                'address': '東淀川区と旭区（城北公園）を結ぶ大きな橋',
                'link': null,
                'tag': ['spot'],
                'zoom': 16
            },
            'featured': null
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53324047816687, 34.75192507846913]
            },
            'properties': {
                'title': '阪急上新庄駐輪センターはこべ館',
                'address': '営業時間 6:30～22:00 年末年始休 | ◆普通車◆ 1日1回利用 320円',
                'link': null,
                'tag': ['spot'],
                'iconSize': ['spot/bicycle.png', '3.21rem', '3.21rem', 2],
                'zoom': 17.5
            },
            'featured': null
        }
    ]
};


window.onload = () => {
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
                                [135.52537115876675, 34.742149982953805],
                                [135.52759872670111, 34.74137168111106],
                                [135.53183192971255, 34.739998981519264]
                            ]
                        },
                        'properties': {
                            'title': 'こぶし通り',
                            'address': '区役所前のこぶし並木（通称「こぶし通り」）',
                            'link': null,
                            'center': [135.52922581955266, 34.74085191047763],
                            'zoom': 14.5
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
};