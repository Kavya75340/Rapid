import { motion } from "framer-motion";

const CTASection = () => {
    return (
        <section className="bg-white pt-12 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-7xl font-light text-blue-300 mb-8">
                        Take the next step
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
