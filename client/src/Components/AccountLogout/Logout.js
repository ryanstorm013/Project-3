import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();

    useEffect(async () => {
        localStorage.setItem("auth-token", "");
        history.push("/");
    }, [])
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default Logout
