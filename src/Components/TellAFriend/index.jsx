import React from "react";
const TellAFriend = () => {
    return (
        <div className="flex flex-col items-center my-10 bg-black/75 bg-blend-overlay bg-tellafriend-banner">
            <h1 className="container mx-auto mt-14 mb-10 text-4xl font-bold text-center text-yellow-300 strong font-['Cormorant']"> Dile a Tus Amigos </h1> 
            <div className="flex flex-row justify-center mb-14">          
                <img src="/images/face.png" alt=" " className="w-12 h-12 mx-3 min-height" />
                <img src= "/images/Instagram1.png" alt=" "className="w-12 h-12 mx-3 min-height"/>
                <img src= "/images/Whatsapp.png" alt=" "className="w-12 h-12 mx-3 min-height"/>
                <img src= "/images/messenger.png" alt=" "className="w-12 h-12 mx-3 min-height"/>
                <img src= "/images/twitter.png" alt=" "className="w-12 h-12 mx-3 min-height"/>
                <img src= "/images/teleg.png" alt=" "className="w-12 h-12 mx-3 min-height"/>    
            </div>
        </div>
    )
}
export default TellAFriend;


