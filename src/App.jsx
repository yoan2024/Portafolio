import DynamicBackground from "./components/DynamicBackground";
import Asidebar from "./components/Asidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Habilidades from "./page/Habilidades";
import Projectos from "./page/Projectos";
import Contacto from "./page/Contacto";

const App = () => {
  return (
    <DynamicBackground>
      <Asidebar />
      <div className="min-h-screen  w-9/12  flex flex-col items-center py-16">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/projectos" element={<Projectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </div>
    </DynamicBackground>
  );
};

export default App;
