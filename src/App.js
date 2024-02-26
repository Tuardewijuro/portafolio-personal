import React from "react";
import Navbar from "./components/navbar";
import Recuadro from "./components/inicio/recuadro";
import "./app.css";

function App() {
  return (
    <div className="App bg-gradient-background min-h-screen">
      <Navbar />
      <h1 className="text-4xl text-center mt-6 font-bold text-green-500">
        Hola, que me lleva la hola
      </h1>
      <div className="flex justify-between mt-12">
        <Recuadro title="Acerca de mí">
          Aquí va información sobre ti.
          <br />Y aquí va más información en una nueva línea.
        </Recuadro>
        <Recuadro title="Acerca de mí" image="lupe.jpeg">
        </Recuadro>
      </div>
      <h1 className="text-4xl text-center mt-12 font-bold text-green-500">
        Proyectos
      </h1>
      <div className="flex justify-between mt-12">
        <Recuadro title="Acerca de mí">
          Aquí va información sobre ti.
          <br />Y aquí va más información en una nueva línea.
        </Recuadro>
        <Recuadro title="Acerca de mí">
          Aquí va información sobre ti.
          <br />Y aquí va más información en una nueva línea.
        </Recuadro>
        <Recuadro title="Acerca de mí">
          Aquí va información sobre ti.
          <br />Y aquí va más información en una nueva línea.
        </Recuadro>
      </div>
    </div>
  );
}

export default App;
