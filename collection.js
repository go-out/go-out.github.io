'use strict'

// localStorage のデータを取得
let yourJson = [];

if (localStorage.getItem("mapJSON")) {
    let yourMap = JSON.parse(localStorage.getItem("mapJSON"));
    for (let i = 0; i < yourMap.length; i++) {
        yourJson.push(yourMap[i]);
    };
};

function listItems() {
    if (!yourJson.length == 0) {
        for (let i = 0; i < yourJson.length; i++) {
            let thisTitle = yourJson[i].properties.title,
                thisDescription;

            if (!yourJson[i].properties.description) {
                thisDescription = yourJson[i].geometry.address;
            } else {
                thisDescription = yourJson[i].properties.description;
            };

            const li = document.createElement('li');
            document.querySelector("#list").prepend(li);
            const input = document.createElement('input');
            input.setAttribute("type", "button");
            input.value = "Delete 消去";
            li.appendChild(input);
            const p = document.createElement('p');
            p.innerHTML = `<b>${thisTitle}</b>${thisDescription}`;
            li.appendChild(p);

            input.addEventListener("click", () => {
                yourJson.splice(i, 1);
                localStorage.setItem("mapJSON", JSON.stringify(yourJson));
                location.reload();
            });
        };
    } else {
        const p = document.createElement('p');
        p.textContent = "まだ投稿がありません";
        document.querySelector("#list").prepend(p);
    };
};