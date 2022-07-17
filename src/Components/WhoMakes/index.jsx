import React from "react";

const WhoMakes = () => {

    return (
        <div>
            <div className="flex flex-col items-center">
            <div className="flex flex-col items-center max-w-6xl mx-4 mt-16 mb-10 lg:flex-row lg:mx-12">                
            <div class="container mx-auto mt-10 mb-10">
            <img src= "/images/2.jpg" alt=" " className="float-right object-cover w-auto lg:w-1/2 h-full lg:h-[550px] rounded"/>   
          <div class="mt-5 mb-5"> 
            <h1 className="py-8 text-xl text-yellow-300"> <span className="text-white">Quien Hace</span> Tus Zapatillas? </h1>
            </div>
            <p text-lg> Nuestras ideas generan que el sector siga creciendo gracias en parte a las ediciones limitadas, al coleccionismo y a la tendencia generada por celebridades e influencers que hacen que los jóvenes se interesen en este producto para intentar ser partícipes de las tendencias mundiales. 
            <br />
            <br />
           <h2 className="py-8 text-xl text-yellow-300"> Nuestros servicios: </h2>    
            </p>    
            <br />
            <ul class= "list-disc list-inside">
                <li>CREATIVE DIRECTION</li>
                <li>ART DIRECTION</li>
                <li>CONTENT CREATION</li>
                <li>BRANDING & DESIGN</li>
                <li>STYLING</li>
                <br />
                
               
                
                <button class= "bg-yellow-300 hover:bg-yellow-600 font-bold text-slate-800 py-2 px-4 rounded"> Mas Servicios </button>
                      
                 <br />
                 <br />
                 <br />
            </ul>
            
            </div>
            </div>
        
        </div>

        </div>




    );





}

export default WhoMakes;




