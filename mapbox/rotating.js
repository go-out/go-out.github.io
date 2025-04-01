let userInteracting = 0;

function spinGlobe() {
  const zoom = map.getZoom();
  if (!userInteracting && zoom < 5) {
    let e = 5;
    if (zoom > 3) {
      e *= (5 - zoom) / 2
    };
    const lng = map.getCenter();
    lng.lng += e,
      map.easeTo({
        center: lng,
        easing: zoom => zoom
      })
  };
};

map.on("mousedown", () => { userInteracting = !0 });
map.on("dragstart", () => { userInteracting = !0 });
map.on("moveend", () => { spinGlobe() });
spinGlobe();

// [Create a rotating globe](https://docs.mapbox.com/mapbox-gl-js/example/globe-spin/)