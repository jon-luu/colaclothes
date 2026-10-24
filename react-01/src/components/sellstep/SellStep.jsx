import "./SellStep.css";

// the outline icons from the sell page, picked by name
const icons = {
    camera: (
        <>
            <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
            <circle cx="12" cy="13" r="3.5" />
        </>
    ),
    tag: (
        <>
            <path d="M3 12V4h8l10 10-8 8z" />
            <circle cx="7.5" cy="8.5" r="1.5" />
        </>
    ),
    truck: (
        <>
            <path d="M2 6h12v10H2z" />
            <path d="M14 10h4l3 3v3h-7z" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
        </>
    ),
    cash: (
        <>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="3" />
        </>
    ),
};

const SellStep = ({ number, icon, title, desc }) => {
    return (
        <div className="sell-step">
            <div className="sell-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                    {icons[icon]}
                </svg>
                <div className="sell-step-number">{number}</div>
            </div>
            <h3 className="sell-step-title">{title}</h3>
            <p className="sell-step-desc">{desc}</p>
        </div>
    );
};

export default SellStep;
