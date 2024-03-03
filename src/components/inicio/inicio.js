import React, { useState, useEffect } from "react";
import Recuadro from "../recuadro";
import Navbar from "../navbar";
import Footer from "../footer";
import { CSSTransition } from "react-transition-group";
import "./inicio.css";

const Inicio = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    document.title = "Inicio - Simon Hincapie";
    setShowAnimation(true);
  }, []);
  return (
    <div className="App bg-gradient-background min-h-screen">
      <Navbar />
      <h1 className="text-4xl text-center mt-6 font-bold text-green-500">
        Hola, que me lleva la hola
      </h1>
      <CSSTransition in={showAnimation} timeout={300} classNames="my-node">
        <div className="flex flex-col sm:flex-row justify-between mt-12 space-y-4 sm:space-y-0">
          <Recuadro conBorde title="Acerca de mí">
            Soy un estudiante de Ingeniería de Sistemas y Computación en la
            Universidad EIA, en Medellín, Colombia.
            <br />
            <br />
            Pro player de tiempo completo the The Binding of Isaac: Repentance y
            Bloons TD 6.
            <br />
            <br />
            Creador y principal accionista del canal ElArchivoDelChigui en YT y
            en TikTok.
          </Recuadro>
          <Recuadro conBorde title="Luis Pérez">
            <img
              src="/lupe.jpeg"
              alt="Descripción de la imagen"
              className="rounded-image-large mt-2"
            />
          </Recuadro>
        </div>
      </CSSTransition>

      <h1 className="text-4xl text-center mt-12 font-bold text-green-500">
        Proyectos
      </h1>

      <CSSTransition in={showAnimation} timeout={300} classNames="my-node">
        <div className="flex flex-col sm:flex-row justify-between mt-12 space-y-4 sm:space-y-0">
          <Recuadro conBorde title="QParking">
            <div className="flex flex-col items-center">
              Aplicación web creada con el fin de digitalizar los tradicionales
              métodos de estacionamiento público.
              <a
                href="https://github.com/SimonGonMon/QParking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/qparking.png"
                  alt="Descripción de la imagen"
                  className="image-small mt-4"
                />
              </a>
            </div>
          </Recuadro>
          <Recuadro conBorde title="ElArchivoDelChigüi">
            El canal más increible de la historia.
            <br />
            Con la participación del Paju, LP, El buñu, El dexter, El magik,
            cris y el resto de BYS
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.youtube.com/@ElArchivoDelChigui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/chigui-pfp.png"
                  alt="Descripción de la imagen"
                  className="rounded-image-small mt-4"
                />
              </a>
            </div>
          </Recuadro>
        </div>
      </CSSTransition>
      <Footer />
    </div>
  );
};

export default Inicio;
