      
   /*var  map = L.map('map').setView([38.889805, -77.009056], 13);

   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([38.889805, -77.009056]).addTo(map)
  .bindPopup('Washington D.C <br>')
  .openPopup(); */

  /*mapboxgl.accessToken = '';
   const map = new mapboxgl.Map({
      container: 'map',
      center: [38.889805, -77.009056], 
      zoom: 15.1,
      pitch: 62,
      bearing: -20

   });

   map.on('style.load', () => {
      map.addSource('line',  {
         lineMetrics: true, 
         data: {
            type: 'LineString',
            coordinates: [
               [38.889805, -77.009056]
            , 
            [2.2890810326441624, 48.86174223718291]

         ]
         }
      });

      map.addLayer({
         id: 'line',
         source: 'line',
         type:"line"
         paint: {
            'line-width': 12;
         }
         // not gonna put in the dark line stuff right now just to see what it is like!!!
      }); */ 


//want to make just a simple globe to start rendering

const map = new mapboxgl.Map ({
   container: 'map'
   projection: 'globe'
});

map.on("style.load", () =? {
   map.setFog({
      color: 'rgb(186, 210,235)',
      'high-color': 'rgb(36,92,223)',
      'horizon-blend': 0.02,
      'space-color': 'rgb(11,11,23)'
      'star-intensity': 0.6


   });
});






      //trying to add some radar to make it kewl
      map.addLayer({
         id: 'radar-layer',
         type: 'raster',
         source: 'radar',
         paint: {
            "raster-fade-duration":0
         }
   

      })

      document.querySelectorAll('.map-overlay-inner-input[type="checkbox')
      .forEach((checkbox => {
         checkbox.addEventListener('change', function () {
            map.setConfigProperty('basemap',this.id, this.checked)

         });
         
   //});
