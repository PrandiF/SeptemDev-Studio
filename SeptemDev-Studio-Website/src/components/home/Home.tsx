import imgBackground from '../../assets/fondoAux.jpg';
import fondoDark from "../../assets/fondoDark.jpg"
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useEstado } from '../consult/EstadoContext';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const { setShowConsult, setShowPresupuesto, darkMode } = useEstado();

  const handlePresupuestoClick = () => {
    setShowConsult(false);
    setShowPresupuesto(true);
  };

  const handleConsultClick = () => {
    setShowPresupuesto(false);
    setShowConsult(true);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-screen relative flex flex-col items-center justify-center ">
      <img
        src={`${darkMode ? fondoDark : imgBackground}`}
        alt="fondo"
        className="fixed w-screen h-screen z-0 bg-gradient-to-b from-transparent to-[#f6e1ce] object-cover"
      />
      <div className="flex flex-col items-center scale-110 justify-center h-ful p-4 z-10 xl:gap-4">
        <div className="relative h-full flex flex-col items-center justify-center px-2">
          <h1
            className="z-10 xl:text-4xl text-2xl text-center font-extrabold flex m-auto font-fugaz-one xl:mt-0 "
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¿QUERES LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?
          </h1>
          <h2
            className="text-[#3d5a80] dark:text-logo z-10 text-lg xl:absolute xl:top-[90%] xl:right-[2%] font-extrabold flex xl:ml-auto font-fugaz-one "
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¡DISEÑAMOS TU PAGINA WEB!
          </h2>
        </div>
        <div className="p-4">
          <h4
            className="flex items-center justify-center m-auto z-10 text-center xl:mt-10 mt-8 font-medium"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="700"
          >
            Descubrí como podemos convertir tus objetivos en realidad y construir juntos el éxito
            que merecés.
          </h4>
        </div>

        <div
          className="z-10 w-full flex xl:flex-row flex-col items-center gap-5 justify-center mt-5"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="900"
        >
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleConsultClick}
            className="w-40 h-10 bg-beige-image dark:bg-button-light dark:text-logoTypography hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center font-semibold justify-center cursor-pointer"
          >
            Realizar Consulta
          </Link>
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handlePresupuestoClick}
            className="w-40 h-10 bg-gray-image dark:bg-footer-dark hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center font-semibold justify-center cursor-pointer"
          >
            Pedir Presupuesto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
