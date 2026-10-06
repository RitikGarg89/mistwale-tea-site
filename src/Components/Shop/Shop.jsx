import { useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const PRODUCTS = [
    { id: 101, name: "Assam Breakfast Black Tea", category: "Black", price: 349, stock: 40, image: "/images/product-101-assam-breakfast.webp", desc: "Strong, malty CTC tea from Upper Assam estates. Perfect with milk and a little sugar in the morning." },
    { id: 102, name: "Darjeeling First Flush", category: "Black", price: 1299, stock: 12, image: "/images/product-102-darjeeling-first-flush.webp", desc: "Delicate, floral spring harvest leaves with a muscatel note. Best without milk.", rating: 4.8, reviews: 128 },
    { id: 103, name: "Kashmiri Kahwa", category: "Green", price: 549, stock: 25, image: "/images/product-103-kashmiri-kahwa.webp", desc: "Green tea with saffron, cardamom, cinnamon and almond flakes." },
    { id: 104, name: "Masala Chai Blend", category: "Black", price: 399, stock: 60, image: "/images/product-104-masala-chai-blend.webp", desc: "Bold Assam leaves with ginger, cardamom, clove and black pepper. Our bestseller.", rating: 4.7, reviews: 342 },
    { id: 105, name: "Nilgiri Green Tea", category: "Green", price: 449, stock: 30, image: "/images/product-105-nilgiri-green-tea.webp", desc: "Smooth, grassy green tea from the Blue Mountains of the south." },
    { id: 106, name: "Chamomile & Tulsi", category: "Herbal", price: 499, stock: 18, image: "/images/product-106-chamomile-tulsi.webp", desc: "Caffeine-free calming blend of chamomile flowers and holy basil." },
    { id: 107, name: "Hibiscus Rose Infusion", category: "Herbal", price: 599, stock: 0, image: "/images/product-107-hibiscus-rose-infusion.webp", desc: "Tangy hibiscus with rose petals. Lovely iced." },
    { id: 108, name: "Tea Lover's Sampler Gift Box", category: "Gifts", price: 1899, stock: 9, image: "/images/product-108-tea-lovers-sampler.webp", desc: "Six of our favourite teas in a wooden gift box with a brewing guide." }
];

const categories = ["All teas", "Black", "Green", "Herbal", "Gifts"];

function Shop({ onQuickView, onAdd }) {
    const [category, setCategory] = useState("All teas");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("featured");

    const filteredProducts = useMemo(() => {
        let result = [...PRODUCTS];

        // Search
        if (search.trim()) {
            const query = search.toLowerCase();

            result = result.filter(
                (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.desc.toLowerCase().includes(query)
            );
        }

        // Category
        if (category !== "All teas") {
            result = result.filter(
                (product) => product.category === category
            );
        }

        // Sort (Sold-out items always appear last in all sorts)
        if (sort === "price-low") {
            result.sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (b.stock === 0 && a.stock > 0) return -1;
                return a.price - b.price;
            });
        } else if (sort === "price-high") {
            result.sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (b.stock === 0 && a.stock > 0) return -1;
                return b.price - a.price;
            });
        } else if (sort === "name-asc" || sort === "name") {
            result.sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (b.stock === 0 && a.stock > 0) return -1;
                return a.name.localeCompare(b.name);
            });
        } else if (sort === "name-desc") {
            result.sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (b.stock === 0 && a.stock > 0) return -1;
                return b.name.localeCompare(a.name);
            });
        } else {
            result.sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (b.stock === 0 && a.stock > 0) return -1;
                return 0;
            });
        }

        return result;
    }, [search, category, sort]);

    return (
        <section className="py-16 md:py-20" id="shop">
            {/* Section heading */}
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f7942]">
                            The collection
                        </p>

                        <h2 className="font-['Fraunces'] text-3xl font-medium tracking-tight text-[#1f3d2b] md:text-4xl">
                            Find your daily ritual
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-[#1b1b1b]/65 md:text-right">
                        Explore the collection by tea type, then find the cup that suits
                        your pace.
                    </p>
                </div>

                {/* Tools */}
                <div className="mt-8 flex flex-col gap-4">
                    {/* Search */}
                    <label className="flex min-h-12 items-center gap-3 rounded-full border border-[#1f3d2b]/15 bg-[#f6f1e7] px-4">
                        <span className="sr-only">Search teas</span>

                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 shrink-0 text-[#1f3d2b]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="6.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            />
                            <path
                                d="M16 16L20 20"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                            />
                        </svg>

                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search teas"
                            className="w-full bg-transparent text-sm text-[#1b1b1b] outline-none placeholder:text-[#1b1b1b]/45"
                        />
                    </label>

                    {/* Filters + Sort */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Category filters */}
                        <div
                            className="flex gap-2 overflow-x-auto pb-1"
                            aria-label="Filter teas"
                        >
                            {categories.map((item) => {
                                const active = category === item;

                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setCategory(item)}
                                        className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${active
                                            ? "border-[#1f3d2b] bg-[#1f3d2b] text-[#f6f1e7]"
                                            : "border-[#1f3d2b]/20 bg-transparent text-[#1f3d2b] hover:bg-[#1f3d2b]/5"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sort */}
                        <label className="flex shrink-0 items-center gap-2 text-sm text-[#1b1b1b]/65">
                            <span>Sort by</span>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                aria-label="Sort products"
                                className="min-h-11 rounded-full border border-[#1f3d2b]/20 bg-transparent px-4 text-sm font-medium text-[#1f3d2b] outline-none"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name-asc">Name: A–Z</option>
                                <option value="name-desc">Name: Z–A</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* Product count */}
                <div className="mt-8 flex items-center justify-between border-b border-[#1f3d2b]/10 pb-4">
                    <p className="text-sm text-[#1b1b1b]/55">
                        {filteredProducts.length}{" "}
                        {filteredProducts.length === 1 ? "tea" : "teas"}
                    </p>

                    {(search || category !== "All teas") && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setCategory("All teas");
                            }}
                            className="text-sm font-medium text-[#1f3d2b] underline underline-offset-4"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Products */}
                {filteredProducts.length > 0 ? (
                    <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onQuickView={onQuickView}
                                onAddToCart={onAdd}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="font-['Fraunces'] text-2xl text-[#1f3d2b]">
                            No teas found
                        </p>

                        <p className="mt-2 text-sm text-[#1b1b1b]/60">
                            Try another search or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setCategory("All teas");
                            }}
                            className="mt-5 min-h-11 rounded-full bg-[#1f3d2b] px-6 text-sm font-medium text-[#f6f1e7]"
                        >
                            View all teas
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Shop;