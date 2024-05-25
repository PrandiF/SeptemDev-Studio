import ActiveSlider from './ActiveSlider';
import { useEffect } from 'react';
import Title from '../Title';
import SwiperClientsResponsive from './SwiperClientsResponsive';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen flex flex-col justify-start gap-10 pt-6 items-center relative bg-logo">
      <div
        className="flex flex-col justify-center items-center z-10 relative"
        data-aos="fade"
        data-aos-duration="1600"
      >
        <Title title="CLIENTES" comment="Ellos confiaron en nosotros" />
      </div>
      <ActiveSlider />
      <SwiperClientsResponsive />
    </div>
  );
}

export default Clients;
