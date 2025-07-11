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
    <div className="text-white w-1/5 max-md:w-3/12 bg-gray-900 flex flex-col fixed h-screen justify-between">
      <div>
        {" "}
        <img src="/image/logo.png" alt="" />
      </div>
      <div className="mb-10 flex flex-col gap-4">
        <div
          className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("inicio")}
        >
          Inicio
        </div>
        <div
          className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("habilidades")}
        >
          Habilidades
        </div>
        <div
          className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("projectos")}
        >
          Projectos
        </div>
        <div
          className="p-4 hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
          onClick={() => handleRouter("contactos")}
        >
          Contactos
        </div>
      </div>
    </div>
  );
};
export default Asidebar;
