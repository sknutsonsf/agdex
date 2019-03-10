import React from 'react';
import DexMap from './DexMap';

const AgDex = () => {
  return (
    <div className="content">
        <h1>Data Explorer</h1>
        <div id="map-outer">
            <DexMap />
        </div>
    </div>
  )
}

export default AgDex;
