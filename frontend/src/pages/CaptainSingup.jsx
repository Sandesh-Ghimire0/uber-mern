import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSingup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fistname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
            fullname: {
                fistname,
                lastname,
            },
            password,
            email,
        });

        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
    };
    return (
        <div className="p-8 flex flex-col justify-between h-screen">
            <div>
                <h1 className="text-2xl font-bold mb-2">Uber</h1>
                <h2 className="text-xl font-semibold mb-5">Signup as Captain</h2>
                <form action="" onSubmit={submitHandler}>
                    <h2 className="mb-2">What's your name</h2>
                    <div className="flex gap-5 ">
                        <input
                            className="px-4 w-1/2 py-2 mb-8 bg-[#eeeeee] rounded"
                            type="text"
                            placeholder="First Name"
                            value={fistname}
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

                    <button className="mt-20 w-full flex justify-center items-center py-3 font-bold bg-black text-white rounded">
                        Login
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
