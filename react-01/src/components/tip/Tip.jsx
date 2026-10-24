import "./Tip.css";

const Tip = ({ number, text }) => {
    return (
        <p className="tip">
            <span className="tip-number">{number}</span> {text}
        </p>
    );
};

export default Tip;
