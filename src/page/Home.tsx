const Home = () => {
  return (
    <div className="text-white w-full    h-full px-5">
      <div>
        <div>
          <h1 className="text-7xl text-slate-500 font-bold">Sobre mi</h1>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl">Hola, soy Yoan Sebastian Ramirez Garcia</h2>

          <div className="flex flex-col items-center md:flex-row  gap-6">
            <p className="text-lg leading-relaxed">
              Bienvenido a mi portafolio. Soy desarrollador frontend con pasión
              por el diseño web moderno, funcional y centrado en la experiencia
              del usuario...
            </p>
            <img
              src="/image/sebas.jpeg"
              alt="Foto  Yoan"
              className="w-60 h-60 rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold">Que hago?</h2>
            <div>
              Actualmente me enfoco en el desarrollo frontend, creando
              aplicaciones web con tecnologías modernas (que verás en la sección
              de habilidades). Pero mi visión no se queda ahí: estoy en camino
              de convertirme en desarrollador full stack, aprendiendo backend
              para completar el círculo.
            </div>
            <h2 className="text-3xl font-bold mt-8">¿Que encontraras aqui?</h2>
            <div>
              <ol>
                <li>1. Proyectos reales que construí desde cero</li>
                <li>2. Enfoque creativo y diseño responsivo</li>
                <li>3. Código limpio, modular y reutilizable</li>
                <li>4. Ideas que solucionan problemas reales</li>
              </ol>
            </div>
            <div className="mt-5">
              Este portafolio no es solo una colección de trabajos: es una
              muestra de lo que puedo hacer, lo que estoy aprendiendo y lo que
              quiero construir en el futuro. Gracias por estar aquí. ¡Explora y
              hablemos!
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
