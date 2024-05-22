type CardHorizontal = {
  title: string;
  content: string;
  data_aos_duration: string;
  data_aos_delay: string;
};

import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

function UsCardHorizontal({
  title,
  content,
  data_aos_delay,
  data_aos_duration,
}: CardHorizontal) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="h-[50%] w-full rounded-lg z-10 p-4 bg-[#78767635] backdrop-filter backdrop-blur shadow-2xl"
      data-aos="fade-up"
      data-aos-deration={data_aos_duration}
      data-aos-delay={data_aos_delay}
    >
      <h2
        className="z-10 font-roboto font-extrabold"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="400"
      >
        {title}
      </h2>
      <p
        className="z-10 font-roboto mt-5"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="650"
      >
        {content}
      </p>
    </div>
  );
}

export default UsCardHorizontal;
