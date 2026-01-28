import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
// import SplitText from "../../SplitText";
import RC_Logo from "../../assets/image/Logo.png";

const GoogleTranslate = () => {
    return (
        <div id="google_translate_element" style={{ display: "none" }}></div>
    );
};

const NAV_ITEMS = [
    {
        id: "what-we-do",
        label: "Services",
        description: "Explore our comprehensive service offerings.",
        links: [
            { title: "Cloud", href: "/service/cloud" },
            { title: "Cybersecurity", href: "/service/cyber-security" },
            {
                title: "Data & Artificial Inteligence",
                href: "/service/data-ai",
            },
            {
                title: "Digital Engineering & Manufacturing",
                href: "/service/digital-e-m",
            },
            { title: "Emerging Technology", href: "/service/emerging-tech" },
            {
                title: "Finance & Risk Management",
                href: "/service/finance-risk",
            },
            { title: "Managed Service", href: "/service/managed-s" },
            { title: "Strategy", href: "/service/strategy" },
            { title: "Supply Chain", href: "/service/supplychain" },
            { title: "Technology Transformation", href: "/service/technology" },
        ],
    },
    {
        id: "industries",
        label: "Industries",
        description: "Discover how we transform specific sectors.",
        links: [
            { title: "Aerospace & Defence", href: "/industries/aerospace" },
            { title: "Automotive", href: "/industries/automotive" },
            { title: "Banking & Finance", href: "/industries/banking" },
            { title: "Chemicals", href: "/industries/chemicals" },
            {
                title: "Communication & Media",
                href: "/industries/communication",
            },
            { title: "Energy", href: "/industries/energy" },
            { title: "Healthcare", href: "/industries/healthcare" },
            { title: "High Tech", href: "/industries/hightech" },
            { title: "Life Sciences", href: "/industries/lifescience" },
            { title: "Software & Platforms", href: "/industries/software" },
            { title: "Travel", href: "/industries/travel" },
        ],
    },
    {
        id: "who-we-are",
        label: "About Us",
        description: "Learn about our heritage, leadership, and values.",
        links: [
            { title: "Alliance", href: "/alliance" },
            { title: "Career", href: "/career" },
            { title: "Contact Us", href: "/contact" },
            { title: "Global Presence", href: "/location" },
        ],
    },
    {
        id: "insights",
        label: "Insights",
        description: "Learn about our heritage, leadership, and values.",
        links: [
            { title: "Blog", href: "/blog" },
            { title: "Case Studies", href: "/case-studies" },
            { title: "White Paper", href: "/whitepaper" },
        ],
    },
];

// --- Constants for Animation ---
const TRANSITION_DURATION = 0.25; // seconds
const HOVER_INTENT_DELAY = 100; // ms

// --- Components ---

/**
 * Logo Component (Left side)
 */
const Logo = () => (
    <a href="/" className="flex items-center gap-2 group z-100 relative">
        <img src={RC_Logo} alt="Logo" className="w-40 lg:w-60" />
    </a>
);

const CTAButton = ({ isCountryOpen, setIsCountryOpen }) => {
    const [country, setCountry] = useState("India");

    const changeLanguage = (langCode) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event("change"));
        }
    };

    return (
        <div
            className="relative hidden md:inline-block z-200"
            onMouseEnter={() => setIsCountryOpen(true)}
            onMouseLeave={() => setIsCountryOpen(false)}
        >
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                {/* Globe */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 mr-2"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z" />
                </svg>

                {country}

                <svg
                    className="ml-2 h-4 w-4"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M5.293 7.293L10 10.586l4.707-3.293" />
                </svg>
            </button>

            {isCountryOpen && (
                <div className="absolute right-0 mt-0 w-32 rounded-md border bg-white shadow-md z-50">
                    <button
                        onClick={() => {
                            setCountry("India");
                            changeLanguage("en");
                            setIsCountryOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:rounded-md"
                    >
                        🇮🇳 India
                    </button>

                    <button
                        onClick={() => {
                            setCountry("UAE");
                            changeLanguage("ar");
                            setIsCountryOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:rounded-md"
                    >
                        🇦🇪 UAE
                    </button>
                </div>
            )}
        </div>
    );
};

const NavItem = ({ item, isActive, onMouseEnter }) => {
    return (
        <div
            className="relative px-4 py-6 cursor-pointer"
            onMouseEnter={() => onMouseEnter(item.id)}
        >
            <span
                className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                }`}
            >
                {item.label}
            </span>
            {isActive && (
                <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </div>
    );
};

/**
 * Dropdown Panel Component
 * Renders the mega-menu content with fade/slide animation
 */
const DropdownPanel = ({ activeItem, onClose }) => {
    if (!activeItem) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: TRANSITION_DURATION, ease: "easeOut" }}
            className="absolute top-full left-0 w-full border-t border-slate-100 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-40"
            onMouseLeave={onClose}
        >
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-12 gap-10">
                    {/* Description Column (1/3 width) */}
                    <div className="col-span-4 border-r border-slate-100 pr-8">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            {activeItem.label}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {activeItem.description}
                        </p>
                        <a
                            href="/about"
                            className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                        >
                            Learn more
                            <svg
                                className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Links Column (2/3 width) */}
                    <div className="col-span-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {activeItem.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="group flex items-start text-base text-slate-700 transition-colors hover:text-blue-600"
                                >
                                    <span className="mt-2 mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors duration-200"></span>
                                    <span>{link.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
const MobileMenu = ({ onClose }) => {
    const [active, setActive] = useState(null);

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            {/* Header */}
            <div className="flex w-full items-center justify-between px-6 h-[72px] border-b">
                <img src={RC_Logo} className="w-36" />
                <button onClick={onClose} className="text-2xl">
                    ✕
                </button>
            </div>

            {/* Menu */}
            <div className="w-full px-6 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                    <div key={item.id}>
                        <button
                            onClick={() =>
                                setActive(active === item.id ? null : item.id)
                            }
                            className="w-full flex justify-between items-center py-3 text-base font-medium"
                        >
                            {item.label}
                            <span>{active === item.id ? "−" : "+"}</span>
                        </button>

                        <AnimatePresence>
                            {active === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="pl-4 space-y-2 overflow-hidden"
                                >
                                    {item.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            onClick={onClose}
                                            className="block py-2 text-sm text-slate-600"
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

/**
 * Main Navigation Bar Component
 */
const Navbar = () => {
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);

    // Handle leaving the entire nav area
    const handleMouseLeave = () => {
        // Add a small delay to prevent flickering when moving mouse to the dropdown
        timeoutRef.current = setTimeout(() => {
            setHoveredId(null);
            setIsDropdownOpen(false);
        }, HOVER_INTENT_DELAY);
    };
    const handleMouseEnter = (id) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setIsCountryOpen(false);

        const item = NAV_ITEMS.find((i) => i.id === id);
        setHoveredId(id);
        setIsDropdownOpen(!!item?.links?.length);
    };
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            className="relative bg-white border-b border-slate-200 font-sans"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
        >
            <div className="max-w-[1440px] mx-auto">
                <header className="flex items-center justify-between h-[72px] px-6 md:px-8">
                    {/* Logo */}
                    <Logo />

                    <div className="relative">
                        <nav className="hidden md:flex h-full" ref={menuRef}>
                            <div className="flex h-full">
                                {NAV_ITEMS.map((item) => (
                                    <NavItem
                                        key={item.id}
                                        item={item}
                                        isActive={hoveredId === item.id}
                                        onMouseEnter={handleMouseEnter}
                                    />
                                ))}
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <CTAButton
                            isCountryOpen={isCountryOpen}
                            setIsCountryOpen={setIsCountryOpen}
                        />
                        <GoogleTranslate />
                    </div>
                    {/* Mobile Button */}
                    <button
                        className="md:hidden border p-2 rounded"
                        onClick={() => setMobileOpen(true)}
                    >
                        ☰
                    </button>
                </header>
            </div>

            <div className="absolute top-[72px] left-0 right-0 w-full z-50">
                <AnimatePresence mode="wait">
                    {isDropdownOpen && hoveredId && (
                        <DropdownPanel
                            activeItem={NAV_ITEMS.find(
                                (i) => i.id === hoveredId
                            )}
                        />
                    )}
                </AnimatePresence>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <MobileMenu onClose={() => setMobileOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
