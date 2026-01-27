import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ExpertsSection({ data }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-secondary py-24">
            <div className="max-w-full mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <span className="text-primary text-xs font-medium tracking-widest uppercase">
                        {data.eyebrow}
                    </span>

                    <h2 className="mt-3 text-4xl font-light text-foreground">
                        {data.heading}
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        {data.description}
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* LEFT – Q&A */}
                    <div className="lg:col-span-7">
                        {data.qaPairs.map((qa, index) => (
                            <div
                                key={index}
                                className="border-t border-border last:border-b"
                            >
                                <button
                                    onClick={() => setOpenIndex(index)}
                                    className="w-full py-8 flex items-start justify-between text-left group"
                                >
                                    <div className="flex gap-6">
                                        <span className="text-primary text-2xl font-medium">
                                            Q
                                        </span>

                                        <span
                                            className={`text-xl transition-colors ${
                                                openIndex === index
                                                    ? "font-bold"
                                                    : "text-foreground"
                                            }`}
                                        >
                                            {qa.question}
                                        </span>
                                    </div>

                                    <ChevronDown
                                        className={`w-5 h-5 mt-1 transition-transform ${
                                            openIndex === index
                                                ? "rotate-180 text-foreground"
                                                : "text-muted-foreground"
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden pb-8"
                                        >
                                            <div className="flex gap-6">
                                                <span className="text-muted-foreground text-2xl font-medium">
                                                    A
                                                </span>

                                                <p className="text-muted-foreground text-xl leading-relaxed">
                                                    {qa.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT – EXPERT CARD */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-0 bg-white p-10 text-center w-full h-full">
                            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white text-3xl font-semibold mb-6">
                                {data.expert.initials}
                            </div>

                            <h3 className="text-xl font-medium text-foreground">
                                {data.expert.name}
                            </h3>

                            <p className="mt-1 text-muted-foreground text-sm">
                                {data.expert.role}
                            </p>

                            <p className="text-muted-foreground text-sm">
                                {data.expert.department}
                            </p>

                            <p className="mt-3 text-primary font-medium text-sm">
                                {data.expert.company}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExpertsSection;
