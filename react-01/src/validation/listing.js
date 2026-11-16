// PART 13: client side validation for the Sell page listing form.
// These rules and messages match the Joi schema on the server (colaclothes-server/app.js),
// so the user sees the same message whether the browser or the server catches the problem.

export const conditions = ["Like New", "Excellent", "Very Good", "Good", "Worn In"];
export const categories = [
    { value: "apparel", label: "Apparel" },
    { value: "gear", label: "Gear & Equipment" },
];

const photoTypes = ["image/jpeg", "image/png", "image/webp"];
const maxPhotoSize = 5 * 1024 * 1024; // 5MB

// Joi .trim().min().max()
const lengthBetween = (value, min, max) => {
    const length = value.trim().length;
    return length >= min && length <= max;
};

// returns { fieldName: "message" } for every field that has a problem (empty object = valid)
export const validateListing = (values, photo) => {
    const errors = {};

    // checked in the same order as the form, so the first problem gets focus
    // photo: the server's multer settings (required, JPG/PNG/WebP, 5MB max)
    if (!photo) {
        errors.photo = "Add a photo of your item";
    } else if (!photoTypes.includes(photo.type)) {
        errors.photo = "Photo must be a JPG, PNG, or WebP image";
    } else if (photo.size > maxPhotoSize) {
        errors.photo = "Photo must be 5MB or smaller";
    }

    // name: Joi.string().trim().min(3).max(80).required()
    if (!lengthBetween(values.name, 3, 80)) {
        errors.name = "Item title must be 3 to 80 characters";
    }

    // brand: Joi.string().trim().min(2).max(40).required()
    if (!lengthBetween(values.brand, 2, 40)) {
        errors.brand = "Brand must be 2 to 40 characters";
    }

    // price: Joi.number().min(1).max(5000).required()
    const price = Number(values.price);
    if (values.price === "" || Number.isNaN(price) || price < 1 || price > 5000) {
        errors.price = "Price must be between $1 and $5,000";
    }

    // size: Joi.string().trim().min(1).max(20).required()
    if (!lengthBetween(values.size, 1, 20)) {
        errors.size = "Size is required (20 characters max)";
    }

    // condition: Joi.string().valid(...conditions).required()
    if (!conditions.includes(values.condition)) {
        errors.condition = "Pick a condition";
    }

    // category: Joi.string().valid("apparel", "gear").required()
    if (!categories.some((category) => category.value === values.category)) {
        errors.category = "Pick a category";
    }

    // description: Joi.string().trim().allow("").max(500)
    if (values.description.trim().length > 500) {
        errors.description = "Description must be 500 characters or less";
    }

    return errors;
};
