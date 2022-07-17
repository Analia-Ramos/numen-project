import React from 'react'
import Card from '../Card'
// import { GoTelescope, BsFillHouseDoorFill, FaRegHandshake, AiOutlineLike, GiCrownedHeart } from "react-icons/fa";




const Quality = (props) =>  {
 


  return (
    
    <div className='bg-slate-800 font-bold flex flex-grow flex-wrap justify-evenly px-auto h-100  justify-center'>
     
      {props.contenido.map(atributo=> (
        <Card
           title={atributo.title}
            paragraph={atributo.paragraph}
        />      
       ))}

    </div>
  )
}

export default Quality
