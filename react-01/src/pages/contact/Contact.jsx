import "./Contact.css";
import { useState } from "react";
import toast from "react-hot-toast";

// PART 10 FEATURE: Working contact form
// sends the message to my email through Web3Forms with fetch - the user never leaves the page.
// React Hot Toast shows "Sending..." and then a success / error toast.
const ACCESS_KEY = "641b88fe-aec2-4ac7-afad-c4712655ec0a";

const Contact = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        formData.append("access_key", ACCESS_KEY);
        formData.append("from_name", "Cola Clothes Contact Form");
        const json = JSON.stringify(Object.fromEntries(formData));

        setSending(true);
        const loadingToast = toast.loading("Sending your message...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            if (response.status === 200) {
                toast.success("Message sent! We'll get back to you soon.", { id: loadingToast });
                form.reset();
                setSent(true);
            } else {
                toast.error("Sorry, something went wrong. Please try again.", { id: loadingToast });
            }
        } catch (error) {
            console.log(error);
            toast.error("Sorry, something went wrong. Please try again.", { id: loadingToast });
        }

        setSending(false);
    };

    // one error toast when the browser finds an empty / bad field
    const handleInvalid = () => {
        toast.error("Please fill out every field with a valid email.", { id: "invalid-form" });
    };

    return (
        <main className="contact-page">
            <section className="section--contact">
                <div className="section-intro">
                    <h1 className="section-title">Contact Us</h1>
                    <p className="section-subtitle">Questions about a listing, selling your gear, or a local meetup? Send us a message and we'll get back to you.</p>
                </div>

                <div className="contact-layout">
                    {sent ? (
                        <div className="contact-form contact-success" role="status">
                            <span className="success-check" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                                </svg>
                            </span>
                            <h2 className="success-title">Thanks for reaching out!</h2>
                            <p className="success-desc">Your message is on its way to the Cola Clothes team. We usually reply within one business day.</p>
                            <button className="contact-button" type="button" onClick={() => setSent(false)}>
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
                            <div className="form-row">
                                <div className="form-field">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input className="form-input" type="text" id="name" name="name" placeholder="Your name" required />
                                </div>

                                <div className="form-field">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input className="form-input" type="email" id="email" name="email" placeholder="you@example.com" required />
                                </div>
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input className="form-input" type="text" id="subject" name="subject" placeholder="What's this about?" required />
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea className="form-input" id="message" name="message" rows="6" placeholder="Write your message..." minLength="10" required></textarea>
                            </div>

                            <button className="contact-button" type="submit" disabled={sending}>
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}

                    {/* PART 10 FEATURE: IFrame - embedded Google Map of the shop */}
                    <div className="contact-map">
                        <h2 className="map-title">Visit the Shop</h2>
                        <p className="map-desc">Main Street, Columbia, South Carolina</p>
                        <iframe
                            className="map-frame"
                            src="https://maps.google.com/maps?q=Main%20Street%2C%20Columbia%2C%20SC&z=15&output=embed"
                            title="Map of Cola Clothes in Columbia, SC"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
