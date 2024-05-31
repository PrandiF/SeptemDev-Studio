import React from "react";
import mobileWeb from "../../assets/mobileWeb.png";

function MobileSection() {
  return (
    <div className="flex xl:flex-row flex-col xl:items-center justify-evenly gap-12">
      <div className="xl:w-[50%] h-full xl:p-4 flex flex-col gap-5 rounded-xl bg-transparent justify-start text-center xl:text-start">
        <h2 className="z-10 font-roboto font-extrabold text-logoTypography text-xl">
          Estamos en todos los dispositivos
        </h2>
        <p className="z-10 font-roboto mt-5 text-logoTypography xl:text-base xl:font-medium text-sm">
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
      <div className="xl:w-[35%] w-[80%] h-full flex xl:items-start m-auto justify-center">
        <img src={mobileWeb} />
      </div>
    </div>
  );
}

export default MobileSection;
