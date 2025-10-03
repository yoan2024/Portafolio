import tech from "../tech.json"
import habilidadesPendientes from "../habilidadesPendientes.json";
import * as SI from "react-icons/si";



const Habilidades = () => {
  const fixNames = {
    tailwind: { name: "Tailwindcss", color: "#38BDF8" },
    react: { name: "React", color: "#61DAFB" },
    javascript: { name: "Javascript", color: "#F7DF1E" },
    html: { name: "Html5", color: "#E34F26" },
    css: { name: "Css3", color: "#1572B6" },
    git: { name: "Git", color: "#F05032" },
    github: { name: "Github", color: "#181717" },
    vscode: { name: "Visualstudiocode", color: "#007ACC" },
    windows: { name: "Windows", color: "#0078D6" },
    firebase: { name: "Firebase", color: "#FFCA28" },
  };

  return (
    <div className="text-white  flex flex-col" id="habilidades">
      <div className="mt-10">
        <h1 className="text-5xl text-slate-500  font-bold">Habilidades conocidas</h1>
      </div>
      <div className="w-full   mt-10 flex flex-row  justify-center  gap-5 flex-wrap">
        {tech.map(( t  , idx) => {
          const entry = fixNames[t];
          const iconName =
            "Si" + (fixNames[t].name || t.charAt(0).toUpperCase() + t.slice(1));
          const Icon = SI[iconName];

          return Icon ? (
            <div
              key={idx}
              className="flex items-center rounded-xl justify-center flex-col bg-slate-800 gap-2 w-24 h-24"
            >
              <div>{fixNames[t].name}</div>
              <Icon
                style={{ color: entry.color || "white" }}
                className="text-4xl"
              />
            </div>
          ) : (
            <span key={idx}></span>
          );
        })}
      </div>
      <div className="mt-20">
        <h1 className="text-5xl text-slate-500 font-bold">Habilidades pendientes o en proceso</h1>
      </div>
      <div className="w-full justify-center   mt-10 flex flex-row  p-2 rounded-xl gap-5 flex-wrap">
        {habilidadesPendientes.map((t, idx) => {
          const nameicon = t.icon;
          const Icon = nameicon ? SI[nameicon] : null;

          return Icon ? (
            <div
              key={idx}
              className="flex items-center justify-center flex-col bg-slate-800 rounded-xl gap-2 w-24 h-24"
            >
              <div>{t.name}</div>
              <Icon
                style={{ color: t.color || "white" }}
                className="text-4xl"
              />
            </div>
          ) : (
            <span key={idx}></span>
          );
        })}
      </div>
    </div>
  );
};
export default Habilidades;
