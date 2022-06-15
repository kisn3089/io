import React from 'react';
import "../css/Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav className="navi">
                <div className="title"><Link to="/">AWESOME</Link></div>
                <ul>
                    <li><Link className="link" to="/">ABOUT</Link></li>
                    <li><Link to="/stores">STORES</Link></li>
                    <li><Link to="/members">MEMBERS</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;