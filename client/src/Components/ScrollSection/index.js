//imports
import "./ScrollSection.css";

const ScrollSection = (params) => {
    return (
        <div className="scroll-section" {...params}>
            <div className="section-wrapper">{params.children}</div>
        </div>
    );
};
export default ScrollSection;
