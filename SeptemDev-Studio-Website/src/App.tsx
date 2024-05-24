import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Consult from "./components/consult/Consult";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Header from "./components/header/Header";
import { useEffect } from "react";
import "./index.css";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Servicios from "./components/services/Servicios";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className="min-h-screen w-screen">
      <Header />
      <div id="HOME">
        <Home />
      </div>
      <div id="ABOUT">
        <About />
      </div>
      <div id="SERVICES">
        <Servicios />
      </div>
      <div id="CLIENTS">
        <Clients />
      </div>
      <div id="CONSULT">
        <Consult />
      </div>
      <div id="TEAM">
        <Team />
      </div>
      <div className="flex items-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
