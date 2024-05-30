import logoHeader from '../../assets/logoHeader.jpg';
import { Link } from 'react-scroll';
import { IoIosMenu } from 'react-icons/io';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function header() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div
      className="w-screen h-auto xl:fixed absolute flex items-start justify-center z-50"
      data-aos="fade-down"
    >
      <div className="flex xl:w-[60%] w-[80%] h-[3.5rem] bg-slate-100 rounded-full mt-3 items-center justify-between shadow-xl xl:pr-24 pr-6">
        <div>
          <Link to="HOME" spy={true} smooth={true} duration={700}>
            <img
              src={logoHeader}
              className="w-[100px] h-[3.5rem] rounded-full ml-0 cursor-pointer"
            />
          </Link>
        </div>
        <div className="xl:flex hidden gap-10">
          <Link
            to="SERVICES"
            spy={true}
            smooth={true}
            duration={700}
            className="text-logoTypography font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Servicios
          </Link>
          <Link
            to="ABOUT"
            spy={true}
            smooth={true}
            duration={700}
            className="text-logoTypography font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Nosotros
          </Link>
          <Link
            to="CLIENTS"
            spy={true}
            smooth={true}
            duration={700}
            className="text-logoTypography font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Clientes
          </Link>
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            className="text-logoTypography font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Consulta
          </Link>
          <Link
            to="TEAM"
            spy={true}
            smooth={true}
            duration={700}
            className="text-logoTypography font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Staff
          </Link>
        </div>
        <button className="xl:hidden flex text-logoTypography items-center text-3xl">
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
}

export default header;
