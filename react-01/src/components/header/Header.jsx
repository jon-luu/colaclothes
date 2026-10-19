import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import NavActions from "../navactions/NavActions";

const Header = () => {
    return (
        <header className="main-header">
            <Logo />
            <Navigation />
            <NavActions />
        </header>
    );
};

export default Header;
