
import TeamCard from "./TeamCard";
import franPic from "../../assets/fran.jpg";
import lucasPic from "../../assets/lucas.jpg";
import camilaPic from "../../assets/cami.jpg";

import { useEffect } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title";

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="xl:w-screen xl:h-screen w-full min-h-screen flex flex-col pb-10 xl:relative">
      <div className="bg-gradient-to-t from-transparent to-[#e5e7eb] flex w-full items-end h-8 z-10 absolute pt-5"></div>
      <Title title="STAFF" comment="Ellos lo harán realidad..." />
      <p
        className="text-azulado w-[70%] flex flex-col m-auto text-center font-medium xl:text-lg text:sm"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        Conocé al equipo que estará acompañandote en cada paso del camino.
        Franco, Lucas y Camila son expertos apasionados que se dedican a
        brindarte el mejor servicio y atención personalizada. Están acá para
        escucharte, entender tus necesidades y trabajar juntos para lograr tus
        objetivos.<span className="xl:flex xl:items-center xl:justify-center hidden"> ¡Estamos emocionados de conocerte y comenzar esta aventura!</span> 
      </p>
      <div className="w-full h-full flex items-start justify-center z-10 xl:mt-20 mt-12 flex-wrap gap-4 mx-auto">
        <TeamCard
          name="Franco Prandi"
          position="Co-Founder"
          description="Alto capo, juega re bien al basquet"
          picture={franPic}
          portfolio="https://mi-portfolio-fp.netlify.app/"
          data_aos="fade-right"
          data_aos_duration="1700"
          data_aos_delay="400"
        />

        <TeamCard
          name="Lucas Glave"
          position="Co-Founder"
          description="Un poco menos capo que el de al lado"
          picture={lucasPic}
          data_aos="fade-up"
          data_aos_duration="1700"
          data_aos_delay="700"
        />

        <TeamCard
          name="Camila Rojas"
          position="Comunity Manager"
          description="Se mando unos logos medio pelo"
          picture={camilaPic}
          data_aos="fade-left"
          data_aos_duration="1700"
          data_aos_delay="400"
        />
      </div>
    </div>
  );
}

export default Team;
