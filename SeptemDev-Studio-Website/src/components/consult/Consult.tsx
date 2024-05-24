import { useEffect } from "react";
import ConsultForm2 from "./ConsultForm2";

import AOS from "aos";
import "aos/dist/aos.css";

function Consult() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen relative bg-gray-100 flex justify-center items-center">
      <div className="flex xl:flex-row flex-col justify-evenly xl:items-start items-center w-full">
        <div className="flex flex-col xl:w-[50%] gap-8 xl:items-start items-center">
          <div>
            <h1
              className="text-azulado xl:text-6xl text-4xl font-extrabold flex font-roboto"
              data-aos="fade"
              data-aos-duration="1600"
              data-aos-delay="200"
            >
              Ponete en contacto...
            </h1>
            <h3
              className="text-beige text-xl font-bold flex xl:mr-0 xl:justify-start justify-center"
              data-aos="fade"
              data-aos-duration="1600"
              data-aos-delay="300"
            >
              ¡Marcá la diferencia!
            </h3>
          </div>

          <p
            className="text-azulado xl:font-medium xl:text-base text-sm xl:text-start text-center"
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            Si estás listo para mejorar tu presencia en línea y alcanzar nuevos
            objetivos, no dudes en ponerte en contacto con nosotros. Completá el
            formulario a continuación y uno de nuestros expertos se comunicará
            con vos para discutir cómo podemos colaborar. ¡Esperamos trabajar
            juntos y hacer realidad tus ideas!
          </p>
        </div>
        <ConsultForm2 />
      </div>
      <div className="bg-gradient-to-b from-transparent to-[#e5e7eb] w-full h-8 absolute bottom-0"></div>
    </div>
  );
}

export default Consult;