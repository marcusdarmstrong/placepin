((document, google) => {
  let defaultOptions = () => {
    return {
      zoom: 4,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true/*,
      styles: styles*/
    };
  };
    
  let initializeMap = (options) => {
    let map = new google.maps.Map(document.querySelector('#map'), options);
  };
    
  document.addEventListener('DOMContentLoaded', () => initializeMap(defaultOptions()));
}))(document, google);