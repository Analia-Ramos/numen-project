import React from "react";
const WhoMakes = () => {
    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-center max-w-6xl mx-4 mt-16 mb-10 lg:flex-row lg:mx-12">                     
        <div className= "flex flex-col items-center mr-7 mb-7 lg:items-start">
            <h1 className="py-8 mt-5 mb-5 text-4xl text-yellow-300 text-bold font-['Cormorant']"> <span className="text-white">Quien Hace</span> Tus Zapatillas? </h1>
            <p className= "px-4 mb-5 text-lg text-center lg:text-start lg:px-0"> Nuestras ideas generan que el sector siga creciendo gracias en parte a las ediciones limitadas, al coleccionismo y a la tendencia generada por celebridades e influencers que hacen que los jóvenes se interesen en este producto para intentar ser partícipes de las tendencias mundiales.</p>
           <h2 className="py-5 text-xl text-yellow-300"> Nuestros servicios: </h2>    
               <ul className= "list-disc list-inside">
                <li>CREATIVE DIRECTION</li>
                <li>ART DIRECTION</li>
                <li>CONTENT CREATION</li>
                <li>BRANDING & DESIGN</li>
                <li>STYLING</li>
               </ul>
                <button className= "px-4 py-2 mt-3 font-bold bg-yellow-300 rounded hover:bg-yellow-600 text-slate-800"> Mas Servicios </button>
        </div>
                <img src= "/images/johnnybravo.jpg" alt=" " className="object-cover w-auto lg:w-1/2 h-full lg:h-[550px] rounded"/>                       
        </div>
        </div>
    );
}
export default WhoMakes;




