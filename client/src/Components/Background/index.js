//imports
import "./Background.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particleOptions from "./star.json";
import mobileParticleOptions from "./star-mobile.json";

const Background = (params) => {
    const particlesInit = async (main) => {
        // console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <div className="background">
            {/* <div className="bg-blur2"></div>
        <div className="bg-blur"></div>
        <div className="bg"></div>
        <div className="circle circle-blue-bright circle1"></div>
        <div className="circle circle-gold circle2"></div> */}
            <div className="background-wrapper">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <div className="circle circle6"></div>
                <div className="circle circle7"></div>
                <div className="circle circle8"></div>
                <div className="circle circle9"></div>
                <div className="circle circle10"></div>
                <div className="circle circle11"></div>
                <div className="circle circle12"></div>
                <div className="circle circle13"></div>
                <div className="circle circle14"></div>
                <div className="circle circle15"></div>
                <div className="circle circle16"></div>
                <div className="circle circle17"></div>
                <div className="circle circle18"></div>
                <div className="circle circle19"></div>
                <div className="circle circle20"></div>
                <div className="circle circle21"></div>
                <div className="circle circle22"></div>
                <div className="circle circle23"></div>
                <div className="circle circle24"></div>
                <div className="circle circle25"></div>
                <div className="circle circle26"></div>
                <div className="circle circle27"></div>
                <div className="circle circle28"></div>
            </div>
            <Particles
                id="tsparticles"
                options={
                    window.innerWidth > 600
                        ? particleOptions
                        : mobileParticleOptions
                }
                init={particlesInit}
                loaded={particlesLoaded}
                // style={{ position: "absolute" }}
            />
        </div>
    );
};
export default Background;
