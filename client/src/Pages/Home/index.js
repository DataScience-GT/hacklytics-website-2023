//imports
import "./Home.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import Faq from "../../Components/Faq";
// import ScrollSection from "../../Components/ScrollSection";

import logo from "../../Assets/Images/Branding/logo.svg";
import map from "../../Assets/Images/Other/map.png";

//past sponsor images
import gcloud from "../../Assets/Images/PastSponsors/gc.png";
import accenture from "../../Assets/Images/PastSponsors/accenture.png";
import createx from "../../Assets/Images/PastSponsors/createx.png";
import wolfram from "../../Assets/Images/PastSponsors/wolfram.png";
import ironmountain from "../../Assets/Images/PastSponsors/ironmountain.png";
import gatherly from "../../Assets/Images/PastSponsors/gatherly.png";
import Footer from "../../Components/Footer";

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
                    <a className="hero-button" href="#">
                        Register!
                    </a>
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
                    <h2 className="major">About</h2>
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
                <div className="whatis-flex">
                    <h2 className="major">What is Hacklytics?</h2>
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
            <Section id="whenwhere">
                <div className="whenwhere-flex">
                    <h2 className="major">When and Where is Hacklytics?</h2>
                    <div className="split-flex">
                        <p className="mini">
                            When: February 10-12, 2023
                            <br />
                            <br />
                            Where: The Klaus Advanced Computing Building on
                            Georgia Tech Campus
                            <br />
                            <br />
                            The event will be hybrid, so we’ll have an online
                            option for those unable to make the event in person.
                            <br />
                            <br />
                            More details to come soon!
                        </p>
                        <img className="map" src={map} alt="Klaus Building" />
                    </div>
                </div>
            </Section>
            <Section id="whatis2">
                <div className="whatis-flex">
                    <h2 className="major">What is DSGT?</h2>
                    <p className="mini">
                        Data Science @ Georgia Tech is the largest data science
                        organization at Georgia Tech with over 900 members. Our
                        motto, “data science with a focus on community” is
                        manifested through our projects, courses, and events.
                        Learn more about us or how you can be involved here.
                    </p>
                </div>
            </Section>
            <Section id="faq">
                <div className="faq-flex">
                    <h1 className="major">FAQs</h1>
                    <Faq
                        identifier="a"
                        question="Who can register?"
                        answer="anyone!"
                    />
                    <Faq
                        identifier="b"
                        question="Can you participate Virtually"
                        answer="anyone!"
                    />
                    <Faq
                        identifier="c"
                        question="Is the event free?"
                        answer="anyone!"
                    />
                    <Faq
                        identifier="d"
                        question="How many people are allowed to be on a team?"
                        answer="anyone!"
                    />
                    <Faq
                        identifier="e"
                        question="What, other than coding, is going to happen at this event?"
                        answer="anyone!"
                    />
                </div>
            </Section>
            <Section id="speakers">
                <div className="speakers-flex">
                    <h1 className="major">Speakers</h1>
                    <div className="tri-flex">
                        <div className="speaker-card card-down">
                            <div className="speaker-bg"></div>
                            <img
                                className="speaker-img"
                                src={logo}
                                alt="person"
                            />
                            <h1 className="speaker-major">Test</h1>
                            <h2 className="speaker-mini">
                                asjkdh jsahdjk hfjkdh jkfhdj fh
                            </h2>
                        </div>
                        <div className="speaker-card">
                            <div className="speaker-bg"></div>
                            <img
                                className="speaker-img"
                                src={logo}
                                alt="person"
                            />
                            <h1 className="speaker-major">Test</h1>
                            <h2 className="speaker-mini">
                                asjkdh jsahdjk hfjkdh jkfhdj fh
                            </h2>
                        </div>
                        <div className="speaker-card card-down">
                            <div className="speaker-bg"></div>
                            <img
                                className="speaker-img"
                                src={logo}
                                alt="person"
                            />
                            <h1 className="speaker-major">Test</h1>
                            <h2 className="speaker-mini">
                                asjkdh jsahdjk hfjkdh jkfhdj fh
                            </h2>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="pastsponsors">
                <div className="pastsponsors-flex">
                    <h1 className="major">Past Sponsors</h1>
                    <div className="sponsors-flex">
                        <div className="sponsor-row sponsor-row-a">
                            <img
                                className="sponsor"
                                src={gcloud}
                                alt="Google Cloud"
                            />
                            <img
                                className="sponsor"
                                src={accenture}
                                alt="Accenture"
                            />
                            <img
                                className="sponsor"
                                src={createx}
                                alt="CreateX"
                            />
                        </div>
                        <div className="sponsor-row sponsor-row-b">
                            <img
                                className="sponsor"
                                src={wolfram}
                                alt="Wolfram Language"
                            />
                            <img
                                className="sponsor"
                                src={ironmountain}
                                alt="Iron Mountain"
                            />
                        </div>
                        <div className="sponsor-row sponsor-row-c">
                            <img
                                className="sponsor"
                                src={gatherly}
                                alt="Gatherly"
                            />
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default Home;
