//imports
import "./Home.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import Faq from "../../Components/Faq";
// import ScrollSection from "../../Components/ScrollSection";

import logo from "../../Assets/Images/Branding/logo.svg";
import star from "../../Assets/Images/Other/star2--export.svg";
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
                <div className="hero-flex">
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
                        <div className="logo-stars">
                            <img
                                className="hero-logo"
                                src={logo}
                                alt="hacklytics 2023 logo"
                            />
                            <img
                                className="star star-a"
                                src={star}
                                alt="star"
                            />
                            <img
                                className="star star-b"
                                src={star}
                                alt="star"
                            />
                            <img
                                className="star star-c"
                                src={star}
                                alt="star"
                            />
                            <img
                                className="star star-d"
                                src={star}
                                alt="star"
                            />
                        </div>
                    </div>
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
                            Where: The{" "}
                            <a href="https://goo.gl/maps/W7uum6WcHQ6bTrJXA">
                                Klaus Advanced Computing Building
                            </a>{" "}
                            on Georgia Tech Campus
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
                        Learn more about us or how you can be involved{" "}
                        <a href="https://datasciencegt.org">here</a>.
                    </p>
                </div>
            </Section>
            <Section id="faq">
                <div className="faq-flex">
                    <h1 className="major">FAQs</h1>
                    <Faq identifier="a" question="Who can register?">
                        Any student currently enrolled in a University above the
                        age of 18. For any discrepancies, feel free to reach
                        out.
                    </Faq>
                    <Faq identifier="b" question="Where and when is it held?">
                        <a href="https://goo.gl/maps/W7uum6WcHQ6bTrJXA">
                            Klaus Advanced Computing Building
                        </a>{" "}
                        from 10th February to 12th February, 2023. The event
                        will be hybrid so we shall have an online option for
                        those unable to make the event in person.
                    </Faq>
                    <Faq
                        identifier="c"
                        question="Can you participate virtually?"
                    >
                        Yes! Apply the same way as you would usually do and we
                        will let you know the next steps!
                    </Faq>
                    <Faq
                        identifier="d"
                        question="What is a data science hackathon?"
                    >
                        A datathon is a specific type of hackathon that focuses
                        on data science. You can choose any datasets,
                        programming languages, APIs, algorithms you'd like, to
                        create visualizations, develop models, derive insights,
                        and do anything you believe to be impactful! The sky's
                        the limit!
                    </Faq>
                    <Faq identifier="e" question="How many people per team?">
                        A maximum of 4 members per team. However, you’re allowed
                        to work with fewer members as well!
                    </Faq>
                    <Faq identifier="f" question="What if I don’t have a team?">
                        Lots of people come in without teams! You can find
                        people to form a team with during our team-building
                        event or through our Discord.
                    </Faq>
                    <Faq identifier="g" question="Is the event free?">
                        Yes! We also provide food and other goodies if you are
                        in-person.
                    </Faq>
                    <Faq
                        identifier="h"
                        question="Is this event beginner friendly?"
                    >
                        Yes, we encourage beginners to apply to expand their
                        knowledge! We will have tons of skill-building workshops
                        and experienced mentors to help out with projects at the
                        event. Overall, Hacklytics will be a very enriching
                        experience regardless of how experienced you are!
                    </Faq>
                    <Faq identifier="i" question="How are applicants selected?">
                        We evaluate your applications by looking into your
                        interest in participating and passion in the field of
                        data!
                    </Faq>
                    <Faq
                        identifier="j"
                        question="What, other than coding, is going to happen at this event?"
                    >
                        Speaker talks, workshops, social events and a lot more!{" "}
                    </Faq>
                    <Faq identifier="k" question="How do I get in touch?">
                        Reach out to us at{" "}
                        <a href="mailto:hello@hacklytics.io">
                            hello@hacklytics.io
                        </a>
                    </Faq>
                </div>
            </Section>
            {/* <Section id="speakers">
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
            </Section> */}
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
