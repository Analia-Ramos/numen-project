import React from "react";
import zapatillas1 from "../assets/imagenes/zapatillas1.jpg";
import zapatillas2 from "../assets/imagenes/zapatillas2.jpg";
import zapatillas3 from "../assets/imagenes/zapatillas3.jpg";
import zapatillas4 from "../assets/imagenes/zapatillas4.jpg";

const LatestOffers = () => { 

  return (
    <div className="pt-8 bg-slate-800">
      <h2 className="text-center mb-8 font-['Cormorant'] py-2.5 font-bold text-5xl text-white uppercase tracking-wide">On Sale</h2>
      <div className="flex items-center justify-center w-screen h-full px-4 py-4">
        <div className="grid grid-cols-4 gap-5 space-x-1 md:grid-cols-2 lg:grid-cols-4 "> 
          <div className="bg-white rounded-xl"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">  
              <img src={zapatillas1} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Flora</p>
              <h3 className="m-px text-lg text-center text-black">$15000</h3>
              <button className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div>          
          <div className="bg-white rounded-xl"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas2} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Urbanas</p>
              <h3 className="m-px text-lg text-center text-black">$16000</h3>
              <button className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
          <div className="bg-white rounded-xl"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas3} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Colorful</p>
              <h3 className="m-px text-lg text-center text-black">$18000</h3>
              <button className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
          <div className="bg-white rounded-xl"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas4} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Lil Yoda</p>
              <h3 className="m-px text-lg text-center text-black">$18000</h3>
              <button className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
        </div>  
      </div>  
    </div>
  
  );
};

export default LatestOffers;