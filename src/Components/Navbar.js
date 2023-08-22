// import {useRef} from 'react'
import React from 'react'
import '../css/reset.css';
import '../css/style.css';

function Navbar() {
    // const navRef = useRef()

    // const showNavBar = () => {
    //   // navRef.current.classList.toggle('responsive-nav')
    // }
    return (
        <header>
            <div className="overlay"></div>
            <div className="navbar">
                <h1 className="logo">mars</h1>
                <input type="checkbox" id="mobile-nav" />
                <nav>
                    <ul>
                        <li><a href="#"><span>Home</span></a></li>
                        <li><a href="#"><span>Mission</span></a></li>
                        <li><a href="#"><span>Crew</span></a></li>
                        <li><a href="#"><span>Data</span></a></li>
                    </ul>

                </nav>
                <label htmlFor="mobile-nav" className="mobile-nav-label">
                    <span></span>
                </label>
            </div>
        </header>
    )
}

export default Navbar