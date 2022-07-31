import React from "react";


const Head = ({ cart, setIsOpen }) => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <div class="flex items-center flex-shrink-0 text-yellow-300 mr-6">
        <img
          src="../images/NuevoLogo.png"
          className="h-20 ml-4 mr-10 in-w-min"
          alt="logotipo"
        ></img>
      </div>
      <div class="block lg:hidden">
        <button
          id="boton"
          class="flex items-center px-6 py-2 border rounded text-yellow-500 border-yellow-500 hover:text-yellow-300 hover:border-yellow-300"
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
        class=" sm:ml-50 lg:flex-grow lg:relative lg:inline-flex lg:items-center lg:w-auto lg:text-center lg:-mt-10"
      >
        <div class=" lg:flex-grow lg:mr-60">
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="sm:hidden md:hidden lg:inline-block lg:mt-0 lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl transition-all"
          >
            Hombres
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="sm:hidden md:hidden lg:inline-block lg:mt-0 lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl transition-all"
          >
            Mujeres
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="sm:hidden md:hidden lg:inline-block lg:mt-0 lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl transition-all"
          >
            Niños
          </a>
          <a
            href="https://campus.academianumen.com/login/index.php"
            class="sm:hidden md:hidden lg:inline-block lg:mt-0 lg:pl-10 lg:text-xl text-yellow-500 hover:text-yellow-300  mr-4 hover:text-2xl transition-all"
          >
            Bebés
          </a>
          <div className="flex flex-row sm:flex-row md:flex lg:relative lg:inline-flex lg:ml-40 lg:-mr-96 lg:items-start">
            <a href="#">
              <img
                src="../images/lupita.png"
                className="min-w-min h-12 py-2.5 px-3"
                alt="busqueda"
              ></img>
            </a>
            <a href="#">
              <img
                src="../images/persona.png"
                className="min-w-min h-12 py-2.5 px-5"
                alt="contacto"
              />
            </a>
            <img
              src="../images/carrito.png"
              className="min-w-min h-12 py-2.5 px-5"
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
