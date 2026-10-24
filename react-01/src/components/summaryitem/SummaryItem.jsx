import "./SummaryItem.css";

const SummaryItem = ({ name, brand, size, qty, price, img }) => {
    return (
        <div className="summary-item">
            <img className="summary-item-image" src={`${process.env.PUBLIC_URL}/${img}`} alt={name} />
            <div className="summary-item-info">
                <div className="summary-item-name">{name}</div>
                <div className="summary-item-meta">
                    {brand} &middot; {size} &middot; Used
                </div>
                <div className="summary-item-actions">
                    <span>Qty: {qty}</span>
                    <a className="summary-item-remove" href="#remove">Remove</a>
                </div>
            </div>
            <div className="summary-item-price">{price}</div>
        </div>
    );
};

export default SummaryItem;
