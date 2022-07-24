import React from "react";
const TellAFriend = () => {
    return (
        <div className="flex flex-col items-center my-10 bg-black/75 bg-blend-overlay bg-tellafriend-banner">
            <h1 className="container mx-auto mt-14 mb-10 text-4xl font-bold text-center text-yellow-300 strong font-['Cormorant']"> Dile a Tus Amigos </h1> 
            <div className="flex flex-row justify-center mb-14">          
                <img src= "/images/facebook.svg" alt=" " className="w-12 h-12 mx-3 bg-yellow-300"/>
                <img src= "/images/instagram.svg" alt=" "className="w-12 h-12 mx-3 bg-yellow-300"/>
                <img src= "/images/whatsapp.svg" alt=" "className="w-12 h-12 mx-3 bg-yellow-300"/>
                <img src= "/images/messenger.svg" alt=" "className="w-12 h-12 mx-3 bg-yellow-300"/>
                <img src= "/images/twitter.svg" alt=" "className="w-12 h-12 mx-3 bg-yellow-300"/>
                <img src= "/images/telegram.svg" alt=" "className="w-12 h-12 mx-3 bg-yellow-300"/>    
            </div>
        </div>
    )
}
export default TellAFriend;


