import "./Navigation.css";
import NavItem from "../navitem/NavItem";

const links = [
    { label: "Shop All", to: "/shop" },
    { label: "Apparel", to: "/apparel" },
    { label: "Gear & Equipment", to: "/gear" },
    { label: "Sell", to: "/sell" },
    { label: "About Us", to: "/about" },
];

const Navigation = () => {
    return (
        <nav id="main-nav" className="navigation">
            <ul>
                {links.map((link) => (
                    <NavItem key={link.label} label={link.label} to={link.to} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
