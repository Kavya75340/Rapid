import { motion } from "framer-motion";

function PerspectivesSection({ data }) {
    return (
        <section className="bg-white py-24 px-6 lg:px-16">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        {data.heading}
                    </h2>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden mb-10">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="space-y-5">
                                <span className="text-primary text-lg font-medium">
                                    {article.category}
                                </span>

                                <h3 className="text-foreground text-xl font-medium group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                    {article.type} | {article.date}
                                    {article.readTime &&
                                        ` | Read time: ${article.readTime}`}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PerspectivesSection;
