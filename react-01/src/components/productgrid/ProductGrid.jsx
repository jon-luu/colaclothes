import "./ProductGrid.css";
import { useState } from "react";
import ProductCard from "../productcard/ProductCard";
import ProductSkeleton from "../productskeleton/ProductSkeleton";
import ProductError from "../producterror/ProductError";
import ProductModal from "../productmodal/ProductModal";

// PART 10 FEATURE: React library #2 - Yet Another React Lightbox
// "Zoom" in the details modal opens the photo full screen; arrows / swipe move through the rest of the grid,
// the Captions plugin shows the product info and the Zoom plugin lets you zoom into the photo
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// products come from the server (see hooks/useProducts.js)
// loading -> gray placeholder cards, error -> message with a Try Again button
// PART 13: clicking a card opens the ProductModal with that product's details
const ProductGrid = ({ products, loading = false, error = false, onRetry, skeletonCount = 8 }) => {
    // the product shown in the details modal (null = closed)
    const [selected, setSelected] = useState(null);
    // which photo the lightbox shows (-1 = closed)
    const [zoomIndex, setZoomIndex] = useState(-1);

    // the lightbox wants a list of slides with src / title / description
    const slides = products.map((product) => ({
        src: product.img,
        alt: product.name,
        title: product.name,
        description: `${product.brand} · ${product.price} · ${product.size}${product.condition ? " · " + product.condition : ""}`,
    }));

    // the modal sits above everything on the page, so it steps aside while the lightbox is open
    const openZoom = () => {
        setZoomIndex(products.indexOf(selected));
        setSelected(null);
    };

    // closing the lightbox brings back the details for whichever photo you ended on
    const closeZoom = () => {
        setSelected(products[zoomIndex] || null);
        setZoomIndex(-1);
    };

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
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} onSelect={() => setSelected(product)} />
                ))}
            </div>

            <ProductModal product={selected} onClose={() => setSelected(null)} onZoom={openZoom} />

            <Lightbox
                open={zoomIndex >= 0}
                index={zoomIndex}
                close={closeZoom}
                on={{ view: ({ index }) => setZoomIndex(index) }}
                slides={slides}
                plugins={[Captions, Zoom]}
                styles={{ root: { "--yarl__color_backdrop": "rgba(20, 32, 10, 0.95)" } }}
            />
        </>
    );
};

export default ProductGrid;
