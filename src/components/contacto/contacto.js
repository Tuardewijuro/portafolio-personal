import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import './contacto.css';

const Contacto = () => (
    <div className="min-h-screen bg-gradient-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div>
                    <div className="text-xl font-medium text-black">Contacto</div>
                    <p className="text-gray-500">Aquí va la información de contacto.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Contacto;