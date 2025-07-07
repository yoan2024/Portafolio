import { FaGithub } from "react-icons/fa";
import TarjetaProjecto from "./TarjetProjecto";
import projects from "../P.json";

const Projectos = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <div className=" font-bold text-yellow-400 text-2xl">
          {/*mi nombre*/}
          Projectos
        </div>
        <div className=" flex flex-row  flex-wrap gap-4 max-w-3xl">
          {projects.map((p, index) => {
            return (
              <TarjetaProjecto
                key={index}
                title={p.title}
                description={p.description}
                techs={p.techs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projectos;
