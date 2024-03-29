import { useState } from "react";
import WhoMakes from "./Components/WhoMakes";
import TellAFriend from "./Components/TellAFriend";
import Head from "./Components/Head";
import Banner from "./Components/Banner";
import LatestOffers from "./Components/LatestOffers";
import OurPartner from "./Components/OurPartner";
import SurpriseSomeone from "./Components/SurpriseSomeone";
import Instagram from "./Components/Instagram";
import Footer from "./Components/Footer";
import OurProducts from "./Components/OurProducts/OurProducts";
import IconsQuality from "./Components/IconsQuality/IconsQuality";
import SlideOver from "./Components/SlideOver/SlideOver";

function App() {
  const [list, setList] = useState([])
  const [carrito, setCarrito] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => {setIsOpen(false);}

  return (
    <div>
      <Head cart={carrito} setIsOpen={setIsOpen} />   
      <Banner />
      <LatestOffers cart={carrito} setCart={setCarrito} list={list} setList={setList} />
      <SlideOver isOpen={isOpen} onClose={handleOnClose} list={list} /> 
      <IconsQuality/>
      <OurProducts/>
      <WhoMakes />
      <OurPartner />
      <SurpriseSomeone />
      <Instagram />
      <TellAFriend />
      <Footer />
    </div>
  );
}

export default App;
