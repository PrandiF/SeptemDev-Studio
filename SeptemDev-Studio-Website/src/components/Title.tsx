//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type TitleProps = {
  title: string;
  comment: string;
  className?: string;
};

function Title({ title, comment, className }: TitleProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`relative flex justify-center xl:pb-0 ${className}`}
      data-aos="fade"
      data-aos-duration="1600"
    >
      <h3 className="text-logoTypography font-fugaz-one font-extrabold xl:text-[8rem] text-[3rem] opacity-15 tracking-widest drop-shadow-3xl">
        {title}
      </h3>
      <p className="absolute xl:top-[48%] top-[42%] xl:text-4xl text-lg  text-logoTypography font-semibold z-10 italic">
        {comment}
      </p>
    </div>
  );
}

export default Title;
