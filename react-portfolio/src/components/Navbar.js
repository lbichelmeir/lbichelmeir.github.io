import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div class="navname"> 
                <p> 🌻     Lauren Bichelmeir </p>
            </div>
            <div class="navlinks">
                <ul>
                    <li>
                        <Link to="/"> ⚡  work </Link>
                    </li>
                    <li>
                        <Link to="/About"> ✨   about </Link>
                    </li>
                    <li>
                        <Link to="/Resume"> 💡 resume </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
