import imgBackground from "../../assets/fondoHome.png";
import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
      <div className="w-screen h-screen relative flex flex-col items-center justify-center ">
        <img
          src={imgBackground}
          alt="fondo"
          className="fixed w-screen h-screen z-0 bg-gradient-to-b from-transparent to-[#f6e1ce]"
        />

        <div className="flex flex-col z-10 gap-4 mb-auto">
          <h1
            className="text-azulado z-10 text-4xl font-extrabold flex m-auto mt-32 drop-shadow-3xl font-roboto"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¿Querés llevar tu negocio al siguiente nivel?
          </h1>
          <h1
            className="text-azulado z-10 text-4xl font-extrabold flex m-auto drop-shadow-3xl font-roboto"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            ¡Diseñamos tu éxito digital!
          </h1>
          <h4
            className="flex m-auto z-10 text-[#55627E] text-center mt-5 font-medium"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="700"
          >
            Descubrí como podemos convertir tus objetivos en realidad y
            construir juntos el éxito que merecés.
          </h4>
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
              className="w-24 h-10 bg-beige hover:bg-transparent hover:scale-105 hover:border hover:border-beige hover:text-beige transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer"
            >
              Consulta
            </Link>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={700}
              className="w-24 h-10 bg-gris hover:bg-grisHover hover:scale-105 transform duration-300 text-azulado rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer"
            >
              Reunión
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-[#e5e7eb] flex w-full items-end h-8 z-10"></div>
      </div>
    
  );
}

export default Home;
