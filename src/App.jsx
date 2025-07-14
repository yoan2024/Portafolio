import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Asidebar from "./components/Asidebar";
import Home from "./page/Home";
import Habilidades from "./page/Habilidades";
import Projectos from "./page/Projectos";
import Contacto from "./page/Contacto";
import ShowNav from "./components/ShowNav";

const App = () => {
  return (
    <Router>
      <DynamicBackground>
        <Asidebar />

        <div className="min-h-screen ml-0 sm:ml-36 md:ml-80 flex flex-col items-center w-full  py-16 px-4 ">
          <ShowNav />
          <Routes>
            <Route path="/" element={<Projectos />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/sobre-mi" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </DynamicBackground>
    </Router>
  );
};

export default App;
