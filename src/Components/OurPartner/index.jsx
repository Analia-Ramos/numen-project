import React from "react";

const OurPartner = () => {
  return (
    <div className="flex flex-col items-center bg-black/75 bg-blend-overlay bg-graffiti-banner">
      <h2 className="text-white mt-16 text-center font-['Cormorant'] text-4xl">Nuestro socio de caridad, Fundación Carrera</h2>
      <img src="/imagenes/caridad.png" alt="Logo de caridad" className="object-contain w-24 h-32 mb-8 " />
      <button className="p-2 mb-16 text-lg bg-yellow-300 border-none rounded text-oscuro">Más información sobre Fundación Carrera</button>
    </div>
  );
};

export default OurPartner;
