//imports
import "./Home.css";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";

const Home = (params) => {
    return <div className="home-page">
        <Background/>
        <Navbar />
        <Section />
        <Section />
    </div>;
};
export default Home;
