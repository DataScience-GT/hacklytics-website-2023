//imports
import "./Section.css";

const Section = (params) => {
    return (
        <div className="section" id={params.id}>
            <div className="section-wrapper">{params.children}</div>
        </div>
    );
};
export default Section;
