import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What does Rapidcode do?",
        answer: "Rapidcode is a leading IT services and consulting company that helps businesses transform their technology landscape. We provide services in cloud computing, cybersecurity, data analytics, mainframe modernization, and digital transformation.",
    },
    {
        question: "What is the application process?",
        answer: "Our application process typically includes: 1) Online application submission, 2) Initial screening call with HR, 3) Technical assessment or case study, 4) Interview rounds with hiring managers and team members, 5) Final offer. The entire process usually takes 2-4 weeks.",
    },
    {
        question: "Are there flexible working opportunities?",
        answer: "Yes! We offer flexible working arrangements including remote work options, hybrid schedules, and flexible hours. We believe in empowering our employees to work in ways that maximize their productivity and work-life balance.",
    },
    {
        question: "What learning opportunities are available?",
        answer: "We invest heavily in employee development. You'll have access to our learning platform with thousands of courses, certification programs, mentorship opportunities, leadership development programs, and dedicated learning time each month.",
    },
    {
        question: "What does 'progress with purpose' mean?",
        answer: "It's our commitment to making a positive impact. We believe technology should drive meaningful progress for businesses, communities, and the planet. Every project we undertake is guided by this purpose-driven approach.",
    },
    {
        question: "What benefits does Rapidcode offer?",
        answer: "We offer comprehensive benefits including competitive salary, health insurance, retirement plans, paid time off, parental leave, wellness programs, employee assistance programs, and various lifestyle benefits.",
    },
    {
        question: "How does Rapidcode support diversity and inclusion?",
        answer: "Diversity and inclusion are core to our culture. We have employee resource groups, diversity training programs, inclusive hiring practices, and leadership accountability for diversity metrics. We celebrate and value the unique perspectives each person brings.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 lg:py-24 bg-secondary">
            <div className="flex lg:flex-row flex-col max-w-full mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-0 w-full">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-secondary border-t border-b border-border  px-6 py-4"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {faq.question}
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {/* Answer */}
                                {isOpen && (
                                    <div className="mt-4 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
