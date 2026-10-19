import "./Navigation.css";
import NavItem from "../navitem/NavItem";

const links = [
    { label: "Shop All", href: "#shop-all" },
    { label: "Apparel", href: "#apparel" },
    { label: "Gear & Equipment", href: "#gear" },
    { label: "Sell", href: "#sell" },
    { label: "About Us", href: "#about" },
];

const Navigation = () => {
    return (
        <nav id="main-nav" className="navigation">
            <ul>
                {links.map((link) => (
                    <NavItem key={link.label} label={link.label} href={link.href} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
