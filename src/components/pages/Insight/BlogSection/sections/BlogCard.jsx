import { ArrowRight } from "lucide-react";

const BlogCard = ({ image, industry, title, description, stats, href }) => {
    return (
        <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/10]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Industry Badge */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {industry}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-6 pt-4 border-t border-gray-200">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 text-center">
                            <span className="text-lg font-bold text-blue-600">
                                {stat.value}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href={href}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all"
                >
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
