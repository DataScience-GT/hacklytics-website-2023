//imports
import "./Faq.css";

/**
 * A frequently asked question
 * @attributes identifier (unique, zero spaces), question, answer (in element)
 * @example <Faq identifier="abc123" question="what time is it?">3:00AM</Faq>
 */
const Faq = (params) => {
    let identifier = "faq-checkbox-" + params.identifier;

    return (
        <div className="faq">
            <input id={identifier} className="faq-checkbox" type="checkbox" />
            <label className="faq-label" htmlFor={identifier}>
                <span className="faq-question">{params.question}</span>
                <span className="faq-arrow">↓</span>
            </label>
            <p className="faq-answer">{params.children}</p>
        </div>
    );
};
export default Faq;
