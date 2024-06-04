import { useEffect } from 'react';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

type CardHorizontal = {
  title: string;
  content: string;
  data_aos_duration: string;
  data_aos_delay: string;
  data_aos: string;
};
function UsCardHorizontal({ title, content, data_aos, data_aos_duration, data_aos_delay }: CardHorizontal) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-full w-full rounded-lg z-10 p-4 bg-[#78767635] backdrop-filter backdrop-blur" data-aos={data_aos} data-aos-duration={data_aos_duration} data-aos-delay={data_aos_delay}>
      <h2 className="z-10 font-roboto font-extrabold text-xl">{title}</h2>
      <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm">{content}</p>
    </div>
  );
}

export default UsCardHorizontal;
