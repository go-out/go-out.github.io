'use strict'

const updatelog = [
    [
        "2024-10-28",
        "index/?id=osaka-city24&area=KitaFukushima-nakanoshima",
        ["中之島公園", "Nakanoshima"]
    ],
    [
        "2024-10-25",
        "index/?id=osaka-city24&area=NishinariAbeno-tengachaya",
        ["天下茶屋", "Tengachaya"]
    ],
    [
        "2024-10-22",
        "spot/?id=osaka-city24&area=NaniwaTennoji&name=shitennoji",
        ["四天王寺", "Shitennoji"]
    ],
    [
        "2024-10-11",
        "spot/?id=osaka&area=kawachi&name=kongo",
        ["金剛山", "Mt. Kongo"]
    ],
    [
        "2024-10-11",
        "spot/?id=osaka&area=kawachi&name=kongo",
        ["金剛山", "Mt. Kongo"]
    ],
    [
        "2024-09-06",
        "index/?id=osaka&area=senshu-sakai&name=sakai",
        ["フェニックス通り・土居川公園", "Sakai City, Sakai"]
    ],
    [
        "2024-7-23",
        "index/?id=osaka-city24&area=KitaFukushima-gardencity",
        ["オオサカガーデンシティ", "Osaka Garden City"]
    ],
    [
        "2024-7-21",
        "spot/?id=osaka&area=kawachi-higashiosaka&name=lightyhall",
        ["大阪府立中央図書館", "Osaka Prefectural Central Library"]
    ],
    [
        "2024-6-23",
        "spot/?id=osaka-city24&area=ChuoNishi&name=ikasuri",
        ["坐摩神社", "Ikasuri Jinja"]
    ],
    [
        "2024-6-23",
        "spot/?id=osaka-city24&area=ChuoNishi&name=osaka-church",
        ["日本基督教団 大阪教会", "Naniwa Church United Church"]
    ],
    [
        "2024-5-17",
        "spot/?id=osaka-city24&area=KitaFukushima&name=ntt-telepark",
        ["NTTテレパーク堂島", "NTT Telepark Dojima"]
    ],
    [
        "2024-5-17",
        "spot/?id=osaka-city24&area=ChuoNishi&name=utsubo",
        ["靭公園", "Utsubo Park"]
    ],
    [
        "2024-5-16",
        "index/?id=osaka-city24&area=MiyakojimaAsahi-sakuranomiya",
        ["桜ノ宮（大川）リバーサイドパーク", "Sakuranomiya (Okawa) Riverside"]
    ],
    [
        "2024-5-11",
        "index/?id=osaka&area=hokusetsu-toyonaka",
        ["豊中市 🌹 中部・東部・西部", "Toyonaka, Osaka"]
    ],
    [
        "2024-5-11",
        "spot/?id=osaka&area=hokusetsu-toyonaka&name=itami-airport",
        ["千里川土手", "Bank of Senrigawa River"]
    ],
    [
        "2024-5-11",
        "spot/?id=osaka&area=hokusetsu-toyonaka&name=hattori-ryokuchi",
        ["服部緑地", "Hattori Well-being Park"]
    ],
    [
        "2024-5-9",
        "spot/?id=osaka-city24&area=sumiyoshi&name=asakachuo",
        ["浅香中央公園", "Asaka Chuo Park"]
    ],
    [
        "2024-5-5",
        "index/?id=osaka-city24&area=KitaFukushima-shinumeda",
        ["新梅田シティ", "Shin Umeda City"]
    ],
    [
        "2024-5-2",
        "index/?id=osaka-city24&area=hirano",
        ["平野・平野郷", "Hirano Osaka"]
    ],
    [
        "2024-4-30",
        "spot/?id=osaka-city24&area=MinatoTaisho&name=chishima",
        ["千島公園", "Chishima Park"]
    ],
    [
        "2024-4-30",
        "spot/?id=osaka-city24&area=NishinariAbeno&name=nishinaripark",
        ["西成公園", "Nishinari Park"]
    ],
    [
        "2024-4-7",
        "spot/?id=osaka-city24&area=konohana-hokko&name=maishima",
        ["舞洲", "Maishima"]
    ],
    [
        "2024-4-7",
        "spot/?id=osaka-city24&area=konohana-hokko&name=maishimakojo",
        ["大阪広域環境施設組合 舞洲工場", "Maishima Incineration Plant"]
    ],
    [
        "2024-4-6",
        "spot/?id=osaka-city24&area=NaniwaTennoji&name=ikutamajinja",
        ["生國魂神社", "Ikukunitama Jinja"]
    ],
    [
        "2024-4-4",
        "spot/?id=osaka&area=kawachi&name=migukurumitama",
        ["美具久留御魂神社", "Migukurumitama Jinja"]
    ],
    [
        "2024-3-20",
        "spot/?id=osaka-city24&area=NaniwaTennoji&name=shitennoji",
        ["四天王寺", "Shitennoji"]
    ],
    [
        "2024-3-20",
        "spot/?id=osaka-city24&area=NaniwaTennoji&name=tennoji",
        ["茶臼山（天王寺公園）", "Tennoji Park"]
    ],
    [
        "2024-3-18",
        "spot/?id=osaka-city24&area=yodogawa-naniwacycleline",
        ["なにわ自転車道", "Naniwa Cycle Line"]
    ],
    [
        "2024-3-16",
        "spot/?id=osaka-city24&area=NaniwaTennoji-ocat&name=minamihorie-4-6",
        ["西区南堀江４丁目６", "Minamihorie 4-6 Nishi-ku"]
    ],
    [
        "2024-3-9",
        "spot/?id=osaka-city24&area=suminoe&name=kagaya-shinden",
        ["加賀屋新田会所跡", "Kagaya Shinden Kaisho Garden"]
    ],
    [
        "2024-3-4",
        "spot/?id=osaka&area=kawachi&name=onji",
        ["恩智神社・天川山", "Onji Jinja (Amakawa-Yama)"]
    ],
    [
        "2024-2-27",
        "spot/?id=osaka-city24&area=ChuoNishi&name=kouzu",
        ["高津宮・高津公園", "Kouzu-gu, Kouzu Park"]
    ],
    [
        "2024-2-27",
        "spot/?id=osaka&area=kawachi&name=hiraoka",
        ["枚岡神社", "Hiraoka Jinja"]
    ],
    [
        "2024-2-18",
        "spot/?id=osaka&area=hokusetsu&name=udonoyoshihara",
        ["鵜殿のヨシ原", "Udono no Yoshihara "]
    ],
    [
        "2024-2-4",
        "spot/?id=osaka&area=kawachi&name=amaterasu-iwato",
        ["天照大神高座神社・岩戸神社", "Amaterasu-Okami Takakura / Iwato Jinja "]
    ],
    [
        "2024-1-21",
        "spot/?id=osaka-city24&area=NaniwaTennoji&name=nambayasaka",
        ["難波八阪神社", "Nambayasaka Jinja"]
    ],
    [
        "2024-1-17",
        "spot/?id=osaka&area=senshu-sakai&name=sainvarierkanaoka",
        ["スターハウスメモリアル", "Kanaoka Danchi"]
    ],
    [
        "2024-1-17",
        "spot/?id=osaka&area=senshu-sakai&name=daisenkouen",
        ["大仙公園", "Daisen Park"]
    ],
    [
        "2024-1-11",
        "index/?id=osaka-city24&area=sumiyoshi-tezukayama",
        ["帝塚山", "Tezukayama"]
    ],
    [
        "2024-1-11",
        "spot/?id=osaka-city24&area=NishinariAbeno&name=shoutenyama",
        ["正圓寺（聖天山）", "Shotenyama (Shoenji)"]
    ],
    [
        "2023-12-31",
        "spot/?id=osaka&area=kawachi&name=yaoairport",
        ["八尾空港", "Yao Airport"]
    ],
    [
        "2023-12-30",
        "spot/?id=osaka-city24&area=sumiyoshi&name=sumiyoshitaisha",
        ["住吉大社", "Sumiyoshi Taisha"]
    ],
    [
        "2023-12-21",
        "spot/?id=osaka-city24&area=NishinariAbeno&name=abenojinja",
        ["阿部野神社", "Abeno Jinja"]
    ],
    [
        "2023-5-11",
        "spot/?id=osaka-city24&area=sumiyoshi&name=sumiyoshi-park",
        ["住吉公園", "Sumiyoshi Park"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=zinbee",
        ["甚兵衛渡船場", "Jinbee Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=tempozan",
        ["天保山渡船場", "Tenpozan Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=chitose",
        ["千歳渡船場", "Chitose Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=ochiaikami",
        ["落合上渡船場", "Ochiai-kami Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=ochiaishimo",
        ["落合下渡船場", "Ochiai-shimo Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=funamachi",
        ["船町渡船場", "Funamachi Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=kizugawa",
        ["木津川渡船場", "Kizugawa Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "spot/?id=osaka-ferry&name=senbonmatsu",
        ["千本松渡船場", "Senbonmatsu Ferry Port"]
    ],
    [
        "YYYY-MM-DD",
        "index/?id=osaka-ferry",
        ["渡し船に乗ろう", "Osaka City Ferries"]
    ]
]

function indexSpot(max) {
    for (let i = 0; i < max; i++) {
        if (i < updatelog.length) {
            const li = document.createElement("li");
            document.querySelector('#log').appendChild(li);
            const time = document.createElement("time");
            time.textContent = updatelog[i][0];
            time.setAttribute('datetime', updatelog[i][0]);
            li.appendChild(time);

            const a = document.createElement("a");
            a.href = directory + updatelog[i][1];
            a.innerHTML = `
            <ruby>
            ${updatelog[i][2][0]}
            <rt>${updatelog[i][2][1]}</rt>
            </ruby>`;
            li.appendChild(a);
        }
    }
}