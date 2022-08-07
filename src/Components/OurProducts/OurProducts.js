import React from "react";
import Quality from "../Quality"
import Card from "../Card";


const OurProducts=() => {
    const atributos = [
        {title:"Diseños exclusivos", paragraph: " Descubrí nuevos diseños para hacer tu experiencia inolvidable. También podrás conocer otras personas que confían en nuestra marca."},
        {title: "Venta al por mayor", paragraph:" Podrás invertir en nuestros productos para formar tu propio negocio!"},
        {title: "Apoyá tu comunidad", paragraph:" Al comprar nuestros productos estás cuidando a tu comunidad, generando empleo, sosteniendo familias y emprendimientos."},
        {title: "Disfrutá la calidad", paragraph:" Solo ofrecemos productos altamente testeados, para que tengas lo mejor."},
        {title: "Servicios para socios", paragraph: "Como miembro de nuestro club nos aseguraremos de que tengas la mejor experiencia.",},
       
    ]
    return (
        <div className="flex flex-col h-full bg-slate-800 md:-mb-20 lg:mb-0">                
            <Quality
                contenido={atributos}
            />
            <Card/>
        </div>
    )

}

export default OurProducts