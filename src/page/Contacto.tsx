import { GithubIcon, LinkedinIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className="text-white w-full  flex flex-col justify-center  items-center  h-full">
      <h1 className="text-5xl font-bold text-center mb-6">
        ¿Cómo contactarme?
      </h1>
      <h2 className="text-2xl text-center max-w-xl text-gray-300 mb-8">
        Si deseas contactarme, puedes hacerlo por cualquiera de los siguientes
        medios:
      </h2>

      <div className="flex gap-8 text-white">
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex-col items-center flex duration-300 text-white hover:text-green-500"
        >
          <FaWhatsapp className="w-16 h-16 sm:w-20 sm:h-20" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex flex-col items-center duration-300 text-white hover:text-blue-500"
        >
          <LinkedinIcon className="w-16 h-16 sm:w-20 sm:h-20" />
          <span>Linkedin</span>
        </a>

        <a
          href="https://github.com/yoan2024"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 flex flex-col items-center text-white hover:text-black "
        >
          <GithubIcon className="w-16 h-16 sm:w-20 sm:h-20" />
          <span>Github</span>
        </a>
      </div>
      <div className="mt-16 flex  flex-row max-lg:flex-col gap-5">
        <div className="lg:border-r-2 lg:px-1 lg:border-white">
          <div>Telefono movil:</div>
          <div>(+57)3137244529</div>
        </div>
        <div className="lg:border-r-2 lg:px-1 lg:border-white">
          <div>Correo electronico:</div>
          <div>yoansebastianramirezgarcia@gmail.com</div>
        </div>
        <div className="lg:border-r-2 lg:px-1 lg:border-white">
          <div>Mi hoja de vida</div>
          <div>Descargar hoja de vida</div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
