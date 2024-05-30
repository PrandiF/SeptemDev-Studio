import React from 'react';
import LogoCarousel from './LogosCarrousel';
import donBasilio from '../../assets/Copia de favicon.png';
import bresh from '../../assets/bresh.jpeg';
import motorville from '../../assets/motorville_sa_logo.jpeg';
import bsasCars from '../../assets/bsasCars.jpg';
import septemDev from '../../assets/Captura de pantalla 2024-04-12 a la(s) 17.51.08.png';
import laMala from '../../assets/laMala.png';
import salvadori from '../../assets/Copia de fav.png';
import tacuara from '../../assets/tacuara.jpeg';

function ClientsCarrouselSection() {
  return (
    <div className="w-screen flex flex-col justify-center gap-10 items-center relative bg-logoOpacity py-[45px]">
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
  );
}

export default ClientsCarrouselSection;
