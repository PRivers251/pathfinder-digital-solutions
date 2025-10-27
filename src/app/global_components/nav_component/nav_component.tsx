"use client"

import Image from "next/image"
import "./nav_component.tsx.css"
import { useState } from "react"
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">

            <div className="logo-image-container">
            <Image
            src={'/images/main_logo.png'}
            width={300}
            height={100}
            alt="Main Pathfinder Logo"
            id="logo-image"
            />
            </div>
            
            <div className="nav-menu-button" onClick={handleMenuToggle}>
                <h4>Menu</h4>
                {menuOpen ? <FaArrowCircleUp className="menu-button-icon"/> : <FaArrowCircleDown className="menu-button-icon"/>}
            </div> 

            {/* Large Screen Nav Menu */}
            <div className="nav-menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </div>

            {/* Mobile Nav Menu */}
            <div className={menuOpen ? "mobile-nav-menu on" : "mobile-nav-menu off"}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </div>

            
        </nav>
    )
}