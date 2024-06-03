import { useEffect } from 'react';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

type CardProps = {
  name: string;
  position: string;
  description?: string;
  picture?: HTMLImageElement | string;
  data_aos_duration?: string;
  data_aos_delay?: string;
  data_aos?: string;
  portfolio?: string;
  // ModalComponent?: React.FC<{ isVisible: boolean, onClose: () => void, name: string, position: string, description?: string, portfolio?: string }>;
};

function TeamCard2({
  name,
  position,
  description,
  picture,
  data_aos,
  data_aos_duration,
  data_aos_delay,
  portfolio,
}: // ModalComponent
CardProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const imageUrl = typeof picture === 'string' ? picture : picture?.src;
  return (
    <div
      className="group  before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white dark:from-neutral-500 via-logo dark:via-neutral-800 to-blue-100 dark:to-neutral-600 before:absolute before:top-0 xl:w-80 w-72 h-80 relative bg-logo flex flex-col items-center justify-between py-4 gap-2 text-center rounded-2xl overflow-hidden shadow-2xl"
      data-aos={data_aos}
      data-aos-duration={data_aos_duration}
      data-aos-delay={data_aos_delay}
    >
      <img
        src={imageUrl}
        className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-125 group-hover:-translate-y-6 transition-all duration-500"
      />
      <div className="z-10 group-hover:-translate-y-4 transition-all duration-500 text-logoTypography dark:group-hover:text-logo">
        <span className="text-2xl font-bold">{name}</span>
        <p className="font-semibold">{position}</p>
        <p>{description}</p>
      </div>
      <a
        className="w-32 h-8 bg-gray-image dark:bg-footer-dark hover:scale-[1.02] text-white font-semibold transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer"
        href={portfolio}
        target="e_blank"
      >
        Portfolio
      </a>
    </div>
  );
}

export default TeamCard2;
