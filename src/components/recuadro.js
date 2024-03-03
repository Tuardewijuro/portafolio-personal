import React from "react";
import Divider from "./divider";
import "./recuadro.css";

const Recuadro = ({ title, children, conBorde, titleSize = "text-xl" }) => (
  <div
    className={`p-6 max-w-sm mx-auto bg-black text-white rounded-xl shadow-md flex items-center space-x-4 flex-col ${
      conBorde ? "recuadro" : ""
    }`}
    style={{ width: "500px" }}
  >
    <div className={`${titleSize} font-bold text-center w-full`}>{title}</div>
    <Divider />
    <div className="mt-4 w-full flex-grow flex flex-col items-center">
      {children}
    </div>
  </div>
);

export default Recuadro;