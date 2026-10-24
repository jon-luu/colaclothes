import "./ValueCard.css";

// the outline icons from the about page, picked by name
const icons = {
    cycle: (
        <>
            <path d="M20 8a8 8 0 0 0-14.5-2" />
            <path d="M4 3v4h4" />
            <path d="M4 16a8 8 0 0 0 14.5 2" />
            <path d="M20 21v-4h-4" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
            <circle cx="12" cy="9" r="2.5" />
        </>
    ),
    shield: (
        <>
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
            <path d="M9 12l2 2 4-4" />
        </>
    ),
    compass: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 8.5l-2 5-5 2 2-5z" />
        </>
    ),
};

const ValueCard = ({ icon, title, desc }) => {
    return (
        <article className="value-card">
            <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[icon]}
                </svg>
            </div>
            <h3 className="value-title">{title}</h3>
            <p className="value-desc">{desc}</p>
        </article>
    );
};

export default ValueCard;
