import React from 'react'
import Card from '../Card'


const Quality = (props) =>  {
   return (
  <>
  
 
      <div className='flex flex-wrap flex-grow font-bold h-100 bg-slate-800 justify-evenly px-auto md:justify-around lg:justify-around xl:justify-around 2xl:justify-around'>     
      {props.contenido.map(atributo=> (
        <Card
           title={atributo.title}
            paragraph={atributo.paragraph}
        />      
       ))}

    </div>
   
</>
  )
}

export default Quality
