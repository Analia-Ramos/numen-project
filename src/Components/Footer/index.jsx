import React from "react";

const titulosLista = [
    {
        id: 1,
        titulo: "Categorías",
        li1:"Zapatillas deportivas", 
        li2:"Sneakers",
        li3:"Converse"
    },
    {
        id: 2,
        titulo: "Preguntas Frecuentes",
        li1:"¿Cómo comprar?", 
        li2:"Métodos de pago",
        li3:"Envíos"
    },
    {
        id: 3,
        titulo: "Sobre Nosotros",
        li1:"Contactanos", 
        li2:"Sucursales",
        li3:"Nuestra Historia"
    },
]

const Footer = () => {
    return (
    <div className="flex flex-no-wrap justify-center overflow-x-auto">
        <footer className="relative flex items-center pb-8 mt-10 text-sm">
            <div>
                <img src="/imagenes/logo.png" alt="Logo" className="w-32"></img>
            </div>
            {titulosLista.map((item) => (
            <ul key={item.id} className="mx-10 leading-loose list-none">
                <li>
                <h2 className="mb-2 font-bold">{item.titulo}</h2>
                <ul className="text-[#999]">
                    <li>
                    <a href="https://youtube.com/">{item.li1}</a>
                    </li>
                    <li>
                    <a href="https://youtube.com/">{item.li2}</a>
                    </li>
                    <li>
                    <a href="https://youtube.com/">{item.li3}</a>
                    </li>
                </ul>
                </li>
            </ul>
            ))}
        </footer>
    </div>
    );
};

export default Footer;
