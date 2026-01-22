import { useState, useEffect } from "react";

const navItems = [
    { id: "become", label: "Become a Rapidcode" },
    { id: "life", label: "Life at Rapidcode" },
    { id: "teams", label: "Join our teams" },
    { id: "resume", label: "Upload resume" },
    { id: "resources", label: "Resources" },
    { id: "faq", label: "FAQs" },
];

const JumpToNav = () => {
    const [activeSection, setActiveSection] = useState("become");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 600);

            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`bg-background border-b border-border transition-all duration-300 z-40 ${
                isSticky ? "sticky top-0 bg-white" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-1 overflow-x-auto py-4 scrollbar-hide">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                                activeSection === item.id
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default JumpToNav;
