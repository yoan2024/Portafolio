import { FaGithub } from "react-icons/fa";
import TarjetaProyecto from "./TarjetProyecto";
import proyects from "../P.json";

const Proyectos = () => {
  return (
    <div id="proyectos">
      <div className="flex flex-col gap-3 ">
      <h1 className="text-5xl  text-slate-500  font-bold m-10">Proyectos</h1>
        
        <div className=" flex flex-row  flex-wrap gap-4 justify-center">
          {proyects.map((p, index) => {
            return (
              <TarjetaProyecto
                key={index}
                title={p.title}
                description={p.description}
                techs={p.techs}
                link={p.link}
                img={p.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
