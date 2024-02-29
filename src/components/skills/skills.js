import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./skills.css";

const Skills = () => (
  <div className="flex flex-col min-h-screen bg-gradient-background">
    <Navbar />
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white">Carry Over</h1>
      <img
        src="https://media.tenor.com/eZOZrY0myDcAAAAM/pato-girando.gif"
        alt="My GIF"
        style={{ marginTop: "30px", width: "300px" }}
      />
    </div>
    <Footer />
  </div>
);

export default Skills;
