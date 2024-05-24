//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TitleProps = {
  title: string;
  comment: string;
};

function Title({title, comment} : TitleProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative flex justify-center"
      data-aos="fade"
      data-aos-duration="1600"
    >
      <h3 className="text-azulado font-roboto font-extrabold xl:text-[8rem] text-[3.5rem] opacity-15 tracking-widest drop-shadow-3xl">
        {title}
      </h3>
      <p className="absolute xl:top-[48%] top-[42%] xl:text-4xl text-lg  text-azulado font-semibold z-10 italic">
        {comment}
      </p>
    </div>
  );
}

export default Title;
