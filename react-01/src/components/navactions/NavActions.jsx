import "./NavActions.css";
import SearchBox from "../searchbox/SearchBox";
import CartButton from "../cartbutton/CartButton";

const NavActions = () => {
    return (
        <div className="nav-actions">
            <SearchBox />
            <CartButton count={2} />
        </div>
    );
};

export default NavActions;
