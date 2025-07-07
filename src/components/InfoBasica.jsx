import { FaGithub } from "react-icons/fa";

const InfoBasica = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className=" font-bold text-white text-2xl">
          {/*mi nombre*/}
          Yoan Sebastian Ramirez Garcia
        </div>
        <div className="font-semibold text-slate-200">
          {/*mi especialidad*/}
          Fronted Software Developer
        </div>
        <div className="flex flex-row gap-1">
          {/*Ubicacion*/}
          <div>🌐</div>
          <div className="text-slate-400">Colombia, Pereira</div>{" "}
        </div>
        <div>
          {/*icons donde me pueden contactar o ver informacion mia*/}
          <div className="w-8 h-8 text-slate-400">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBasica;
