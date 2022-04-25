import React, { Component } from "react";
//css
import "./App.css";
//components
import Footer from "./pages/Footer";
import Header from "./pages/Header";

class App extends Component {
  render() {
    return (
      <div className="md:container md:mx-auto border my-0 w-full">
        <Header />

        <div className="bg-red-700">main</div>

        <Footer />
      </div>
    );
  }
}

export default App;
