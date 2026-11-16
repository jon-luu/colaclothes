import "./ProductCard.css";

// PART 13: the whole card is clickable - the product name is a button that stretches over the card
// onSelect opens the details modal (see ProductGrid)
const ProductCard = ({ name, brand, price, size, condition, img, onSelect }) => {
    return (
        <article className="product-card">
            <div className="product-image-wrap">
                <img className="product-image" src={img} alt="" />
                <span className="product-view-tag" aria-hidden="true">
                    View Details
                </span>
            </div>
            <div className="product-body">
                <div className="product-info">
                    <h3 className="product-name">
                        <button className="product-select" type="button" onClick={onSelect}>
                            {name}
                        </button>
                    </h3>
                    <div className="product-brand">{brand}</div>
                </div>
                <div className="product-meta">
                    <div className="product-price">{price}</div>
                    <div className="product-badges">
                        <div className="product-badge">{size}</div>
                        {condition && <div className="product-badge product-badge--condition">{condition}</div>}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
