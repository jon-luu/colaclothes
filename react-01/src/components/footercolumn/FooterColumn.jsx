import { Link } from "react-router-dom";

// one titled column of links in the footer (styled by Footer.css)
const FooterColumn = ({ title, links }) => {
    return (
        <div className="footer-col">
            <div className="footer-col-title">{title}</div>
            <div className="footer-col-links">
                {links.map((link) => (
                    <Link key={link.label} className="footer-link" to={link.to}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterColumn;
