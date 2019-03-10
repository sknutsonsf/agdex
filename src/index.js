import React from 'react';
import ReactDOM from 'react-dom';
import AgDex from './js/AgDex';

// include leaflet.css so it gets into the bundle
import 'leaflet/dist/leaflet.css';
// import 'bootstrap/dist/css/bootstrap.css';
// add our css after so it can customize bootstrap
import './css/agdex-style.css';

// =================
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// workaround webpack issue
// see https://github.com/Leaflet/Leaflet/issues/4968

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// =================

ReactDOM.render(
  <AgDex />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

