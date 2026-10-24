import "./Step.css";

const Step = ({ number, icon, title, desc }) => {
    return (
        <div className="step">
            <div className="step-icon-wrap">
                <div className="step-icon">
                    <img src={`${process.env.PUBLIC_URL}/${icon}`} alt="" aria-hidden="true" />
                </div>
                <div className="step-number">{number}</div>
            </div>
            <div className="step-body">
                <div className="step-title">{title}</div>
                <p className="step-desc">{desc}</p>
            </div>
        </div>
    );
};

export default Step;
