import TeamCard from './TeamCard';
import TeamCard2 from './TeamCard2';
import franPic from '../../assets/fran.jpg';
import lucasPic from '../../assets/lucas.png';
import camilaPic from '../../assets/cami.png';
import Title from '../Title';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModalFran from './Fran/ModalFran';

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="xl:w-screen xl:h-screen w-full min-h-screen flex flex-col pb-12 xl:mb-16 xl:relative">
      {/* <div className="bg-gradient-to-t from-transparent to-gray-100 flex w-full items-end h-8 z-10 absolute pt-5"></div> */}
      <Title title="STAFF" comment="Ellos lo harán realidad..." className='mt-12'/>
      <p
        className="text-azulado xl:font-medium xl:text-base text-sm  text-center m-auto w-[90%] xl:w-[65%] mb-2"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        Conocé al equipo que estará acompañandote en cada paso del camino. Franco, Lucas y Camila
        son expertos apasionados que se dedican a brindarte el mejor servicio y atención
        personalizada. Están acá para escucharte, entender tus necesidades y trabajar juntos para
        lograr tus objetivos.
        <span className="xl:flex xl:items-center xl:justify-center hidden">
          ¡Estamos emocionados de conocerte y comenzar esta aventura!
        </span>
      </p>
      {/* DESKTOP */}
      <div className="xl:hidden w-full h-full flex items-start justify-center z-10 mt-20  flex-wrap gap-4 mx-auto">
        <TeamCard2
          name="Franco Prandi"
          position="Co-Founder"
          description="Desarrollador FullStack"
          picture={franPic}
          portfolio='https://mi-portfolio-fp.netlify.app/'
          data_aos="fade-up"
          data_aos_duration="1700"
          data_aos_delay="400"
        />
        <TeamCard2
          name="Lucas Glave"
          position="Co-Founder"
          description="Un poco menos capo que el de al lado"
          picture={lucasPic}
          data_aos="fade-up"
          data_aos_duration="1700"
          data_aos_delay="700"
        />
        <TeamCard2
          name="Camila Rojas"
          position="Comunity Manager"
          description="Se mando unos logos medio pelo"
          picture={camilaPic}
          data_aos="fade-up"
          data_aos_duration="1700"
          data_aos_delay="400"
        />
      </div>

      {/* MOBILE */}
      <div className="hidden w-full h-full xl:flex items-start justify-center z-10  mt-12 flex-wrap gap-4 mx-auto">
        <TeamCard2
          name="Franco Prandi"
          position="Co-Founder"
          description="Desarrollador FullStack"
          picture={franPic}
          portfolio='https://mi-portfolio-fp.netlify.app/'
          data_aos="fade-right"
          data_aos_duration="1700"
          data_aos_delay="400"
        />
        <TeamCard2
          name="Lucas Glave"
          position="Co-Founder"
          description="Un poco menos capo que el de al lado"
          picture={lucasPic}
          data_aos="fade-up"
          data_aos_duration="1700"
          data_aos_delay="700"
        />
        <TeamCard2
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

ReactDOM.render(<Team />, document.getElementById('root'));

export default Team;
