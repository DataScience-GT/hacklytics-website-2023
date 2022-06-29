//imports
import "./Home.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
// import ScrollSection from "../../Components/ScrollSection";

import logo from "../../Assets/Images/Branding/logo.svg";

const Home = (params) => {
    return (
        <div className="home-page">
            <Background />
            <Navbar />
            <Section id="hero">
                <div className="flex-left">
                    <h1 className="hero-major">
                        Hacklytics
                        <br />
                        2023
                    </h1>
                    <h2 className="hero-minor">a starry night</h2>
                    <a className="hero-button">Register!</a>
                </div>
                <div className="flex-right">
                    <img
                        className="hero-logo"
                        src={logo}
                        alt="hacklytics 2023 logo"
                    />
                </div>
            </Section>
            <Section id="about">
                <div className="about-flex">
                    <div className="major">About</div>
                    <p className="mini">
                        Inspired by the famous painting,{" "}
                        <strong>Hacklytics 2023: A Starry Night</strong> will
                        enable you to channel your creative persona, pushing the
                        bounds of imagination and possibility to ideate,
                        innovate, and develop something truly out of the world.
                        <br />
                        <br />
                        Much like Van Gogh’s distinctive style of art, we
                        encourage you to look for unique perspectives, and bring
                        them to life with your own touch of colour. Stuck? Use
                        our tracks (Finance, Sports, Healthcare and more!) to
                        guide you towards data-focused problems worth solving.
                    </p>
                </div>
            </Section>
            <Section id="whatis">
                <div className="about-flex">
                    <div className="major">What is Hacklytics?</div>
                    <p className="mini">
                        Hacklytics is a 36-hour data science-focused hackathon
                        hosted by Data Science @ GT, the largest data science
                        club at Georgia Tech. Each year, hackers across the
                        world join us in creating innovative data-driven
                        solutions to real problems.
                        <br />
                        <br />
                        Our goal is to equip you with hands-on data science
                        experience and help you create impactful projects. At
                        the same time, you can connect with hackers from various
                        backgrounds, build a diverse network, and have fun!
                    </p>
                </div>
            </Section>
        </div>
    );
};
export default Home;
