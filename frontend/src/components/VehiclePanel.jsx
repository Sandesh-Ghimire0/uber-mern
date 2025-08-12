import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function VehiclePanel({ setShowVehiclePanel, setShowConfirmRidePanel }) {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-2">Choose a Vehicle</h2>
                <div onClick={() => setShowVehiclePanel(false)}>
                    <IoIosArrowDown className="text-2xl" />
                </div>
            </div>
            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex justify-between items-center p-3 my-3 border-2 border-gray-200 active:border-black rounded-xl"
            >
                <div>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png"
                        alt=""
                        className="w-20"
                    />
                </div>

                <div className="flex flex-col w-1/2">
                    <div className="flex gap-2">
                        <p className="font-medium text-sm">UberGo</p>
                        <div className="flex items-center justify-center font-medium text-sm">
                            <IoPerson />
                            <span>4</span>
                        </div>
                    </div>

                    <p className="font-medium text-sm">2 mins away</p>

                    <p className="font-medium text-xs text-gray-600">
                        Affordable, Compact Rides
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-xl">Rs. 150</p>
                </div>
            </div>

            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex justify-between items-center p-3 my-3 border-2 border-gray-200 active:border-black rounded-xl"
            >
                <div>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
                        alt=""
                        className="w-20"
                    />
                </div>

                <div className="flex flex-col w-1/2">
                    <div className="flex gap-2">
                        <p className="font-medium text-sm">Moto</p>
                        <div className="flex items-center justify-center font-medium text-sm">
                            <IoPerson />
                            <span>1</span>
                        </div>
                    </div>

                    <p className="font-medium text-sm">2 mins away</p>

                    <p className="font-medium text-xs text-gray-600">
                        Affordable, Compact Rides
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-xl">Rs. 100</p>
                </div>
            </div>

            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex justify-between items-center p-3 my-3 border-2 border-gray-200 active:border-black rounded-xl"
            >
                <div>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                        alt=""
                        className="w-20"
                    />
                </div>

                <div className="flex flex-col w-1/2">
                    <div className="flex gap-2">
                        <p className="font-medium text-sm">UberAuto</p>
                        <div className="flex items-center justify-center font-medium text-sm">
                            <IoPerson />
                            <span>2</span>
                        </div>
                    </div>

                    <p className="font-medium text-sm">2 mins away</p>

                    <p className="font-medium text-xs text-gray-600">
                        Affordable, Compact Rides
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-xl">Rs. 120</p>
                </div>
            </div>
        </>
    );
}

export default VehiclePanel;
