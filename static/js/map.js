

d3.json("/heatmapdata").then(function(statesData){



var coordinates = statesData.features.map(item=>item.geometry.coordinates)
console.log(coordinates)

var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(statesData).addTo(map);

function getColor(d) {
    return d > 1.5 ? '#800026' :
           d > 1.4  ? '#BD0026' :
           d > 1.2  ? '#E31A1C' :
           d > 1  ? '#FC4E2A' :
           d > .7   ? '#FD8D3C' :
           d > .4   ? '#FEB24C' :
           d > 0   ? '#FED976' :
                      '#FFEDA0';
}

var coordinates = statesData.features.map(item=>item.geometry.coordinates)
console.log(coordinates)

var property = statesData.features.map(item=>item.properties.name)
console.log(property)

var temp = statesData.features.map(item=>item.properties.avgtempuncertainty)
console.log(temp)



function style(feature) {
    return {
        fillColor: getColor(feature.properties.avgtempuncertainty),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, {style: style}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// // var geojson;
// // // ... our listeners
// // geojson = L.geoJson(...);

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Average Temperature Uncertainity</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.avgtempuncertainty.toFixed(3) + '°C' + ' Average Temperature Uncertainty'
        : 'Hover over a state');
};

info.addTo(map);

function highlightFeature(e) {
    // listeners
    info.update(e.target.feature.properties);
}

function resetHighlight(g) {
    // listeners
    info.update();
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, .5, .8, 1.2],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);



var tiles2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.opentopomap.org">OpenTopoMap</a>'
});

var baseMaps = {
    "OpenStreetMap": tiles,
    "OpenTopoMap": tiles2
};

L.control.layers(baseMaps).addTo(map);

});