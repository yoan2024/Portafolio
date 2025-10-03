import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Asidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [useBg, setUseBg] = useState("");
  useEffect(() => {
    const url = location.pathname;
    function confiBg() {
      if (url === "/") {
        setUseBg("/");
        console.log(url);
      } else if (url === "/habilidades") {
        setUseBg("/habilidades");
        console.log(url);
      } else if (url === "/sobre-mi") {
        setUseBg("/sobre-mi");
        console.log(url);
      } else if (url === "/contacto") {
        setUseBg("/contacto");
        console.log(url);
      }
    }

    confiBg();
  }, [location]);

  const handleRouter = (e) => {
    if (e === "sobre-mi") {
      navigate("/sobre-mi");
    } else if (e === "habilidades") {
      navigate("/habilidades");
    } else if (e === "proyectos") {
      navigate("/");
    } else if (e === "contactos") {
      navigate("/contacto");
    }
  };
  return (
    <div className="hidden sm:flex w-32 text-white font-serif md:w-72 lg:w-80 bg-gray-900 fixed h-screen flex-col justify-between">
      <div>
        {" "}
        <img src="/image/logo.png" alt="" />
      </div>
      <div className="mb-10 flex flex-col gap-4">
        <div
          className={`p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 ${
            useBg === "/" ? "bg-slate-400" : ""
          }`}
          onClick={() => handleRouter("proyectos")}
        >
          Proyectos
        </div>

        <div
          className={`p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 ${
            useBg === "/habilidades" ? "bg-slate-400" : ""
          }`}
          onClick={() => handleRouter("habilidades")}
        >
          Habilidades
        </div>

        <div
          className={`p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 ${
            useBg === "/contacto" ? "bg-slate-400" : ""
          }`}
          onClick={() => handleRouter("contactos")}
        >
          Contactos
        </div>
        <div
          className={`p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500 ${
            useBg === "/sobre-mi" ? "bg-slate-400" : ""
          }`}
          onClick={() => handleRouter("sobre-mi")}
        >
          Sobre mi
        </div>
      </div>
    </div>
  );
};
export default Asidebar;
