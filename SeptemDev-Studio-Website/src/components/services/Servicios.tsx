import ServiceCard from "./ServiceCard";
import mantenimientoWeb from "../../assets/mantenimientoWeb2.png"
import redesSociales from "../../assets/redesSociales.png";
import diseñoWeb from "../../assets/diseñoWeb.png";


//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Servicios() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen justify-between bg-gray-100 relative flex flex-col">
      <div
        className="flex mt-8 justify-center"
        data-aos="fade"
        data-aos-duration="1600"
      >
        <h3 className=" text-azulado font-roboto font-extrabold text-[8.5rem] opacity-10 tracking-widest drop-shadow-3xl">
          SERVICIOS
        </h3>
        <p className="absolute top-[48%] text-4xl text-azulado font-semibold z-10 italic">
          Qué hacemos <span className="">por vos?</span>
        </p>
      </div>

      <p
        className="text-azulado w-[70%] flex mx-auto text-center font-medium text-lg"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        SeptemDev Studio ofrece una gama completa de servicios digitales
        diseñados para potenciar tu presencia en línea y asegurar el éxito de tu
        negocio. Entre nuestros servicios se incluyen el Diseño Web,
        Mantenimiento de sitios, Gestión de Redes Sociales y Arreglo de Páginas
        Web. Estamos comprometidos en proporcionar soluciones integrales y
        personalizadas que satisfagan tus necesidades específicas y mejoren la
        experiencia de tus usuarios.
      </p>
      <div
        className="w-full h-[50%] flex  justify-evenly "
        // data-aos="fade"
        // data-aos-duration="1600"
        // data-aos-delay="400"
      >
        <ServiceCard
          title="Diseño"
          description="
          La creación y diseño de páginas web es un servicio clave que ofrece nuestra agencia. Desarrollamos diseños personalizados, optimizamos la navegación, aseguramos la compatibilidad móvil y mejoramos la velocidad de carga."
          img={diseñoWeb}
          data_aos="fade-right"
          data_aos_delay="700"
        />
        <ServiceCard
          title="Mantenimiento"
          description="
          El mantenimiento de páginas web es un servicio esencial que ofrece nuestra agencia. Actualizamos el contenido, corregimos errores, mejoramos la seguridad y realizamos ajustes técnicos. La experiencia de tus usuarios es nuestra prioridad."
          img={mantenimientoWeb}
          data_aos="fade-right"
          data_aos_delay="400"
        />
        <ServiceCard
          title="Redes Sociales"
          description="Creamos y gestionamos contenido atractivo en distintas plataformas, interactuamos con tus seguidores y planificamos estrategias personalizadas.  La visibilidad de tu marca y la imagen de tu marca es nuestra prioridad."
          img={redesSociales}
          data_aos="fade-left"
          data_aos_delay="500"
        />
        <ServiceCard
          title="Arreglo"
          description="Si tu web no funciona, identificamos y corregimos problemas, restauramos funcionalidades, mejoramos la seguridad y optimizamos el rendimiento. La experiencia de tus usuarios es nuestra prioridad."
          img={mantenimientoWeb}
          data_aos="fade-left"
          data_aos_delay="600"
        />
      </div>
    </div>
  );
}

export default Servicios;
