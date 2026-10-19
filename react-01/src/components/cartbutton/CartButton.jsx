import "./CartButton.css";
import cartIcon from "../../images/icon-cart.png";

const CartButton = ({ count }) => {
    return (
        <a className="cart-button" href="#cart" aria-label={`Cart, ${count} items`}>
            <img src={cartIcon} alt="" />
            <span className="cart-count">{count}</span>
        </a>
    );
};

export default CartButton;
