import UsCardHorizontal from "./UsCardHorizontal";
// import UsCardVertical from "./UsCardVertical";
import { useEffect } from "react";
import logoPng from "../../assets/logoPng.png";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title";
import MobileSection from "./MobileSection";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center flex-col relative bg-gray-100 dark:bg-fondo-dark pb-[35px] rounded-3xl my-[-20px] pt-[30px] z-10">
      <Title title="NOSOTROS" comment="Descubrí como trabajamos" />

      <div
        className="hidden xl:flex flex-col gap-4 items-start w-[80%] mx-auto pb-24 pt-12"
        data-aos="fade-up"
      >
        <div
          className="w-full h-full items-end p-8 flex flex-col gap-4"
          data-aos="fade-up"
        >
          <div
            className="h-1/3 w-full rounded-lg z-10 p-4 bg-logoOpacity dark:bg-[#78767635] backdrop-filter backdrop-blur"
            data-aos="fade"
            data-aos-duration="1600"
          >
            <h2 className="z-10 font-roboto font-extrabold text-xl">
              ¿Cómo Empezamos?
            </h2>
            <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
              SeptemDev Studio comenzó como un sueño compartido entre dos
              amigos, graduados del Bootcamp de JavaScript de Plataforma5. Desde
              el primer día, nos unió la pasión por la programación y la
              motivacion y deseo de crear soluciones tecnológicas que marcaran
              la diferencia. Así, entre largas noches de codificación y debates
              sobre mejores prácticas, nació la idea de SeptemDev Studio, con el
              objetivo de llevar nuestras ideas y conocimientos al mundo real,
              ayudando a empresas y personas a materializar sus proyectos
              tecnológicos.
            </p>
          </div>
          <div className="flex flex-row h-1/3 justify-between gap-4">
            <img
              src={logoPng}
              className="rounded-lg w-1/3"
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-delay="300"
            />
            <div
              className="w-full rounded-lg z-10 p-4 bg-logoOpacity dark:bg-[#78767635] backdrop-filter backdrop-blur"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-delay="300"
            >
              <h2 className="z-10 font-roboto font-extrabold text-xl">
                ¿Qué es SAAS?
              </h2>
              <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
                El software como servicio (SaaS) es un modelo de entrega de
                software basado en la nube donde el proveedor desarrolla,
                mantiene y actualiza el software, poniéndolo a disposición de
                los clientes a través de Internet con un sistema de pago por
                uso. El proveedor administra todo el hardware, software y
                seguridad, permitiendo a los clientes reducir costos y mejorar
                la implementación y actualización de soluciones empresariales
                más rápidamente que con sistemas locales.
              </p>
            </div>
          </div>
          <div
            className="h-1/3 w-full rounded-lg z-10 p-4 bg-logoOpacity dark:bg-[#78767635] backdrop-filter backdrop-blur"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            <h2 className="z-10 font-roboto font-extrabold text-xl">
              ¿En que tipo de cliente nos enfocamos?
            </h2>
            <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
              Lo que ofrece la agencia es una membresia a un valor fijo mensual
              para trabajar partner con el cliente. Esta membresia incluye el
              diseño y desarrollo de la pagina web desde 0 y luego un
              mantenimiento mensual de esta misma, con el fin de corregir
              errores que se pueden ir generando con el tiempo y/o agregar lo
              que el cliente desee.
            </p>
          </div>
        </div>
        <MobileSection />
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
        <MobileSection />
      </div>
    </div>
  );
}

export default About;
