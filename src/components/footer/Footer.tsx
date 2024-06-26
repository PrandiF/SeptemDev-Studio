import logoFooter from '../../assets/logoPng.png';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around xl:justify-evenly w-screen xl:h-[15rem] bg-[#f3f4f6] dark:bg-footer-dark  z-20 rounded-t-3xl mt-[-20px]">
      {/* MOBILE */}
      <div className="flex xl:hidden p-4">
        {/* LOGO */}
        <div className="xl:ml-0 w-[50%] flex items-center justify-center">
          <img
            src={logoFooter}
            className="w-[70%] xl:w-[10rem] xl:h-[10rem] dark:invert object-cover"
          />
        </div>
        <div className="border border-azulado dark:border-white flex justify-center items-center h-[6.5rem] my-auto" />
        <div className="flex justify-center items-center xl:order-last text-black dark:text-white w-[50%] gap-3">
          <a href="https://www.instagram.com/septemdevstudio/" target="_blank">
            <FaInstagramSquare style={{ fontSize: '200%' }} />
          </a>
          <a href="https://www.linkedin.com/company/septemdev-studio/" target="_blank">
            <FaLinkedin style={{ fontSize: '200%' }} />
          </a>
        </div>
      </div>

      {/* ICONOS */}
      {/* DESKTOP */}
      <div className="hidden xl:flex justify-center items-center xl:order-last text-black dark:text-white">
        <a href="https://www.instagram.com/septemdevstudio/" target="_blank">
          <FaInstagramSquare style={{ fontSize: '270%' }} />
        </a>
        <a href="https://www.linkedin.com/company/septemdev-studio/" target="_blank">
          <FaLinkedin style={{ fontSize: '270%' }} />
        </a>
      </div>

      {/* LOGO */}
      <div className="hidden xl:flex ">
        <img src={logoFooter} className="w-[8rem] h-[8rem] xl:w-[10rem] xl:h-[10rem] dark:invert" />
      </div>
      <div className="hidden border border-azulado dark:border-white xl:flex justify-center items-center h-[8rem] my-auto" />

      {/* Div para el copyright */}
      <div className="text-center mt-4 xl:mt-0 text-sm xl:text-base pb-3">
        <p className="font-roboto">
          Copyright © SeptemDev Studio |{' '}
          <a target="e_blank" className="  cursor-pointer hover:underline">
            Políticas de Privacidad
          </a>
        </p>
      </div>
      <div className="hidden border border-azulado dark:border-white xl:flex justify-center items-center h-[8rem] my-auto" />
    </div>
  );
}

export default Footer;
