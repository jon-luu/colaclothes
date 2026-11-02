import "./Navigation.css";
import NavItem from "../navitem/NavItem";

const links = [
    { label: "Shop All", to: "/shop" },
    { label: "Apparel", to: "/apparel" },
    { label: "Gear & Equipment", to: "/gear" },
    { label: "Sell", to: "/sell" },
    { label: "About Us", to: "/about" },
];

// isOpen comes from the Header's toggle button (only matters on small screens)
const Navigation = ({ isOpen }) => {
    return (
        <nav id="main-nav" className={isOpen ? "navigation open" : "navigation"}>
            <ul>
                {links.map((link) => (
                    <NavItem key={link.label} label={link.label} to={link.to} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
