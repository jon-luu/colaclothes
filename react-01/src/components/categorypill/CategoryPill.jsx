import "./CategoryPill.css";

const CategoryPill = ({ label, active }) => {
    return (
        <a className={active ? "category-pill category-pill--active" : "category-pill"} href="#listings">
            {label}
        </a>
    );
};

export default CategoryPill;
