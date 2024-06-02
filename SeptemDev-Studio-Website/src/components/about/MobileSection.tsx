import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import responsiveLight from "../../assets/responsiveLight.png";
import responsiveDark from "../../assets/responsiveDark.png";
import { useEstado } from "../consult/EstadoContext";

function MobileSection() {
  const { darkMode } = useEstado();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex xl:flex-row flex-col xl:items-start justify-evenly gap-12 xl:mt-24 mt-12">
      <div
        className="xl:w-[50%] h-full xl:p-4 flex flex-col gap-5 rounded-xl bg-transparent justify-start text-center xl:text-start"
        data-aos="fade-right"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        <h2 className="z-10 font-roboto font-extrabold text-xl">
          Estamos en todos los dispositivos
        </h2>
        <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
          Nuestra web está diseñada para adaptarse perfectamente a todos los
          dispositivos, ya sea un ordenador, una tablet o un móvil. Gracias a un
          diseño responsive, garantizamos que la experiencia del usuario sea
          óptima, independientemente del tamaño de la pantalla o el tipo de
          dispositivo que utilice. <br />
          El uso de dispositivos móviles ha crecido exponencialmente, y hoy en
          día, una gran parte del tráfico web proviene de ellos. Por eso, es
          crucial que nuestra web ofrezca una navegación rápida y eficiente en
          móviles, permitiendo a los usuarios acceder a nuestra información y
          servicios de manera cómoda y sin inconvenientes, sin importar dónde se
          encuentren.
        </p>
      </div>
      <div
        className="xl:w-[30%] w-[80%] h-full flex xl:items-center m-auto justify-center"
        data-aos="fade-left"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        <img
          src={`${darkMode ? responsiveDark : responsiveLight}`}
          className="xl:animate-float animate-float2"
        />
      </div>
    </div>
  );
}

export default MobileSection;
