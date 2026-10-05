import React from 'react'

function Logo({ variant = "light" }) {
    const logoColor = variant === "dark" ? "text-[#f6f1e7]" : "text-[#1f3d2b]";
    return (
        <a
            href="#top"
            aria-label="Mistvale Tea Co. home"
            className={`group inline-flex items-center gap-3 ${logoColor}`}
        >
            {/* Logo Mark */}
            <svg
                viewBox="0 0 52 52"
                className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <circle
                    cx="26"
                    cy="26"
                    r="23"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />

                <path
                    d="M35.5 14.5C25.5 15.2 18 20.5 17.5 28.5C17.2 33.8 20.8 37.5 25.8 37C34 36.2 38.5 27.3 35.5 14.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M18 37C21.8 30.5 27 25.2 33.5 21"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />

                <path
                    d="M18 37L15.5 40"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
            </svg>

            {/* Wordmark */}
            <span className="leading-none">
                <span className="block font-['Fraunces'] text-[23px] font-medium tracking-[-0.025em]">
                    Mistvale
                </span>

                <span className="mt-1 block font-['Inter'] text-[8px] font-semibold tracking-[0.28em]">
                    TEA CO.
                </span>
            </span>
        </a>
    );
};

export default Logo