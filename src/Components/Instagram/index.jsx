import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { imagenes } from "./Imagenes";
import "./estilos.css";

const Instagram = () => {
    return (
        <div className="my-10">
            <h1 className="font-['Cormorant'] text-center text-4xl mb-10"><a href="https://www.instagram.com/" className="text-yellow-300 underline">@Kicks.Oficial</a> en Instagram</h1>
            <Carousel infiniteLoop autoPlay emulateTouch stopOnHover useKeyboardArrows showArrows>
                {imagenes.map((imagen) => (
                    <div className="image-bg">
                        <img key={imagen.src} src={`../images/${imagen.src}`} alt="Zapatillas" className=" hover:border-yellow-300">
                        </img>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Instagram;