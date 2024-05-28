//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

function PresupuestoForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    user_service: "",
    user_project: "",
  });
  const [mailSent, setMailSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Debe aceptar las políticas de privacidad para continuar.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm("service_r3afnih", "template_presupuesto", form.current, {
          publicKey: "9kRGZGhqg18Wok6_4",
        })
        .then(
          () => {
            console.log("Mensaje enviado!");
            setTimeout(() => {
              setMailSent(true);
              setFormData({
                user_name: "",
                user_lastname: "",
                user_email: "",
                user_service: "",
                user_project: "",
              });
            }, 2000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMailSent(false);
            setFormData({
              user_name: "",
              user_lastname: "",
              user_email: "",
              user_service: "",
              user_project: "",
            });
          }
        );
    }
  };
  return (
    <div className="flex xl:w-[30%] flex-col gap-2 xl:gap-4">
      {/* <div className="absolute flex flex-col w-[30%] h-[40%] items-center justify-center m-auto" data-aos="fade-up" data-aos-duration="1600"> */}
      <h2
        className="text-center text-azulado xl:text-xl text-lg font-fugaz-one"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="200"
      >
        PRESUPUESTO
      </h2>
      <form className="z-10 flex gap-6 flex-col w-full" onSubmit={handleSubmit}>
        <input
          name="user_name"
          value={formData.user_name}
          placeholder="Nombre"
          onChange={handleChange}
          className="w-full h-10 rounded-xl border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado  pl-4 text-azulado shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="200"
        />
        <input
          name="user_lastname"
          value={formData.user_lastname}
          placeholder="Apellido"
          onChange={handleChange}
          className="w-full h-10 rounded-xl border border-azulado z-10 bg-transparent placeholder:text-sm  placeholder:text-azulado  pl-4 text-azulado shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="250"
        />

        <input
          name="user_email"
          value={formData.user_email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full h-10 rounded-xl flex  border border-azulado z-10 bg-transparent placeholder:text-sm placeholder:text-azulado  pl-4 text-azulado shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="300"
        />
        <select
          name="user_service"
          value={formData.user_service}
          onChange={handleChange}
          style={{ outline: "none" }}
          className="w-full h-10 appearance-auto rounded-xl flex  border border-azulado z-10 bg-transparent cursor-pointer pl-4 text-azulado shadow-xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="350"
        >
          <option value=""  disabled selected  >-Elegí el servicio-</option>
          <option value="diseño" >Diseño Web</option>
          <option value="mantenimiento" >Mantenimiento</option>
          <option value="arreglo">Arreglo</option>
          <option value="redesSociales" >Redes Sociales</option>
        </select>
        <textarea
          name="user_project"
          value={formData.user_project}
          placeholder="Contanos de que se trata tu proyecto..."
          onChange={handleChange}
          className="w-full max-h-[170px] min-h-[150px] resize-none rounded-xl flex items-center justify-center border border-azulado  z-10 bg-transparent placeholder:text-sm placeholder:text-azulado pl-4 pt-2 text-azulado placeholder:font-normal font-semibold shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
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
            He leído y acepto las{" "}
            <a href="" target="_blank" className="text-beige hover:underline">
              políticas de privacidad
            </a>
            .
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-24 h-10 bg-beige-image hover:scale-[1.02] transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer mx-auto"
          >
            Enviar
          </button>
          {mailSent ? (
          <Alert variant="success">Mensaje enviado con éxito</Alert>
        ) : (
          ""
        )}
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default PresupuestoForm;
