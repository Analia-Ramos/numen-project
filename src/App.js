import Head from "./Components/Head";
import Banner from "./Components/Banner";
import LatestOffers from "./Components/LatestOffers";
import OurProducts from "./Components/OurProducts/OurProducts";
import { useState } from "react";


// import { GoTelescope, BsFillHouseDoorFill, FaRegHandshake, AiOutlineLike, GiCrownedHeart, FaCarSide } from "react-icons/fa";


function App() {

  const [carrito, setCarrito] = useState(0);

  return (
    <div>
     
      
      <Head valorDelCarrito={carrito} />
     
      <Banner/>
      <button onClick={() => setCarrito(carrito + 1)} className="bg-red-500  w-full">Agregar item al carrito</button> 
      <button onClick={()=> setCarrito(carrito - 1)}  className="bg-red-500  w-full">Quitar item del carrito</button> 
    
      <LatestOffers/>
      <OurProducts/>

    </div>
  );
}

export default App;
