import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import './contacto.css';

const Contacto = () => (
    <div className="min-h-screen bg-gradient-background flex flex-col">
        <Navbar />
        <h1 className="text-4xl text-center mt-6 font-bold text-green-500">
            Contacto
        </h1>
        <Footer />
    </div>
);

export default Contacto;