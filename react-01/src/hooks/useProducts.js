import { useState, useEffect } from "react";
import { API_URL } from "../api";

// turn a product from the server into what ProductCard shows
export const formatProduct = (product) => ({
    ...product,
    id: product._id,
    price: `$${Number(product.price).toFixed(2)}`,
    priceValue: Number(product.price),
    img: `${API_URL}/${product.img}`,
});

// pulls the product list from the server on Render
// query is added to the end of the request, e.g. "?category=gear" or "?featured=true"
const useProducts = (query = "") => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        // ignore the answer if the page changed before it came back
        let ignore = false;

        const loadProducts = async () => {
            setLoading(true);
            setError(false);

            try {
                const response = await fetch(`${API_URL}/api/products${query}`);
                if (!response.ok) throw new Error(`Server responded ${response.status}`);
                const data = await response.json();

                if (!ignore) setProducts(data.map(formatProduct));
            } catch (err) {
                console.log(err);
                if (!ignore) setError(true);
            }

            if (!ignore) setLoading(false);
        };

        loadProducts();

        return () => {
            ignore = true;
        };
    }, [query, attempt]);

    // "Try Again" button runs the request again
    const retry = () => setAttempt(attempt + 1);

    // PART 13: the POST request sends back the new product - adding it to state
    // makes every list using these products update right away, no reload needed
    const addProduct = (product) => {
        setProducts((current) => [...current, formatProduct(product)]);
    };

    return { products, loading, error, retry, addProduct };
};

export default useProducts;
