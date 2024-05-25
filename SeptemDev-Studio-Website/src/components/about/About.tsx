import LogoCarousel from './LogosCarrousel';
import UsCardHorizontal from './UsCardHorizontal';
import UsCardVertical from './UsCardVertical';

import donBasilio from '../../assets/Copia de favicon.png';
import bresh from '../../assets/bresh.jpeg';
import motorville from '../../assets/motorville_sa_logo.jpeg';
import bsasCars from '../../assets/bsasCars.jpg';
import septemDev from '../../assets/Captura de pantalla 2024-04-12 a la(s) 17.51.08.png';
import laMala from '../../assets/laMala.png';
import salvadori from '../../assets/Copia de fav.png';
import tacuara from '../../assets/tacuara.jpeg';
import { useEffect } from 'react';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../Title';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center flex-col relative bg-logo">
      <div className="bg-gradient-to-t from-transparent to-logo flex w-full items-end h-8 z-10 absolute"></div>

      <Title title="NOSOTROS" comment="Descubrí como trabajamos" />

      <div
        className="hidden xl:flex gap-4 items-start w-[80%] h-full my-0 mx-auto p-24"
        data-aos="fade-up"
      >
        <div className="w-[55%] h-full flex flex-col gap-4" data-aos="fade-up">
          <UsCardHorizontal
            title="Cómo Empezamos?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="200"
          />
          <UsCardHorizontal
            title="En qué tipo de cliente nos enfocamos?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="400"
          />
        </div>
        <div className="w-[35%] h-full flex items-start" data-aos="fade-up">
          <UsCardVertical
            title="Qué es SAAS?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="300"
          />
        </div>
      </div>

      <div
        className="xl:hidden flex flex-col gap-4 items-start justify-evenly w-[90%] h-full my-0 mx-auto"
        data-aos="fade-up"
      >
        <div className="w-full h-[50%] flex flex-col items-center gap-4 mb-4" data-aos="fade-up">
        <UsCardHorizontal
            title="Cómo Empezamos?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="200"
          />
          <UsCardHorizontal
            title="En qué tipo de cliente nos enfocamos?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="400"
          />
          <UsCardHorizontal
            title="Qué es SAAS?"
            content=" Descubrí cómo podemos convertir tus objetivos en realidad y construir
        juntos el éxito que merecés. Descubrí cómo podemos convertir tus
        objetivos en realidad y construir juntos el éxito que merecés. Descubrí
        cómo podemos convertir tus objetivos en realidad y construir juntos el
        éxito que merecés."
            data_aos="fade"
            data_aos_duration="1600"
            data_aos_delay="300"
          />
        </div>
      </div>

      <div className="xl:flex hidden" data-aos="fade" data-aos-duration="1800" data-aos-delay="200">
        <LogoCarousel
          logos={[
            donBasilio,
            bresh,
            motorville,
            bsasCars,
            septemDev,
            laMala,
            tacuara,
            salvadori,
            donBasilio,
            bresh,
            motorville,
            bsasCars,
            septemDev,
            laMala,
            tacuara,
            salvadori,
          ]}
        />
      </div>
    </div>
  );
}

export default About;
