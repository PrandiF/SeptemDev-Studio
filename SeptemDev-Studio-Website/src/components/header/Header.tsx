import logoHeader from "../../assets/logoHeader.jpg";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { useEstado } from "../consult/EstadoContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function header() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBorder, setIsBorder] = useState(false);
  const { darkMode, toggleDarkMode } = useEstado();

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsBorder(!isBorder);
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "10rem",
        duration: 0.2,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.2,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef.current, {
      y: isOpen ? "auto" : 0,
      duration: 0.2,
      ease: "power3.inOut",
    });
  }, [isOpen]);
  return (
    <div
      className="w-screen h-auto xl:fixed absolute flex items-start justify-center z-50"
      data-aos="fade-down"
    >
      <div className="flex relative xl:w-[60%] w-[80%] h-[3.5rem] rounded-full bg-slate-100 dark:bg-footer-dark z-10 mt-3 m-auto items-center justify-between shadow-xl xl:pr-24 pr-6">
        <div>
          <Link to="HOME" spy={true} smooth={true} duration={700}>
            <img
              src={logoHeader}
              className="w-[100px] h-[3.5rem] rounded-full ml-0 z-20 cursor-pointer"
            />
          </Link>
        </div>
        <div className="xl:flex hidden gap-10">
          <Link
            to="SERVICES"
            spy={true}
            smooth={true}
            duration={700}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Servicios
          </Link>
          <Link
            to="ABOUT"
            spy={true}
            smooth={true}
            duration={700}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Nosotros
          </Link>
          <Link
            to="CLIENTS"
            spy={true}
            smooth={true}
            duration={700}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Clientes
          </Link>
          <Link
            to="CONSULT"
            spy={true}
            smooth={true}
            duration={700}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Consulta
          </Link>
          <Link
            to="TEAM"
            spy={true}
            smooth={true}
            duration={700}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Staff
          </Link>
        </div>

        <div
          className="absolute top-0 flex overflow-hidden transition-all duration-75 ease-out flex-col items-center gap-7 dark:bg-footer-dark backdrop-blur-xl shadow-2xl z-[-10] w-full rounded-2xl"
          style={
            isOpen && !isBorder
              ? { borderRadius: "80px" }
              : !isOpen && !isBorder
              ? { borderRadius: "9999px" }
              : {}
          }
        >
          <div
            ref={contentRef}
            className=" h-0 text-center mt-[3.5rem] flex flex-col gap-2 w-full overflow-hidden"
          >
            <Link
              to="SERVICES"
              spy={true}
              smooth={true}
              duration={700}
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Servicios
            </Link>
            <Link
              to="ABOUT"
              spy={true}
              smooth={true}
              duration={700}
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Nosotros
            </Link>
            <Link
              to="CLIENTS"
              spy={true}
              smooth={true}
              duration={700}
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Clientes
            </Link>
            <Link
              to="CONSULT"
              spy={true}
              smooth={true}
              duration={700}
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Consulta
            </Link>
            <Link
              to="TEAM"
              spy={true}
              smooth={true}
              duration={700}
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Staff
            </Link>
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="xl:hidden flex items-center text-3xl"
        >
          <IoIosMenu />
        </button>
      </div>
      <div className="absolute right-0 top-3 xl:top-6 xl:right-5">
        <button
          onClick={toggleDarkMode}
          className="rounded shadow-lg w-fit h-fit"
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="1100"
        >
          {darkMode ? (
            <div className="flex justify-center items-center w-8 h-6 cursor-pointer rounded-md shadow-xl text-logoTypography font-semibold bg-gradient-to-r from-white via-white to-white hover:shadow-lg hover:shadow-azuladoHover hover:scale-105 duration-300 hover:from-slate-100 hover:to-slate-100">
              <MdOutlineLightMode />
            </div>
          ) : (
            <div className="flex justify-center items-center w-8 h-6 cursor-pointer rounded-md shadow-xl text-white font-semibold bg-gradient-to-r from-azulado via-azulado to-azulado hover:shadow-lg hover:shadow-azulado hover:scale-105 duration-300 hover:from-azuladoHover hover:to-azuladoHover">
              <MdOutlineDarkMode />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default header;
