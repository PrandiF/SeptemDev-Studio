import imgBackground from "../../assets/fondoHome.png";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { useEstado } from "../consult/EstadoContext";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const { setShowConsult, setShowPresupuesto } = useEstado();

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
    <div className=" h-screen relative flex flex-col items-center justify-center ">
      <img
        src={imgBackground}
        alt="fondo"
        className="fixed w-full h-screen z-0 bg-gradient-to-b from-transparent to-[#f6e1ce] object-cover "
      />
      <div className="flex flex-col z-10 xl:gap-4  mb-auto">
        <div className="relative flex  flex-col items-center justify-center xl:mt-48 mt-24 px-2">
          <h1
            className="z-10 xl:text-4xl text-2xl text-center font-extrabold flex m-auto font-fugaz-one xl:mt-0 "
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¿QUERES LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?
          </h1>
          <h2
            className="text-beige z-10 text-lg xl:absolute xl:top-[90%] xl:right-[2%] font-extrabold flex xl:ml-auto font-fugaz-one "
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¡DISEÑAMOS TU PAGINA WEB!
          </h2>
        </div>
        <div className="w-full h-full px-4">
          <h4
            className="flex items-center justify-center m-auto z-10 text-center xl:mt-10 mt-8 font-medium"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="700"
          >
            Descubrí como podemos convertir tus objetivos en realidad y
            construir juntos el éxito que merecés.
          </h4>
        </div>

        <div
          className="z-10 w-full flex gap-5 justify-center mt-5"
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
            className="w-40 h-10 bg-beige-image hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center font-semibold cursor-pointer"
          >
            Realizar Consulta
          </Link>
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handlePresupuestoClick}
            className="w-40 h-10 bg-gray-image hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center font-semibold justify-center cursor-pointer"
          >
            Pedir Presupuesto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
