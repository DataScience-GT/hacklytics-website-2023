//imports
import "./Navbar.css";

const Navbar = (params) => {
    return (
        <div id="navbar">
            <div className="navbar-wrapper">
                <a className="nav-menuitem-left">Home</a>
                <div className="navbar-flex">
                    <a className="nav-menuitem">About</a>
                    <a className="nav-menuitem">Sponsors</a>
                    <a className="nav-menuitem">FAQs</a>
                    <a className="nav-menuitem">Sign In</a>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
