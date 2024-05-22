import imgBackground from "../../assets/fondo2.jpg";
import ActiveSlider from "./ActiveSlider";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative bg-gray-200">
      {/* <img
        src={imgBackground}
        alt="fondo"
        className="absolute w-screen h-screen z-0"
      /> */}
      <div
        className="flex flex-col justify-center items-center z-10 relative"
        data-aos="fade"
        data-aos-duration="1600"
      >
        <div className="relative z-10 flex justify-center">
          <h3 className="text-azulado font-roboto font-extrabold text-[8.5rem] opacity-30 tracking-widest drop-shadow-3xl">
            CLIENTES
          </h3>
          <p className="absolute top-[48%] text-4xl text-azulado font-semibold italic">
           Ellos confiaron en nosotros
          </p>
        </div>
      </div>

      <ActiveSlider />
    </div>
  );
}

export default Clients;
