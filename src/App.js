import React, { Component } from 'react';
import './App.css';
import DexMap from './DexMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           This is a simple create-react-app with a map
          </p>
        </header>
        <div id="map-outer">
          <DexMap />
        </div>

      </div>
    );
  }
}

export default App;
