import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import './skills.css';

const Skills = () => (
    <div className="flex flex-col min-h-screen bg-gradient-background">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
            {/* Aquí puedes agregar el contenido de tu sección de Skills */}
        </div>
        <Footer />
    </div>
);

export default Skills;