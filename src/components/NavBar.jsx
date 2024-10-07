import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); // Toggle menu
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
    }, []);

    return (
        <>
            <nav className="Navbar">
                <div className="Navbar-container">
                    <Link to='/home' className="navbar-logo" onClick={closeMobileMenu}>
                        Freddy Lopez
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className="nav-links" onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

