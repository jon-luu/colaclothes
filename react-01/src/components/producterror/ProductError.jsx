import "./ProductError.css";

// shown when the server can't be reached
const ProductError = ({ onRetry }) => {
    return (
        <div className="product-error" role="alert">
            <h3 className="error-title">We couldn't load the listings</h3>
            <p className="error-desc">The gear server didn't answer. Check your connection and try again.</p>
            <button className="error-button" type="button" onClick={onRetry}>
                Try Again
            </button>
        </div>
    );
};

export default ProductError;
