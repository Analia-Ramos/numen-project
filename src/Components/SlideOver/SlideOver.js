import React from 'react';


function SlideOver ({onClose, isOpen}){
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
                <div class="relative mt-6 flex-1 px-4 sm:px-6">

                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div class="h-full border-gray-200" aria-hidden="true"></div>
                  </div>

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