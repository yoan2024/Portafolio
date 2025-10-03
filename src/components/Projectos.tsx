import projects from "../P.json";
import TarjetaProyecto from "./TarjetProyecto";

const Projectos = () => {
  return (
    <div className="text-white">
      <div>
        <div className="flex flex-col gap-3 ">
          <div className=" flex flex-row justify-center  flex-wrap gap-4 max-w-3xl">
            {projects.map((p, index) => {
              return (
                <TarjetaProyecto
                  key={index}
                  title={p.title}
                  description={p.description}
                  techs={p.techs}
                  link={p.link}
                  img={p.image}
                  github={p.github}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyectos;
