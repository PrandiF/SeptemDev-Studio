import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-clients",
            prevEl: ".swiper-button-prev-clients",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-full w-full relative flex items-center justify-center m-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {ClientsData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-[18rem] relative group"
            >
              <img
                src={item.img}
                alt="slide_image"
                className="w-full h-[18rem] rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-50 swiper-slide-active:opacity-50 rounded-xl">
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
        <div className="swiper-pagination w-full flex items-center justify-center mt-4"></div>
        <div className="swiper-button-next-clients absolute right-5 transform  z-10">
          <BsFillArrowRightSquareFill className="w-8 h-8 text-azulado cursor-pointer" />
        </div>
        <div className="swiper-button-prev-clients absolute left-5 transform  z-10">
          <BsFillArrowLeftSquareFill className="w-8 h-8 text-azulado cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SwiperClientsResponsive;
