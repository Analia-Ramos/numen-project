import React from "react";
import ContenedorItem from "./ContenedorItem";

const Footer = () => {
    return (
        <ContenedorItem />
    );
};

export default Footer;

/*<div className="flex flex-no-wrap justify-center">
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
    </div>*/