//imports
import "./Home.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import Faq from "../../Components/Faq";
// import ScrollSection from "../../Components/ScrollSection";

import logo from "../../Assets/Images/Branding/logo.svg";
import mlhbadge from "../../Assets/Images/Other/mlh.png";
import star from "../../Assets/Images/Other/star2--export.svg";

import telescope from "../../Assets/Images/Other/telescope.png";
import moon from "../../Assets/Images/Other/moon.png";
import waves from "../../Assets/Images/Other/waves.svg";
// import map from "../../Assets/Images/Other/map.png";

import andrew from "../../Assets/Images/Speakers/andrew.jpg";
import chris from "../../Assets/Images/Speakers/chris.png";
import keith from "../../Assets/Images/Speakers/keith.png";
import rahul from "../../Assets/Images/Speakers/rahul.png";

//past sponsor images
import gcloud from "../../Assets/Images/PastSponsors/gc-min.png";
import accenture from "../../Assets/Images/PastSponsors/accenture-min.png";
import createx from "../../Assets/Images/PastSponsors/createx-min.png";
import wolfram from "../../Assets/Images/PastSponsors/wolfram-min.png";
import ironmountain from "../../Assets/Images/PastSponsors/ironmountain-min.png";
import gatherly from "../../Assets/Images/PastSponsors/gatherly2.svg";
import capitalone from "../../Assets/Images/PastSponsors/capitalone-min.png";
import citadel from "../../Assets/Images/PastSponsors/citadel-min.png";
import bac from "../../Assets/Images/PastSponsors/bac-min.png";
import deepnote from "../../Assets/Images/PastSponsors/deepnote-min.png";

import Footer from "../../Components/Footer";

const Home = (params) => {
    return (
        <div className="home-page">
            <Background />
            <Navbar />
            <div className="mlh-section">
                <div className="mlh-wrapper">
                    <a className="mlh-badge" href="https://mlh.io/">
                        <LazyLoadImage
                            effect="blur"
                            src={mlhbadge}
                            alt="mlh badge"
                        />
                    </a>
                </div>
            </div>
            <Section id="hero">
                <div className="hero-flex">
                    <div className="flex-left">
                        <h3 className="hero-date">February 10-12</h3>
                        <h1 className="hero-major">
                            Hacklytics
                            <br />
                            2023
                        </h1>
                        <h2 className="hero-minor">a starry night</h2>
                        <a
                            className="hero-button"
                            href="https://qrlxk51kzhj.typeform.com/to/tFLwAnWI"
                            target="_blank"
                        >
                            Apply Now!
                        </a>
                        <h3 className="hero-date-mini">*Registration closes January 19th*</h3>
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
                <a
                    className="continue-reading continue-reading-hero"
                    href="#about"
                >
                    <span className="text">continue</span>
                    <span className="arrow">↓</span>
                </a>
            </Section>
            <Section id="about">
                <div className="about-flex">
                    <div className="telescope">
                        <LazyLoadImage
                            effect="blur"
                            src={telescope}
                            alt="telescope"
                        />
                    </div>
                    <div className="moon">
                        <LazyLoadImage effect="blur" src={moon} alt="moon" />
                    </div>
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
                <a className="continue-reading" href="#whatis">
                    <span className="text">What is Hacklytics?</span>
                    <span className="arrow">↓</span>
                </a>
            </Section>
            <Section id="whatis">
                <div className="whatis-flex">
                    <img className="star star-a" src={star} alt="star" />
                    <img className="star star-b" src={star} alt="star" />
                    <img className="star star-c" src={star} alt="star" />
                    <img className="star star-d" src={star} alt="star" />
                    <img className="star star-e" src={star} alt="star" />
                    <img className="star star-f" src={star} alt="star" />
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
                <a className="continue-reading" href="#whenwhere">
                    <span className="text">When and Where is Hacklytics?</span>
                    <span className="arrow">↓</span>
                </a>
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
                        {/* <img className="map" src={map} alt="Klaus Building" /> */}
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212247.46455110525!2d-84.67596646718748!3d33.777029200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b781ec0ab42ea5%3A0x16eec927f37b40ec!2sKlaus%20Advanced%20Computing%20Building!5e0!3m2!1sen!2sus!4v1656647278486!5m2!1sen!2sus"
                                width="300"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Klaus Advanced Computing Building"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <a className="continue-reading" href="#whatis2">
                    <span className="text">What is DSGT?</span>
                    <span className="arrow">↓</span>
                </a>
            </Section>
            <Section id="whatis2">
                <div className="whatis-flex">
                    <h2 className="major">What is DSGT?</h2>
                    <p className="mini">
                        Data Science @ Georgia Tech is the largest data science
                        organization at Georgia Tech with over 900 members. Our
                        motto, “data science with a focus on community,” is
                        manifested through our projects, courses, and events.
                        Learn more about us or how you can be involved{" "}
                        <a href="https://datasciencegt.org">here</a>.
                    </p>
                </div>
                {/* <a className="continue-reading" href="#faq">
                    <span className="text">continue</span>
                    <span className="arrow">↓</span>
                </a> */}
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
                        <a href="mailto:info@hacklytics.io">
                            info@hacklytics.io
                        </a>
                    </Faq>
                </div>
                {/* <a className="continue-reading" href="#pastsponsors">
                    <span className="text">continue</span>
                    <span className="arrow">↓</span>
                </a> */}
            </Section>
            <Section id="speakers">
                <div className="speakers-flex">
                    <h1 className="major">Past Speakers</h1>
                    <div className="tri-flex">
                        <div className="speaker-card card-down">
                            <div className="speaker-bg"></div>
                            <LazyLoadImage
                                threshold={400}
                                effect="blur"
                                className="speaker-img"
                                src={andrew}
                                alt="Andrew Marchese"
                            />
                            <h1 className="speaker-major">Andrew Marchese</h1>
                            <h2 className="speaker-mini">
                                Andrew is currently the lead Data Scientist at
                                SeatGeek, specialising in building,
                                productionalizing, and analyzing machine
                                learning models. With a PhD in Mathematics and
                                an MS in Mathematics and Statistics from the
                                University of Tennessee, he also worked as a
                                senior Data Scientist at New York Times for 2
                                years.
                            </h2>
                        </div>
                        <div className="speaker-card">
                            <div className="speaker-bg"></div>
                            <LazyLoadImage
                                threshold={400}
                                effect="blur"
                                className="speaker-img"
                                src={keith}
                                alt="Keith Werle"
                            />
                            <h1 className="speaker-major">Keith Werle</h1>
                            <h2 className="speaker-mini">
                                Keith Werle is Managing Director of the Georgia
                                Tech Business Analytics Center and a Professor
                                of the Practice in the Scheller College of
                                Business. With over thirty years of experience
                                in industry and consulting, his background spans
                                a broad range of business disciplines including
                                finance, analytics, strategy, and corporate
                                development. He has consulted in many industries
                                and for a diverse range of clients, from venture
                                capital backed technology start-ups to global
                                Fortune 50 companies.
                            </h2>
                        </div>
                        <div className="speaker-card card-down">
                            <div className="speaker-bg"></div>
                            <LazyLoadImage
                                threshold={400}
                                effect="blur"
                                className="speaker-img"
                                src={rahul}
                                alt="Rahul Saxena"
                            />
                            <h1 className="speaker-major">Rahul Saxena</h1>
                            <h2 className="speaker-mini">
                                After completing his Bachelors in Mechanical
                                Engineering from Georgia Tech in the late 2000s,
                                Rahul completed his MBA at Emory University’s
                                Goizeuta School of Business. He then worked as a
                                venture capitalist and mechatronic engineer in
                                Silicon Valley before returning to Georgia Tech
                                to become the Associate Director of Create-X,
                                that guides and funds student startups in
                                Atlanta.
                            </h2>
                        </div>
                        <div className="speaker-card">
                            <div className="speaker-bg"></div>
                            <LazyLoadImage
                                threshold={400}
                                effect="blur"
                                className="speaker-img"
                                src={chris}
                                alt="Chris Cherian"
                            />
                            <h1 className="speaker-major">Chris Cherian</h1>
                            <h2 className="speaker-mini">
                                Inspite of only graduating Wharton with a
                                Bachelor of Science in Economics, Finance and
                                Strategy in 2021, Chris has Co-Founded the
                                Ballpoint Consulting Group, been a Board Member
                                of FoodFinder and eventually created Gatherly, a
                                virtual events software that makes for engaging
                                and seamless online conferences and socials,
                                which is used across the world.
                            </h2>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="pastsponsors">
                <div className="waves">
                    <LazyLoadImage
                        effect="blur"
                        threshold={1000}
                        src={waves}
                        alt="waves"
                    />
                </div>

                <div className="pastsponsors-flex">
                    <h1 className="major">Past Sponsors</h1>
                    {/* <div className="splash"></div> */}
                    <div className="sponsors-flex">
                        {/* <div className="sponsor-row sponsor-row-a"> */}
                        <a className="sponsor" href="https://cloud.google.com/">
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={gcloud}
                                alt="Google Cloud"
                            />
                        </a>
                        <a
                            className="sponsor"
                            href="https://www.accenture.com/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={accenture}
                                alt="Accenture"
                            />
                        </a>
                        <a
                            className="sponsor"
                            href="https://create-x.gatech.edu/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={createx}
                                alt="CreateX"
                            />
                        </a>
                        {/* </div>
                        <div className="sponsor-row sponsor-row-b"> */}
                        <a
                            className="sponsor sponsor-long"
                            href="https://www.wolfram.com/language/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={wolfram}
                                alt="Wolfram Language"
                            />
                        </a>
                        <a
                            className="sponsor sponsor-long"
                            href="https://www.ironmountain.com/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={ironmountain}
                                alt="Iron Mountain"
                            />
                        </a>
                        {/* </div>
                        <div className="sponsor-row sponsor-row-c"> */}
                        <a
                            className="sponsor sponsor-long"
                            href="https://www.gatherly.io/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={gatherly}
                                alt="Gatherly"
                            />
                        </a>
                        {/* </div> */}
                        {/* capitalone
                            citadel
                            bac"
                            deepnote */}
                        <a
                            className="sponsor"
                            href="https://www.capitalone.com/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={capitalone}
                                alt="Capital One"
                            />
                        </a>
                        <a
                            className="sponsor sponsor-long"
                            href="https://www.citadel.com/"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={citadel}
                                alt="Citadel"
                            />
                        </a>
                        <a
                            className="sponsor sponsor-long"
                            href="https://www.scheller.gatech.edu/centers-initiatives/business-analytics-center/index.html"
                        >
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={bac}
                                alt="Business Analytics Center"
                            />
                        </a>
                        <a className="sponsor" href="https://deepnote.com/">
                            <LazyLoadImage
                                effect="blur"
                                className="sponsor"
                                src={deepnote}
                                alt="deepnote"
                            />
                        </a>
                    </div>
                    <a
                        className="sponsor-us-button"
                        href="mailto:hello@hacklytics.io"
                    >
                        Sponsor Us!
                    </a>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default Home;
