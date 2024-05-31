import UsCardHorizontal from "./UsCardHorizontal";
// import UsCardVertical from "./UsCardVertical";
import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center flex-col relative bg-gray-100 pb-[35px] rounded-3xl my-[-20px] pt-[30px] z-10">
      <Title title="NOSOTROS" comment="Descubrí como trabajamos" />

      <div
        className="hidden xl:flex flex-col gap-4 items-start w-[80%] mx-auto pb-24 pt-12"
        data-aos="fade-up"
      >
        <div className="w-full h-full flex gap-4" data-aos="fade-up">
          <UsCardHorizontal
            title="Cómo Empezamos?"
            content="SeptemDev Studio comenzó como un sueño compartido entre dos amigos, graduados del Bootcamp de JavaScript de Plataforma5. Desde el primer día, nos unió la pasión por la programación y la motivacion y deseo de crear soluciones tecnológicas que marcaran la diferencia. Así, entre largas noches de codificación y debates sobre mejores prácticas, nació la idea de SeptemDev Studio, con el objetivo de llevar nuestras ideas y conocimientos al mundo real, ayudando a empresas y personas a materializar sus proyectos tecnológicos."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="200"
          />
          <UsCardHorizontal
            title="Productización de servicios"
            content="Lo que ofrece la agencia es una membresia a un valor fijo mensual para trabajar partner con el cliente. Esta membresia incluye el diseño y desarrollo de la pagina web desde 0 y luego un mantenimiento mensual de esta misma, con el fin de corregir errores que se pueden ir generando con el tiempo y/o agregar lo que el cliente desee."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="400"
          />
        </div>
        <div className="w-full h-full flex items-start" data-aos="fade-up">
          <UsCardHorizontal
            title="Qué es SAAS?"
            content="El software como servicio (SaaS) es un modelo de entrega de software basado en la nube donde el proveedor desarrolla, mantiene y actualiza el software, poniéndolo a disposición de los clientes a través de Internet con un sistema de pago por uso. El proveedor administra todo el hardware, software y seguridad, permitiendo a los clientes reducir costos y mejorar la implementación y actualización de soluciones empresariales más rápidamente que con sistemas locales."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="300"
          />
        </div>
      </div>

      <div
        className="xl:hidden mt-[30px] flex flex-col gap-4 items-start justify-evenly w-[90%] h-full my-0 mx-auto"
        data-aos="fade-up"
      >
        <div
          className="w-full h-[50%] flex flex-col items-center gap-4 mb-4"
          data-aos="fade-up"
        >
          <UsCardHorizontal
            title="Cómo Empezamos?"
            content="SeptemDev Studio comenzó como un sueño compartido entre dos amigos, graduados del Bootcamp de JavaScript de Plataforma5. Desde el primer día, nos unió la pasión por la programación y la motivacion y deseo de crear soluciones tecnológicas que marcaran la diferencia. Así, entre largas noches de codificación y debates sobre mejores prácticas, nació la idea de SeptemDev Studio, con el objetivo de llevar nuestras ideas y conocimientos al mundo real, ayudando a empresas y personas a materializar sus proyectos tecnológicos."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="200"
          />
          <UsCardHorizontal
            title="Productización de servicios"
            content="Lo que ofrece la agencia es una membresia a un valor fijo mensual para trabajar partner con el cliente. Esta membresia incluye el diseño y desarrollo de la pagina web desde 0 y luego un mantenimiento mensual de esta misma, con el fin de corregir errores que se pueden ir generando con el tiempo y/o agregar lo que el cliente desee."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="400"
          />
          <UsCardHorizontal
            title="Qué es SAAS?"
            content="El software como servicio (SaaS) es un modelo de entrega de software basado en la nube donde el proveedor desarrolla, mantiene y actualiza el software, poniéndolo a disposición de los clientes a través de Internet con un sistema de pago por uso. El proveedor administra todo el hardware, software y seguridad, permitiendo a los clientes reducir costos y mejorar la implementación y actualización de soluciones empresariales más rápidamente que con sistemas locales."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
