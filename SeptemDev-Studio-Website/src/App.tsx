import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Consult from "./components/consult/Consult";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Header from "./components/header/Header";
import { useEffect } from "react";
import "./index.css";
import { EstadoProvider } from "./components/consult/EstadoContext";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Servicios from "./components/services/Servicios";
import ClientsCarrouselSection from "./components/about/ClientsCarrouselSection";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <EstadoProvider>
      <div className="min-h-screen w-screen text-logoTypography">
        <Header />
        <div id="HOME">
          <Home />
        </div>
        <div id="SERVICES">
          <Servicios />
        </div>
        <ClientsCarrouselSection />
        <div id="ABOUT">
          <About />
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
    </EstadoProvider>
  );
}

export default App;
