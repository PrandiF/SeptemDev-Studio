import imgBackground from "../../assets/fondoHome2.png";
import TeamCard from "./TeamCard";
import franPic from "../../assets/fran.jpg";
import lucasPic from "../../assets/lucas.jpg";
import camilaPic from "../../assets/cami.jpg";

import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col pb-10 relative">
      {/* <img
        src={imgBackground}
        alt="fondo"
        className="absolute w-screen h-screen z-0"
      /> */}
      {/* <div
        className="flex items-center justify-center m-auto  w-[30%] h-[10%] place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#a5a4a4e9] to-[#d5d5d5af] bg-clip-border text-white shadow-lg shadow-[#d5d5d535]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h3 className="block font-roboto text-2xl font-bold drop-shadow-2xl text-slate-100">
          EQUIPO
        </h3>
      </div> */}

      <div className="bg-gradient-to-t from-transparent to-[#e5e7eb] flex w-full items-end h-8 z-10 absolute"></div>

      <div
        className="flex mt-1 justify-center"
        data-aos="fade"
        data-aos-duration="1600"
      >
        <h3 className=" text-azulado font-roboto font-extrabold text-[8.5rem] opacity-30 tracking-widest drop-shadow-3xl">
          STAFF
        </h3>
        <p className="absolute top-[50%] text-4xl text-azulado font-semibold z-10 italic">
          Ellos lo harán realidad...
        </p>
      </div>

      <p
        className="text-azulado w-[70%] flex m-auto text-center font-medium text-lg"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        Conocé al equipo que estará acompañandote en cada paso del camino. Franco,
        Lucas y Camila son expertos apasionados que se dedican a brindarte el
        mejor servicio y atención personalizada. Están acá para escucharte,
        entender tus necesidades y trabajar juntos para lograr tus objetivos.
        ¡Estamos emocionados de conocerte y comenzar esta emocionante aventura
        juntos!
      </p>
      <div className="w-full h-full items-start justify-center z-10 mt-20 flex gap-4">
        <TeamCard
          name="Franco Prandi"
          position="Co-Founder"
          description="Alto capo, juega re bien al basquet"
          picture={franPic}
          portfolio="https://mi-portfolio-fp.netlify.app/"
          data_aos_duration="1500"
          data_aos_delay="200"
        />
        <TeamCard
          name="Lucas Glave"
          position="Co-Founder"
          description="Un poco menos capo que el de al lado"
          picture={lucasPic}
          data_aos_duration="1500"
          data_aos_delay="500"
        />
        <TeamCard
          name="Camila Rojas"
          position="Comunity Manager"
          description="Se mando unos logos medio pelo"
          picture={camilaPic}
          data_aos_duration="1500"
          data_aos_delay="800"
        />
      </div>
    </div>
  );
}

export default Team;
