import * as SI from "react-icons/si";
import techData from "../techData.json";

const TarjetaProjecto = ({ title, description, techs, link, img, github }) => {

  console.log("Tecn", techs)
  return (
    <div className="border-solid border-2 flex flex-col justify-between border-white rounded-xl p-6 shadow-md hover:shadow-lg w-80 transition">
      <div>
        <div className="mb-6">
          <img src={img} alt={title} />
        </div>

        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 mt-2 mb-4">{description}</p>

        <a
          href={link}
          target="_blank"
          className="bg-slate-800 w-fit self-end text-white p-2 rounded hover:bg-blue-700"
        >
          Ver Proyecto
        </a>
        <a
          href={github}
          target="_blank"
          className="bg-slate-800 w-fit self-end ml-3 text-white px-2 p-2 rounded hover:bg-blue-700"
        >
          Ver en GitHub
        </a>
      </div>

      <div className="flex flex-wrap justify-center mt-5 gap-2">
        {techs.map((tech) => {
          const entry = techData[tech]; // 👈 obtenemos objeto del JSON
          if (!entry) return <span key={tech}>{tech}</span>;

          const Icon = SI[entry.icon]; // 👈 usamos directamente el "icon" del JSON

          return Icon ? (
            <div
              key={tech}
              className="flex flex-r4  gap-2 bg-slate-800 p-3 rounded-xl"
            >
              <Icon style={{ color: entry.color }} className="text-xl" />
              <span className="text-sm font-bold" style={{ color: entry.color }}>
                {entry.name}
              </span>
            </div>
          ) : (
            <span key={tech}>{entry.name}</span>
          );
        })}
      </div>
    </div>
  );
};

export default TarjetaProjecto;
