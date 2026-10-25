import "./Sell.css";
import SellStep from "../../components/sellstep/SellStep";
import Tip from "../../components/tip/Tip";
import { sellSteps, sellTips } from "../../data/content";

const Sell = () => {
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

            {/* Listing Form (not wired up yet) */}
            <section className="section--listing" id="listing-form">
                <form className="listing-form" action="#">
                    <div className="form-head">
                        <h2 className="form-title">Draft Your Listing</h2>
                        <p className="form-desc">All fields are verified by our team before publishing to keep the marketplace trusted and easy to shop.</p>
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="item-title">Item Title</label>
                        <input className="form-input" id="item-title" type="text" placeholder="e.g., Patagonia Tres 3-in-1 Parka, Men's L, Gently Used" />
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="item-category">Category</label>
                            <select className="form-select" id="item-category" defaultValue="Jackets & Outerwear">
                                <option>Jackets &amp; Outerwear</option>
                                <option>Base Layers &amp; Knits</option>
                                <option>Pants &amp; Shorts</option>
                                <option>Footwear</option>
                                <option>Tents &amp; Shelters</option>
                                <option>Sleeping Bags &amp; Pads</option>
                                <option>Backpacks &amp; Bags</option>
                                <option>Accessories</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="item-condition">Condition</label>
                            <select className="form-select" id="item-condition" defaultValue="Excellent (Minor Wear)">
                                <option>Like New</option>
                                <option>Excellent (Minor Wear)</option>
                                <option>Very Good</option>
                                <option>Good</option>
                                <option>Worn In</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="item-size">Size</label>
                            <select className="form-select" id="item-size" defaultValue="Large">
                                <option>X-Small</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>X-Large</option>
                                <option>One Size</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="item-price">Price (USD)</label>
                            <div className="price-input-wrap">
                                <span className="price-symbol">$</span>
                                <input className="form-input" id="item-price" type="number" min="0" step="0.01" placeholder="65.00" />
                            </div>
                        </div>
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="item-description">Description</label>
                        <textarea className="form-textarea" id="item-description" placeholder="Mention details like fit, fabric composite, flaws, and original retail value..."></textarea>
                    </div>

                    <button className="form-submit" type="submit">List Item Instantly</button>
                </form>

                {/* Upload + Tips */}
                <aside className="sell-sidebar">
                    <div className="upload">
                        <div className="upload-head">
                            <h2 className="upload-title">Upload Photos</h2>
                            <p className="upload-desc">High resolution front and tag photos boost sales by 4x.</p>
                        </div>

                        <div className="upload-box">
                            <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 16V4" />
                                <path d="M7 9l5-5 5 5" />
                                <path d="M4 16v4h16v-4" />
                            </svg>
                            <p className="upload-text">Drag gear photos here</p>
                            <p className="upload-hint">PNG, JPG up to 10MB</p>
                            <label className="upload-button" htmlFor="photo-upload">Browse Files</label>
                            <input className="upload-input" id="photo-upload" type="file" accept="image/png, image/jpeg" multiple />
                        </div>
                    </div>

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
        </main>
    );
};

export default Sell;
