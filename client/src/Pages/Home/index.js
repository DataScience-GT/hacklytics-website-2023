//imports

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import Section from "../../Components/Section";

const Home = (params) => {
    return (
        <div className="home-page">
            <Controller>
                <Scene indicators duration={1000} triggerHook={0} pin>
                    <Tween
                        to={{ x: "200px", rotation: 180, background: "red" }}
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
