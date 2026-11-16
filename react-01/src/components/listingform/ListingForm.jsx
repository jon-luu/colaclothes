import "./ListingForm.css";
import { useState } from "react";
import { API_URL } from "../../api";
import { validateListing, conditions, categories } from "../../validation/listing";
import FormField from "../formfield/FormField";
import PhotoUpload from "../photoupload/PhotoUpload";

const emptyListing = {
    name: "",
    brand: "",
    price: "",
    size: "",
    condition: "",
    category: "",
    description: "",
};

// PART 13: form that POSTs a new listing (with its photo) to the server.
// onAdded gets the product the server sends back, so the page's list can update right away.
const ListingForm = ({ onAdded }) => {
    const [values, setValues] = useState(emptyListing);
    const [photo, setPhoto] = useState(null);
    // fields the user has left at least once, so errors don't show while they're still typing the first time
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    // tells the user whether the listing was added: { type: "success" | "error", message }
    const [status, setStatus] = useState(null);

    const errors = validateListing(values, photo);
    const showError = (field) => ((touched[field] || submitted) && errors[field]) || "";

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const handlePhoto = (file) => {
        setPhoto(file);
        setTouched({ ...touched, photo: true });
    };

    // aria props that connect an input to its error message for screen readers
    const errorProps = (field) => ({
        "aria-invalid": Boolean(showError(field)),
        "aria-describedby": showError(field) ? `item-${field}-error` : undefined,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setStatus(null);

        // stop here if the browser-side check finds a problem, and jump to the first one
        const problems = Object.keys(errors);
        if (problems.length) {
            const first = document.getElementById(`item-${problems[0]}`);
            if (first) first.focus();
            setStatus({ type: "error", message: `Fix the ${problems.length === 1 ? "highlighted field" : `${problems.length} highlighted fields`} and try again.` });
            return;
        }

        // multer on the server reads the photo from form data under the name "img"
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => formData.append(key, value.trim()));
        formData.append("img", photo);

        setSending(true);

        try {
            const response = await fetch(`${API_URL}/api/products`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                // Joi / multer message from the server, e.g. "Price must be between $1 and $5,000"
                const message = await response.text();
                setStatus({ type: "error", message: message || "The server couldn't add your listing. Try again." });
            } else {
                const product = await response.json();
                onAdded(product);
                setStatus({ type: "success", message: `${product.name} is listed! It's now at the top of Latest Listings.` });

                // clear the form for the next item
                setValues(emptyListing);
                setPhoto(null);
                setTouched({});
                setSubmitted(false);
            }
        } catch (err) {
            console.log(err);
            setStatus({ type: "error", message: "Couldn't reach the server. Check your connection and try again." });
        }

        setSending(false);
    };

    const descriptionLength = values.description.trim().length;

    return (
        <form className="listing-form" onSubmit={handleSubmit} noValidate>
            <div className="form-head">
                <h2 className="form-title">Draft Your Listing</h2>
                <p className="form-desc">Your gear goes live in the shop as soon as you list it.</p>
            </div>

            {status && (
                <div className={`form-status form-status--${status.type}`} role={status.type === "error" ? "alert" : "status"}>
                    <span className="status-icon" aria-hidden="true">
                        {status.type === "success" ? "✓" : "!"}
                    </span>
                    <p className="status-message">{status.message}</p>
                    {status.type === "success" && (
                        <a className="status-link" href="#latest-listings">
                            See it
                        </a>
                    )}
                </div>
            )}

            <PhotoUpload photo={photo} onChange={handlePhoto} error={showError("photo")} />

            <FormField id="item-name" label="Item Title" error={showError("name")}>
                <input
                    className="form-input"
                    id="item-name"
                    name="name"
                    type="text"
                    placeholder="e.g., Patagonia Tres 3-in-1 Parka"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...errorProps("name")}
                />
            </FormField>

            <div className="form-row">
                <FormField id="item-brand" label="Brand" error={showError("brand")}>
                    <input
                        className="form-input"
                        id="item-brand"
                        name="brand"
                        type="text"
                        placeholder="e.g., Patagonia"
                        value={values.brand}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...errorProps("brand")}
                    />
                </FormField>

                <FormField id="item-price" label="Price (USD)" error={showError("price")}>
                    <div className="price-input-wrap">
                        <span className="price-symbol">$</span>
                        <input
                            className="form-input"
                            id="item-price"
                            name="price"
                            type="number"
                            min="1"
                            max="5000"
                            step="0.01"
                            placeholder="65.00"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            {...errorProps("price")}
                        />
                    </div>
                </FormField>
            </div>

            <div className="form-row form-row--3">
                <FormField id="item-category" label="Category" error={showError("category")}>
                    <select className="form-select" id="item-category" name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} {...errorProps("category")}>
                        <option value="">Choose one</option>
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </FormField>

                <FormField id="item-condition" label="Condition" error={showError("condition")}>
                    <select className="form-select" id="item-condition" name="condition" value={values.condition} onChange={handleChange} onBlur={handleBlur} {...errorProps("condition")}>
                        <option value="">Choose one</option>
                        {conditions.map((condition) => (
                            <option key={condition} value={condition}>
                                {condition}
                            </option>
                        ))}
                    </select>
                </FormField>

                <FormField id="item-size" label="Size" error={showError("size")}>
                    <input
                        className="form-input"
                        id="item-size"
                        name="size"
                        type="text"
                        placeholder="e.g., Size M, 65L"
                        value={values.size}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...errorProps("size")}
                    />
                </FormField>
            </div>

            <FormField id="item-description" label="Description (optional)" error={showError("description")} hint={`${descriptionLength}/500 characters`}>
                <textarea
                    className="form-textarea"
                    id="item-description"
                    name="description"
                    placeholder="Mention fit, materials, any flaws, and what's included..."
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...errorProps("description")}
                ></textarea>
            </FormField>

            <button className="form-submit" type="submit" disabled={sending}>
                {sending ? "Listing your gear..." : "List Item"}
            </button>
        </form>
    );
};

export default ListingForm;
