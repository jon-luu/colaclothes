import "./Gear.css";
import { Link } from "react-router-dom";
import PageBanner from "../../components/pagebanner/PageBanner";
import CategoryPill from "../../components/categorypill/CategoryPill";
import ProductCard from "../../components/productcard/ProductCard";
import { gearProducts } from "../../data/products";
import { gearCategories } from "../../data/content";

const Gear = () => {
    return (
        <main className="gear-page">
            <PageBanner title="Gear & Equipment" subtitle="Backpacks, tents, sleeping bags, and camp equipment for your next trip" />

            <section className="section--intro">
                <div className="intro-text">
                    <p className="intro-eyebrow">Secondhand outdoor gear</p>
                    <h2 className="intro-title">Tested trails, new adventures.</h2>
                    <p className="intro-desc">
                        Shop curated secondhand hiking, camping, and climbing gear from real outdoor enthusiasts. Every item is inspected, photographed, and ready to ship.
                    </p>
                    <div className="intro-buttons">
                        <a className="intro-btn-primary" href="#listings">Explore Gear</a>
                        <Link className="intro-btn-secondary" to="/sell">Sell Your Gear</Link>
                    </div>
                </div>
                <img
                    className="intro-image"
                    src={`${process.env.PUBLIC_URL}/images/gear/gear-flatlay.jpg`}
                    alt="Backpack, sleeping bag, trekking poles, and camp stove laid out on a wooden table"
                />
            </section>

            <nav className="section--categories" aria-label="Gear categories">
                {gearCategories.map((category, i) => (
                    <CategoryPill key={category} label={category} active={i === 0} />
                ))}
            </nav>

            <section className="section--listings" id="listings">
                <div className="listings-bar">
                    <h2 className="listings-title">Active Listings</h2>
                    <p className="results-count">{gearProducts.length} Items Found</p>
                </div>

                <div className="product-grid">
                    {gearProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Gear;
