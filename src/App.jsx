import DynamicBackground from "./components/DynamicBackground";

const App = () => {
  return (
    <DynamicBackground>
      <main className="text-white p-10">
        <h1 className="text-4xl font-bold">Bienvenido a mi portafolio</h1>
        <p>Scroll hacia abajo para ver el fondo cambiar de azul a negro.</p>
        <div style={{ height: "2000px" }} /> {/* simula contenido largo */}
      </main>
    </DynamicBackground>
  );
};

export default App;
