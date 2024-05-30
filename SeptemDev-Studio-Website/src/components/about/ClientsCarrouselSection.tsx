import LogoCarousel from "./LogosCarrousel";
import donBasilio from "../../assets/Copia de favicon.png";
import tmp from "../../assets/tmpLogo.png";
import septemDev2 from "../../assets/logoHeader.jpg";
import skyMovie from "../../assets/skyMovieLogo2.png"
import septemDev from "../../assets/Captura de pantalla 2024-04-12 a la(s) 17.51.08.png";
import fastDelivery from "../../assets/fastDeliveryLogo.png";
import miTurnoWeb from "../../assets/miTurnoWebLogo.png"
// import tacuara from "../../assets/tacuara.jpeg";

function ClientsCarrouselSection() {
  const logos = [
    { src: donBasilio, rounded: true },
    { src: tmp, rounded: false },
    { src: septemDev2, rounded: true },
    { src: skyMovie, rounded: false },
    { src: fastDelivery, rounded: false },
    { src: septemDev, rounded: true },
    // { src: tacuara, rounded: true },
    { src: miTurnoWeb, rounded: false},
    { src: donBasilio, rounded: true },
    { src: tmp, rounded: false },
    { src: septemDev2, rounded: true },
    { src: skyMovie, rounded: false },
    { src: fastDelivery, rounded: false },
    { src: septemDev, rounded: true },
    // { src: tacuara, rounded: true },
    { src: miTurnoWeb, rounded: false },
  ];
  return (
    <div className="w-screen flex flex-col justify-center gap-10 items-center relative bg-logo py-[45px]">
      <LogoCarousel logos={logos} />
    </div>
  );
}

export default ClientsCarrouselSection;
