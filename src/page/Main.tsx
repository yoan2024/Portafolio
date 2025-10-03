import Contacto from "../components/Contacto"
import Habilidades from "../components/Habilidadess"
import Home from "../components/Home"
import Proyectos from "../components/Proyectos"
export  const Main = () => {
 return (
    <div className="font-serif text-center w-4/5 max-sm:w-full  py-10 flex flex-col  gap-20">
     <Home/>
     <Proyectos/>
     <Habilidades/>
     <Contacto/>
    </div>
 )
}