import React from "react";

const IconsQuality=() => {

    return (
    <>
        <div className="justify-center pt-20 text-5xl font-bold text-center text-yellow-300 bg-slate-800 font-Poppins">
            <h2><span className="text-white">¿Por qué</span> elegir nuestros productos?</h2>
        </div>
        <div className="hidden sm:hidden sm:justify-evenly md:hidden md:justify-arround lg:flex bg-slate-800 lg:justify-around 2xl:justify-around lg:mt-20">
            <img src="../images/telescope.png" className="h-24 w-30"  alt="Telescope"></img>
            <img src="../images/casa.png" className="h-24 w-30"  alt="House"></img>
            <img src="../images/manos.png" className="h-24 w-30"  alt="Hands"></img>
            <img src="../images/zapatilla.jpg" className="h-24 w-30"  alt="Trainers"></img>
            <img src="../images/miembros.jpg" className="h-24 w-30"  alt="Members"></img>
        </div>

        
    </>
    )

}

export default IconsQuality