import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Recuadro from "../recuadro";
import { CSSTransition } from "react-transition-group";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./contacto.css";

const Contacto = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    document.title = 'Contacto - Simon Hincapie';
    setShowAnimation(true);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-background">
      <Navbar />
      <CSSTransition in={showAnimation} timeout={300} classNames="my-node">
        <div className="flex-grow flex flex-col items-center justify-center">
          <Recuadro conBorde title="Contacto" titleSize="text-2xl">
            <div className="flex space-x-8">

              <a
                href="mailto:simonhincapie0@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope size={90} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/simon-hincapie-p10/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={90} color="white" />
              </a>
              <a
                href="https://github.com/Tuardewijuro"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={90} color="white" />
              </a>
            </div>
          </Recuadro>
        </div>
      </CSSTransition>
      <Footer />
    </div>
  );
};

export default Contacto;
