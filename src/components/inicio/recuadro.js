import React from 'react';

const Recuadro = ({ title, children, image }) => (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-start space-x-4">
        <div className="flex flex-col items-start w-full">
            <div className="text-xl font-bold text-black text-center w-full">{title}</div>
            {image ? <img className="w-64 h-64 rounded-full object-cover mt-4" src={image} alt="" /> : 
            <p className="text-gray-500 mt-4">{children}</p>}
        </div>
    </div>
);

export default Recuadro;