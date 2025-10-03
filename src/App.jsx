import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicBackground from "./components/DynamicBackground";
import Asidebar from "./components/Asidebar";
import { Main } from "./page/Main";
import ShowNav from "./components/ShowNav";

const App = () => {
  return (
    <Router>
      <DynamicBackground>
       <div className="flex-row flex">
         <Asidebar />

        <div className="w-full flex flex-row max-sm:flex-col  justify-center p-2">
          <ShowNav />
          <Main/>
        </div>
       </div>
      </DynamicBackground>
    </Router>
  );
};

export default App;
