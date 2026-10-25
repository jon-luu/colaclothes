import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ShopAll from "./pages/shopall/ShopAll";
import Apparel from "./pages/apparel/Apparel";
import Gear from "./pages/gear/Gear";
import Sell from "./pages/sell/Sell";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
    return (
        // basename makes the routes work under jon-luu.github.io/colaclothes
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<ShopAll />} />
                    <Route path="apparel" element={<Apparel />} />
                    <Route path="gear" element={<Gear />} />
                    <Route path="sell" element={<Sell />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
