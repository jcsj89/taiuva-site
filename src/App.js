import React, { Component } from 'react';
//css
import './App.css';
//components
import FirstComponent from './components/FirstComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
      </div>
    );
  }
}

export default App;
