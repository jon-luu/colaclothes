import "./MenuToggle.css";

// hamburger button: three bars that turn into an X when the menu is open
const MenuToggle = ({ isOpen, onToggle }) => {
    return (
        <button
            className={isOpen ? "menu-toggle open" : "menu-toggle"}
            type="button"
            aria-controls="main-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={onToggle}
        >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
        </button>
    );
};

export default MenuToggle;
