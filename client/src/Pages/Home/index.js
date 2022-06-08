//imports

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import Section from "../../Components/Section";
import Navbar from "../../Components/Navbar";

const Home = (params) => {
    return (
        <div className="home-page">
            <Navbar />
            <Controller>
                <Scene indicators duration={5000} triggerHook={0} pin>
                    <Tween
                        to={{ x: "500px", rotation: 180, background: "red" }}
                        duration={2}
                        ease="back.out(1.7)"
                    >
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                background: "#ccc",
                            }}
                        />
                    </Tween>
                </Scene>
            </Controller>
        </div>
    );
};
export default Home;
