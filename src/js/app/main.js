/* @flow */

((document, window) => {
  const defaultOptions = () => {
    return {
      zoom: 5,
      center: new window.google.maps.LatLng(39.50, -98.35),
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
