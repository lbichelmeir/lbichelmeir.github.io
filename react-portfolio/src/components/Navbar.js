import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../App.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div class="navname"> 
                <p><NavLink exact activeClassName="active" to="/"> 🌻     Lauren Bichelmeir </NavLink></p>
            </div>
            <div class="navlinks">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/"> ⚡  work </NavLink>
                    </li>
                    <li> 
                        <NavLink activeClassName="active" to="/About"> ✨   about </NavLink>
                    </li>
                    <li>
                        {/* <NavLink activeClassName="active" to="/Resume"> 💡 resume </NavLink> */}
                        <a href="https://drive.google.com/file/d/17XstPbEMXPU2HFfnrmwlY9KH0l9jo5ST/view?usp=sharing" target="_blank"> 💡 resume </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
