import * as SI from "react-icons/si";

const TarjetaProjecto = ({ title, description, techs }) => {
  const fixNames = {
    tailwindcss: "Tailwindcss",
    react: "React",
    javascript: "Javascript",
    html5: "Html5",
    css3: "Css3",
    vite: "Vite",
  };
  return (
    <div className="border-solid border-2 flex flex-col justify-between border-white rounded-xl p-6 shadow-md hover:shadow-lg w-60 transition">
      <div>
        {" "}
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 mt-2 mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {techs.map((tech) => {
          const iconName =
            "Si" +
            (fixNames[tech] || tech.charAt(0).toUpperCase() + tech.slice(1));
          const Icon = SI[iconName];
          return Icon ? (
            <div
              key={tech}
              className="flex items-center gap-1 text-slate-400 text-sm"
            >
              <Icon className="w-5 h-5" />
              <span>{tech}</span>
            </div>
          ) : (
            <span key={tech}>{tech}</span>
          );
        })}
      </div>
    </div>
  );
};
export default TarjetaProjecto;
