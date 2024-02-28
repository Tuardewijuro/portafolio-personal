import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 font-sans">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight title-gradient">
          Simón Hincapié
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block overflow-hidden transition-transform duration-500 ease-in-out transform origin-top ${
          isOpen ? "scale-y-100 h-auto" : "scale-y-0 h-0"
        } lg:scale-y-100 lg:h-auto lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow lg:ml-12">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Inicio
          </Link>
          <Link
            to="/contacto"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Contacto
          </Link>
          <Link
            to="/skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
