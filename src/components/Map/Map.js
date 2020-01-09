import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// import * as Token from '../../env';
import './MapStyles.scss';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 59.433756, lng: 24.744136 }}
        >
          <Marker position={{ lat: 59.433756, lng: 24.744136 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClLEKBLRe0jHA09tOPaxYT-Rka839E7U0',
})(MapContainer);
