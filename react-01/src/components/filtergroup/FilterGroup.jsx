import "./FilterGroup.css";

// a "links" group shows category links, a "checkbox" group shows checkboxes
const FilterGroup = ({ title, type, options }) => {
    return (
        <div className="filter-group">
            <div className="filter-title">{title}</div>

            {type === "links" ? (
                <div className="filter-links">
                    {options.map((option, i) => (
                        <a key={option} className={i === 0 ? "filter-link filter-link--active" : "filter-link"} href="#listings">
                            {option}
                        </a>
                    ))}
                </div>
            ) : (
                options.map((option) => (
                    <label key={option} className="filter-option">
                        <input type="checkbox" name={title} value={option} /> {option}
                    </label>
                ))
            )}
        </div>
    );
};

export default FilterGroup;
