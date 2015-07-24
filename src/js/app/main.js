/* @flow */

((document, window) => {
  const defaultOptions = () => {
    return {
      zoom: 4,
      center: new window.google.maps.LatLng(0, 0),
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,/*
      styles: styles*/
    };
  };

  const initializeMap = (options) => {
    return new window.google.maps.Map(document.querySelector('#map'), options);
  };

  document.addEventListener('DOMContentLoaded', () => initializeMap(defaultOptions()));
})(document, window);
