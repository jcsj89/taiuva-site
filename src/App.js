//css
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Menu from "./components/Menu";
//components
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SubMenu from "./components/SubMenu";

function App() {
  return (
    <div className="2xl:container mx-auto border my-0 w-full h-screen">
      <Header />
      <Menu />

      <div className="bg-sky-700 h-full">main</div>

      <Footer />
    </div>
  );
}

export default App;
