import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Asidebar from "./components/Asidebar";
import Home from "./page/Home";
import Habilidades from "./page/Habilidades";
import Projectos from "./page/Projectos";
import Contacto from "./page/Contacto";

const App = () => {
  return (
    <Router>
      <DynamicBackground>
        <Asidebar />
        <div className="min-h-screen w-8/12 ml-96 max-md:ml-40 flex flex-col items-center py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/projectos" element={<Projectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </DynamicBackground>
    </Router>
  );
};

export default App;
