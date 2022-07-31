import React from "react";
import zapatillas1 from "../assets/imagenes/zapatillas1.jpg";
import zapatillas2 from "../assets/imagenes/zapatillas2.jpg";
import zapatillas3 from "../assets/imagenes/zapatillas3.jpg";
import zapatillas4 from "../assets/imagenes/zapatillas4.jpg";
import Swal from 'sweetalert2';


const LatestOffers = ({cart, setCart}) => { 

  const handleModal = () => {
    Swal.fire({
      title : 'Querés confirmar tu compra?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Agregar al carrito',
      denyButtonText: `No, gracias`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart + 1)
        Swal.fire('Agregado al carrito!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Eliminado del carrito', '', 'info')
      }
    })
  }


  return (
    <div className="pt-8 bg-slate-800">
      <h2 className="text-center mb-8 font-['Cormorant'] py-2.5 font-bold text-5xl text-white uppercase tracking-wide">On Sale</h2>
      <div className="flex flex-col flex-wrap items-center justify-center w-screen h-full px-4 py-4">
        <div className="grid grid-cols-1 gap-5 space-x-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 "> 
          <div className="duration-500 transform bg-white rounded-xl hover:translate-y-2"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">  
              <img src={zapatillas1} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Flora</p>
              <h3 className="m-px text-lg text-center text-black">$15000</h3>
              <button onClick={() => {
              handleModal() }} 
              className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300 text-black">Comprar</button>
            </div>
          </div>          
          <div className="duration-500 transform bg-white rounded-xl hover:translate-y-2"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas2} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Urbanas</p>
              <h3 className="m-px text-lg text-center text-black">$16000</h3>
              <button onClick={() => {
              handleModal() }} 
              className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium text-black bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
          <div className="duration-500 transform bg-white rounded-xl hover:translate-y-2"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas3} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Colorful</p>
              <h3 className="m-px text-lg text-center text-black">$18000</h3>
              <button onClick={() => {
              handleModal()}} 
              className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium text-black bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
          <div className="duration-500 transform bg-white rounded-xl hover:translate-y-2"> 
            <div className="flex flex-col p-4">
              <div className="overflow-hidden rounded-xl">
              <img src={zapatillas4} alt="" className="w-80 h-80"/> 
              </div>
              <p className="text-2xl text-center text-black text-bold">Diseño Lil Yoda</p>
              <h3 className="m-px text-lg text-center text-black">$18000</h3>
              <button onClick={() => {
              handleModal()}} 
              className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium text-black bg-yellow-500 rounded-md hover:bg-yellow-300">Comprar</button>
            </div>
          </div> 
        </div>  
      </div>  
    </div>
  
  );
};

export default LatestOffers;
