import "./Apparel.css";
import PageBanner from "../../components/pagebanner/PageBanner";
import CategoryPill from "../../components/categorypill/CategoryPill";
import ProductGrid from "../../components/productgrid/ProductGrid";
import useProducts from "../../hooks/useProducts";
import { apparelCategories } from "../../data/content";

const Apparel = () => {
    // PART 12: apparel listings come from the server
    const { products: apparelProducts, loading, error, retry } = useProducts("?category=apparel");

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
                    <p className="results-count">{loading ? "Loading listings..." : error ? "Listings unavailable" : `${apparelProducts.length} Items Found`}</p>
                </div>

                <ProductGrid products={apparelProducts} loading={loading} error={error} onRetry={retry} />
            </section>
        </main>
    );
};

export default Apparel;
