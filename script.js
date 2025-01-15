// Karte initialisieren
var map = L.map('map').setView([65.0, 15.0], 4); // Zentrale Koordinaten und Zoomstufe
// OpenStreetMap-Kacheln hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
// Beispiel für eine Verwaltungseinheit (Västerbotten)
var vasterbotten = L.marker([64.0, 20.0]).addTo(map)
    .bindPopup('<a href="https://sok.riksarkivet.se/?Sokord=V%C3%A4sterbotten&f=True&EndastDigitaliserat=false&Fritext=V%C3%A4sterbotten&Namn=&Ort=&DatumFran=1500&DatumTill=1800&AvanceradSok=true" target="_blank">Västerbotten</a>');
// Weitere Verwaltungseinheiten hier hinzufügen...
