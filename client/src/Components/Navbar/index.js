//imports
import "./Navbar.css";

import { useState, useEffect } from "react";

import logo from "../../Assets/Images/Branding/logo.svg";
import mlhbadge from "../../Assets/Images/Other/mlh-trust-badge-2023-white.png";

const Navbar = (params) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth);
    });

    //handle clicking on the mobile menu
    const handleClick = (e) => {
        document.getElementById("hamburger-checkbox").click();
    };

    const handleCheck = (e) => {
        if (e.target.checked) {
            //mobile nav menu is now open
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
            //mobile nav menu is now closed
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    };

    if (screenWidth >= 1200) {
        //desktop navbar
        return (
            <div id="navbar">
                <div className="navbar-wrapper">
                    {/* <a className="nav-menuitem-left" href="/">
                        Home
                    </a> */}
                    <a className="navbar-logo" href="/">
                        <img src={logo} />
                    </a>
                    <div className="navbar-flex">
                        <a className="nav-menuitem" href="#about">
                            About
                        </a>
                        <a className="nav-menuitem" href="#faq">
                            FAQs
                        </a>
                        <a className="nav-menuitem" href="#pastsponsors">
                            Sponsors
                        </a>
                        {/* <a className="nav-menuitem" href="#">
                            Sign In
                        </a> */}
                    </div>
                    <a className="mlh-badge" href="https://mlh.io/">
                        <img src={mlhbadge} alt="mlh badge" />
                    </a>
                </div>
            </div>
        );
    } else {
        //mobile navbar
        return (
            <div id="mobile-navbar">
                <div className="navbar-flex">
                    <h1 className="major">Hacklytics 2023</h1>
                </div>
                <input
                    id="hamburger-checkbox"
                    type="checkbox"
                    onChange={handleCheck}
                ></input>
                <label htmlFor="hamburger-checkbox" className="nav-hamburger">
                    <div className="hamburger-line hamburger-top"></div>
                    <div className="hamburger-line hamburger-bottom"></div>
                </label>
                <div className="mobile-navbar-menu">
                    <div className="nav-menu-flex">
                        <a
                            className="nav-menuitem"
                            onClick={handleClick}
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            className="nav-menuitem"
                            onClick={handleClick}
                            href="#about"
                        >
                            About
                        </a>
                        <a
                            className="nav-menuitem"
                            onClick={handleClick}
                            href="#faq"
                        >
                            FAQs
                        </a>
                        <a
                            className="nav-menuitem"
                            onClick={handleClick}
                            href="#pastsponsors"
                        >
                            Sponsors
                        </a>
                        {/* <a className="nav-menuitem" onClick={handleClick} href="#">
                            Sign In
                        </a> */}
                    </div>
                </div>
            </div>
        );
    }
};
export default Navbar;
