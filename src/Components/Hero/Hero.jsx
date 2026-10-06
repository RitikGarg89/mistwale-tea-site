import React from "react";

function Hero() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative isolate min-h-[620px] overflow-hidden bg-[#1f3d2b] sm:min-h-[680px] lg:min-h-[720px]">

                {/* Hero Image */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/images/hero-banner.webp"
                        alt="A quiet tea setting on a warm wooden table"
                        className="h-full w-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-[#1f3d2b]/45" />
                </div>

                {/* Hero Content */}
                <div className="mx-auto flex min-h-[620px] max-w-[1200px] items-center px-4 py-20 sm:min-h-[680px] sm:px-6 lg:min-h-[720px] lg:px-8">
                    <div className="max-w-2xl text-[#f6f1e7]">

                        {/* Eyebrow */}
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#f6f1e7]/80">
                            Mistvale Tea Co.
                        </p>

                        {/* Heading */}
                        <h1 className="font-['Fraunces'] text-5xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                            Hill-grown tea,
                            <br />
                            <em className="font-normal">
                                honestly made.
                            </em>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-lg text-base leading-7 text-[#f6f1e7]/85 sm:text-lg">
                            A quieter cup, shaped by the hills and made for unhurried
                            everyday rituals.
                        </p>

                        {/* CTA */}
                        <a
                            href="#shop"
                            className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#f6f1e7] px-6 py-3 text-sm font-semibold text-[#1f3d2b] transition-all duration-200 hover:bg-[#ebe2cf] hover:gap-4"
                        >
                            <span>Shop the teas</span>

                            {/* Arrow SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12H19"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13 6L19 12L13 18"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Photo Credit */}
                <p className="absolute bottom-4 right-4 text-[10px] text-[#f6f1e7]/70 sm:bottom-6 sm:right-6">
                    Photo: Annie Spratt / Unsplash
                </p>
            </section>

            {/* ================= TRUST STRIP ================= */}
            <section
                aria-label="Our promises"
                className="border-b border-[#1f3d2b]/10 bg-[#f6f1e7]"
            >
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-[#1f3d2b]/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">

                    {/* Hill-grown */}
                    <div className="flex items-center gap-4 py-6 md:px-6 md:py-7 md:first:pl-0">

                        {/* Leaf SVG */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#4f7942]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path
                                    d="M20 4C11 4.5 5 8.5 5 14.5C5 18 7.5 20 10.5 20C16 20 20 13.5 20 4Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M5 20C8 15 11.5 11.5 17 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <span className="flex flex-col">
                            <b className="text-sm font-semibold text-[#1b1b1b]">
                                Hill-grown
                            </b>

                            <small className="mt-1 text-xs text-[#1b1b1b]/60">
                                Rooted in place
                            </small>
                        </span>
                    </div>

                    {/* Honestly made */}
                    <div className="flex items-center gap-4 py-6 md:px-6 md:py-7">

                        {/* Shield SVG */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#4f7942]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3L19 6V11.5C19 16 16.2 19.2 12 21C7.8 19.2 5 16 5 11.5V6L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M8.5 12L10.8 14.3L15.5 9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <span className="flex flex-col">
                            <b className="text-sm font-semibold text-[#1b1b1b]">
                                Honestly made
                            </b>

                            <small className="mt-1 text-xs text-[#1b1b1b]/60">
                                A thoughtful approach
                            </small>
                        </span>
                    </div>

                    {/* Delivery */}
                    <div className="flex items-center gap-4 py-6 md:px-6 md:py-7 md:last:pr-0">

                        {/* Truck SVG */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#4f7942]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 6H14V17H3V6Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M14 10H18L21 13V17H14V10Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <circle
                                    cx="7"
                                    cy="18"
                                    r="2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />

                                <circle
                                    cx="17"
                                    cy="18"
                                    r="2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>

                        <span className="flex flex-col">
                            <b className="text-sm font-semibold text-[#1b1b1b]">
                                Delivery check
                            </b>

                            <small className="mt-1 text-xs text-[#1b1b1b]/60">
                                Before you order
                            </small>
                        </span>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Hero;