import React from "react";

const SurpriseSomeone = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col items-center max-w-6xl mx-4 mt-16 mb-10 lg:flex-row lg:mx-12">
            <img src="/images/regalo.jpg" alt="Zapatillas de regalo" className="float-left object-cover w-auto lg:w-1/2 h-full lg:h-[432px] rounded"/>
            <div className="flex flex-col items-center w-full pl-0 lg:pl-10 mt-7 lg:items-start">
                <h2 className="mb-5 font-['Cormorant'] text-4xl"><span className="text-yellow-300">Sorprendé a alguien</span>
                <br></br>Con un regalo diferente</h2>
                <div className="px-5 text-base lg:px-0">
                    <p className="mb-2">¿Tenés un amigo o familiar al que te gustaría regalarle algo? Nuestra caja personalizada con zapatillas únicas es la manera perfecta de poner una sonrisa en su rostro, entregada directamente a su puerta.</p>
                    <p>Para comprar para un gran grupo de personas, ponete en contacto con nosotros y podemos discutir paquetes a medida y mensajes personalizados.</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className="w-40 h-12 text-lg bg-yellow-300 border-none rounded mt-7 text-slate-800">Comprar Ahora</button>
                </div>
            </div>
    </div>
    </div>
  );
};

export default SurpriseSomeone;
