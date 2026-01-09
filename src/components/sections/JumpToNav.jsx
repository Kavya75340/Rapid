const navItems = [
    { label: "Who we are", href: "#who_we_are" },
    { label: "How we help", href: "#how_we_help" },
    { label: "Customer stories", href: "#customer_stories" },
    { label: "Our expertise", href: "#our_expertise" },
    { label: "Q&A", href: "#qa" },
];
const JumpToNav = () => {
    return (
        <section className="sticky top-[0px] z-40 text-black bg-[#E0E0E0] py-4">
            <div className="container mx-auto px-4 lg:px-8">
                <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-full transition-colors whitespace-nowrap"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </section>
    );
};
export default JumpToNav;
