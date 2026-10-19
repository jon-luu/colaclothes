import "./SearchBox.css";
import searchIcon from "../../images/icon-search.png";

const SearchBox = () => {
    return (
        <label className="search-box">
            <img src={searchIcon} alt="" />
            <input type="search" placeholder="Search gear..." aria-label="Search gear" />
        </label>
    );
};

export default SearchBox;
