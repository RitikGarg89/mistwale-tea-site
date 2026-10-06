import React, { useState } from "react";
import Logo from "../Logo/Logo";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#1f3d2b]/10 bg-[#f6f1e7]/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-8 md:flex"
                >
                    <a
                        href="#shop"
                        className="text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:text-[#4f7942]"
                    >
                        Shop
                    </a>

                    <a
                        href="#story"
                        className="text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:text-[#4f7942]"
                    >
                        Our approach
                    </a>

                    <a
                        href="#faq"
                        className="text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:text-[#4f7942]"
                    >
                        FAQ
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-1 sm:gap-2">

                    {/* Search */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full px-3 text-[#1f3d2b] transition-colors duration-200 hover:bg-[#1f3d2b]/10"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0"
                            aria-hidden="true"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="6.5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            />

                            <path
                                d="M16 16L20 20"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>

                        <span className="hidden text-sm font-medium sm:inline">
                            Search
                        </span>
                    </button>

                    {/* Shopping Bag */}
                    <button
                        type="button"
                        aria-label="Shopping bag"
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1f3d2b] transition-colors duration-200 hover:bg-[#1f3d2b]/10"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                d="M5.5 8.5H18.5L17.5 20H6.5L5.5 8.5Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M9 8.5V6.5C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V8.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {/* Login */}
                    <button
                        type="button"
                        aria-label="Login"
                        // onClick={handleLogin}
                        className="inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-[#1f3d2b]/20 text-[#1f3d2b] transition-all duration-200 hover:border-[#1f3d2b] hover:bg-[#1f3d2b] hover:text-[#f6f1e7] sm:w-auto sm:px-4"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 shrink-0"
                            aria-hidden="true"
                        >
                            <circle
                                cx="12"
                                cy="8"
                                r="4"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            />
                            <path
                                d="M5 20C5 16.5 8.134 14 12 14C15.866 14 19 16.5 19 20"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>

                        <span className="hidden text-sm font-medium sm:inline">
                            Login
                        </span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1f3d2b] transition-colors duration-200 hover:bg-[#1f3d2b]/10 md:hidden"
                    >
                        {menuOpen ? (
                            /* X icon */
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            /* Menu icon */
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M4 7H20"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M4 12H20"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M4 17H20"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav
                    aria-label="Mobile navigation"
                    className="border-t border-[#1f3d2b]/10 bg-[#f6f1e7] px-4 py-5 md:hidden"
                >
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-1">

                        <a
                            href="#shop"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:bg-[#ebe2cf] hover:text-[#4f7942]"
                        >
                            Shop
                        </a>

                        <a
                            href="#story"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:bg-[#ebe2cf] hover:text-[#4f7942]"
                        >
                            Our approach
                        </a>

                        <a
                            href="#faq"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-[#1b1b1b] transition-colors duration-200 hover:bg-[#ebe2cf] hover:text-[#4f7942]"
                        >
                            FAQ
                        </a>

                        {/* Mobile Login Button */}
                        <div className="mt-2 border-t border-[#1f3d2b]/10 pt-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false);
                                    // handleLogin();
                                }}
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#1f3d2b]/20 py-2.5 text-sm font-medium text-[#1f3d2b] transition-all duration-200 hover:border-[#1f3d2b] hover:bg-[#1f3d2b] hover:text-[#f6f1e7]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 shrink-0"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="12"
                                        cy="8"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />
                                    <path
                                        d="M5 20C5 16.5 8.134 14 12 14C15.866 14 19 16.5 19 20"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span>Login</span>
                            </button>
                        </div>

                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;