import GoogleBaseMap from './GoogleBaseMap.js';

((document, window) => {
  const defaultOptions = () => {
    return {
      zoom: 5,
      center: new window.google.maps.LatLng(39, -97),
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          'stylers': [
            { 'saturation': -50 },
          ],
        }, {
          'featureType': 'poi',
          'stylers': [
            { 'visibility': 'off' },
          ],
        }, {
          'featureType': 'road',
          'stylers': [
            { 'visibility': 'simplified' },
          ],
        },
      ],
      panControl: false,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.DEFAULT,
        mapTypeIds: [
          window.google.maps.MapTypeId.ROADMAP,
          window.google.maps.MapTypeId.TERRAIN,
        ],
      },
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false,
      zoomControl: false,
    };
  };

  const bindEvents = (map) => {
    map.on('singleclick', (e) => {
      map.addMarker(e.latLng.lat(), e.latLng.lng());
    });
  };

  const initializeMap = (options) => {
    return bindEvents(new GoogleBaseMap(window.google.maps, document.querySelector('#map'), options));
  };

  document.addEventListener('DOMContentLoaded', () => initializeMap(defaultOptions()));
})(document, window);
