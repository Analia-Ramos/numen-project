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
// import Quality from "./Components/Quality";
import SlideOver from "./Components/SlideOver/SlideOver";

function App() {
  const [carrito, setCarrito] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => {setIsOpen(false);}

  return (
    <div>
      <Head cart={carrito} setIsOpen={setIsOpen} />
      <Banner />
      <LatestOffers cart={carrito} setCart={setCarrito} />
      <SlideOver isOpen={isOpen} onClose={handleOnClose} /> 
      {/* <Quality /> */}
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
