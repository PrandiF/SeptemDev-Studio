import UsCardHorizontal from "./UsCardHorizontal";
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
          <div className="flex flex-row h-1/4 justify-between gap-4">
            <img
              src={logoPng}
              className="rounded-lg w-[20%] dark:invert"
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-delay="300"
            />
            <div
              className="w-3/4 rounded-lg z-10 p-4 bg-logoOpacity dark:bg-[#78767635] backdrop-filter backdrop-blur"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-delay="300"
            >
              <h2 className="z-10 font-roboto font-extrabold text-xl">
                ¿Cuál es nuestro sistema de pagos?
              </h2>
              <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
                Nuestra agencia ofrece una membresía a un valor fijo. Esta
                membresía incluye el diseño y desarrollo de una página web desde
                cero, adaptada a las necesidades y deseos específicos de cada
                cliente. Una vez que la página está en funcionamiento,
                proporcionamos un mantenimiento continuo para asegurar que todo
                funcione correctamente y para realizar cualquier ajuste o mejora
                que el cliente desee con el tiempo.
                <br />
                Ofrecemos dos opciones de membresía: mensual o anual, según la
                preferencia del cliente. No hay un pago inicial. Nuestro enfoque
                garantiza que la página web no solo se lance con éxito, sino que
                también se mantenga actualizada, segura y eficiente, permitiendo
                a nuestros clientes enfocarse en su negocio sin preocuparse por
                los aspectos técnicos de su presencia en línea.
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
              ¿En qué tipo de cliente nos enfocamos?
            </h2>
            <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">
              Nos enfocamos en clientes que desean una página web estética y
              priorizan la experiencia del usuario. Buscamos trabajar con
              aquellos que valoran un diseño atractivo y funcional, que buscan
              destacar en su mercado y proporcionar una navegación intuitiva y
              agradable para sus visitantes. Nuestros clientes son empresas y
              emprendedores que entienden la importancia de una primera
              impresión positiva y quieren ofrecer una experiencia online que
              refleje profesionalismo y atención al detalle.
            </p>
          </div>
        </div>
        <MobileSection />
      </div>

      <div className="xl:hidden mt-[30px] flex flex-col gap-4 items-start justify-evenly w-[90%] h-full my-0 mx-auto">
        <div className="w-full h-[50%] flex flex-col items-center gap-4 mb-4">
          <UsCardHorizontal
            title="¿Cómo Empezamos?"
            content="  SeptemDev Studio comenzó como un sueño compartido entre dos
            amigos, graduados del Bootcamp de JavaScript de Plataforma5. Desde
            el primer día, nos unió la pasión por la programación y la
            motivacion y deseo de crear soluciones tecnológicas que marcaran
            la diferencia. Así, entre largas noches de codificación y debates
            sobre mejores prácticas, nació la idea de SeptemDev Studio, con el
            objetivo de llevar nuestras ideas y conocimientos al mundo real,
            ayudando a empresas y personas a materializar sus proyectos
            tecnológicos."
            data_aos="fade-right"
            data_aos_duration="1600"
            data_aos_delay="200"
          />
          <UsCardHorizontal
            title="¿Cuál es nuestro sistema de pagos?"
            content="Nuestra agencia ofrece una membresía a un valor fijo. Esta membresía incluye el diseño y
            desarrollo de una página web desde cero, adaptada a las
            necesidades y deseos específicos de cada cliente. Una vez que la
            página está en funcionamiento, proporcionamos un mantenimiento
            continuo para asegurar que todo funcione correctamente y para
            realizar cualquier ajuste o mejora que el cliente desee con el
            tiempo.
            Ofrecemos dos opciones de membresía: mensual o
            anual, según la preferencia del cliente. No hay un pago inicial.
            Nuestro enfoque garantiza que la página web no solo se lance con
            éxito, sino que también se mantenga actualizada, segura y
            eficiente, permitiendo a nuestros clientes enfocarse en su
            negocio sin preocuparse por los aspectos técnicos de su
            presencia en línea."
            data_aos="fade-left"
            data_aos_duration="1600"
            data_aos_delay="400"
          />
          <UsCardHorizontal
            title="¿En qué tipo de cliente nos enfocamos?"
            content=" Nos enfocamos en clientes que desean una página web estética y
            priorizan la experiencia del usuario. Buscamos trabajar con
            aquellos que valoran un diseño atractivo y funcional, que buscan
            destacar en su mercado y proporcionar una navegación intuitiva y
            agradable para sus visitantes. Nuestros clientes son empresas y
            emprendedores que entienden la importancia de una primera
            impresión positiva y quieren ofrecer una experiencia online que
            refleje profesionalismo y atención al detalle."
            data_aos="fade-right"
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
