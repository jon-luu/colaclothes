import "./ProductCard.css";

// onImageClick opens the photo in the lightbox (see ProductGrid) - without it the photo is just an image
const ProductCard = ({ name, brand, price, size, condition, img, onImageClick }) => {
    // img is the full photo URL on the server
    const src = img;

    return (
        <article className="product-card">
            {onImageClick ? (
                <button className="product-image-button" type="button" onClick={onImageClick} aria-label={`View larger photo of ${name}`}>
                    <img className="product-image" src={src} alt={name} />
                    <span className="product-zoom" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                        Quick View
                    </span>
                </button>
            ) : (
                <img className="product-image" src={src} alt={name} />
            )}
            <div className="product-body">
                <div className="product-info">
                    <div className="product-name">{name}</div>
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
