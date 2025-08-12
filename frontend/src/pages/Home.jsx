import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../components/LocationSearchPanel";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
    const [pickup, setPickUp] = useState("");
    const [destination, setDestination] = useState("");

    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const searchRef = useRef();

    const [showVehiclePanel, setShowVehiclePanel] = useState(false);
    const vehiclePanelRef = useRef();

    const [showConfirmRidePanel, setShowConfirmRidePanel] = useState(false);
    const confirmRideRef = useRef();

    const [showLookingDriver, setShowLookingDriver] = useState(false);
    const lookingDriverRef = useRef();

    const [showWaitingDriver, setShowWaitingDriver] = useState(false);
    const waitingDriverRef = useRef();

    const submitHandler = (e) => {
        e.prevantDefault();
    };

    useGSAP(
        function () {
            if (showSearchPanel) {
                gsap.to(searchRef.current, {
                    height: "70%",
                });
            } else {
                gsap.to(searchRef.current, {
                    height: "0",
                });
            }
        },
        [showSearchPanel]
    );

    useGSAP(
        function () {
            if (showVehiclePanel) {
                gsap.to(vehiclePanelRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(vehiclePanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showVehiclePanel]
    );

    useGSAP(
        function () {
            if (showConfirmRidePanel) {
                gsap.to(confirmRideRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(confirmRideRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showConfirmRidePanel]
    );

    useGSAP(
        function () {
            if (showLookingDriver) {
                gsap.to(lookingDriverRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(lookingDriverRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showLookingDriver]
    );

    useGSAP(
        function () {
            if (showWaitingDriver) {
                gsap.to(waitingDriverRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(waitingDriverRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [showWaitingDriver]
    );

    return (
        <div className="relative overflow-hidden">
            <h2 className="text-2xl font-bold m-5 absolute">Uber</h2>

            <div className="h-screen w-full">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpTuwu1mzpH0-qE8uk6O6jxh7R2WTccB1uA&s"
                    alt=""
                    className="h-screen w-full"
                />
            </div>

            <div className="absolute bottom-0 flex flex-col justify-end h-screen w-full">
                <div className="p-4 bg-white h-[30%]">
                    <form onSubmit={submitHandler}>
                        <div className="flex justify-between  mt-3 mb-5 ">
                            <h2 className="text-2xl font-semibold">
                                Find a trip
                            </h2>
                            {showSearchPanel && (
                                <div onClick={() => setShowSearchPanel(false)}>
                                    <IoIosArrowDown className="text-2xl" />
                                </div>
                            )}
                        </div>
                        <input
                            className="px-4 py-2 mb-5 bg-[#eeeeee] rounded w-full"
                            type="text"
                            placeholder="Add a pick up location"
                            onClick={() => setShowSearchPanel(true)}
                            value={pickup}
                            onChange={(e) => setPickUp(e.target.value)}
                        />
                        <input
                            className="px-4 py-2  bg-[#eeeeee] rounded w-full"
                            type="text"
                            placeholder="Enter your destination"
                            onClick={() => setShowSearchPanel(true)}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </form>
                </div>

                <div ref={searchRef} className={`bg-white p-5 h-0`}>
                    <LocationSearchPanel
                        setShowSearchPanel={setShowSearchPanel}
                        setShowVehiclePanel={setShowVehiclePanel}
                    />
                </div>
            </div>

            <div
                ref={vehiclePanelRef}
                className="bg-white w-full p-3 py-8 fixed z-10 bottom-0 translate-y-full"
            >
                <VehiclePanel
                    setShowVehiclePanel={setShowVehiclePanel}
                    setShowConfirmRidePanel={setShowConfirmRidePanel}
                />
            </div>

            <div
                ref={confirmRideRef}
                className="bg-white w-full p-3 py-8 fixed z-10 bottom-0 translate-y-full"
            >
                <ConfirmRide
                    setShowLookingDriver={setShowLookingDriver}
                    setShowConfirmRidePanel={setShowConfirmRidePanel}
                />
            </div>

            <div
                ref={lookingDriverRef}
                className="bg-white w-full p-3 py-8 fixed z-10 bottom-0 translate-y-full"
            >
                <LookingForDriver />
            </div>

            <div
                ref={waitingDriverRef}
                className="bg-white w-full p-3 py-8 fixed z-10 bottom-0 translate-y-full"
            >
                <WaitingForDriver />
            </div>
        </div>
    );
}

export default Home;
