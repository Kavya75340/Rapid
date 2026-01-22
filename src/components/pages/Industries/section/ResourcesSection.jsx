import { motion } from "framer-motion";

function ResourcesSection({ data }) {
    return (
        <section className="bg-[hsl(220,20%,97%)] py-24 px-6 lg:px-16">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-light text-foreground">
                        {data.heading}
                    </h2>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                    {data.items.map((resource, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer bg-transparent overflow-hidden transition-shadow"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-2 py-5">
                                <h3 className="text-xl font-semibold text-foreground hover:underline group-hover:text-primary transition-colors mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {resource.type}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ResourcesSection;
