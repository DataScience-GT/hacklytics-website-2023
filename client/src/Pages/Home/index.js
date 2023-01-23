//imports
import "./Home.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import TrackCard from "../../Components/TrackCard";
import Faq from "../../Components/Faq";
// import ScrollSection from "../../Components/ScrollSection";

import logo from "../../Assets/Images/Branding/logo.svg";
import mlhbadge from "../../Assets/Images/Other/mlh.png";
import star from "../../Assets/Images/Other/star2--export.svg";

import telescope from "../../Assets/Images/Other/telescope.png";
import moon from "../../Assets/Images/Other/moon.png";
import waves from "../../Assets/Images/Other/waves.svg";
// import map from "../../Assets/Images/Other/map.png";

// import andrew from "../../Assets/Images/Speakers/andrew.jpg";
// import chris from "../../Assets/Images/Speakers/chris.png";
// import keith from "../../Assets/Images/Speakers/keith.png";
// import rahul from "../../Assets/Images/Speakers/rahul.png";

import nick from "../../Assets/Images/Speakers/nick.jpg";
import ankush from "../../Assets/Images/Speakers/ankush.jfif";

// prizes
import iPad from "../../Assets/Images/Prizes/iPad.jpg";
import metaquest from "../../Assets/Images/Prizes/metaquest.jpg";
import nintendoswitch from "../../Assets/Images/Prizes/switch.webp";

//past sponsor images
// import gcloud from "../../Assets/Images/PastSponsors/gc-min.png";
// import accenture from "../../Assets/Images/PastSponsors/accenture-min.png";
// import createx from "../../Assets/Images/PastSponsors/createx-min.png";
// import wolfram from "../../Assets/Images/PastSponsors/wolfram-min.png";
// import ironmountain from "../../Assets/Images/PastSponsors/ironmountain-min.png";
// import gatherly from "../../Assets/Images/PastSponsors/gatherly2.svg";
// import capitalone from "../../Assets/Images/PastSponsors/capitalone-min.png";
// import citadel from "../../Assets/Images/PastSponsors/citadel-min.png";
// import bac from "../../Assets/Images/PastSponsors/bac-min.png";
// import deepnote from "../../Assets/Images/PastSponsors/deepnote-min.png";

// current sponsor images
import ideas from "../../Assets/Images/Sponsors/ideas.svg";
import nsa from "../../Assets/Images/Sponsors/nsa.png";
import millennium from "../../Assets/Images/Sponsors/millennium.svg";
import elevance from "../../Assets/Images/Sponsors/elevance.png";
import carelon from "../../Assets/Images/Sponsors/carelon.png";
import intel from "../../Assets/Images/Sponsors/intel.png";
import deshaw from "../../Assets/Images/Sponsors/deshaw.png";
import scheller from "../../Assets/Images/Sponsors/bac-min.png";
import gtathletics from "../../Assets/Images/Sponsors/gtathletics2.png";
import createx from "../../Assets/Images/Sponsors/createx.png";
import aws from "../../Assets/Images/Sponsors/aws2.png";
import googlecloud from "../../Assets/Images/Sponsors/googlecloud.png";
import wolfram from "../../Assets/Images/Sponsors/wolfram.png";
import echo from "../../Assets/Images/Sponsors/echoar.png";

import Footer from "../../Components/Footer";

const Home = (params) => {
  return (
    <div className="home-page">
      <Background />
      <Navbar />
      <div className="mlh-section">
        <div className="mlh-wrapper">
          <a className="mlh-badge" href="https://mlh.io/">
            <LazyLoadImage effect="blur" src={mlhbadge} alt="mlh badge" />
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
              rel="noreferrer"
            >
              Apply Now!
            </a>
            <h3 className="hero-date-mini">
              *Registration extended to January 24th*
            </h3>
          </div>
          <div className="flex-right">
            <div className="logo-stars">
              <img
                className="hero-logo"
                src={logo}
                alt="hacklytics 2023 logo"
              />
              <img className="star star-a" src={star} alt="star" />
              <img className="star star-b" src={star} alt="star" />
              <img className="star star-c" src={star} alt="star" />
              <img className="star star-d" src={star} alt="star" />
            </div>
          </div>
        </div>
        <a className="continue-reading continue-reading-hero" href="#about">
          <span className="text">continue</span>
          <span className="arrow">↓</span>
        </a>
      </Section>
      <Section id="about">
        <div className="about-flex">
          <div className="telescope">
            <LazyLoadImage effect="blur" src={telescope} alt="telescope" />
          </div>
          <div className="moon">
            <LazyLoadImage effect="blur" src={moon} alt="moon" />
          </div>
          <h2 className="major">About</h2>
          <p className="mini">
            Inspired by the famous painting,{" "}
            <strong>Hacklytics 2023: A Starry Night</strong> will enable you to
            channel your creative persona, pushing the bounds of imagination and
            possibility to ideate, innovate, and develop something truly out of
            the world.
            <br />
            <br />
            Much like Van Gogh’s distinctive style of art, we encourage you to
            look for unique perspectives, and bring them to life with your own
            touch of colour. Stuck? Use our tracks (Finance, Sports, Healthcare
            and more!) to guide you towards data-focused problems worth solving.
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
            Hacklytics is a 36-hour data science-focused hackathon hosted by
            Data Science @ GT, the largest data science club at Georgia Tech.
            Each year, hackers across the world join us in creating innovative
            data-driven solutions to real problems.
            <br />
            <br />
            Our goal is to equip you with hands-on data science experience and
            help you create impactful projects. At the same time, you can
            connect with hackers from various backgrounds, build a diverse
            network, and have fun!
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
              The event will be hybrid, so we’ll have an online option for those
              unable to make the event in person.
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
        <a className="continue-reading" href="#tracks">
          <span className="text">Tracks</span>
          <span className="arrow">↓</span>
        </a>
      </Section>
      <Section id="tracks">
        <div className="tracks-flex">
          <h1 className="major">
            Tracks
            <br />
            <span className="clicktoflip">click cards to flip</span>
          </h1>
          <TrackCard identifier="a1" track="Sports">
            From historical data and fundamental sckorekeeping to algorithmic
            performance and player statistics, data analytics is an integral
            part of sports. In fact, data is so important in sports that the
            field of “sports analytics” has has tremendous growth in the past
            few decades.
            <br />
            <br />
            In this track, you will be working on sports analytics challenges
            that will take your data science and machine learning skills to the
            next level.
          </TrackCard>
          <TrackCard identifier="b2" track="Healthcare">
            Health data science is a growing field that incorporates health
            informatics, data science, analytics, and computational modeling to
            assess large volumes of data from clinical trials, electronic
            medical records, genetic and genomic epidemiology and environmental
            health, or health care claims.
            <br />
            <br />
            In this track, you will be analyzing some of these datasets to help
            solve crucial, real-world problems in public health or the
            biomedical sciences.
          </TrackCard>
          <TrackCard identifier="c3" track="Energy and Sustainability">
            The importance of data science in renewable energy and climate
            change is only growing as the Internet of Things continues to
            expand.  With improvements in sensor and connectivity technology
            comes the ability to collect more data, and the advent of data
            science has allowed companies to gain important insights from the
            data they collect.
            <br />
            <br />
            In this track, you will be analyzing data with one of several goals,
            including resource/waste management, adapting to climate change, and
            more.
          </TrackCard>
          <TrackCard identifier="d4" track="Finance">
            The financial industry, which includes both traditional financial
            institutions as well as fintech companies, deals with large volumes
            of unique types of data and comes with some peculiarities that other
            industries don’t share. This has a huge impact on the different
            applications of data science within the industry.
            <br />
            <br />
            In this track, you will be working on data science challenges that
            touch almost every area of finance and banking, such as trading
            decisions, market forecasting, customer sentiment, and more.
          </TrackCard>
          {/* <Faq identifier="e5" question="Healthcare"></Faq>
                    <Faq identifier="f6" question="Healthcare"></Faq> */}
        </div>
      </Section>
      <Section id="prizes">
        <div className="prizes-flex">
          <h2 className="major">Prizes</h2>
          {/* <p className="mini">
            We will be giving out prizes to the top teams in each track and to
            the best overall team. The prizes will be announced soon!
          </p> */}
          <div className="prize-grid">
            <div className="prize-card card-down">
              <div className="prize-bg"></div>
              <LazyLoadImage
                threshold={400}
                effect="blur"
                className="prize-img"
                src={metaquest}
                alt="Meta Quest 2"
              />
              <h1 className="speaker-major">2nd Place</h1>
              <h2 className="speaker-mini">
                Each member of the 2nd place team will receive a Meta Quest 2
              </h2>
            </div>
            <div className="prize-card winner">
              <div className="prize-bg"></div>
              <LazyLoadImage
                threshold={400}
                effect="blur"
                className="prize-img"
                src={iPad}
                alt="iPad Air"
              />
              <h1 className="speaker-major">1st Place</h1>
              <h2 className="speaker-mini">
                Each member of the winning team will receive an iPad Air
              </h2>
            </div>
            <div className="prize-card card-down">
              <div className="prize-bg"></div>
              <LazyLoadImage
                threshold={400}
                effect="blur"
                className="prize-img"
                src={nintendoswitch}
                alt="Nintendo Switch"
              />
              <h1 className="speaker-major">3rd Place</h1>
              <h2 className="speaker-mini">
                Each member of the 3rd place team will receive a Nintendo Switch
              </h2>
            </div>
          </div>
        </div>
      </Section>
      <Section id="whatis2">
        <div className="whatis-flex">
          <h2 className="major">What is DSGT?</h2>
          <p className="mini">
            Data Science @ Georgia Tech is the largest data science organization
            at Georgia Tech with over 900 members. Our motto, “data science with
            a focus on community,” is manifested through our projects, courses,
            and events. Learn more about us or how you can be involved{" "}
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
            Any student currently enrolled in a University above the age of 18.
            For any discrepancies, feel free to reach out.
          </Faq>
          <Faq identifier="b" question="Where and when is it held?">
            <a href="https://goo.gl/maps/W7uum6WcHQ6bTrJXA">
              Klaus Advanced Computing Building
            </a>{" "}
            from 10th February to 12th February, 2023. The event will be hybrid
            so we shall have an online option for those unable to make the event
            in person.
          </Faq>
          <Faq identifier="c" question="Can you participate virtually?">
            Yes! Apply the same way as you would usually do and we will let you
            know the next steps!
          </Faq>
          <Faq identifier="d" question="What is a data science hackathon?">
            A datathon is a specific type of hackathon that focuses on data
            science. You can choose any datasets, programming languages, APIs,
            algorithms you'd like, to create visualizations, develop models,
            derive insights, and do anything you believe to be impactful! The
            sky's the limit!
          </Faq>
          <Faq identifier="e" question="How many people per team?">
            A maximum of 4 members per team. However, you’re allowed to work
            with fewer members as well!
          </Faq>
          <Faq identifier="f" question="What if I don’t have a team?">
            Lots of people come in without teams! You can find people to form a
            team with during our team-building event or through our Discord.
          </Faq>
          <Faq identifier="g" question="Is the event free?">
            Yes! We also provide food and other goodies if you are in-person.
          </Faq>
          <Faq identifier="h" question="Is this event beginner friendly?">
            Yes, we encourage beginners to apply to expand their knowledge! We
            will have tons of skill-building workshops and experienced mentors
            to help out with projects at the event. Overall, Hacklytics will be
            a very enriching experience regardless of how experienced you are!
          </Faq>
          <Faq identifier="i" question="How are applicants selected?">
            We evaluate your applications by looking into your interest in
            participating and passion in the field of data!
          </Faq>
          <Faq
            identifier="j"
            question="What, other than coding, is going to happen at this event?"
          >
            Speaker talks, workshops, social events and a lot more!{" "}
          </Faq>
          <Faq identifier="k" question="How do I get in touch?">
            Reach out to us at{" "}
            <a href="mailto:info@hacklytics.io">info@hacklytics.io</a>
          </Faq>
        </div>
        {/* <a className="continue-reading" href="#sponsors">
                    <span className="text">continue</span>
                    <span className="arrow">↓</span>
                </a> */}
      </Section>
      <Section id="speakers">
        <div className="speakers-flex">
          <h1 className="major">Keynote Speakers</h1>
          <div className="tri-flex">
            <div className="speaker-card card-down">
              <div className="speaker-bg"></div>
              <LazyLoadImage
                threshold={400}
                effect="blur"
                className="speaker-img"
                src={nick}
                alt="Nick Singh"
              />
              <h1 className="speaker-major">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/nick-singh-tech/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Nick Singh
                </a>
              </h1>
              <h2 className="speaker-mini">
                Nick Singh is the best-selling author of{" "}
                <a
                  className="link"
                  href="https://www.acethedatascienceinterview.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ace the Data Science Interview
                </a>
                , and founder of SQL interview platform{" "}
                <a
                  className="link"
                  href="https://datalemur.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  DataLemur
                </a>
                . Previously, he's held Data & Engineering roles at Facebook,
                Google, and SafeGraph. His daily tech career advice on LinkedIn
                has earned him 130,000 followers.
              </h2>
            </div>
            <div className="speaker-card card-down">
              <div className="speaker-bg"></div>
              <LazyLoadImage
                threshold={400}
                effect="blur"
                className="speaker-img"
                src={ankush}
                alt="Ankush Tewari"
              />
              <h1 className="speaker-major">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/ankushtewari/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ankush Tewari
                </a>
              </h1>
              <h2 className="speaker-mini">
                GT Alumni and Consumer data industry executive specializing in
                digital identities, data monetization, and privacy regulations.
                He was General Manager at Lexis Nexis where he led multiple
                verticals: US and Global Credit Risk, Marketing, Communications,
                Digital Economy, Collections, and Investigations.
              </h2>
            </div>
            {/* <div className="speaker-card card-down">
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
                After completing his Bachelors in Mechanical Engineering from
                Georgia Tech in the late 2000s, Rahul completed his MBA at Emory
                University’s Goizeuta School of Business. He then worked as a
                venture capitalist and mechatronic engineer in Silicon Valley
                before returning to Georgia Tech to become the Associate
                Director of Create-X, that guides and funds student startups in
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
                Inspite of only graduating Wharton with a Bachelor of Science in
                Economics, Finance and Strategy in 2021, Chris has Co-Founded
                the Ballpoint Consulting Group, been a Board Member of
                FoodFinder and eventually created Gatherly, a virtual events
                software that makes for engaging and seamless online conferences
                and socials, which is used across the world.
              </h2>
            </div> */}
          </div>
        </div>
      </Section>
      <Section id="sponsors">
        <div className="waves">
          <LazyLoadImage
            effect="blur"
            threshold={1000}
            src={waves}
            alt="waves"
          />
        </div>

        <div className="pastsponsors-flex">
          <h1 className="major">Sponsors</h1>
          {/* <div className="splash"></div> */}
          <div className="sponsors-flex">
            {/* <div className="sponsor-row sponsor-row-a"> */}
            <a className="sponsor" href="https://research.gatech.edu/data">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={ideas}
                alt="Institute for Data Engineering and Science"
              />
            </a>
            <a className="sponsor" href="https://www.nsa.gov/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={nsa}
                alt="National Security Agency"
              />
            </a>
            <a className="sponsor" href="https://www.mlp.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={millennium}
                alt="Millennium"
              />
            </a>
            {/* </div>
                        <div className="sponsor-row sponsor-row-b"> */}
            <a className="sponsor" href="https://www.elevancehealth.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={elevance}
                alt="Elevance Health"
              />
            </a>
            <a className="sponsor" href="https://www.carelon.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={carelon}
                alt="Carelon"
              />
            </a>
            <a
              className="sponsor"
              href="https://www.intel.com/content/www/us/en/homepage.html"
            >
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={intel}
                alt="Intel"
              />
            </a>
            {/* </div>
                        <div className="sponsor-row sponsor-row-c"> */}
            <a className="sponsor" href="https://www.deshaw.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={deshaw}
                alt="DE Shaw & Co"
              />
            </a>
            <a
              className="sponsor"
              href="https://www.scheller.gatech.edu/centers-and-initiatives/business-analytics-center/index.html"
            >
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={scheller}
                alt="Scheller Business Analytics Center"
              />
            </a>
            <a className="sponsor" href="https://ramblinwreck.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={gtathletics}
                alt="Georgia Tech Athletics"
              />
            </a>
            <a className="sponsor" href="https://create-x.gatech.edu/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={createx}
                alt="Georgia Tech Create-X"
              />
            </a>
            <a className="sponsor" href="https://aws.amazon.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={aws}
                alt="Amazon Web Services"
              />
            </a>
            <a className="sponsor" href="https://cloud.google.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={googlecloud}
                alt="Google Cloud"
              />
            </a>
            <a className="sponsor" href="https://www.wolfram.com/language/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={wolfram}
                alt="Wolfram Language"
              />
            </a>
            <a className="sponsor" href="https://www.echo3d.com/">
              <LazyLoadImage
                effect="blur"
                className="sponsor"
                src={echo}
                alt="echoAR"
              />
            </a>
          </div>
          {/* <a className="sponsor-us-button" href="mailto:hello@hacklytics.io">
            Sponsor Us!
          </a> */}
        </div>
      </Section>
      <Footer />
    </div>
  );
};
export default Home;
