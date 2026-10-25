import "./CartButton.css";
import { Link } from "react-router-dom";
import cartIcon from "../../images/icon-cart.png";

const CartButton = ({ count }) => {
    return (
        <Link className="cart-button" to="/checkout" aria-label={`Cart, ${count} items`}>
            <img src={cartIcon} alt="" />
            <span className="cart-count">{count}</span>
        </Link>
    );
};

export default CartButton;
