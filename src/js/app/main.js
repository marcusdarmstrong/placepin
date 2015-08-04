/* @flow */

((document, window) => {
  const defaultOptions = () => {
    return {
      zoom: 5,
      center: new window.google.maps.LatLng(39, -97),
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      /*styles: styles*/
      panControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false
    };
  };

  const initializeMap = (options) => {
    return new window.google.maps.Map(document.querySelector('#map'), options);
  };

  document.addEventListener('DOMContentLoaded', () => initializeMap(defaultOptions()));
})(document, window);
