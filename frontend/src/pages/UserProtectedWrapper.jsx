import React, { useEffect, useState } from "react";
import { UserDataContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

function UserProtectedWrapper({ children }) {
    // const {user} = useContext(UserDataContext) cannot be dependent on user because authentication will fail
    // if the user reloads the page

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (!token) {
            navigate("/login");
        }

        // this checks whether the token stored in the localstorage is valid or not
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/api/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setUser(res.data.user);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("token");

                navigate("/login");
            });

        if (isLoading) {
            return <div>Loading...</div>;
        }
    }, []);

    return <>{children}</>;
}

export default UserProtectedWrapper;
