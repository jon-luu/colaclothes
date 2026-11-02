import "./SlideDot.css";

// one of the little dots under the slideshow
const SlideDot = ({ label, active, onClick }) => {
    return (
        <button
            className={active ? "slide-dot active" : "slide-dot"}
            type="button"
            aria-label={label}
            aria-current={active}
            onClick={onClick}
        ></button>
    );
};

export default SlideDot;
