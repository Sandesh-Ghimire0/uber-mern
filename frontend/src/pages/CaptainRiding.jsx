import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
    const [showFinishRide, setShowFinishRide] = useState(false)
    const finishRideRef = useRef(null)

    useGSAP(
        function () {
            if (showFinishRide) {
                gsap.to(finishRideRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(finishRideRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showFinishRide]
    );
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-4/5">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpTuwu1mzpH0-qE8uk6O6jxh7R2WTccB1uA&s"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div onClick={()=>setShowFinishRide(true)} className="flex-1/5  p-5 bg-amber-400">
                <div className="flex  justify-center mb-5">
                    <IoIosArrowUp className="text-2xl inline-flex" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-bold">2 KM away</p>
                    <button className="px-4 py-2 text-white bg-green-600 rounded-md">
                        Complete Ride
                    </button>
                </div>
            </div>

            <div
                ref={finishRideRef}
                className="bg-white w-full   p-3 py-8 fixed z-10 bottom-0 translate-y-full"
            >
                <FinishRide setShowFinishRide={setShowFinishRide}/>
                <span className="text-xs text-gray-500 flex justify-center mt-4">Click on finish ride if you have completed payment</span>
            </div>
        </div>
    );
}

export default CaptainRiding;
