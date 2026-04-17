/* MAPA INTERACTIVO 
documentacion https://leafletjs.com/reference.html
*/


var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 1
});


var bounds = [[0,0], [6214,4163]];
var image = L.imageOverlay('img/1888-recorte-mapa-comprimido.jpg', bounds).addTo(map);

map.fitBounds(bounds);

var pin = L.icon({
    iconUrl: 'img/pin.png',

    iconSize:     [50, 100], // size of the ico9
    iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-20, -90] // point from which the popup should open relative to the iconAnchor
});



var alberdi = L.marker([3500, 1740],{icon: pin}).addTo(map);
alberdi.bindPopup("<h1>1906</h1><img src='img/escuelas-normales/alberdi.jpg'><br><em>Escuela Graduada Superior Normal Provincial de Niñas Juan Bautista Alberdi</em><br>Córdoba Capital");

var maestras = L.marker([3470, 1695],{icon: pin}).addTo(map);
maestras.bindPopup("<h1>1884</h1><img src='img/escuelas-normales/carbo.jpg'><br><em>Escuela Normal Nacional de Maestras </em><br>Córdoba Capital");

var olmos = L.marker([3500, 1650],{icon: pin}).addTo(map);
olmos.bindPopup("<h1>1909</h1><img src='img/escuelas-normales/olmos.jpg'><br><em>Escuela Normal Provincial para Varones Jose Vicente de Olmos </em><br>Córdoba Capital");

var cruzdeleje = L.marker([3955, 1283],{icon: pin}).addTo(map);
cruzdeleje.bindPopup("<h1>1917</h1><img src='img/escuelas-normales/cruz-del-eje.jpg'><br><em>Escuela Normal Superior República del Perú</em><br>Cruz del Eje");

var sanfrancisco = L.marker([3450, 3000],{icon: pin}).addTo(map);
sanfrancisco.bindPopup("<h1>1912</h1><img src='img/escuelas-normales/san-francisco.jpg'><br><em>Escuela Normal Nacional</em><br>San Francisco");

var riocuarto = L.marker([2220, 1580],{icon: pin}).addTo(map);
riocuarto.bindPopup("<h1>1909</h1><img src='img/escuelas-normales/rio-cuarto.jpg'><br><em>Escuela Normal Nacional Mixta</em><br>Río Cuarto");

var bellville = L.marker([2580, 2630],{icon: pin}).addTo(map);
bellville.bindPopup("<h1>1909</h1><img src='img/escuelas-normales/bell-ville.jpg'><br><em>Escuela Normal Nacional Mixta</em><br>Bell Ville");

var villadolores = L.marker([3100, 1000],{icon: pin}).addTo(map);
villadolores.bindPopup("<h1>1910</h1><img src='img/escuelas-normales/villa-dolores.jpg'><br><em>Escuela Normal Rural Mixta</em><br>Villa Dolores");