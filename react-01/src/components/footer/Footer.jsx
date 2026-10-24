import "./Footer.css";
import { Link } from "react-router-dom";
import FooterColumn from "../footercolumn/FooterColumn";
import { footerColumns } from "../../data/content";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <Link className="footer-logo" to="/">
                        <div className="footer-logo-mark">C</div>
                        <span className="footer-logo-text">Cola Clothes</span>
                    </Link>
                    <p className="footer-desc">
                        Giving outdoor gear another adventure. Buy and sell pre-loved hiking, camping, and climbing gear with ease in Columbia, South Carolina
                    </p>

                    <div className="social-links">
                        <a href="https://instagram.com" aria-label="Instagram">IG</a>
                        <a href="https://x.com" aria-label="Twitter / X">X</a>
                        <a href="https://facebook.com" aria-label="Facebook">FB</a>
                    </div>
                </div>

                <div className="footer-columns">
                    {footerColumns.map((column) => (
                        <FooterColumn key={column.id} title={column.title} links={column.links} />
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">&copy; 2026 Cola Clothes Co. All rights reserved.</p>
                <div className="footer-legal-links">
                    <a className="footer-legal-link" href="#privacy">Privacy Policy</a>
                    <a className="footer-legal-link" href="#terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
