//imports
import "./Test.css";

import { useEffect, useState } from "react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Background from "../../Components/Background";
import Section from "../../Components/Section";
import Navbar from "../../Components/Navbar";
import Faq from "../../Components/Faq";

const Test = (params) => {
    const [width, setWidth] = useState(
        window.innerWidth > 1000 ? 1000 : window.innerWidth
    );
    const [height, setHeight] = useState(window.innerHeight - 5 * 16);
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setWidth(e.target.innerWidth);
            setHeight(e.target.innerHeight - 5 * 16); //5em for nav
            if (e.target.innerWidth > 1000) {
                setWidth(1000);
            }
        });
    }, []);

    return (
        <div className="test-page">
            <Background />
            <Navbar />
            <Controller>
                <Scene indicators duration="100%" triggerHook="onLeave" pin>
                    <Timeline wrapper={<Section id="main-scene" />}>
                        {/* <Tween from={{ y: window.innerHeight - 200 }} to={{ y: window.innerHeight / 2 - 200 }} >
                            <div className="ground"></div>
                        </Tween> */}
                        <Tween
                            from={{
                                x: 0,
                                y: height - 200,
                            }}
                            to={{ y: window.innerHeight }}
                            position={0}
                        >
                            <div className="ground"></div>
                        </Tween>
                        <Tween
                            from={{
                                x: width - 100,
                                y: height - 450,
                            }}
                            to={{ scale: 2 }}
                            position={0}
                        >
                            <div className="telescope"></div>
                        </Tween>
                    </Timeline>
                    {/* <Tween
                        wrapper={<Section />}
                        to={{
                            x: "500px",
                            rotation: 180,
                            background: "red",
                        }}
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
                    </Tween> */}
                </Scene>
                {/* <Scene indicators duration={1000} triggerHook={0} pin>
                    <Tween
                        to={{
                            y: "500px",
                            rotation: 180,
                            background: "blue",
                        }}
                        duration={2}
                        ease="back.out(1.7)"
                    >
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                background: "red",
                            }}
                        />
                    </Tween>
                </Scene> */}
            </Controller>
            <Section>
                <Faq
                    identifier="faq1"
                    question="who can apply?"
                    answer="Any student currently enrolled in a University above the age of 18. For any discrepancies, feel free to reach out."
                />
                <Faq
                    identifier="faq2"
                    question="who can apply?"
                    answer="Any student currently enrolled in a University above the age of 18. For any discrepancies, feel free to reach out."
                />
            </Section>
        </div>
    );
};
export default Test;
