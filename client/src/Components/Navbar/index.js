//imports
import "./Navbar.css";

const Navbar = (params) => {
    return (
        <div id="navbar">
            <div className="navbar-wrapper">
                <h1 className="major">Hacklytics</h1>
                <div className="navbar-flex">
                    <p className="nav-menuitem">test1</p>
                    <p className="nav-menuitem">test2</p>
                    <p className="nav-menuitem">test3</p>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
