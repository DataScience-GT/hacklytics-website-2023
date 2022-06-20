//imports
import "./Faq.css";

/**
 * A frequently asked question
 * @attributes identifier (unique, zero spaces), question, answer
 */
const Faq = (params) => {
    let identifier = "faq-checkbox-" + params.identifier;

    return (
        <div className="faq">
            <input id={identifier} className="faq-checkbox" type="checkbox" />
            <label className="faq-label" htmlFor={identifier}>
                {params.question}
                <span className="faq-arrow">v</span>
            </label>
            <p className="faq-answer">{params.answer}</p>
        </div>
    );
};
export default Faq;
