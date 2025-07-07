import DynamicBackground from "./components/DynamicBackground";
import InfoBasica from "./components/InfoBasica";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Educacion from "./components/Educacion";
import Projectos from "./components/Projectos";
import Habilidades from "./components/Habilidades";
import Certificaciones from "./components/Certificaciones";

const App = () => {
  return (
    <DynamicBackground>
      <div className="min-h-screen  flex flex-col items-center">
        <div>
          <div className="flex flex-col gap-16">
            <InfoBasica />
            {/* <ExperienciaLaboral />
          <Educacion />*/}
            <Projectos />
            <Habilidades />
            {/*<Certificaciones />*/}
          </div>
        </div>
      </div>
    </DynamicBackground>
  );
};

export default App;
