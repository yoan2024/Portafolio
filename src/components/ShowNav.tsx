import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ShowNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [useBg, setUseBg] = useState("");
  useEffect(() => {
    const url = location.pathname;
    function confiBg() {
      if (url === "/") {
        console.log(url);
      } else if (url === "/habilidades") {
        console.log(url);
      } else if (url === "/projectos") {
        console.log(url);
      } else if (url === "contactos") {
        console.log(url);
      }
    }

    confiBg();
  }, [location]);

  const handleRouter = (e) => {
    if (e === "inicio") {
      navigate("/");
    } else if (e === "habilidades") {
      navigate("/habilidades");
    } else if (e === "projectos") {
      navigate("/projectos");
    } else if (e === "contactos") {
      navigate("/contacto");
    }
  };

  return (
    <div className="text-white max-sm:flex mb-10 hidden w-full bg-slate-800">
      <div className="flex flex-row gap-4">
        <div
          className="text-2xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("inicio")}
        >
          Inicio
        </div>
        <div
          className="text-2xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("habilidades")}
        >
          Habilidades
        </div>
        <div
          className="text-2xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("projectos")}
        >
          Projectos
        </div>
        <div
          className="text-2xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("contactos")}
        >
          Contactos
        </div>
      </div>
    </div>
  );
};

export default ShowNav;
