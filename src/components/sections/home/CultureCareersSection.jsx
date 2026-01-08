import { ArrowRight, Heart, Briefcase } from "lucide-react";

const items = [
    {
        id: 1,
        icon: Heart,
        title: "Culture",
        description:
            "We are committed to building a better, more inclusive, and sustainable world that benefits our employees, customers, and communities. We empower our people through a culture of trust, diversity, and continuous growth, enabling them to deliver meaningful impact for our customers. By driving responsible innovation and ethical business practices, we create long-term value while supporting community development, expanding access to opportunity, and contributing positively to society at large.",
        cta: { text: "Learn more", href: "/culture" },
    },
    {
        id: 2,
        icon: Briefcase,
        title: "Careers",
        description:
            "Become part of Rapidcode Consult’s global ecosystem of technology, strategy, and implementation experts, working at the intersection of innovation and execution. Our network brings together forward-thinking consultants who collaborate to solve complex business challenges, deliver scalable solutions, and drive measurable impact for clients worldwide. By joining us, you gain access to cutting-edge opportunities, diverse industries, and a culture that values expertise, ownership, and continuous learning while shaping the future of digital transformation..",
        cta: { text: "Explore jobs", href: "/careers" },
    },
];

const CultureCareersSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#01284e] text-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-light mb-12">
                    Let's get there together
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="group border border-[#2e4d6a]/10 rounded-lg p-8 hover:border-[#2e4d6a]/90 transition-colors animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <item.icon className="w-10 h-10 text-white mb-4" />

                            <h3 className="text-2xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-primary-foreground/80 mb-6">
                                {item.description}
                            </p>

                            <a
                                href={item.cta.href}
                                className="inline-flex items-center gap-2 text-[#1065bf] font-medium hover:underline"
                            >
                                {item.cta.text}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CultureCareersSection;
