import React, { Component } from "react";
//css
import "./App.css";
//components
import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />

        <Footer />
      </div>
    );
  }
}

export default App;
