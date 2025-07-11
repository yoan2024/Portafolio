import projects from "../P.json";
import TarjetaProjecto from "../components/TarjetProjecto";

const Projectos = () => {
  return (
    <div className="text-white w-full h-full px-5">
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
                  link={p.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projectos;
