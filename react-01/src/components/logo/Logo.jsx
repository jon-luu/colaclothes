import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <span className="logo-mark">C</span>
            <span className="logo-text">Cola Clothes</span>
        </Link>
    );
};

export default Logo;
