import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserDataContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`,{email, password})

        if(res.status === 200){
            const data = res.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        
        setEmail("");
        setPassword("");
    };
    
    return (
        <div className="p-8 flex flex-col justify-between h-screen">
            <div>
                <h1 className="text-2xl font-bold mb-5">Uber</h1>
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
                        New here ?{" "}
                        <Link to="/signup" className="text-blue-600">
                            create a account
                        </Link>
                    </p>
                </form>
            </div>

            <div>
                <Link to='/captain-login' className="mt-5 w-full flex justify-center items-center py-3 font-bold bg-amber-400 text-white rounded">
                    sign in as captain
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;
