import logoHeader from "../../assets/logoHeader.jpg"
import { Link } from 'react-scroll';
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


// interface HeaderProps {
//   scrollToSection: (id: string) => void;
// }
function header() {

  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);


  return (
    <div className="w-full h-auto absolute flex items-start justify-center z-50" data-aos="fade-up">
      <div className="flex w-[65%] h-[3.5rem] bg-slate-100 rounded-full mt-3 items-center justify-between shadow-xl">
        <div>
          <img src={logoHeader} className="w-[100px] h-[3.5rem] rounded-full ml-0"/>
        </div>
        <div className="flex gap-10">
          <Link to="ABOUT" spy={true} smooth={true} duration={700} className="text-azulado font-roboto hover:text-azuladoHover cursor-pointer">Nosotros</Link> 
          <Link to="SERVICES" spy={true} smooth={true} duration={700} className="text-azulado font-roboto hover:text-azuladoHover cursor-pointer">Servicios</Link>
          <Link to="CLIENTS" spy={true} smooth={true} duration={700} className="text-azulado font-roboto hover:text-azuladoHover cursor-pointer">Clientes</Link>exte
          <Link to="CONSULT" spy={true} smooth={true} duration={700} className="text-azulado font-roboto hover:text-azuladoHover cursor-pointer">Consulta</Link>
          <Link to="TEAM" spy={true} smooth={true} duration={700} className="text-azulado font-roboto hover:text-azuladoHover cursor-pointer">Equipo</Link>
        </div>
        <Link to="" spy={true} smooth={true} duration={700} className="bg-azulado hover:bg-azuladoHover px-4 py-1 text-gris rounded-3xl text-sm mr-10 shadow-xl cursor-pointer">
          Reunión
        </Link>
      </div>
    </div>
  );
}

export default header;
