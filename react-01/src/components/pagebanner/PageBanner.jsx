import "./PageBanner.css";

const PageBanner = ({ title, subtitle }) => {
    return (
        <section className="page-banner">
            <div className="page-banner-card">
                <h1 className="page-title">{title}</h1>
                <p className="page-subtitle">{subtitle}</p>
            </div>
        </section>
    );
};

export default PageBanner;
