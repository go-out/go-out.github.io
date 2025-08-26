const stylesAll = {
    "Standard": "standard",
    "Standard Satellite": "standard-satellite",
    "Streets": "streets-v12",
    "Outdoors": "outdoors-v12",
    "Light": "light-v11",
    "Dark": "dark-v11",
    "Navigation Day": "navigation-day-v1",
    "Navigation Night": "navigation-night-v1",
    "Satellite Streets": "satellite-streets-v12",
};

const styles = document.querySelector('#styles');
for (const [key, value] of Object.entries(stylesAll)) {
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'styles');
    radio.setAttribute('value', key);
    radio.id = value;
    styles.appendChild(radio);
    const label = document.createElement('label');
    label.setAttribute('for', value);
    label.textContent = key;
    styles.appendChild(label);
};

const inputs = styles.getElementsByTagName('input');
const styleURL = document.querySelector('#url');
for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = 'mapbox://styles/mapbox/' + layer.target.id;
        map.setStyle(layerId);
        styleURL.textContent = layerId;
    };
};

/* See a list of Mapbox-hosted public styles at
https://docs.mapbox.com/api/maps/styles/#mapbox-styles */