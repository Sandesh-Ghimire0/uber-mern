import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosCash } from "react-icons/io";

function RidePopUp({setShowRidePopup, setShowConfirmRidePopup}) {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-2">New Ride Request</h2>
                <div onClick={() => setShowRidePopup(false)}>
                    <IoIosArrowDown className="text-2xl" />
                </div>
            </div>

            <div className="flex font-bold justify-between items-center bg-amber-400 p-5 rounded-xl my-4">
                <div className="flex gap-3 items-center">
                    <img
                        src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1419411609-20240305012817824.jpg?c=16x9&q=h_833,w_1480,c_fill"
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="font-semibold">Ramesh Yadav</p>
                </div>

                <div>
                    <p>2.2 KM</p>
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

            <div className="w-full flex gap-3">
                <button onClick={()=>setShowRidePopup(false)} className="px-4 py-2 text-gray-800 border-2 border-gray-200 bg-white rounded-md w-full">
                    Igonore
                </button>

                <button onClick={()=>{
                    setShowConfirmRidePopup(true)
                }} className="px-4 py-2 text-white bg-green-600 rounded-md w-full">
                    Accept
                </button>
            </div>
        </div>
    );
}

export default RidePopUp;
