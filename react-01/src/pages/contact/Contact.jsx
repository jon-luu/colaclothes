import "./Contact.css";

const Contact = () => {
    return (
        <main className="contact-page">
            <section className="section--contact">
                <div className="section-intro">
                    <h1 className="section-title">Contact Us</h1>
                    <p className="section-subtitle">Questions about a listing, selling your gear, or a local meetup? Send us a message and we'll get back to you.</p>
                </div>

                <div className="contact-layout">
                    {/* form layout only for now, sending gets added later */}
                    <form className="contact-form">
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

                        <button className="contact-button" type="submit">Send Message</button>
                    </form>

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
