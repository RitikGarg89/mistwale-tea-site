import { useState } from "react";

const faqs = [
    {
        question: "How long does delivery take?",
        answer:
            "Delivery usually takes 2–5 working days depending on your pincode.",
    },
    {
        question: "What is your return policy?",
        answer:
            "Unopened tea packs can be returned within 7 days. Opened tea packs are not eligible for returns.",
    },
    {
        question: "How should I store my tea?",
        answer:
            "Store your tea in a cool, dry place away from direct sunlight and moisture.",
    },
    {
        question: "Is Chamomile & Tulsi caffeine-free?",
        answer:
            "Yes. Chamomile & Tulsi is a caffeine-free blend.",
    },
    {
        question: "Do you deliver across India?",
        answer:
            "Yes. Mistvale Tea Co. delivers across India.",
    },
    {
        question: "Is the Tea Lover's Sampler Gift Box giftable?",
        answer:
            "Yes. The sampler comes in a wooden gift box with a brewing guide.",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-20">
            <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                {/* FAQ title */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f7942]">
                        A little more clarity
                    </p>

                    <h2 className="font-['Fraunces'] text-3xl font-medium leading-tight text-[#1f3d2b] sm:text-4xl md:text-5xl">
                        Frequently asked questions
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-[#1b1b1b]/60">
                        Useful details, kept simple.
                    </p>
                </div>

                {/* FAQ list */}
                <div className="divide-y divide-[#1f3d2b]/10 border-y border-[#1f3d2b]/10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={faq.question}>
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-medium text-[#1f3d2b]">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1f3d2b]/15 text-[#1f3d2b] transition-transform duration-200 ${isOpen ? "rotate-45" : ""
                                            }`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 5V19M5 12H19"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="pb-5 pr-12 text-sm leading-6 text-[#1b1b1b]/65">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;