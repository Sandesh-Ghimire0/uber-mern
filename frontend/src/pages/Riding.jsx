import React from "react";

import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCash } from "react-icons/io";
import { FaHome } from "react-icons/fa";


function Riding() {
    return (
        <div>
            <div className="w-full relative">
                <Link to='/home' className="absolute right-5 top-5 bg-white rounded-full p-2"><FaHome className="text-3xl"/></Link>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpTuwu1mzpH0-qE8uk6O6jxh7R2WTccB1uA&s"
                    alt=""
                    className="w-100 h-75"
                />
            </div>

            <div className="mt-5 flex flex-col gap-5 p-3 overflow-hidden">
                <div className="flex justify-between items-center w-full">
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png"
                        alt=""
                        className="w-30"
                    />

                    <div className="flex flex-col items-end">
                        <p>Sandesh</p>
                        <p className="font-bold">BG 0123 AB</p>
                        <p>Maruti Suzuki Alto</p>
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

                <div>
                    <button className="px-4 py-2 w-full text-white bg-green-500 rounded-md">Make a payment</button>
                </div>
            </div>
        </div>
    );
}

export default Riding;
