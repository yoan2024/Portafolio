import habilidadesblandas from "../habilidadesBlandas.json";
import tech from "../tech.json";
import * as SI from "react-icons/si";
const Habilidades = () => {
  const fixNames = {
    tailwind: "Tailwindcss",
    html: "Html5",
    css: "Css3",
    javascript: "Javascript",
    vscode: "Visualstudiocode",
    windows: "Windows",
    github: "Github",
    git: "Git",
    react: "React",
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className=" font-bold text-yellow-400 text-2xl">Habilidades</div>
        <div className=" flex flex-row  flex-wrap gap-4 max-w-3xl">
          {tech.map((t) => {
            const iconName =
              "Si" + (fixNames[t] || t.charAt(0).toUpperCase() + t.slice(1));
            const Icon = SI[iconName];

            return Icon ? (
              <div
                key={t}
                className="flex items-center  rounded-xl p-1  gap-1 bg-slate-800 text-white text-sm"
              >
                <Icon className="w-5 h-5" />
                <span>{t}</span>
              </div>
            ) : (
              <span key={t}>{t}</span> // fallback if icon not found
            );
          })}
          {habilidadesblandas.map((h, index) => {
            return (
              <div key={index} className="p-1 bg-slate-800  rounded-xl ">
                <span className="text-white">{h} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Habilidades;
