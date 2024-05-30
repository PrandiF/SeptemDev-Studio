type CardHorizontal = {
  title: string;
  content: string;
  data_aos_duration: string;
  data_aos_delay: string;
  data_aos: string;
};

import { useEffect } from 'react';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function UsCardHorizontal({ title, content }: CardHorizontal) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-full w-full rounded-lg z-10 p-4 bg-[#78767635] backdrop-filter backdrop-blur shadow-2xl">
      <h2 className="z-10 font-roboto font-extrabold text-logoTypography text-xl">{title}</h2>
      <p className="z-10 font-roboto mt-5 xl:text-base xl:font-medium text-sm text-logoTypography">{content}</p>
    </div>
  );
}

export default UsCardHorizontal;
