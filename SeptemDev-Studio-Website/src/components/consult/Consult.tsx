import { useEffect } from 'react';
import ConsultForm2 from './ConsultForm2';
import { useEstado } from './EstadoContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PresupuestoForm from './PresupuestoForm';

function Consult() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { showConsult, showPresupuesto, handleFormChangeButton } = useEstado();

  return (
    <div className="w-screen min-h-screen relative bg-gray-100 flex justify-center items-center rounded-3xl mt-[-20px] mb-[-20px] xl:pb-0 pb-8 overflow-hidden">
      <div className="flex xl:flex-row flex-col justify-evenly xl:items-start items-center w-full">
        <div className="flex flex-col xl:w-[50%] xl:gap-4 xl:items-start items-center">
          <div className="relative flex items-center justify-center my-8">
            <h1
              className=" z-10 xl:text-4xl text-2xl text-center font-extrabold xl:flex m-auto font-fugaz-one"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
            >
              PONETE EN CONTACTO...
            </h1>
            <h2
              className="text-azulado z-10 text-lg absolute top-[75%] xl:left-[0%] font-extrabold xl:flex ml-auto font-fugaz-one"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
            >
              ¡MARCA LA DIFERENCIA!
            </h2>
          </div>
          <p
            className=" xl:font-medium xl:text-base text-sm xl:text-start text-center w-[90%] mb-2"
            data-aos="fade"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            Si estás listo para mejorar tu presencia en línea y alcanzar nuevos objetivos, no dudes
            en ponerte en contacto con nosotros. Completá el formulario a continuación y uno de
            nuestros expertos se comunicará con vos para discutir cómo podemos colaborar. ¡Esperamos
            trabajar juntos y hacer realidad tus ideas!
          </p>

          <div>
            {showConsult ? (
              <button
                onClick={handleFormChangeButton}
                className="w-40 h-10 bg-beige-image text-white hover:scale-[1.02] transform duration-300 rounded-3xl text-sm font-semibold shadow-xl flex items-center justify-center cursor-pointer mx-auto mb-8"
                data-aos="fade"
                data-aos-duration="1600"
                data-aos-delay="500"
              >
                Pedir presupuesto
              </button>
            ) : showPresupuesto ? (
              <button
                onClick={handleFormChangeButton}
                className="w-40 h-10 bg-beige-image text-white hover:scale-[1.02] transform duration-300 rounded-3xl text-sm font-semibold shadow-xl flex items-center justify-center cursor-pointer mx-auto mb-8"
                data-aos="fade"
                data-aos-duration="1600"
                data-aos-delay="500"
              >
                Realizar consulta
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
        {showConsult ? <ConsultForm2 /> : showPresupuesto ? <PresupuestoForm /> : ''}
      </div>
      {/* <div className="bg-gradient-to-b from-transparent to-gray-100 w-full h-8 absolute bottom-0"></div> */}
    </div>
  );
}

export default Consult;
