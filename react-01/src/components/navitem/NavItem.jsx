import "./NavItem.css";
import { NavLink } from "react-router-dom";

// NavLink adds the "active" class when you're on that page
const NavItem = ({ label, to }) => {
    return (
        <li className="nav-item">
            <NavLink to={to}>{label}</NavLink>
        </li>
    );
};

export default NavItem;
