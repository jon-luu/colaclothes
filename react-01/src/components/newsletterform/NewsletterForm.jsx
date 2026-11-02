import "./NewsletterForm.css";
import { useState } from "react";
import toast from "react-hot-toast";

// newsletter signup on the home page - shows a toast instead of reloading the page
const NewsletterForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Thanks! ${email} is on the list for new gear drops.`);
        setEmail("");
    };

    return (
        <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
                <input
                    className="newsletter-input"
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button className="newsletter-button" type="submit">Subscribe</button>
        </form>
    );
};

export default NewsletterForm;
