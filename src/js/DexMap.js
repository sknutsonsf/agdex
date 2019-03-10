import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet/dist/react-leaflet.min';

import React from 'react';

// This example code is from react-leaflet initial example:  https://codepen.io/stanpwe/pen/XGgOVm
// with a different name
class DexMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap className="leaflet-container" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default DexMap;
