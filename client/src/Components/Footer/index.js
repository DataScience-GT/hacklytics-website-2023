//imports
import "./Footer.css";

const Footer = (params) => {
    return (
        <div id="footer">
            <div className="footer-wrapper">
                <div className="footer-section">
                    <h1 className="major">DSGT</h1>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Company</h2>
                    <a className="mini" href="https://datasciencegt.org">
                        About Us
                    </a>
                    <a className="mini" href="mailto:hello@hacklytics.io">
                        Contact
                    </a>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Connect with Us</h2>
                    <a className="mini" href="mailto:hello@hacklytics.io">
                        Email
                    </a>
                    <a
                        className="mini"
                        href="https://www.instagram.com/datasciencegt/"
                    >
                        Instagram
                    </a>
                    <a
                        className="mini"
                        href="https://www.facebook.com/datasciencegt/"
                    >
                        Facebook
                    </a>
                    <a
                        className="mini"
                        href="https://www.linkedin.com/company/dsgt/"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="mini"
                        href="https://github.com/DataScience-GT"
                    >
                        Github
                    </a>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Hacklytics</h2>
                    <a
                        className="mini"
                        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    >
                        MLH Code of Conduct
                    </a>
                </div>
                {/* <div className="footer-section">
                    <h2 className="minor">Join the Community</h2>
                    <a className="mini">Slack</a>
                    <a className="mini">Discord</a>
                </div> */}
                <div className="footer-section">
                    <h2 className="minor">
                        Made with 💖 by the DSGT Tech Team.
                    </h2>
                </div>
            </div>
        </div>
    );
};
export default Footer;
