import "./Header.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import MenuToggle from "../menutoggle/MenuToggle";
import Navigation from "../navigation/Navigation";
import NavActions from "../navactions/NavActions";

// PART 10 FEATURE: JS toggle menu
// on small screens the nav links are hidden until the hamburger button is clicked
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // close the menu whenever the page changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="main-header">
            <Logo />
            <MenuToggle isOpen={menuOpen} onToggle={toggleMenu} />
            <Navigation isOpen={menuOpen} />
            <NavActions />
        </header>
    );
};

export default Header;
