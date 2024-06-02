import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function ConsultForm2() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_consult: '',
  });
  const [mailSent, setMailSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      toast.warn('Debes aceptar las políticas de privacidad.');
      return;
    }
    if (
      !formData.user_email ||
      !formData.user_lastname ||
      !formData.user_name ||
      !formData.user_consult
    ) {
      toast.warn('Debes completar todos los campos');
      return;
    }

    if (form.current) {
      emailjs
        .sendForm('service_SeptemDev', 'template_consult', form.current, 'pzZxYDQSS2VBcbJQW')
        .then(
          () => {
            toast.success('Consulta enviada correctamente.');
            setTimeout(() => {
              setMailSent(true);
              setFormData({
                user_name: '',
                user_lastname: '',
                user_email: '',
                user_consult: '',
              });
            }, 2000);
          },
          (error) => {
            toast.error('No se ha podido enviar la consulta');
            setMailSent(false);
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
        CONSULTA
      </h2>
      <form ref={form} className="z-10 flex gap-6 flex-col w-full" onSubmit={handleSubmit}>
        <input
          name="user_name"
          value={formData.user_name}
          placeholder="Nombre"
          onChange={handleChange}
          className="w-full h-10 rounded-xl border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm placeholder: hover:scale-105 transform duration-300 pl-4  shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: 'none' }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="200"
        />
        <input
          placeholder="Apellido"
          name="user_lastname"
          value={formData.user_lastname}
          onChange={handleChange}
          className="w-full h-10 rounded-xl border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm  placeholder: hover:scale-105 transform duration-300 pl-4  shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: 'none' }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="250"
        />
        <input
          placeholder="Email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          className="w-full h-10 rounded-xl flex  border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm placeholder: hover:scale-105 transform duration-300 pl-4  shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: 'none' }}
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="300"
        />
        <textarea
          placeholder="Dejanos tu consulta..."
          name="user_consult"
          value={formData.user_consult}
          onChange={handleChange}
          className="w-full max-h-[170px] min-h-[150px] resize-none rounded-xl flex items-center justify-center border border-azulado dark:border-white z-10 bg-transparent placeholder:text-sm placeholder: hover:scale-105 transform duration-300 pl-4 pt-2  shadow-xl placeholder:font-normal font-semibold"
          style={{ outline: 'none' }}
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
          />
          <label htmlFor="aceptarPoliticas" className=" text-sm">
            He leído y acepto las{' '}
            <a href="" target="_blank" className="text-azulado dark:text-white hover:underline">
              políticas de privacidad
            </a>
            .
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-24 h-10 bg-beige-image dark:bg-button-light text-white dark:text-logoTypography hover:scale-[1.02] font-semibold transform duration-300 rounded-3xl text-sm shadow-xl flex items-center justify-center cursor-pointer mx-auto"
          >
            Enviar
          </button>
          <ToastContainer position="top-right" transition={Zoom} autoClose={2000} />
        </div>
      </form>
    </div>
  );
}

export default ConsultForm2;
