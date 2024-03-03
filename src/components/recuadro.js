import React from "react";
import "./recuadro.css";

const Recuadro = ({ title, children, conBorde }) => (
  <div
    className={`p-6 max-w-sm mx-auto bg-black text-white rounded-xl shadow-md flex items-center space-x-4 flex-col ${
      conBorde ? "recuadro" : ""
    }`}
    style={{ width: "500px" }}
  >
    <div className="text-xl font-bold text-center w-full">{title}</div>
    <div className="mt-4 w-full flex-grow flex flex-col items-center">
      {children}
    </div>
  </div>
);

export default Recuadro;
