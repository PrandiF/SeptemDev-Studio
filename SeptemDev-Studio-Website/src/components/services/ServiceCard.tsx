//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  img?: string;
  data_aos?: string;
  data_aos_delay?: string;
};

function ServiceCard({ title, description, img, data_aos, data_aos_delay }: ServiceCardProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="xl:w-[18%] w-[65%] h-full"
      data-aos={data_aos}
      data-aos-duration="1600"
      data-aos-delay={data_aos_delay}
    >
      <div className="w-full h-full p-4 bg-beigeCards bg-opacity-20 backdrop-blur-sm rounded-xl shadow-xl xl:hover:-translate-y-2 xl:hover:shadow-2xl transform duration-300 flex flex-col items-center">
        <img src={img} className="w-[40%] max-h-40 object-contain" alt={title} />
        <h3 className="text-logoTypography font-roboto text-center text-2xl font-bold mt-4">
          {title}
        </h3>
        <p className="text-logoTypography mt-2 w-[90%] text-center text-sm xl:text-base flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
