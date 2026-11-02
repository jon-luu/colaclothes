import "./Slide.css";
import { Link } from "react-router-dom";

// one slide in the home page slideshow
const Slide = ({ img, alt, title, subhead, primary, secondary, active, position }) => {
    return (
        <div
            className={active ? "slide active" : "slide"}
            role="group"
            aria-roledescription="slide"
            aria-label={position}
            aria-hidden={!active}
        >
            <img className="slide-image" src={`${process.env.PUBLIC_URL}/${img}`} alt={alt} />
            <div className="slide-overlay"></div>

            <div className="slide-content">
                <h2 className="slide-title">{title}</h2>
                <p className="slide-subhead">{subhead}</p>
                <div className="slide-buttons">
                    {/* tabIndex keeps hidden slides' buttons out of the tab order */}
                    <Link className="slide-btn-primary" to={primary.to} tabIndex={active ? 0 : -1}>
                        {primary.label}
                    </Link>
                    {secondary && (
                        <Link className="slide-btn-secondary" to={secondary.to} tabIndex={active ? 0 : -1}>
                            {secondary.label}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Slide;
