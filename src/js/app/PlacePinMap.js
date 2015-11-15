import { default as React, Component, PropTypes } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';
import * as Immutable from 'immutable';

class PlacePinMap extends Component {
  render() {
    const markers = this.props.markers;
    return (
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{lat: -39, lng: 97}}
        mapTypeId={window.google.maps.MapTypeId.ROADMAP}
        styles={[
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
        ]}
        panControl={false}
        mapTypeControl={false}
        scaleControl={true}
        streetViewControl={false}
        overviewMapControl={false}
        zoomControl={false}
        onClick={checkForSingleClick}
      >
      {markers.map((marker) => {
        return (
          <Marker {...marker} />
        );
      })}
      </GoogleMap>
    );
  }

  checkForSingleClick(e) {
    const delay = 400;
    const clickTime = +new Date();
    const { dispatch } = this.props;
    const lastClickTime = this.state.lastClickTime;

    if (clickTime - lastClickTime > delay) {
      clickTimer = setTimeout(() => dispatch({type: 'ADD_MARKER', lat: e.latLng.lat(), lng: e.latLng.lng()}), delay);
    } else {
      clearTimeout(clickTimer);
    }
    setState({'lastClickTime': clickTime});
  }
}

PlacePinMap.propTypes = {
  markers: PropTypes.instanceOf(Immutable.List),
  dispatch: PropTypes.object,
};

function select(state) {
  return {markers: state};
}

export default connect(select)(PlacePinMap);
