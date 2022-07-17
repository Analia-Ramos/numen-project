export default function Card (props) {

    return (

        
      
           
            <div className='flex flex-col flex-wrap mt-18 pt-14 bg-slate-800 items-centers  space-x-16'>

                <h2 className='m-2 mb-10 px-4 text-yellow-300 text-xl font-Cormorant'>{props.title}                  
                    <p className='m-2 bg-slate-800 w-40 pl-6 mt-10 pl-10 text-yellow-300 text-sm'>{props.paragraph}</p>
                </h2>
            </div>
       
    )

}