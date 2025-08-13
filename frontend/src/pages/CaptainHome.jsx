import React, { useRef, useState } from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { MdLogout, MdOutlineWatchLater } from "react-icons/md";
import { LuNotebookTabs } from "react-icons/lu";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

function CaptainHome() {
    const [showRidePopup, setShowRidePopup] = useState(true)
    const ridePopupRef = useRef(null)

    const [showConfirmRidePopup, setShowConfirmRidePopup] = useState(false)
    const showConfirmRidePopupRef = useState(null)


    useGSAP(
        function () {
            if (showRidePopup) {
                gsap.to(ridePopupRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(ridePopupRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showRidePopup]
    );

    useGSAP(
        function () {
            if (showConfirmRidePopup) {
                gsap.to(showConfirmRidePopupRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(showConfirmRidePopupRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showConfirmRidePopup]
    );

    return (
        <div>
            <div className="w-full relative">
                <Link
                    to="/home"
                    className="absolute right-5 top-5 bg-white rounded-full p-2"
                >
                    <MdLogout className="text-2 xl" />
                </Link>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpTuwu1mzpH0-qE8uk6O6jxh7R2WTccB1uA&s"
                        alt=""
                        className="w-full h-80"
                    />
                </div>
            </div>

            <div className="p-5">
                <CaptainDetails />
            </div>

            <div  ref={ridePopupRef} className="bg-white w-full p-3 py-8 fixed z-10 bottom-0 translate-y-full">
                <RidePopUp setShowRidePopup={setShowRidePopup} setShowConfirmRidePopup={setShowConfirmRidePopup}/>
            </div>

            <div  ref={showConfirmRidePopupRef} className="bg-white w-full h-screen p-3 py-8 fixed z-10 bottom-0 translate-y-full">
                <ConfirmRidePopup setShowRidePopup={setShowRidePopup} setShowConfirmRidePopup={setShowConfirmRidePopup}/>
            </div>


        </div>
    );
}

export default CaptainHome;
