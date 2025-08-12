import React from "react";
import { FaL, FaLocationDot } from "react-icons/fa6";

function LocationSearchPanel({setShowSearchPanel, setShowVehiclePanel}) {
    const locations = [
        "24B, Fulbari Tole, New vision Academy, Koteshwor",
        "15A, Durbar Marg, Kathmandu Mall, Kathmandu",
        "32C, Lazimpat Road, Hotel Shanker, Kathmandu",
        "7D, Thamel, Garden of Dreams, Kathmandu",
    ];
    return (
        <>
            {locations.map((loc, i) => (
                <div
                    key={i}
                    className="flex gap-4 border-2 p-2 rounded-xl border-gray-200 active:border-black items-center my-4 justify-center"
                    onClick={()=>{
                        setShowVehiclePanel(true) 
                        setShowSearchPanel(false)
                    }}
                >
                    <FaLocationDot className="text-xl" />
                    <p className="font-medium">
                        {loc}
                    </p>
                </div>
            ))}

          
        </>
    );
}

export default LocationSearchPanel;
