import { React, useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/NavBar-Logo.png"

import "../navbar.css"

function NavBar() {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)

    function toggleMobileMenu() {
        setMobileMenu(!isMobileMenuOpen)
    }

    return (

        <nav className="nav-bar">
            {/* Desktop */}
            <div className="desktop-nav">

                <div className="nav-bar-container">

                    <NavLink exact to="/" className="logo-container">
                        <img src={logo} alt="Navbar Logo" className="logo" />
                    </NavLink>

                    <div className="nav-links-container">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                        <NavLink exact to="/" className="nav-link">Products</NavLink>
                        <NavLink exact to="/" className="nav-link">Services</NavLink>
                        <NavLink exact to="/" className="nav-link">Contact Us</NavLink>
                    </div>

                </div>
            </div>

            {/* Mobile */}
            <div className="mobile-nav">
                <div className="mobile-nav-bar-container">
                    <div className="mobile-logo-container">
                        <img src={logo} alt="Navbar Logo" className="logo" />
                    </div>
                    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            // Close icon (https://www.tailwindtoolbox.com/icons)
                            <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            // Hamburger icon (https://www.tailwindtoolbox.com/icons)
                            <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        )}
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <NavLink exact to="/" className="mobile-nav-link">Home</NavLink>
                        <NavLink exact to="/" className="mobile-nav-link">Products</NavLink>
                        <NavLink exact to="/" className="mobile-nav-link">Services</NavLink>
                        <NavLink exact to="/" className="mobile-nav-link">Contact Us</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;