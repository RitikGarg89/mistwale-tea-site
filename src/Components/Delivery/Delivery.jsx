import { useState } from "react";

function Delivery() {
    const [pin, setPin] = useState("");
    const [pinState, setPinState] = useState("idle");
    const [message, setMessage] = useState("");

    const checkPin = async (e) => {
        e.preventDefault();

        if (!/^[1-9][0-9]{5}$/.test(pin)) {
            setPinState("error");
            setMessage("Enter a valid 6-digit pincode.");
            return;
        }

        setPinState("loading");
        setMessage("");

        // Temporary local delivery check
        // Replace this with your API later.
        setTimeout(() => {
            setPinState("success");
            setMessage(
                "Pincode verified. Delivery timing will be confirmed at checkout."
            );
        }, 500);
    };

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto grid max-w-[1000px] overflow-hidden rounded-3xl bg-[#ebe2cf] md:grid-cols-2">
                {/* Artwork */}
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#1f3d2b] sm:min-h-[360px] md:min-h-full">
                    {/* Background Watermark MV */}
                    <span
                        className="select-none font-['Fraunces'] text-[140px] font-normal leading-none tracking-tight text-[#f6f1e7]/[0.08] sm:text-[170px] md:text-[200px]"
                        aria-hidden="true"
                    >
                        MV
                    </span>

                    {/* Centered Brand Leaf Icon */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-12 w-12 text-[#ebe2cf] sm:h-14 sm:w-14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M20 4C11 4.5 5 8.5 5 14.5C5 18 7.5 20 10.5 20C16 20 20 13.5 20 4Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M5 20C8 15 11.5 11.5 17 8"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9 md:p-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f7942]">
                        From the hills to your home
                    </p>

                    <h2 className="font-['Fraunces'] text-3xl font-medium leading-tight text-[#1f3d2b] md:text-4xl">
                        Check delivery to your pincode
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-[#1b1b1b]/65">
                        Enter your 6-digit pincode to check service availability before
                        you shop.
                    </p>

                    <form
                        onSubmit={checkPin}
                        noValidate
                        className="mt-7"
                    >
                        <label
                            htmlFor="pincode"
                            className="mb-2 block text-sm font-medium text-[#1b1b1b]"
                        >
                            Delivery pincode
                        </label>

                        <div
                            className={`flex flex-col gap-2 sm:flex-row ${pinState === "error"
                                ? "rounded-2xl ring-1 ring-[#b3261e]"
                                : ""
                                }`}
                        >
                            <input
                                id="pincode"
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                value={pin}
                                onChange={(e) => {
                                    setPin(e.target.value.replace(/\D/g, ""));
                                    setPinState("idle");
                                    setMessage("");
                                }}
                                placeholder="e.g. 400001"
                                className="min-h-12 w-full rounded-full border border-[#1f3d2b]/20 bg-[#f6f1e7] px-5 text-sm text-[#1b1b1b] outline-none transition-colors duration-200 placeholder:text-[#1b1b1b]/40 focus:border-[#1f3d2b]"
                            />

                            <button
                                type="submit"
                                disabled={pinState === "loading"}
                                className="min-h-12 shrink-0 rounded-full bg-[#1f3d2b] px-7 text-sm font-medium text-[#f6f1e7] transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {pinState === "loading" ? "Checking…" : "Check"}
                            </button>
                        </div>

                        {/* Status message */}
                        <p
                            className={`mt-3 min-h-5 text-sm ${pinState === "error"
                                ? "text-[#b3261e]"
                                : pinState === "success"
                                    ? "text-[#4f7942]"
                                    : "text-transparent"
                                }`}
                            aria-live="polite"
                        >
                            {message}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Delivery;