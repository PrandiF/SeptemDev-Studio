import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Consult from "./components/consult/Consult";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Header from "./components/header/Header";
import imgBackground from "./assets/fondoAux.webp";
import fondoDark from "./assets/fondoDark.webp";
import { useEffect } from "react";
import "./index.css";
import { EstadoProvider, useEstado } from "./components/consult/EstadoContext";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Servicios from "./components/services/Servicios";
import ClientsCarrouselSection from "./components/about/ClientsCarrouselSection";

const AppContent: React.FC = () => {
  const { darkMode } = useEstado();

  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className={`min-h-screen w-screen relative ${darkMode ? 'dark' : ''} ${darkMode ? 'text-logo' : 'text-logoTypography'}`}>
       <img
        src={`${darkMode ? fondoDark : imgBackground}`}
        alt="fondo"
        className="fixed w-screen h-screen z-0 bg-white dark:bg-black  object-cover"
      />
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
  );
};

const App: React.FC = () => {
  return (
    <EstadoProvider>
      <AppContent />
    </EstadoProvider>
  );
};

export default App;
