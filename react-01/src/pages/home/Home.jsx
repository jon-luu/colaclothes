import "./Home.css";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productcard/ProductCard";
import Step from "../../components/step/Step";
import BrandChip from "../../components/brandchip/BrandChip";
import { featuredProducts } from "../../data/products";
import { homeSteps, brands } from "../../data/content";

const img = (path) => `${process.env.PUBLIC_URL}/images/${path}`;

const Home = () => {
    return (
        <main className="home-page">
            {/* Hero */}
            <section className="hero">
                <div className="hero-banner-wrap">
                    <img className="hero-banner" src={img("home/hero-banner.png")} alt="Hiker on a misty mountain ridge at sunrise" />
                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <h1 className="hero-title">Gear for the next trail, not the landfill</h1>
                        <p className="hero-subhead">Shop tested trail apparel, camping gear, and outdoor equipment from local adventurers and verified sellers.</p>
                        <div className="hero-buttons">
                            <Link className="hero-btn-primary" to="/shop">Shop Now</Link>
                            <Link className="hero-btn-secondary" to="/sell">Start Selling</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section section--featured">
                <div className="section-heading">
                    <div className="section-head">
                        <p className="section-title">Fresh Finds for the Trail</p>
                        <p className="section-subtitle">Verified secondhand gear from local hikers, campers, and climbers</p>
                    </div>
                    <Link className="view-all-link" to="/shop">View All Listings</Link>
                </div>

                <div className="product-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="section section--how-it-works">
                <div className="section-intro">
                    <div className="eyebrow-row">
                        <img className="flourish" src={img("icons/icon-sparkle.png")} alt="" aria-hidden="true" />
                        <span className="eyebrow">HOW IT WORKS</span>
                        <img className="flourish" src={img("icons/icon-sparkle.png")} alt="" aria-hidden="true" />
                    </div>
                    <p className="how-it-works-title">Gear for the next trail, not the landfill</p>
                    <p className="how-it-works-subtitle">Buy and sell pre-loved outdoor gear with fellow adventurers. Less waste, more trails.</p>
                </div>

                <div className="steps-grid">
                    {homeSteps.map((step) => (
                        <Step key={step.id} {...step} />
                    ))}
                </div>

                <div className="cta-banner">
                    <img className="cta-icon" src={img("icons/icon-tent.png")} alt="" aria-hidden="true" />
                    <p className="cta-text">Ready to summit your gear pile?</p>
                    <Link className="cta-button" to="/sell">Start Selling</Link>
                </div>
            </section>

            {/* Brands We Love */}
            <section className="section section--brands">
                <div className="section-head">
                    <div className="section-title">Brands We Love</div>
                    <p className="section-subtitle">Most searched and traded outdoor gear labels this week</p>
                </div>

                <div className="brand-grid">
                    {brands.map((brand) => (
                        <BrandChip key={brand} name={brand} />
                    ))}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="section section--newsletter">
                <div className="newsletter-card">
                    <div className="newsletter-text">
                        <p className="newsletter-title">Join the Cola Clothes Community</p>
                        <p className="newsletter-desc">Subscribe for fresh gear drops, trail-tested gear reviews, and updates on high-demand outdoor brands.</p>
                    </div>

                    <form className="newsletter-form">
                        <div className="newsletter-input-wrap">
                            <input className="newsletter-input" type="email" placeholder="Enter your email address" aria-label="Email address" required />
                        </div>
                        <button className="newsletter-button" type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Home;
