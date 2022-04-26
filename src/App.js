import React, { Component } from "react";
//css
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Menu from "./components/Menu";
//components
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SubMenu from "./components/SubMenu";

class App extends Component {
  render() {
    return (
      <div className="md:container md:mx-auto border my-0 w-full">
        <Header />
        <Menu />
        <ul className="flex flex-row list-none lg:ml-auto flex-wrap justify-around bg-zinc-400">
          <SubMenu name="Documentacao" />
          <SubMenu name="Visita Presencial" />
          <SubMenu name="Visita Presencial" />
          <SubMenu name="Visita Presencial" />
          <SubMenu name="Vale Postal" />
          <SubMenu name="Vale Postal" />
          <SubMenu name="Vale Postal" />
          <SubMenu name="Vale Postal" />
          <SubMenu name="Peculio" />
        </ul>

        <div className="bg-red-700 my-28">main</div>
        <FirstComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
