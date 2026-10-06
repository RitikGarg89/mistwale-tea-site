import { useEffect } from "react";

const FALLBACK_IMAGES = {
    101: "/images/product-101-assam-breakfast.webp",
    102: "/images/product-102-darjeeling-first-flush.webp",
    103: "/images/product-103-kashmiri-kahwa.webp",
    104: "/images/product-104-masala-chai-blend.webp",
    105: "/images/product-105-nilgiri-green-tea.webp",
    106: "/images/product-106-chamomile-tulsi.webp",
    107: "/images/product-107-hibiscus-rose-infusion.webp",
    108: "/images/product-108-tea-lovers-sampler.webp",
};

function QuickView({ product, onClose, onAddToCart }) {
    useEffect(() => {
        if (!product) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose?.();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [product, onClose]);

    if (!product) return null;

    const isSoldOut = product.stock === 0;
    const imageSrc = product.image || FALLBACK_IMAGES[product.id];

    const handleAddToCart = () => {
        if (isSoldOut) return;

        onAddToCart?.(product);
        onClose?.();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b]/60 p-4"
            role="presentation"
            onMouseDown={onClose}
        >
            <section
                className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-[#f6f1e7] shadow-2xl md:grid-cols-2"
                role="dialog"
                aria-modal="true"
                aria-labelledby="quick-view-title"
                onMouseDown={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close quick view"
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f1e7]/90 text-[#1f3d2b] transition-colors duration-200 hover:bg-[#ebe2cf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9962b]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {/* Product image */}
                <div className="aspect-square bg-[#ebe2cf] md:aspect-auto">
                    <img
                        src={imageSrc}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            const fallback = FALLBACK_IMAGES[product.id];
                            if (fallback && e.currentTarget.src !== fallback) {
                                e.currentTarget.src = fallback;
                            }
                        }}
                    />
                </div>

                {/* Product information */}
                <div className="flex flex-col p-6 sm:p-8 md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4f7942]">
                        Quick view
                    </p>

                    <p className="mt-5 text-sm text-[#1b1b1b]/55">
                        {product.category}
                    </p>

                    <h2
                        id="quick-view-title"
                        className="mt-2 font-['Fraunces'] text-2xl font-medium leading-tight text-[#1f3d2b] sm:text-3xl"
                    >
                        {product.name}
                    </h2>

                    {product.rating && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#1b1b1b]/65">
                            <span aria-label={`${product.rating} out of 5 stars`}>
                                ★★★★★
                            </span>

                            <span>
                                {product.rating} ({product.reviews})
                            </span>
                        </div>
                    )}

                    <p className="mt-5 text-sm leading-6 text-[#1b1b1b]/70">
                        {product.desc}
                    </p>

                    {/* Size */}
                    <div className="mt-6 flex items-center justify-between border-y border-[#1f3d2b]/10 py-4">
                        <span className="text-sm text-[#1b1b1b]/60">
                            Size
                        </span>

                        <span className="text-sm font-medium text-[#1f3d2b]">
                            —
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                        <span className="font-['Fraunces'] text-2xl text-[#1f3d2b]">
                            ₹{product.price.toLocaleString("en-IN")}
                        </span>
                    </div>

                    {/* Add to bag */}
                    <button
                        type="button"
                        disabled={isSoldOut}
                        onClick={handleAddToCart}
                        className="mt-6 min-h-12 w-full rounded-full bg-[#1f3d2b] px-6 text-sm font-semibold text-[#f6f1e7] transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9962b] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isSoldOut ? "Sold out" : "Add to bag"}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default QuickView;