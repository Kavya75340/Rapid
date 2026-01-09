import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSection({ data }) {
    return (
        <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-0 w-full px-4 lg:px-20">
                <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-8 text-center">
                    {data.sectionMeta.heading}
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {data.items.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-2xl font-light py-6 no-underline hover:no-underline hover:text-gray-600">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-muted-foreground font-bold text-lg pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQSection;
