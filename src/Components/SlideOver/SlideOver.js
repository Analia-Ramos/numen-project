import React from 'react';
import { products } from './products';


function SlideOver ({onClose, isOpen, setCart, cart }){
  return(
    <> 
    {isOpen && 
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto relative w-screen max-w-md">
              <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button onClick={onClose} type="button" class="rounded-md text-black hover:bg-yellow-300 bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-black">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div class="px-4 sm:px-6">
                  <h2 class="text-lg font-medium text-black
                  " id="slide-over-title">Mi Carrito</h2>
                </div>
              </div>

              <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (

                              <li  key={product.id} className="flex py-6">
                                <button onClick={() => console.log(product)}> adasd </button>
                                <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                  <img
                                    src={product.imageSrc}
                                    alt=""
                                    className="object-cover object-center w-full h-full"
                                  />
                                </div>

                                <div className="flex flex-col flex-1 ml-4">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}> {product.name} </a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-end justify-between flex-1 text-sm">
                                    <p className="text-gray-500">Cantidad {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-yellow-300 hover:text-yellow-500"
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))} 
                          </ul>
                        </div>
                      </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};




export default SlideOver