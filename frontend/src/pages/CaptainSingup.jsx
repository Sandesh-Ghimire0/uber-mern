import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext";
import axios from "axios";

function CaptainSingup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [userData, setUserData] = useState({});

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            fullname: {
                firstname,
                lastname,
            },
            password,
            email,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            },
        };

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/captains/register`,
                captainData
            );

            if (res.status === 201) {
                const data = res.data;
                setCaptain(data.captain);
                localStorage.setItem("token", data.token);

                navigate("/captain-home");
            }
        } catch (error) {
            console.log("Failed to resgister captain: ", error);
        }

        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
        setVehicleColor("");
        setVehicleCapacity("");
        setVehiclePlate("");
        setVehicleType("");
    };
    return (
        <div className="p-8 flex flex-col justify-between h-screen">
            <div>
                <h1 className="text-2xl font-bold mb-2">Uber</h1>
                <h2 className="text-xl font-semibold mb-5">
                    Signup as Captain
                </h2>
                <form action="" onSubmit={submitHandler}>
                    <h2 className="mb-2">What's your name</h2>
                    <div className="flex gap-5 ">
                        <input
                            className="px-4 w-1/2 py-2 mb-8 bg-[#eeeeee] rounded"
                            type="text"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <input
                            className="px-4 py-2 mb-8 bg-[#eeeeee] rounded w-1/2"
                            type="text"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>

                    <h2 className="mb-2">What's your email</h2>
                    <input
                        className="px-4 py-2 mb-8 bg-[#eeeeee] rounded w-full"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <h2 className="mb-2">Password</h2>
                    <input
                        className="px-4 py-2 bg-[#eeeeee] rounded w-full"
                        type="text"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <h2 className="mb-2 mt-8">Vehicle Information</h2>
                    <input
                        className="px-4 py-2 mb-4 bg-[#eeeeee] rounded w-full"
                        type="text"
                        placeholder="Vehicle Color"
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        required
                    />
                    <input
                        className="px-4 py-2 mb-4 bg-[#eeeeee] rounded w-full"
                        type="text"
                        placeholder="Vehicle Plate Number"
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        required
                    />
                    <input
                        className="px-4 py-2 mb-4 bg-[#eeeeee] rounded w-full"
                        type="number"
                        min="1"
                        placeholder="Vehicle Capacity"
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        required
                    />
                    <select
                        className="px-4 py-2 mb-8 bg-[#eeeeee] rounded w-full"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        required
                    >
                        <option value="">Select Vehicle Type</option>
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                    </select>
                    <button className="w-full flex justify-center items-center py-3 font-bold bg-black text-white rounded">
                        Create Captain Account
                    </button>

                    <p className="text-center mt-3">
                        Aleardy have account ?{" "}
                        <Link to="/captain-login" className="text-blue-600">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CaptainSingup;
