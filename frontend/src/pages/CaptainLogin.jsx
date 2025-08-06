import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CaptainLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email,
            password,
        });
        setEmail("");
        setPassword("");
    };
    return (
        <div className="p-8 flex flex-col justify-between h-screen">
            <div>
                 <h1 className="text-2xl font-bold mb-2">Uber</h1>
                <h2 className="text-xl font-semibold mb-5">Login as Captain</h2>
                <form action="" onSubmit={submitHandler}>
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

                    <button className="mt-5 w-full flex justify-center items-center py-3 font-bold bg-black text-white rounded">
                        Login
                    </button>

                    <p className="text-center mt-3">
                        Join a fleet ?{" "}
                        <Link to="/captain-signup" className="text-blue-600">
                            Register as a Captain
                        </Link>
                    </p>
                </form>
            </div>

            <div>
                <Link
                    to="/login"
                    className="mt-5 w-full flex justify-center items-center py-3 font-bold bg-green-400 text-white rounded"
                >
                    sign in as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainLogin;
