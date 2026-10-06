import React from "react";

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

function ProductCard({ product, onAddToCart, onQuickView }) {
    const isSoldOut = product.stock === 0;
    const imageSrc = product.image || FALLBACK_IMAGES[product.id];

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1f3d2b]/10 bg-[#f6f1e7]">

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-[#ebe2cf]">

                <img
                    src={imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                        const fallback = FALLBACK_IMAGES[product.id];
                        if (fallback && e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                        }
                    }}
                />

                {/* Sold Out */}
                {isSoldOut && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#1f3d2b] px-3 py-1.5 text-xs font-semibold text-[#f6f1e7]">
                        Sold out
                    </div>
                )}

                {/* Quick View */}
                <button
                    type="button"
                    onClick={() => onQuickView?.(product)}
                    className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-2 items-center justify-center rounded-full bg-[#f6f1e7]/95 px-5 py-2.5 text-xs font-semibold text-[#1f3d2b] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#ebe2cf]"
                    aria-label={`Quick view ${product.name}`}
                >
                    Quick view
                </button>
            </div>

            {/* Product Information */}
            <div className="flex flex-1 flex-col p-5">

                {/* Category */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f7942]">
                    {product.category}
                </p>

                {/* Name */}
                <h3 className="mt-2 font-['Fraunces'] text-xl font-medium leading-tight text-[#1b1b1b]">
                    {product.name}
                </h3>

                {/* Description */}
                {product.desc && (
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#1b1b1b]/60">
                        {product.desc}
                    </p>
                )}

                {/* Rating */}
                {product.rating && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#1b1b1b]/70">
                        <span
                            className="tracking-wide text-[#d9962b]"
                            aria-label={`${product.rating} out of 5 stars`}
                        >
                            ★★★★★
                        </span>

                        <span>
                            {product.rating}
                            {product.reviews ? ` (${product.reviews})` : ""}
                        </span>
                    </div>
                )}

                {/* Bottom */}
                <div className="mt-auto pt-5">

                    {/* Price and Add to Bag */}
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                        <p className="text-base sm:text-lg font-semibold text-[#1f3d2b]">
                            ₹{product.price.toLocaleString("en-IN")}
                        </p>

                        {/* Add Button */}
                        <button
                            type="button"
                            disabled={isSoldOut}
                            onClick={() => onAddToCart?.(product)}
                            className={`inline-flex min-h-10 sm:min-h-11 items-center justify-center rounded-full px-4 sm:px-5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${isSoldOut
                                ? "cursor-not-allowed bg-[#ebe2cf] text-[#1b1b1b]/40"
                                : "bg-[#1f3d2b] text-[#f6f1e7] hover:bg-[#4f7942]"
                                }`}
                        >
                            {isSoldOut ? "Sold out" : "Add to bag"}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;