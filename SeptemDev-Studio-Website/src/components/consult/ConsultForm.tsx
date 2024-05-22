//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function ConsultForm() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!isChecked) {
      e.preventDefault();
      alert('Debe aceptar las políticas de privacidad para continuar.');
    }
  };

  return (
    <div className="flex justify-center items-center h-[40%]">
      <div className="absolute flex flex-col w-[30%] h-[50%] items-center justify-center m-auto rounded-lg  shadow-xl bg-[#a5a4a435] backdrop-filter backdrop-blur pb-5" data-aos="fade-up" data-aos-duration="1600">
        {/* <h3 className="font-roboto text-azulado drop-shadow-3xl z-10 font-bold text-xl">
          CONSULTA
        </h3> */}
        <div className="relative w-[80%] -mt-6 mb-4 grid h-[50%] place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#a5a4a4e9] to-[#d5d5d5af] bg-clip-border text-white shadow-lg shadow-[#d5d5d535]" data-aos="fade-up" data-aos-duration="1700" data-aos-delay="300">
          <h3 className="block font-roboto text-2xl font-bold drop-shadow-2xl text-slate-100">
            CONSULTA
          </h3>
        </div>
        <form className="relative z-10 rounded-lg mt-8 flex gap-4 flex-col"  onSubmit={handleSubmit}>
          <div className="flex w-full h-fit gap-4 items-center justify-center">
            <input
              placeholder="Nombre"
              className="w-[50%] h-8 rounded-xl border border-azulado z-10 bg-transparent placeholder:ml-6 placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-2 text-azulado shadow-xl"
            />
            <input
              placeholder="Apellido"
              className="w-[50%] h-8 rounded-xl border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-2 text-azulado shadow-xl"
            />
          </div>

          <input
            placeholder="Email"
            className="w-full h-8 rounded-xl flex  border border-azulado z-10 bg-transparent placeholder:ml-10 placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-2 text-azulado shadow-xl"
          />

          <textarea
            placeholder="Dejanos tu consulta..."
            className="w-full max-h-[120px] min-h-[100px] resize-none rounded-xl flex items-center justify-center border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-2 text-azulado shadow-xl"
          />
           <div className="flex items-center">
          <input
            type="checkbox"
            id="aceptarPoliticas"
            className="mr-2 cursor-pointer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="aceptarPoliticas" className="text-azulado text-sm">
            He leído y acepto las <a href="" target="_blank" className="text-beige hover:underline">políticas de privacidad</a>.
          </label>
        </div>
          <button type="submit" className="bg-beige hover:bg-beigeHover hover:scale-105 transform duration-100 px-4 py-2 rounded-3xl text-sm shadow-xl flex m-auto">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultForm;
