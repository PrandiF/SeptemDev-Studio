import LogoCarousel from "./LogosCarrousel";
import donBasilio from "../../assets/Copia de favicon.png";
import tmp from "../../assets/tmpLogo.png";
import septemDev2 from "../../assets/logoHeader.webp";
import skyMovie from "../../assets/skyMovieLogo2.png";
import boxLogo from "../../assets/boxLogo.webp";
import fastDelivery from "../../assets/fastDeliveryLogo.png";
import miTurnoWeb from "../../assets/miTurnoWebLogo.png";
import VR from "../../assets/logoVR.png"

function ClientsCarrouselSection() {
  const logos = [
    { src: donBasilio, rounded: true },
    { src: tmp, rounded: false, big: true },
    { src: septemDev2, rounded: true },
    { src: skyMovie, rounded: false },
    { src: fastDelivery, rounded: false, big: true },
    { src: boxLogo, rounded: false, big: true },
    { src: miTurnoWeb, rounded: false },
    { src: VR, rounded: false },
    { src: donBasilio, rounded: true },
    { src: tmp, rounded: false, big: true },
    { src: septemDev2, rounded: true },
    { src: skyMovie, rounded: false },
    { src: fastDelivery, rounded: false, big: true },
    { src: boxLogo, rounded: false, big: true },
    { src: miTurnoWeb, rounded: false },
    { src: VR, rounded: false },

  ];
  return (
    <div className="w-screen flex flex-col justify-center gap-10 items-center relative bg-transparent py-[45px]">
      <LogoCarousel logos={logos} />
    </div>
  );
}

export default ClientsCarrouselSection;
