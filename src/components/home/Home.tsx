import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useEstado } from "../consult/EstadoContext";
import AOS from "aos";
import "aos/dist/aos.css";
import mockNotebook from "../../assets/mockNotebook.png";
import darkMockNotebook from "../../assets/darkMockNotebook.png";
import mockMobile from "../../assets/mockMobile.png";
import darkMockMobile from "../../assets/darkMockMobile.png";

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

  const [showOverlayImage, setShowOverlayImage] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = (event: Event) => {
      if (!scrollEnabled) {
        event.preventDefault();
        window.scrollTo(0, 0);
        setShowOverlayImage(true);
        setTimeout(() => {
          setScrollEnabled(true);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEnabled]);

  return (
    <div className="h-screen relative flex flex-col items-center justify-center ">
      {showOverlayImage && (
        <>
          <div className="-rotate-12 hidden xl:flex md:flex absolute top-[50%] w-[24rem] right-[70%]">
            <img
              src={mockNotebook}
              alt="mockup notebook"
              className="xl:animate-float animate-float2 dark:xl:hidden dark:md:hidden"
              data-aos="fade"
              data-aos-duration="2200"
              data-aos-delay="400"
            />
            <img
              src={darkMockNotebook}
              alt="mockup notebook"
              className="xl:animate-float animate-float2 hidden dark:flex"
              data-aos="fade"
              data-aos-duration="2200"
              data-aos-delay="400"
            />
          </div>
          <div className="absolute top-[50%] hidden xl:flex md:flex w-[32rem] rotate-12 left-[70%] ">
            <img
              src={mockMobile}
              alt="mockup mobile"
              className="xl:animate-float animate-float2 dark:xl:hidden dark:md:hidden"
              data-aos="fade-up"
              data-aos-duration="2200"
              data-aos-delay="400"
            />
            <img
              src={darkMockMobile}
              alt="mockup notebook"
              className="xl:animate-float animate-float2 hidden dark:flex"
              data-aos="fade-up"
              data-aos-duration="2200"
              data-aos-delay="400"
            />
          </div>
        </>
      )}

      <div className="flex flex-col items-center justify-center h-ful p-4 z-10 xl:gap-4">
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
            Descubrí como podemos convertir tus objetivos en realidad y
            construir juntos el éxito que merecés.
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
            className="w-40 h-10 bg-azul-image dark:bg-button-light dark:text-logoTypography hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center font-semibold justify-center cursor-pointer"
          >
            Realizar Consulta
          </Link>
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handlePresupuestoClick}
            className="w-40 h-10 bg-footer-dark hover:scale-[1.02] text-white transform duration-300 rounded-3xl text-sm shadow-xl flex items-center font-semibold justify-center cursor-pointer"
          >
            Pedir Presupuesto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
