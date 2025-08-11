import React, { useEffect, useState } from "react";
import { CaptainDataContext } from "../contexts/CaptainContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
    // const {user} = useContext(CaptainDataContext) cannot be dependent on user because authentication will fail
    // if the user reloads the page

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (!token) {
            navigate("/captain-login");
        }

        // this checks whether the token stored in the localstorage is valid or not
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/api/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setCaptain(res.data.captain);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("token");

                navigate("/captain-login");
            });

        if (isLoading) {
            return <div>Loading...</div>;
        }
    }, []);

    return <>{children}</>;
}

export default CaptainProtectedWrapper;
