import "./ProductCard.css";

const ProductCard = ({ name, brand, price, size, condition, img }) => {
    return (
        <article className="product-card">
            <img className="product-image" src={`${process.env.PUBLIC_URL}/${img}`} alt={name} />
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
