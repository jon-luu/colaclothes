import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// PART 10 FEATURE: React library #1 - React Hot Toast
// the Toaster shows the pop-up messages from the contact form and newsletter signup
import { Toaster } from "react-hot-toast";

// every page shares the header and footer; the page itself shows up in <Outlet />
const Layout = () => {
    const { pathname } = useLocation();

    // start each new page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        fontFamily: '"Geist", Helvetica, Arial, sans-serif',
                        fontSize: "14px",
                        color: "#1c3a0a",
                        background: "#fffdf8",
                        border: "1px solid #ddd5c7",
                    },
                    success: { iconTheme: { primary: "#2d5016", secondary: "#ffffff" } },
                    error: { iconTheme: { primary: "#c4521a", secondary: "#ffffff" } },
                }}
            />
        </>
    );
};

export default Layout;
