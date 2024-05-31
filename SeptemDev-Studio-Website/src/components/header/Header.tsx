import logoHeader from "../../assets/logoHeader.jpg";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

function header() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBorder, setIsBorder] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsBorder(!isBorder)
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "8rem",
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
      <div className="flex relative xl:w-[60%] w-[80%] h-[3.5rem] rounded-full bg-slate-100 z-10 mt-3 items-center justify-between shadow-xl xl:pr-24 pr-6">
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
          className="absolute top-0 flex overflow-hidden transition-all duration-75 ease-out flex-col items-center gap-7 backdrop-blur-xl shadow-2xl z-[-10] w-full rounded-2xl"
          style={isOpen && !isBorder ? { borderRadius: "80px" } : !isOpen && !isBorder ? { borderRadius: "9999px" } : {}}
        >
          <div
            ref={contentRef}
            className="text-logoTypography h-0 text-center mt-[3.5rem] flex flex-col w-full overflow-hidden"
          >
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
        </div>
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="xl:hidden flex text-logoTypography items-center text-3xl"
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
}

export default header;
