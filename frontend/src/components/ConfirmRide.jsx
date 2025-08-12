import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCash } from "react-icons/io";

function ConfirmRide({ setShowLookingDriver,setShowConfirmRidePanel }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Confirm your ride</h2>

            <div className="flex justify-between items-centerw-full">
                <div className="w-full flex justify-center">
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png"
                        alt=""
                        className="w-40"
                    />
                </div>
            </div>

            <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-center gap-5 border-b-1 border-b-gray-500 w-full pb-2">
                    <div>
                        <GrLocationPin className="text-xl font-bold" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">562/11-A</h2>
                        <p className="text-md text-gray-700">
                            Garden of Dreams, Thamel
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-5 border-b-1 border-b-gray-500 w-full pb-2">
                    <div>
                        <IoLocationSharp className="text-xl font-bold" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">562/11-A</h2>
                        <p className="text-md text-gray-700">
                            Garden of Dreams, Thamel
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div>
                        <IoIosCash className="text-xl font-bold" />
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Rs. 130</h2>
                        <p className="text-md text-gray-700">Cash Cash</p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <button
                    onClick={() => {
                        setShowLookingDriver(true)
                        setShowConfirmRidePanel(false)
                    }}
                    className="px-4 py-2 text-white bg-black rounded-md w-full"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default ConfirmRide;
