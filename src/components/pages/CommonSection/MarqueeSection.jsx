import { motion } from "framer-motion";

const MarqueeBanner = () => {
    return (
        <section className="bg-white hover:bg-gray-300 border border-1 py-4 overflow-hidden">
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
                        <span className="flex">
                            <p className="text-black font-extrabold mr-[10px]">
                                Connect{" "}
                            </p>{" "}
                            — with an expert to advance your IT Transformation
                        </span>
                        <span className="text-white/50">—</span>
                        <span className="flex">
                            <p className="text-black font-extrabold mr-[10px]">
                                Consult{" "}
                            </p>{" "}
                            — an expert to shape your IT Transformation
                        </span>
                        <span className="text-white/50 ml-10">—</span>
                    </a>
                ))}
            </motion.div>
        </section>
    );
};

export default MarqueeBanner;
