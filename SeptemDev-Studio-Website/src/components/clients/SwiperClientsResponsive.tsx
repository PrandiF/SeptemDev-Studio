import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-coverflow";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { ClientsData } from "./ClientsData";

function SwiperClientsResponsive() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className="xl:hidden flex flex-col w-screen relative">
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
        pagination={{ dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination]}
        className="h-full w-[90%] relative flex items-center justify-center m-auto rounded-xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {ClientsData.map((item, index) => (
          <SwiperSlide
            key={`${index}-${item}`}
            className="w-[90%] h-[16rem] relative group rounded-xl"
          >
            <img
              src={item.img}
              alt="slide_image"
              className="w-full h-[18rem] rounded-xl object-cover"
            />
            <div className="hidden xl:absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-50 swiper-slide-active:opacity-50 rounded-xl">
              <div className="w-full h-full flex flex-col gap-1 items-center justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 swiper-slide-active:opacity-100">
                <h2 className="w-full p-1 text-center">{item.title}</h2>
                <button
                  className="w-[30%] p-1 rounded-xl bg-azulado mb-4"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  Visitar Sitio
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination w-full flex items-center justify-center mt-4 z-10 relative"></div>
    </div>
  );
}

export default SwiperClientsResponsive;
