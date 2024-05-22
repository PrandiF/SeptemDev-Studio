import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Consult from "./components/consult/Consult";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Header from "./components/header/Header";
import { useEffect } from "react";
import "./index.css"

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Servicios from "./components/services/Servicios";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  

  return (
    <>
      <div className="h-screen w-screen">
        <Header />
        <div id="HOME" className="h-screen">
          <Home />
        </div>
        <div id="ABOUT" className="h-screen">
          <About />
        </div>
        <div id="SERVICES" className="h-screen">
          <Servicios />
        </div>
        <div id="CLIENTS" className="h-screen">
          <Clients />
        </div>
        <div id="CONSULT" className="h-screen">
          <Consult />
        </div>
        <div id="TEAM" className="h-screen">
          <Team />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
