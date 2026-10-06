const reviews = [
    {
        text: "Best masala chai I have ever had. Tastes like my nani's kitchen.",
        name: "Ananya",
        location: "Pune",
    },
    {
        text: "The Darjeeling first flush is so fresh. Packaging was lovely too.",
        name: "Rohit",
        location: "Bengaluru",
    },
    {
        text: "Bought the sampler as a gift and now my whole family is hooked.",
        name: "Meera",
        location: "Kochi",
    },
];

function Review() {
    return (
        <section id="story" className="py-16 md:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Heading */}
                <div className="mb-10 text-center md:mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f7942]">
                        Notes from tea drinkers
                    </p>

                    <h2 className="font-['Fraunces'] text-3xl font-medium leading-tight text-[#1f3d2b] sm:text-4xl md:text-5xl">
                        Shared over a cup
                    </h2>
                </div>

                {/* Reviews */}
                <div className="grid gap-5 md:grid-cols-3">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="flex h-full flex-col rounded-3xl border border-[#1f3d2b]/10 bg-[#ebe2cf] p-6 sm:p-8"
                        >
                            {/* Quote */}
                            <span
                                className="font-['Fraunces'] text-5xl leading-none text-[#4f7942]/40"
                                aria-hidden="true"
                            >
                                “
                            </span>

                            {/* Review text */}
                            <p className="mt-3 flex-1 font-['Fraunces'] text-xl leading-relaxed text-[#1f3d2b]">
                                {review.text}
                            </p>

                            {/* Customer */}
                            <div className="mt-6 border-t border-[#1f3d2b]/10 pt-5">
                                <p className="text-sm font-semibold text-[#1f3d2b]">
                                    — {review.name}
                                </p>

                                <p className="mt-1 text-sm text-[#1b1b1b]/55">
                                    {review.location}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Review;