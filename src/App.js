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
import Quality from "./Components/Quality"
import OurProducts from "./Components/OurProducts/OurProducts";
import IconsQuality from "./Components/IconsQuality/IconsQuality";
import WhyChoose from "./Components/WhyChoose";

function App() {
  const [carrito, setCarrito] = useState(0);

  return (
    <div>
      <Head cart={carrito} />    
      <Banner />
      <LatestOffers cart={carrito} setCart={setCarrito} />      
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
