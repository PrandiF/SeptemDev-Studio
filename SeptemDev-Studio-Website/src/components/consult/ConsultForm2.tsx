import React, { useEffect, useState } from "react";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

function ConsultForm2() {
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
      alert("Debe aceptar las políticas de privacidad para continuar.");
    }
  };
  return (
    <div className="flex w-[30%]">
      {/* <div className="absolute flex flex-col w-[30%] h-[40%] items-center justify-center m-auto" data-aos="fade-up" data-aos-duration="1600"> */}

      <form className="z-10 flex gap-6 flex-col w-full" onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          className="w-full h-10 rounded-xl border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-4 text-azulado shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="200"
        />
        <input
          placeholder="Apellido"
          className="w-full h-10 rounded-xl border border-azulado z-10 bg-transparent placeholder:text-sm  placeholder:text-azulado hover:scale-105 transform duration-300 pl-4 text-azulado shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="250"
        />

        <input
          placeholder="Email"
          className="w-full h-10 rounded-xl flex  border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-4 text-azulado shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="300"
        />
        <textarea
          placeholder="Dejanos tu consulta..."
          className="w-full max-h-[170px] min-h-[150px] resize-none rounded-xl flex items-center justify-center border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado hover:scale-105 transform duration-300 pl-4 pt-2 text-azulado shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="350"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="aceptarPoliticas"
            className="mr-2 cursor-pointer"
            checked={isChecked}
            onChange={handleCheckboxChange}
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="400"
          />
          <label
            htmlFor="aceptarPoliticas"
            className="text-azulado text-sm"
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            He leído y acepto las{" "}
            <a href="" target="_blank" className="text-beige hover:underline">
              políticas de privacidad
            </a>
            .
          </label>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="550"
        >
          <button
            type="submit"
            className="bg-beige hover:bg-beigeHover hover:scale-105 transform duration-100 px-8 py-2 rounded-3xl text-sm shadow-xl flex my-0 mx-auto"
          >
            Enviar
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default ConsultForm2;
