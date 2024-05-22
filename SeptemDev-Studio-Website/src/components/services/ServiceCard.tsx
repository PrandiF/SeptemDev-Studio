//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  img?: string;
  data_aos_delay?: string;
};

function ServiceCard({ title, description, img }: ServiceCardProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-[18%] h-[95%] p-4 bg-slate-400 bg-opacity-20 backdrop-blur-sm mb-5 rounded-xl shadow-xl hover:-translate-y-2 hover:border-8 hover:border-azuladoHover hover:shadow-2xl cursor-pointer transform duration-300"

    >
      <img src={img} className="w-[60%] flex m-auto" alt={title} />
      <h3 className="text-azulado font-roboto text-center text-2xl font-bold">
        {title}
      </h3>
      <p className="text-azulado mt-2 w-[90%] text-center flex m-auto">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
