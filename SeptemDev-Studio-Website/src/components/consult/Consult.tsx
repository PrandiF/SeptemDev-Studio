import { useEffect } from "react";
import ConsultForm from "./ConsultForm";
import ConsultForm2 from "./ConsultForm2";

import AOS from "aos";
import "aos/dist/aos.css";

function Consult() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen relative bg-gray-100 flex justify-center items-center">
      <div className="flex justify-evenly items-start w-full">
        <div className="flex flex-col w-[50%] gap-8 text-start items-start">
          <h1
            className="text-azulado text-6xl font-extrabold flex drop-shadow-3xl font-roboto"
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="200"
          >
            Ponete en contacto...
          </h1>
          <h3
            className="text-azulado text-xl font-bold flex drop-shadow-3xl"
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="300"
          >
            ¡Marcá la diferencia!
          </h3>
          <p
            className="text-azulado"
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
