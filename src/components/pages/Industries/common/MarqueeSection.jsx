import { motion } from "framer-motion";

const MarqueeSection = () => {
    return (
        <section className="bg-white border border-1 py-4 overflow-hidden">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap"
            >
                {[...Array(4)].map((_, i) => (
                    <a
                        key={i}
                        className="text-black font-medium mx-10 flex items-center gap-5"
                        href="/contact"
                    >
                        <span>
                            Connect — with an expert to discuss your IT
                            Transformation
                        </span>
                        <span className="text-white/50">—</span>
                        <span>
                            Connect — with an expert to discuss your IT
                            Transformation
                        </span>
                        <span className="text-white/50">—</span>
                    </a>
                ))}
            </motion.div>
        </section>
    );
};

export default MarqueeSection;
