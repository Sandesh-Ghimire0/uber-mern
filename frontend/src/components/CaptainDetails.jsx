import React from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import {  MdOutlineWatchLater } from "react-icons/md";
import { LuNotebookTabs } from "react-icons/lu";

function CaptainDetails() {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex justify-between items-center gap-3">
                    <img
                        src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1419411609-20240305012817824.jpg?c=16x9&q=h_833,w_1480,c_fill"
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="font-semibold">Sandesh</p>
                </div>
                <div>
                    <p className="font-bold">Rs. 3342</p>
                    <span className="text-sm">Earned</span>
                </div>
            </div>

            <div className="flex justify-between mt-5 bg-gray-100 p-5 rounded-3xl">
                <div className="flex flex-col gap-2">
                    <MdOutlineWatchLater className="text-2xl font-bold" />
                    <h3 className="font-bold text-xl">10.2</h3>
                    <span className="text-sm">Hours online</span>
                </div>
                <div className="flex flex-col gap-2">
                    <IoSpeedometerOutline className="text-2xl font-bold" />
                    <h3 className="font-bold text-xl">40 KM</h3>
                    <span className="text-sm">Total Distance</span>
                </div>
                <div className="flex flex-col gap-2">
                    <LuNotebookTabs className="text-2xl font-bold" />
                    <h3 className="font-bold text-xl">20</h3>
                    <span className="text-sm">Total Jobs</span>
                </div>
            </div>
        </>
    );
}

export default CaptainDetails;
