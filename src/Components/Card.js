export default function Card (props) {

    return (           
        <div className='flex flex-col flex-wrap -mb-4 space-x-16 mt-18 pt-14 bg-slate-800 items-centers sm:-mb-12'>
            <h2 className='px-4 m-2 text-xl text-yellow-300 font-Cormorant'>{props.title}                  
                <p className='w-40 pb-10 pl-10 m-2 mt-10 text-sm text-yellow-300 bg-slate-800'>{props.paragraph}</p>
            </h2>
        </div>
       
    )

}