import { Menu } from "lucide-react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
const ShowNav = () => {

  const [show, setShow] = useState(false);
 
  return (
    <>
      <div
        className="self-start cursor-pointer hover:bg-slate-700 mb-5 w-9 h-9 sm:hidden"
        onClick={() => setShow(!show)}
      >
        <Menu className="w-full h-full text-white border-2 border-solid border-white" />
      </div>
      {show && (
        <div className="text-white font-serif  max-sm:flex h-fit   mb-10 hidden w-fit bg-slate-800">
          <div className="flex flex-row gap-4">
      <HashLink smooth to="#proyectos" className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 block">
       Proyectos
       </HashLink>


       <HashLink smooth to="#habilidades" className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 block">
       Habilidades
       </HashLink>

        <HashLink smooth to="#home" className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 block">
       Sobre mi
       </HashLink>
       
       <HashLink smooth to="#contacto" className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 block">
       Contacto
       </HashLink>
      </div>
        </div>
      )}
    </>
  );
};

export default ShowNav;
