import logoFooter from "../../assets/logoFooter.jpg";
import ig from "../../assets/iglogo.jpg";
import linke from "../../assets/linke.jpg";

function Footer() {
  return (
    <div className="w-screen bottom-0 left-0 relative flex items-end">
      <div className="flex w-screen h-[15rem] bg-[#D6D2D2] items-center justify-around relative">
        <div>
          <img src={logoFooter} className="w-[10rem] h-[10rem] ml-28" />
        </div>
        <div className="border border-azulado z-10 w-0 h-[10rem]" />
        <p className="font-roboto text-azulado">
          Copyright © SeptemDev Studio | Políticas de Privacidad
        </p>
        <div className="border border-azulado z-10 w-0 h-[10rem]" />
        <div className="flex mr-28 justify-center items-center">
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
      </div>
    </div>
  );
}

export default Footer;
