import Logo from "../Logo/Logo.jsx";

function Footer() {
    return (
        <footer className="bg-[#172d20] text-[#f6f1e7]">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main footer */}
                <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-16 md:py-16">
                    {/* Brand */}
                    <div>
                        <Logo variant="dark" />

                        <p className="mt-5 max-w-xs text-sm leading-6 text-[#f6f1e7]/70">
                            Hill-grown tea, honestly made.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-[#f6f1e7]/60">
                            Founded in 2019.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="mb-5 font-['Fraunces'] text-xl text-[#f6f1e7]">
                            Company & contact
                        </h2>

                        <address className="not-italic text-sm leading-7 text-[#f6f1e7]/70">
                            <p>
                                14 Hill Cart Road,
                                <br />
                                Siliguri, West Bengal 734001,
                                <br />
                                India
                            </p>

                            <p className="mt-4">
                                <a
                                    href="tel:+919000012345"
                                    className="transition-opacity duration-200 hover:opacity-100"
                                >
                                    +91 90000 12345
                                </a>
                            </p>

                            <p>
                                <a
                                    href="mailto:hello@mistvale.example"
                                    className="transition-opacity duration-200 hover:opacity-100"
                                >
                                    hello@mistvale.example
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Links */}
                    <div>
                        <h2 className="mb-5 font-['Fraunces'] text-xl text-[#f6f1e7]">
                            Explore
                        </h2>

                        <nav aria-label="Footer navigation">
                            <ul className="space-y-3 text-sm text-[#f6f1e7]/70">
                                <li>
                                    <a
                                        href="#shop"
                                        className="transition-colors duration-200 hover:text-[#f6f1e7]"
                                    >
                                        Shop the teas
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#faq"
                                        className="transition-colors duration-200 hover:text-[#f6f1e7]"
                                    >
                                        Frequently asked questions
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://instagram.com/mistvale.example"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-colors duration-200 hover:text-[#f6f1e7]"
                                    >
                                        Instagram
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://mistvale.example"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-colors duration-200 hover:text-[#f6f1e7]"
                                    >
                                        Website
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-3 border-t border-[#f6f1e7]/15 py-6 text-sm text-[#f6f1e7]/55 sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2019–2026 Mistvale Tea Co.</span>

                    <span>India</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;