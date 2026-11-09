import "./ShopAll.css";
import { useState } from "react";
import PageBanner from "../../components/pagebanner/PageBanner";
import FilterGroup from "../../components/filtergroup/FilterGroup";
import ProductGrid from "../../components/productgrid/ProductGrid";
import useProducts from "../../hooks/useProducts";
import { shopFilters } from "../../data/content";

const ShopAll = () => {
    // PART 12: every listing comes from the server on Render
    const { products, loading, error, retry } = useProducts();
    const [sort, setSort] = useState("recent");

    // sort a copy so the original list stays in server order ("Most Recent")
    const sortedProducts = [...products];
    if (sort === "low") sortedProducts.sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "high") sortedProducts.sort((a, b) => b.priceValue - a.priceValue);

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
                        <p className="results-count">{loading ? "Loading listings..." : error ? "Listings unavailable" : `Showing ${products.length} results`}</p>
                        <div className="sort">
                            <label className="sort-label" htmlFor="sort-select">Sort by:</label>
                            <select className="sort-select" id="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="recent">Most Recent</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <ProductGrid products={sortedProducts} loading={loading} error={error} onRetry={retry} />
                </div>
            </section>
        </main>
    );
};

export default ShopAll;
