import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const logoutUser = async () => {
        const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/users/logout`,{},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (res.status === 200) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    };

    useEffect(() => {
        logoutUser();
    }, []);

    return <div>UserLogout</div>;
}

export default UserLogout;
