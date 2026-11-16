import "./ProductModal.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const categoryLabels = { apparel: "Apparel", gear: "Gear & Equipment" };

// PART 13: clicking a product opens this details modal.
// Built on the browser's <dialog> element: Esc closes it, focus stays inside, and the page behind is blocked.
const ProductModal = ({ product, onClose, onZoom }) => {
    const dialogRef = useRef(null);

    // open / close the dialog when a product is picked or cleared
    useEffect(() => {
        const dialog = dialogRef.current;
        if (product && !dialog.open) dialog.showModal();
        if (!product && dialog.open) dialog.close();
    }, [product]);

    // clicking the dark area outside the box closes it
    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) onClose();
    };

    const addToCart = () => {
        toast.success(`${product.name} added to your cart`);
        onClose();
    };

    return (
        <dialog className="product-modal" ref={dialogRef} onClose={onClose} onClick={handleBackdropClick} aria-labelledby="product-modal-title">
            {product && (
                <div className="modal-card">
                    <button className="modal-close" type="button" aria-label="Close details" onClick={onClose}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>

                    <button className="modal-photo" type="button" onClick={onZoom} aria-label={`Zoom in on the photo of ${product.name}`}>
                        <img src={product.img} alt={product.name} />
                        <span className="modal-zoom-tag" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                            </svg>
                            Zoom
                        </span>
                    </button>

                    <div className="modal-info">
                        <p className="modal-eyebrow">{categoryLabels[product.category] || "Listing"}</p>
                        <h2 className="modal-title" id="product-modal-title">{product.name}</h2>
                        <p className="modal-brand">{product.brand}</p>

                        <p className="modal-price">{product.price}</p>

                        {product.description && <p className="modal-desc">{product.description}</p>}

                        <dl className="modal-details">
                            <div className="modal-detail">
                                <dt>Size</dt>
                                <dd>{product.size}</dd>
                            </div>
                            <div className="modal-detail">
                                <dt>Condition</dt>
                                <dd>{product.condition}</dd>
                            </div>
                            <div className="modal-detail">
                                <dt>Category</dt>
                                <dd>{categoryLabels[product.category] || product.category}</dd>
                            </div>
                            <div className="modal-detail">
                                <dt>Listing</dt>
                                <dd>#{product.id}</dd>
                            </div>
                        </dl>

                        <div className="modal-actions">
                            <button className="modal-btn-primary" type="button" onClick={addToCart}>
                                Add to Cart
                            </button>
                            <Link className="modal-btn-secondary" to="/contact" onClick={onClose}>
                                Ask a Question
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </dialog>
    );
};

export default ProductModal;
