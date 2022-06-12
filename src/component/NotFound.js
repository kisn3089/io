import React, {useEffect} from 'react';
import "../css/NotFound.css";
import {useNavigate} from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    const timeout = () => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    };

    useEffect(() => {
        timeout();
        return () => {
            clearTimeout(timeout);
        };
    });


    return (
        <>
            <div className="wrap">
                <div className="title">
                    <p>404</p>
                    <p>Not Found</p>
                </div>
            </div>
        </>
    )
}

export default NotFound;