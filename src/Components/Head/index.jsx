import React from "react";


const Head = ({ cart, setIsOpen }) => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6 -mb-10 sm:w-auto md:w-auto lg:min-w-min">
      <div class="flex flex-shrink-0 h-min text-yellow-300 mr-6 mb-10 mt-0 md:mb-0 lg:mb-10">
        <img
          src="../images/NuevoLogo.png"
          className="h-20 mr-10 -ml-2 min-w-min"
          alt="logotipo"
        ></img>
      </div>
      <div class="hidden sm:hidden md:pl-16 md:-mt-10 md:absolute md:ml-60 md:flex md:flex-row  lg:hidden">
        <button
          id="boton"
          class="flex items-center px-6 py-2 border rounded text-yellow-500 border-yellow-500 hover:text-yellow-300 hover:border-yellow-300 "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="menu"
        class="relative sm:ml-50 md:items-center md:relative md:ml-96 lg:flex-grow lg:relative lg:items-center lg:-ml-60 lg:text-center lg:mt-10"
      >
        <div class=" md:flex md:flex-row md:mt-10 md:ml-40 md:pl-60 lg:relative">
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="hidden sm:hidden md:hidden lg:inline-block lg:pl-10 lg:-mt-16 lg:text-xl text-yellow-500 hover:text-yellow-300 hover:text-2xl transition-all"
          >
            Hombres
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="hidden sm:hidden md:hidden lg:inline-block lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl lg:-mt-16 transition-all"
          >
            Mujeres
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="hidden sm:hidden md:hidden lg:inline-block lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl lg:-mt-16 transition-all"
          >
            Niños
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="hidden sm:hidden md:hidden lg:inline-block lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl lg:-mt-16 transition-all"
          >
            Bebés
          </a>
          <div className="absolute flex flex-row -mt-10 -ml-40 md:-mt-24 md:-ml-60 md:mx-auto lg:relative lg:ml-40 lg:pl-3 lg:-mr-10 lg:-mt-20 lg:items-start ">
            <a href="https://campus.academianumen.com/login/index.php"
            alt="buscar">
              <img
                src="../images/lupita.png"
                className="min-w-min h-12 py-2.5 px-5 lg:px-5"
                alt="busqueda"
              ></img>
            </a>
            <a href="https://campus.academianumen.com/login/index.php"
            alt="nosotros">
              <img
                src="../images/persona.png"
                className="min-w-min h-12 py-2.5 px-5 lg:px-5"
                alt="contacto"
              />
            </a>
            <img
              src="../images/carrito.png"
              className="min-w-min h-12 py-2.5 px-5 lg:px-5"
              alt="tus compras"
              onClick={() => setIsOpen(true)}
            />
            <h2 className="text-yellow-300">{cart}</h2>
            <div className="rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Head;
