//imports
import "./Navbar.css";

const Navbar = (params) => {
    return (
        <div id="navbar">
            <div className="navbar-wrapper">
                <a className="nav-menuitem-left" href="/">
                    Home
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
                    <a className="nav-menuitem" href="#">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
