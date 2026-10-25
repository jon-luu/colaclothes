import "./Apparel.css";
import PageBanner from "../../components/pagebanner/PageBanner";
import CategoryPill from "../../components/categorypill/CategoryPill";
import ProductCard from "../../components/productcard/ProductCard";
import { apparelProducts } from "../../data/products";
import { apparelCategories } from "../../data/content";

const Apparel = () => {
    return (
        <main className="apparel-page">
            <PageBanner title="Apparel" subtitle="Technical jackets, base layers, and everyday essentials for the trail" />

            <nav className="section--categories" aria-label="Apparel categories">
                {apparelCategories.map((category, i) => (
                    <CategoryPill key={category} label={category} active={i === 0} />
                ))}
            </nav>

            <section className="section--listings" id="listings">
                <div className="listings-bar">
                    <h2 className="listings-title">Active Listings</h2>
                    <p className="results-count">{apparelProducts.length} Items Found</p>
                </div>

                <div className="product-grid">
                    {apparelProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Apparel;
