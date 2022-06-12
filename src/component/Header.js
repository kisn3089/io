import React from 'react';
import "../css/Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav className="navi">
                <div className="title"><Link to="/">Awesome food store</Link></div>
                <ul>
                    <li><Link className="link" to="/about">ABOUT</Link></li>
                    <li><Link to="/">STORES</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;