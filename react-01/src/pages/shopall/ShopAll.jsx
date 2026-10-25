import "./ShopAll.css";
import PageBanner from "../../components/pagebanner/PageBanner";
import FilterGroup from "../../components/filtergroup/FilterGroup";
import ProductCard from "../../components/productcard/ProductCard";
import { shopAllProducts } from "../../data/products";
import { shopFilters } from "../../data/content";

const ShopAll = () => {
    return (
        <main className="shop-page">
            <PageBanner
                title="Shop All Listings"
                subtitle="Explore curated secondhand outdoor gear and apparel from verified local adventurers in Columbia, SC"
            />

            <section className="section section--shop">
                {/* Filters sidebar */}
                <aside className="filters">
                    <details className="filters-panel" open>
                        <summary className="filters-toggle">Filters</summary>
                        {shopFilters.map((filter) => (
                            <FilterGroup key={filter.id} title={filter.title} type={filter.type} options={filter.options} />
                        ))}
                    </details>
                </aside>

                {/* Listings */}
                <div className="listings" id="listings">
                    <div className="listings-bar">
                        <p className="results-count">Showing 1 - 8 of 132 results</p>
                        <div className="sort">
                            <label className="sort-label" htmlFor="sort-select">Sort by:</label>
                            <select className="sort-select" id="sort-select">
                                <option>Most Recent</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid">
                        {shopAllProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    <div className="load-more">
                        <a className="load-more-button" href="#listings">Load More Items</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShopAll;
