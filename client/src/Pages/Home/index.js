//imports
import "./Home.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import ScrollSection from "../../Components/ScrollSection";

const Home = (params) => {
    return <div className="home-page">
        <Background/>
        <Navbar />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
        <ScrollSection />
    </div>;
};
export default Home;
