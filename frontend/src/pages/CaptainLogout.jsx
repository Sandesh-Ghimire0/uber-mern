import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainLogout() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')


    const logoutCaptain = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/captains/logout`,{},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            if(res.status === 200){
                localStorage.removeItem('token')
                navigate('/captain-login')
            }
        } catch (error) {
            console.log("Failed to logout captain", error)
        }
    }

    useEffect(()=>{
        logoutCaptain()
    },[])

    return <div>CaptainLogout</div>;
}

export default CaptainLogout;
