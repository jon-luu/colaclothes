import "./PhotoUpload.css";
import { useState, useEffect, useRef } from "react";

// photo picker for the listing form: drag a photo in or browse for one, then see a preview
// photo is a File (or null) kept in ListingForm's state
const PhotoUpload = ({ photo, onChange, error }) => {
    const [preview, setPreview] = useState("");
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);

    // make a temporary URL so the chosen photo can be shown before it's uploaded
    useEffect(() => {
        if (!photo) {
            setPreview("");
            return;
        }
        const url = URL.createObjectURL(photo);
        setPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [photo]);

    // clear the hidden input when the form resets, so the same file can be picked again
    useEffect(() => {
        if (!photo && inputRef.current) inputRef.current.value = "";
    }, [photo]);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files.length) onChange(e.dataTransfer.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const sizeInMB = photo ? (photo.size / (1024 * 1024)).toFixed(1) : 0;

    let boxClass = "upload-box";
    if (dragging) boxClass += " is-dragging";
    if (error) boxClass += " has-error";

    return (
        <div className="photo-upload">
            <div className="upload-head">
                <span className="upload-title" id="item-photo-label">
                    Photo
                </span>
                <p className="upload-desc">A clear, well-lit photo of the front helps your gear sell faster.</p>
            </div>

            {photo ? (
                <div className="upload-preview">
                    <img className="preview-image" src={preview} alt="Preview of your item" />
                    <div className="preview-info">
                        <p className="preview-name">{photo.name}</p>
                        <p className="preview-size">{sizeInMB} MB</p>
                        <div className="preview-actions">
                            <label className="upload-button" htmlFor="item-photo">
                                Replace
                            </label>
                            <button className="preview-remove" type="button" onClick={() => onChange(null)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxClass} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={() => setDragging(false)}>
                    <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 16V4" />
                        <path d="M7 9l5-5 5 5" />
                        <path d="M4 16v4h16v-4" />
                    </svg>
                    <p className="upload-text">Drag your photo here</p>
                    <p className="upload-hint">JPG, PNG, or WebP up to 5MB</p>
                    <label className="upload-button" htmlFor="item-photo">
                        Browse Files
                    </label>
                </div>
            )}

            <input
                className="upload-input"
                id="item-photo"
                ref={inputRef}
                type="file"
                accept="image/jpeg, image/png, image/webp"
                aria-labelledby="item-photo-label"
                aria-describedby={error ? "item-photo-error" : undefined}
                onChange={(e) => onChange(e.target.files[0] || null)}
            />

            {error && (
                <p className="form-error upload-error" id="item-photo-error">
                    {error}
                </p>
            )}
        </div>
    );
};

export default PhotoUpload;
