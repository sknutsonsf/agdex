import React, { Component } from 'react';
import './App.css';
import DexMap from './DexMap';

class App extends Component {
  render() {
      return (
	  <div>
      <div className="App">
        <header className="App-header">
          <h1>This is a simple create-react-app with a map</h1>
        </header>
	      </div>
        <div id="map-outer">
	    <div>The map is below</div>
            <DexMap />
        </div>
      </div>
    );
  }
}

export default App;
