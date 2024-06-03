import { useEffect, useState } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

type CardProps = {
  name: string;
  position: string;
  description?: string;
  picture?: HTMLImageElement | string;
  data_aos_duration?: string;
  data_aos_delay?: string;
  data_aos?: string;
  portfolio?: string
  // ModalComponent?: React.FC<{ isVisible: boolean, onClose: () => void, name: string, position: string, description?: string, portfolio?: string }>;
};

function TeamCard({
  name,
  position,
  description,
  picture,
  data_aos,
  data_aos_duration,
  data_aos_delay,
  portfolio,
  // ModalComponent
}: CardProps) {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <a href={portfolio} target="e_blank">
      <div
        className="xl:w-64 w-56 xl:h-96 h-72 rounded-lg z-10 flex relative overflow-hidden hover:cursor-pointer"
        onMouseEnter={() => setMostrarContenido(true)}
        onMouseLeave={() => setMostrarContenido(false)}
        // onClick={() => setModalVisible(true)}
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          zIndex: "10",
        }}
        data-aos={data_aos}
        data-aos-duration={data_aos_duration}
        data-aos-delay={data_aos_delay}
      >
        <div className="flex p-2 gap-1">
          <div>
            <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
        </div>

        <div
          className="absolute bg-gray-900 bottom-0 left-0 right-0 p-3 flex flex-col gap-1 z-10 transform transition-transform duration-700"
          style={{
            transform: mostrarContenido ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <span className="text-beige font-roboto font-extrabold text-2xl drop-shadow-2xl">
            {name}
          </span>
          <span className="text-white font-roboto font-bold text-lg">
            {position}
          </span>
          <p className="text-white font-roboto">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default TeamCard;
