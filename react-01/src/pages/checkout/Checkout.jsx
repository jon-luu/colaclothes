import "./Checkout.css";
import SummaryItem from "../../components/summaryitem/SummaryItem";
import { cartItems } from "../../data/content";

const Checkout = () => {
    return (
        <main className="checkout-page">
            <section className="section--checkout">
                <form className="checkout-main" id="checkout-form" action="#">
                    <div className="checkout-head">
                        <h1 className="checkout-title">Secured Checkout</h1>
                        <p className="checkout-subtitle">Review your gear, confirm your trail-ready details, and get your secondhand finds on their way.</p>
                    </div>

                    {/* Shipping Address */}
                    <fieldset className="checkout-card">
                        <legend className="checkout-card-title">Shipping Address</legend>

                        <div className="form-row">
                            <div className="form-field">
                                <label className="form-label" htmlFor="first-name">First Name</label>
                                <input className="form-input" id="first-name" type="text" placeholder="Avery" autoComplete="given-name" />
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="last-name">Last Name</label>
                                <input className="form-input" id="last-name" type="text" placeholder="Reed" autoComplete="family-name" />
                            </div>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input className="form-input" id="address" type="text" placeholder="1201 Main St, Apt 4B" autoComplete="street-address" />
                        </div>

                        <div className="form-row form-row--three">
                            <div className="form-field">
                                <label className="form-label" htmlFor="city">City</label>
                                <input className="form-input" id="city" type="text" placeholder="Columbia" autoComplete="address-level2" />
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="state">State</label>
                                <input className="form-input" id="state" type="text" placeholder="SC" autoComplete="address-level1" />
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="zip">ZIP Code</label>
                                <input className="form-input" id="zip" type="text" placeholder="29201" inputMode="numeric" autoComplete="postal-code" />
                            </div>
                        </div>
                    </fieldset>

                    {/* Payment Method */}
                    <fieldset className="checkout-card">
                        <legend className="checkout-card-title">Payment Method</legend>

                        <div className="form-field">
                            <label className="form-label" htmlFor="card-name">Cardholder Name</label>
                            <input className="form-input" id="card-name" type="text" placeholder="Avery Reed" autoComplete="cc-name" />
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="card-number">Card Number</label>
                            <input className="form-input" id="card-number" type="text" placeholder="•••• •••• •••• 4242" inputMode="numeric" autoComplete="cc-number" />
                        </div>

                        <div className="form-row">
                            <div className="form-field">
                                <label className="form-label" htmlFor="card-expiry">Expiry Date</label>
                                <input className="form-input" id="card-expiry" type="text" placeholder="12 / 28" autoComplete="cc-exp" />
                            </div>

                            <div className="form-field">
                                <label className="form-label" htmlFor="card-cvv">CVV</label>
                                <input className="form-input" id="card-cvv" type="text" placeholder="•••" inputMode="numeric" autoComplete="cc-csc" />
                            </div>
                        </div>
                    </fieldset>
                </form>

                {/* Order Summary */}
                <aside className="order-summary">
                    <h2 className="summary-title">Order Summary</h2>

                    <div className="summary-items">
                        {cartItems.map((item) => (
                            <SummaryItem key={item.id} {...item} />
                        ))}
                    </div>

                    <div className="promo-form">
                        <label className="visually-hidden" htmlFor="promo-code">Promo code</label>
                        <input className="form-input" id="promo-code" type="text" placeholder="Promo code" />
                        <button className="promo-button" type="button">Apply</button>
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row"><span>Subtotal</span><span>$173.00</span></div>
                        <div className="summary-row"><span>Shipping</span><span>$5.99</span></div>
                        <div className="summary-row"><span>Estimated Tax</span><span>$12.11</span></div>
                        <div className="summary-row summary-row--total"><span>Total</span><span>$191.10</span></div>
                    </div>

                    <button className="place-order-button" type="submit" form="checkout-form">Place Order</button>
                </aside>
            </section>
        </main>
    );
};

export default Checkout;
