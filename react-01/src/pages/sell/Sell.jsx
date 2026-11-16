import "./Sell.css";
import { Link } from "react-router-dom";
import SellStep from "../../components/sellstep/SellStep";
import ListingForm from "../../components/listingform/ListingForm";
import ProductGrid from "../../components/productgrid/ProductGrid";
import useProducts from "../../hooks/useProducts";
import Tip from "../../components/tip/Tip";
import { sellSteps, sellTips } from "../../data/content";

const Sell = () => {
    // PART 13: the listings live in state, so a new listing from the form shows up below right away
    const { products, loading, error, retry, addProduct } = useProducts();

    // newest first (the server gives each new listing the next _id)
    const latestListings = [...products].sort((a, b) => b.id - a.id).slice(0, 8);

    return (
        <main className="sell-page">
            {/* Sell Hero */}
            <section className="sell-hero">
                <div className="sell-hero-card">
                    <h1 className="sell-hero-title">Turn Your Gear Closet into Trail Cash</h1>
                    <p className="sell-hero-desc">
                        Sell your high-quality secondhand outdoor gear to local climbers, hikers, and campers. Instant payouts, zero hassle, and a marketplace built for enthusiasts.
                    </p>
                    <a className="sell-hero-button" href="#listing-form">Upload First Item</a>
                </div>
            </section>

            {/* How Reselling Works */}
            <section className="section--how-it-works">
                <div className="section-intro">
                    <h2 className="section-title">How Reselling Works</h2>
                    <p className="section-subtitle">Four simple steps to lighten your gear closet and fund the next adventure.</p>
                </div>

                <div className="steps-grid">
                    {sellSteps.map((step) => (
                        <SellStep key={step.id} {...step} />
                    ))}
                </div>
            </section>

            {/* PART 13: Listing form - POSTs to the server (see components/listingform) */}
            <section className="section--listing" id="listing-form">
                <ListingForm onAdded={addProduct} />

                <aside className="sell-sidebar">
                    <div className="tips-card">
                        <h3 className="tips-title">Outdoor Gear-Selling Tips</h3>
                        <div className="tips-list">
                            {sellTips.map((tip) => (
                                <Tip key={tip.id} number={tip.number} text={tip.text} />
                            ))}
                        </div>
                    </div>
                </aside>
            </section>

            {/* PART 13: Latest listings - pulled from the server, updates when the form adds one */}
            <section className="section--latest" id="latest-listings">
                <div className="latest-head">
                    <div>
                        <h2 className="section-title">Latest Listings</h2>
                        <p className="latest-desc">The newest gear in the shop. Click any item for details.</p>
                    </div>
                    <Link className="latest-link" to="/shop">
                        View All Listings
                    </Link>
                </div>

                <ProductGrid products={latestListings} loading={loading} error={error} onRetry={retry} />
            </section>
        </main>
    );
};

export default Sell;
