import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import mantenimientoWeb from "../../assets/mantenimientoWeb2.png";
import redesSociales from "../../assets/redesSociales.png";
import diseñoWeb from "../../assets/desarrolloWeb.png";
import ServiceCard from "./ServiceCard";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SwiperServices() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className="flex flex-col w-screen relative">
      <div className="w-full overflow-hidden relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination-serv", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-serv",
            prevEl: ".swiper-button-prev-serv",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-full w-screen relative flex items-center justify-center m-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="swiper-button-prev-serv absolute left-5 transform z-10">
            <BsFillArrowLeftSquareFill className="w-8 h-8 cursor-pointer" />
          </div>
          <SwiperSlide className="w-[80%] h-full relative flex justify-center">
            <ServiceCard
              title="Diseño"
              description="La creación y diseño de páginas web es un servicio clave que ofrece nuestra agencia. Desarrollamos diseños personalizados, optimizamos la navegación, aseguramos la compatibilidad móvil y mejoramos la velocidad de carga."
              img={diseñoWeb}
              data-aos="fade-right"
              data-aos-delay="700"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[80%] h-full relative flex justify-center">
            <ServiceCard
              title="Mantenimiento"
              description="El mantenimiento de páginas web es un servicio esencial que ofrece nuestra agencia. Actualizamos el contenido, corregimos errores, mejoramos la seguridad y realizamos ajustes técnicos. La experiencia de tus usuarios es nuestra prioridad."
              img={mantenimientoWeb}
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[80%] h-full relative flex justify-center">
            <ServiceCard
              title="Redes Sociales"
              description="Creamos y gestionamos contenido atractivo en distintas plataformas, interactuamos con tus seguidores y planificamos estrategias personalizadas. La visibilidad de tu marca y la imagen de tu marca es nuestra prioridad."
              img={redesSociales}
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[80%] h-full relative flex justify-center">
            <ServiceCard
              title="Arreglo"
              description="Si tu web no funciona, identificamos y corregimos problemas, restauramos funcionalidades, mejoramos la seguridad y optimizamos el rendimiento. La experiencia de tus usuarios es nuestra prioridad."
              img={mantenimientoWeb}
              data-aos="fade-left"
              data-aos-delay="600"
            />
          </SwiperSlide>
          <div className="swiper-button-next-serv absolute right-5 transform  z-10">
            <BsFillArrowRightSquareFill className="w-8 h-8 cursor-pointer" />
          </div>
        </Swiper>
        {/* <div className="swiper-pagination-serv w-full flex items-center justify-center mt-4"></div> */}
      </div>
    </div>
  );
}

export default SwiperServices;
