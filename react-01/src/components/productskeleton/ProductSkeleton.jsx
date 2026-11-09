import "./ProductSkeleton.css";

// gray placeholder card shown while the products load from the server
const ProductSkeleton = () => {
    return (
        <div className="product-skeleton" aria-hidden="true">
            <div className="skeleton-image"></div>
            <div className="skeleton-body">
                <div className="skeleton-line skeleton-line--title"></div>
                <div className="skeleton-line skeleton-line--short"></div>
                <div className="skeleton-line skeleton-line--price"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
