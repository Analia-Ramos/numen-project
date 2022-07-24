import React from "react";

const Head = ({cart, setIsOpen}) => {

  return (
    <div className="py-4 bg-slate-800 w-1181 h-130">
      
      <nav>
        <div className="container flex" >
          <div className="flex flex-grow">
               <img src="../images/NuevoLogo.png" className="w-20 h-20 ml-5" alt="logotipo">
              </img>
          </div>
          
          <div className="flex flex-grow ml-80">
            <div className="items-center justify-between mt-5 ml-40">
                <a href="" className="mr-10 text-xl font-bold text-yellow-300 duration-700 ease-in-out hover:text-yellow-400 font-Poppins hover:text-2xl">Mujer</a>
                <a href="" className="mr-10 text-xl font-bold text-yellow-300 duration-700 ease-in-out hover:text-yellow-400 font-Poppins hover:text-2xl">Hombre</a>
                <a href="" className="mr-10 text-xl font-bold text-yellow-300 duration-700 ease-in-out hover:text-yellow-400 font-Poppins hover:text-2xl">Unisex</a>
                <a href="" className="mr-10 text-xl font-bold text-yellow-300 duration-700 ease-in-out hover:text-yellow-400 font-Poppins hover:text-2xl">Niños</a>
                <a href="" className="mr-0 text-xl font-bold text-yellow-300 duration-700 ease-in-out hover:text-yellow-400 font-Poppins hover:text-2xl">Bebés</a>
            </div>
            <div className="flex ml-60">
                <a href="#"><img src="../images/lupita.png" className="w-18 h-14 py-2.5 px-5"  alt="busqueda"></img></a>
                <a href="#"><img src="../images/persona.png" className="w-18 h-14 py-2.5 px-5"  alt="contacto"/></a>
                <img src="../images/carrito.png" className="w-18 h-14 py-2.5 px-5"  alt="tus compras"/>
                <h2 className="text-yellow-300">{cart}</h2>
                  <button onClick={() => setIsOpen(true)}> boton </button>
                <div className="rounded-full">
                </div>
            </div>

          </div>
        
        </div>
      </nav>
    </div>
  );
};

export default Head;
