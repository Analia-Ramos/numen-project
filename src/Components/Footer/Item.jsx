import React from "react";

const Item = ({ Links, title }) => {
    return (
        <ul className="leading-loose">
        <h2 className="mb-2 font-bold">{title}</h2>
        {Links.map((link) => (
            <li key={link.nombre}>
            <a
                className="text-sm text-gray-400 duration-300 hover:text-yellow-300"
                href={link.link}
            >
                {link.nombre}
            </a>
            </li>
        ))}
        </ul>
    );
};

export default Item;