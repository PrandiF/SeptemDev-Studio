import imgBackground from "../../assets/fondoHome.png";
import { useEffect } from "react";
import donBasilio from "../../assets/Copia de favicon.png";
import bresh from "../../assets/bresh.jpeg";
import motorville from "../../assets/motorville_sa_logo.jpeg";
import bsasCars from "../../assets/bsasCars.jpg";
import septemDev from "../../assets/Captura de pantalla 2024-04-12 a la(s) 17.51.08.png";
import laMala from "../../assets/laMala.png";
import salvadori from "../../assets/Copia de fav.png";
import tacuara from "../../assets/tacuara.jpeg";
import { Link } from "react-scroll";
import LogoCarousel from "../about/LogosCarrousel";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <img
        src={imgBackground}
        alt="fondo"
        className="fixed w-screen h-screen z-0 bg-gradient-to-b from-transparent to-[#f6e1ce] object-cover"
      />

      <div className="flex flex-col z-10 gap-4 mb-auto">
        <div className="relative flex  flex-col items-center justify-center xl:mt-48 mt-28 px-2">
          <h1
            className="text-azulado z-10 xl:text-4xl text-2xl text-center font-extrabold flex m-auto font-fugaz-one"
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
            className="flex items-center justify-center m-auto z-10 text-[#55627E] text-center mt-10 font-medium"
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
            className="w-24 h-10 bg-beige-image hover:scale-[1.02] transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer"
          >
            Consulta
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={700}
            className="w-24 h-10 bg-gray-image hover:scale-[1.02] transform duration-300 text-azulado rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer"
          >
            Reunión
          </Link>
        </div>
      </div>
      <div className="relative xl:hidden">
        <LogoCarousel
          logos={[
            donBasilio,
            bresh,
            motorville,
            bsasCars,
            septemDev,
            laMala,
            tacuara,
            salvadori,
            donBasilio,
            bresh,
            motorville,
            bsasCars,
            septemDev,
            laMala,
            tacuara,
            salvadori,
          ]}
        />
      </div>
      <div className="bg-gradient-to-b from-transparent to-logo flex w-full items-end h-8 z-10"></div>
    </div>
  );
}

export default Home;
