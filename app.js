      
   var  map = L.map('map').setView([38.889805, -77.009056], 13);

   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([38.889805, -77.009056]).addTo(map)
  .bindPopup('Washington D.C <br>')
  .openPopup();
