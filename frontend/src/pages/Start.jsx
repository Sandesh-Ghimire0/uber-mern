import React from "react";
import { Link } from "react-router-dom";

function Start() {
    return (
        <div>
            <div className= "bg-cover bg-bottom-right bg-[url(https://media.istockphoto.com/id/1318766268/nl/vector/de-lichtpool-van-het-verkeer-met-wolkvector-op-groene-achtergrond-voor-vliegers-bunners.jpg?s=612x612&w=0&k=20&c=r2ceuJlsHyaazdrTOAa4nNwMo_qXOk-00rwyCURHXIs=)] pt-8 h-screen w-full flex flex-col justify-between bg-red-400">
                <h1 className="ml-8 font-bold text-3xl">Uber</h1>
                <div className="p-4 bg-white py-5 px-5">
                    <h2 className="font-semibold text-2xl">
                        Get started with uber
                    </h2>
                    <Link to='/login' className="w-full flex justify-center items-center py-3  mt-2 bg-black text-white rounded-lg">
                        continue
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Start;
