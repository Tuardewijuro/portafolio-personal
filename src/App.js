import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from "./components/contacto/contacto";
import Inicio from "./components/inicio/inicio";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;