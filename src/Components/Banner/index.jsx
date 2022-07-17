import React from "react";
import banner from "../assets/imagenes/banner.png";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${banner}")`,
    backgroundSize: "cover",
  };
  return (
      <div className="w-full h-screen text-black" style={backgroundImageStyle}> 
          <div className="grid max-w-xl grid-cols-1 gap-16 py-10 pt-20 align-middle px-14 content-evenly">         
            <h2 className="mt-10 text-5xl font-thin uppercase">My Kicks! My Style</h2>
            <p className="text-2xl font-thin leading-relaxed tracking-wide">Tus zapas customizadas, únicas y originales, pintadas a mano con el diseño que más te guste!</p>
            <button className="w-48 px-6 py-2 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300 h-11">Ver Diseños</button> 
          </div>
      </div>
  );
};

export default Banner;
