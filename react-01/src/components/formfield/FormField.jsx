import "./FormField.css";

// label + input + error message for one field of the listing form
// the input itself is passed in as children so this works for inputs, selects, and textareas
const FormField = ({ id, label, error, hint, children }) => {
    return (
        <div className={error ? "form-field has-error" : "form-field"}>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            {children}
            {error ? (
                <p className="form-error" id={`${id}-error`}>
                    {error}
                </p>
            ) : (
                hint && <p className="form-hint">{hint}</p>
            )}
        </div>
    );
};

export default FormField;
