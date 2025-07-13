import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ShowNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
      setShow(false);
      navigate("/");
    } else if (e === "habilidades") {
      setShow(false);
      navigate("/habilidades");
    } else if (e === "projectos") {
      setShow(false);
      navigate("/projectos");
    } else if (e === "contactos") {
      setShow(false);
      navigate("/contacto");
    }
  };

  return (
    <>
      <div
        className="self-start mb-5 w-9 h-9 sm:hidden"
        onClick={() => setShow(!show)}
      >
        <Menu className="w-full h-full text-white border-2 border-solid border-white" />
      </div>
      {show && (
        <div className="text-white max-sm:flex   mb-10 hidden w-full bg-slate-800">
          <div className="flex w-full   flex-col p-5 gap-2">
            <div
              className="text-xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
              onClick={() => handleRouter("inicio")}
            >
              Inicio
            </div>
            <div
              className="text-xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
              onClick={() => handleRouter("habilidades")}
            >
              Habilidades
            </div>
            <div
              className="text-xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
              onClick={() => handleRouter("projectos")}
            >
              Projectos
            </div>
            <div
              className="text-xl hover:bg-slate-400 cursor-pointer rounded-lg transition-colors duration-500"
              onClick={() => handleRouter("contactos")}
            >
              Contactos
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowNav;
