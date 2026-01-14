import { motion } from "framer-motion";

const stats = [
    {
        number: "65%",
        description:
            "of consumers have cut ties with a provider over a single poor customer service experience.",
        source: "Business Wire",
    },
    {
        number: "95%",
        description:
            "improvement in customer experience driven by AI-powered service handling.",
        source: "Forbes",
    },
    {
        number: "83%",
        description:
            "of consumers say data privacy is important when choosing a service provider.",
        source: "ITL",
    },
];

const StatsSection = () => {
    return (
        <section className="bg-[hsl(220,25%,8%)]/80 py-24 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-[96px] lg:text-[120px] font-bold text-white leading-none">
                        03
                    </span>

                    {/* Text + Line */}
                    <div className="flex items-center gap-8 w-full">
                        {/* Outlined Text */}
                        <div className="leading-tight">
                            <div className="outline-text text-4xl lg:text-5xl font-bold">
                                things
                            </div>
                            <div className="outline-text text-4xl lg:text-5xl font-bold">
                                to know
                            </div>
                        </div>

                        {/* Horizontal Line */}
                        <div className="flex-1 h-px bg-white opacity-80" />
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="relative"
                        >
                            <div className="text-white/30 outline-text text-7xl font-bold mb-4">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="text-xl  lg:text-6xl font-bold text-primary mb-4">
                                {stat.number}
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                {stat.description}
                            </p>

                            <a
                                href="#"
                                className="text-primary text-sm hover:underline"
                            >
                                Source: {stat.source}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
