import logoFooter from "../../assets/logoFooter.jpg";
import ig from "../../assets/iglogo.jpg";
import linke from "../../assets/linke.jpg";

function Footer() {
  return (
    <div className="relative bottom-0 left-0 w-full">
      <div className="flex flex-col xl:flex-row items-center justify-around w-screen xl:h-[15rem] bg-[#D6D2D2]">
        {/* Div para los dos iconos */}
        <div className="flex xl:hidden gap-5">
          {/* LOGO */}
          <div className="xl:ml-0">
            <img
              src={logoFooter}
              className="w-[8rem] h-[8rem] xl:w-[10rem] xl:h-[10rem]"
            />
          </div>
          <div className="border border-azulado flex justify-center items-center h-[6.5rem] my-auto" />
          <div className="flex justify-center items-center xl:order-last">
            <a href="" target="_blank">
              <img
                src={ig}
                className="w-[3rem] h-[3rem] hover:cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/septemdev-studio/"
              target="_blank"
            >
              <img
                src={linke}
                className="w-[2.6rem] h-[2.6rem] hover:cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* ICONOS */}
        <div className="hidden xl:flex justify-center items-center xl:order-last">
          <a href="" target="_blank">
            <img src={ig} className="w-[4rem] h-[4rem] hover:cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/septemdev-studio/"
            target="_blank"
          >
            <img
              src={linke}
              className="w-[3.3rem] h-[3.3rem] hover:cursor-pointer"
            />
          </a>
        </div>
       

        {/* LOGO */}
        <div className="hidden xl:flex ml-28 xl:ml-0">
          <img
            src={logoFooter}
            className="w-[8rem] h-[8rem] xl:w-[10rem] xl:h-[10rem]"
          />
        </div>
        <div className="hidden border border-azulado xl:flex justify-center items-center h-[8rem] my-auto" />

        {/* Div para el copyright */}
        <div className="text-center mt-4 xl:mt-0 text-sm xl:text-base pb-3">
          <p className="font-roboto text-azulado">
            Copyright © SeptemDev Studio |{" "}
            <a
              target="e_blank"
              className="text-beige cursor-pointer hover:underline"
            >
              Políticas de Privacidad
            </a>
          </p>
        </div>
        <div className="hidden border border-azulado xl:flex justify-center items-center h-[8rem] my-auto" />
      </div>
    </div>
  );
}

export default Footer;
