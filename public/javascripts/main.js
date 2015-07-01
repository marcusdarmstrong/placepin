(function(init) {
    init(window.jQuery, window._, window, document);
}(function($, _, window, document) {
    var doEventBinding = function(map) {
    };
    
    var defaultOptions = function() {
        return {
            zoom: 4,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true/*,
            styles: styles*/
        };
    };
    
    var initializeMap = function(options) {
        var map = new google.maps.Map($('#map')[0], options);
        doEventBinding(map);
    };
    
    $(function() {
        initializeMap(defaultOptions());
    });
}));