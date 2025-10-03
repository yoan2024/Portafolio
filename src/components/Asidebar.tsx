import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Asidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [useBg, setUseBg] = useState("");
 
    
  return (
    <div className="hidden sticky top-0 sm:flex w-32 text-white font-serif md:w-72 lg:w-80 bg-gray-900  h-screen flex-col justify-between">
      <div>
        {" "}
        <img src="/image/logo.png" alt="" />
      </div>
      <div className="mb-10 flex flex-col gap-4">
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
  );
};
export default Asidebar;
