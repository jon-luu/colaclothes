import "./ProductGrid.css";
import { useState } from "react";
import ProductCard from "../productcard/ProductCard";
import ProductSkeleton from "../productskeleton/ProductSkeleton";
import ProductError from "../producterror/ProductError";

// PART 10 FEATURE: React library #2 - Yet Another React Lightbox
// clicking a product photo opens it full screen; arrows / swipe move through the rest of the grid,
// the Captions plugin shows the product info and the Zoom plugin lets you zoom into the photo
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// products come from the server (see hooks/useProducts.js)
// loading -> gray placeholder cards, error -> message with a Try Again button
// quickView={false} turns the lightbox off
const ProductGrid = ({ products, loading = false, error = false, onRetry, skeletonCount = 8, quickView = true }) => {
    // -1 means the lightbox is closed
    const [index, setIndex] = useState(-1);

    // the lightbox wants a list of slides with src / title / description
    const slides = products.map((product) => ({
        src: product.img,
        alt: product.name,
        title: product.name,
        description: `${product.brand} · ${product.price} · ${product.size}${product.condition ? " · " + product.condition : ""}`,
    }));

    if (error) {
        return <ProductError onRetry={onRetry} />;
    }

    if (loading) {
        return (
            <div className="product-grid" aria-busy="true" aria-label="Loading listings">
                {Array.from({ length: skeletonCount }, (_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="product-grid">
                {products.map((product, i) => (
                    <ProductCard key={product.id} {...product} onImageClick={quickView ? () => setIndex(i) : null} />
                ))}
            </div>

            {quickView && (
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Captions, Zoom]}
                    styles={{ root: { "--yarl__color_backdrop": "rgba(20, 32, 10, 0.95)" } }}
                />
            )}
        </>
    );
};

export default ProductGrid;
