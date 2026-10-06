import { useState } from "react";

function NewsPaper() {
    const [email, setEmail] = useState("");
    const [emailState, setEmailState] = useState("idle");

    const subscribe = (e) => {
        e.preventDefault();

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            setEmailState("error");
            return;
        }

        setEmailState("success");
    };

    return (
        <section className="bg-[#1f3d2b] px-4 py-14 text-[#f6f1e7] sm:py-16 md:py-20">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
                {/* Content */}
                <div className="max-w-xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d9962b]">
                        Letters from Mistvale
                    </p>

                    <h2 className="font-['Fraunces'] text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                        Tea notes, sent slowly.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-[#f6f1e7]/70 sm:text-base">
                        Join for occasional notes from the garden and updates from the
                        collection.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={subscribe}
                    noValidate
                    className="w-full max-w-lg"
                >
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#f6f1e7]"
                    >
                        Email address
                    </label>

                    <div
                        className={`flex flex-col gap-2 sm:flex-row ${emailState === "error"
                            ? "rounded-2xl ring-1 ring-[#b3261e]"
                            : ""
                            }`}
                    >
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailState("idle");
                            }}
                            className="min-h-12 w-full rounded-full border border-[#f6f1e7]/25 bg-[#f6f1e7]/10 px-5 text-sm text-[#f6f1e7] outline-none transition-colors duration-200 placeholder:text-[#f6f1e7]/45 focus:border-[#f6f1e7]/60"
                        />

                        <button
                            type="submit"
                            className="min-h-12 shrink-0 rounded-full bg-[#f6f1e7] px-7 text-sm font-semibold text-[#1f3d2b] transition-opacity duration-200 hover:opacity-90"
                        >
                            Join us
                        </button>
                    </div>

                    {/* Form message */}
                    <p
                        className={`mt-3 min-h-5 text-sm ${emailState === "error"
                            ? "text-[#f6b5ae]"
                            : emailState === "success"
                                ? "text-[#d9962b]"
                                : "text-transparent"
                            }`}
                        aria-live="polite"
                    >
                        {emailState === "error" &&
                            "Enter a valid email address."}

                        {emailState === "success" &&
                            "Thank you. You're on the list."}
                    </p>
                </form>
            </div>
        </section>
    );
}

export default NewsPaper;