import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { ClientsData } from "./ClientsData";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ActiveSlider() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div className="flex flex-col w-screen">
      {/* <h1
        className="font-roboto text-azulado drop-shadow-3xl z-10 font-bold text-2xl text-center mb-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Ellos confiaron en nosotros...
      </h1> */}
      <div className="w-full overflow-hidden relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            // modifier: 1,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel,
            Keyboard,]}
          className="h-[23rem] w-screen relative flex items-center justify-center m-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {ClientsData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-[30rem] h-[18rem] relative group"
            >
              <img
                src={item.img}
                alt="slide_image"
                className="w-[30rem] h-[18rem] rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-50 swiper-slide-active:opacity-50 rounded-xl">
                <div className="w-full h-full flex flex-col gap-1 items-center justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 swiper-slide-active:opacity-100">
                  <h2 className="w-full p-1 text-center">{item.title}</h2>
                  <button
                    className="w-[30%] p-1 rounded-xl bg-azulado mb-4"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    Visitar Sitio
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
     

      <div
        className="h-fit w-[20%] flex items-center justify-around m-auto"
        data-aos="fade-up"
      >
        {/* <BsFillArrowLeftSquareFill className="relative flex items-center justify-center w-10 h-8 rounded-lg swiper-button-prev-custom bg-azulado cursor-pointer overflow-hidden"/> */}
        <div className="swiper-pagination absolute w-full flex items-center justify-center gap-1 m-auto"></div>
        {/* <BsFillArrowRightSquareFill className="relative flex items-center justify-center w-10 h-8 rounded-lg swiper-button-next-custom bg-azulado cursor-pointer overflow-hidden" /> */}
      </div>
    </div>
  );
}

export default ActiveSlider;
