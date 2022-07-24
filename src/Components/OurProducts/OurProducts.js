import React from "react";
import IconsQuality from "../IconsQuality/IconsQuality"
import Quality from "../Quality"
import Card from "../Card";


const OurProducts=() => {
    const atributos = [
        {title: "Diseños exclusivos", paragraph: " Descubra nuevos diseños para hacer su experiencia inolvidable. También podra conocer otras personas que confian en nuestra marca."},
        {title: "Venta al por mayor", paragraph:" Usted podrá invertir en nuestros productos para formar su propio negocio!"},
        {title: "Apoye su comunidad", paragraph:" Al comprar nuestros productos estas cuidando a tu comunidad, generando empleo, sosteniendo familias y emprendimientos."},
        {title: "Disfrute la calidad", paragraph:" Solo ofrecemos productos altamente testeados, para que tengas lo mejor."},
        {title: "Servicios para socios", paragraph: "Como miembro de nuestro club nos aseguraremos de que tengas la mejor experiencia."},
       
    ]
    return (
        <div className="h-full mb-10 bg-slate-800 sm:-mb-20 md:-mb-20 lg:mb-20">                
            <Quality
                contenido={atributos}
            />
            <Card/>
        </div>
    )

}

export default OurProducts