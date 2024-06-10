'use strict'

let gooutArr = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'pehu',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50433479522678, 34.69699057458179]
            },
            'properties': {
                'title': '<a class="pehu" href="https://vg.pe.hu/jp/" target="_blank" rel="noopener">∧°┐ | creative, community space</a>',
                'address': '日本, 大阪府大阪市北区西天満4丁目8番1',
                'date': 'Sat Dec 16 2017 - Sun Apr 29 2018 | Sun Jan 6 - Sun 15 Sep 2019',
                'iconSize': ['https://pehu.creative-community.space/icon/favicon.png', '3.21rem', '3.21rem'],
                'zoom': 20,
            }
        },
        {
            'type': 'Feature',
            'tags': 'goout',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47306292634534, 34.62458544610712]
            },
            'properties': {
                'title': '<a href="https://vg.pe.hu/2019-2021/" target="_blank" rel="noopener">音ビル</a>',
                'address': '日本, 大阪府大阪市住之江区北加賀屋5丁目5-1',
                'date': 'OTO Building | 4.2.2019 - 3.30.2022',
                'iconSize': ['https://vg.pe.hu/2019-2021/img/favicon.png', '3.21rem', '3.21rem'],
                'zoom': 17.5,
            }
        }
    ]
}

// 地図にマーカーを追加
function addMarker(arr) {
    for (const marker of arr) {
        function createMarker() {
            const el = document.createElement('div')
            el.className = marker.tags;

            if (!marker.properties.iconSize && marker.properties.youtube) {
                const url = `https://i.ytimg.com/vi/${marker.properties.youtube}/default.jpg`;
                el.style.backgroundImage = `url(${url})`;
                el.style.borderRadius = '0.5rem';
                el.style.width = '5.55rem';
                el.style.height = '4.2rem';
            } else if (marker.properties.iconSize) {
                const url = marker.properties.iconSize[0];
                el.style.width = marker.properties.iconSize[1];
                el.style.height = marker.properties.iconSize[2];
                el.style.backgroundImage = `url(${url})`;
            }

            new mapboxgl.Marker(el, {
                offset: [0, 0]
            })
                .setLngLat(marker.geometry.coordinates)
                .addTo(map)

            el.addEventListener('click', () => {
                flyToCenter(marker);
                chengeHeader(marker);

                if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    if (marker.properties.youtube) {
                        const main = document.querySelector('main')
                        main.hidden = false;
                        player.loadVideoById({ videoId: marker.properties.youtube })
                    }
                }
            })

            if (marker.feature) {
                for (const peak of marker.feature) {
                    const eachMonth = document.querySelector(`#feature section:nth-child(${peak.month})`)
                    if (marker.properties.href) {
                        const p = document.createElement('p')
                        p.innerHTML = `
                        <a href='${directory}${marker.properties.href}'>${marker.properties.title}</a><br>
                        ${marker.properties.address}<br>
                        <strong>${peak.text}</strong>
                        `;
                        p.className = "goout";
                        eachMonth.prepend(p)
                    } else {
                        const p = document.createElement('p')
                        p.innerHTML = `
                        <u>${marker.properties.title}</u><br>
                        ${marker.properties.address}<br>
                        <strong>${peak.text}</strong>
                        `;
                        p.className = "goout";
                        eachMonth.prepend(p)
                    }
                }
            }
        }

        if (location.search) {
            const queryString = location.search;
            const params = new URLSearchParams(queryString)
            if (params.get("area") === marker.area) {
                createMarker()
            }
        } else {
            createMarker()
        }
    }
}

function flyToCenter(e) {
    map.flyTo({
        center: e.geometry.coordinates,
        essential: true,
        zoom: e.properties.zoom
    })
}

// クリックされたマーカーの位置情報をヘッダーに表示
function chengeHeader(e) {
    const thisLatLng = document.querySelector('#latlng')
    const thisAddress = document.querySelector('#address')
    const thisDate = document.querySelector('#datetime')
    thisLatLng.innerHTML = e.properties.title;
    thisAddress.innerHTML = e.properties.address;
    thisDate.className = 'goout';

    if (e.properties.href) {
        thisDate.innerHTML = "";
        const a = document.createElement('a')
        a.href = directory + e.properties.href;
        a.innerHTML = e.properties.date.replace(/\n/g, '<br>')

        if (e.properties.targt) {
            a.setAttribute('targt', e.properties.targt)
        }

        thisDate.appendChild(a)
    } else {
        thisDate.innerHTML = e.properties.date.replace(/\n/g, '<br>')
    }
}

window.addEventListener("load", () => {
    let filter = document.querySelectorAll("#filter input[type='radio']")
    let targets = document.querySelectorAll(".mapboxgl-marker")
    for (let i of filter) {
        i.addEventListener('change', () => {
            for (let ii of targets) {
                if (ii.classList.contains(i.value) == true) {
                    ii.hidden = false;
                } else {
                    ii.hidden = true;
                }
            }
        }, false)
    }

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const main = document.querySelector('main')
        main.addEventListener('click', function () {
            main.hidden = true;
            document.querySelector('#latlng').textContent = "";
            document.querySelector('#address').textContent = "";
            document.querySelector('#datetime').textContent = "";
            player.pauseVideo()
        })
    }
}, false)