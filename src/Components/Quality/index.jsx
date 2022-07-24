import React from 'react'
import Card from '../Card'


const Quality = (props) =>  {
   return (
  <>
  
 
      <div className='flex flex-wrap flex-grow font-bold h-100 bg-slate-800 justify-evenly px-auto '>     
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
