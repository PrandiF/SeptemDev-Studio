//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PresupuestoForm() {
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_antiquity: "",
    client_project: "",
  });
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      toast.warn("Debes aceptar las políticas de privacidad.");
      return;
    }
    if (
      !formData.client_email ||
      !formData.client_name ||
      !formData.client_project ||
      !formData.client_antiquity
    ) {
      toast.warn("Debes completar todos los campos");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          "service_SeptemDev",
          "template_presupuesto",
          form.current,
          "pzZxYDQSS2VBcbJQW"
        )
        .then(
          () => {
            toast.success("Mensaje enviado correctamente.");
            setTimeout(() => {
              setFormData({
                client_name: "",
                client_email: "",
                client_antiquity: "",
                client_project: "",
              });
            }, 2000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("No se ha podido enviar el mensaje");
            setFormData({
              client_name: "",
              client_email: "",
              client_antiquity: "",
              client_project: "",
            });
          }
        );
    }
  };

  return (
    <div className="flex xl:w-[30%] flex-col gap-2 xl:gap-4">
      <h2
        className="text-center  xl:text-xl text-lg font-fugaz-one"
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="200"
      >
        PRESUPUESTO
      </h2>
      <form
        ref={form}
        className="z-10 flex gap-6 flex-col w-full"
        onSubmit={handleSubmit}
      >
        <input
          name="client_name"
          value={formData.client_name}
          placeholder="Nombre de empresa"
          onChange={handleChange}
          className="w-full h-10 rounded-xl border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm  pl-4 shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="200"
        />
        <input
          name="client_email"
          value={formData.client_email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full h-10 rounded-xl flex  border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm pl-4 shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="300"
        />
        <input
          name="client_antiquity"
          value={formData.client_antiquity}
          placeholder="Años de antiguedad"
          onChange={handleChange}
          className="w-full h-10 rounded-xl flex  border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm   pl-4  shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: "none" }}
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="300"
        />
        <textarea
          name="client_project"
          value={formData.client_project}
          placeholder="Contanos de que se trata tu proyecto..."
          onChange={handleChange}
          className="w-full max-h-[170px] min-h-[150px] resize-none rounded-xl flex items-center justify-center border border-azulado dark:border-white  z-10 bg-transparent placeholder:text-sm  pl-4 pt-2  placeholder:font-normal font-semibold shadow-xl"
          style={{ outline: "none" }}
          data-aos="fade"
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
          <label htmlFor="aceptarPoliticas" className=" text-sm">
            He leído y acepto las{" "}
            <a
              href=""
              target="_blank"
              className="text-azulado dark:text-white hover:underline"
            >
              políticas de privacidad
            </a>
            .
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-24 h-10 bg-azul-image dark:bg-button-light text-white dark:text-logoTypography hover:scale-[1.02] transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer mx-auto"
          >
            Enviar
          </button>
          <ToastContainer
            position="top-right"
            transition={Zoom}
            autoClose={2000}
          />
        </div>
      </form>
    </div>
  );
}

export default PresupuestoForm;
