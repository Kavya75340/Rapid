import React from "react";
import { Facebook, Linkedin } from "lucide-react";
import RC_Logo from "../../assets/image/logowithbg.png";

const footerLinks = {
    company: [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/career" },
        { title: "Contact", href: "/contact" },
    ],
    solutions: [
        { title: "AI-Powered Operations", href: "/service/data-ai" },
        { title: "Cloud", href: "/service/cloud" },
        { title: "Digital Engineering", href: "/service/digital-e-m" },
        { title: "Emerging Technology", href: "/service/emerging-tech" },
        { title: "Strategy", href: "/service/strategy" },
    ],
    industries: [
        { title: "Banking & Finance", href: "/industries/banking" },
        { title: "Energy", href: "/industries/energy" },
        { title: "Healthcare", href: "/industries/healthcare" },
        { title: "Life Sciences", href: "/industries/lifescience" },
        { title: "Travel", href: "/industries/travel" },
    ],
    resources: [
        { title: "Alliance", href: "/alliance" },
        { title: "Case Studies", href: "/case-studies" },
        { title: "Insights", href: "/blog" },
        { title: "White Paper", href: "/whitepaper" },
    ],
};

const socialLinks = [
    {
        icon: Facebook,
        href: "https://www.facebook.com/rapidcode",
        label: "Facebook",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/rapidcodetechnologies",
        label: "LinkedIn",
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#53575a] text-white">
            <div className="max-w-auto mx-auto px-6 py-12 overflow-hidden">
                {/* Top Grid */}
                <div className="flex items-stretch justify-between lg:mr-10">
                    <a href="/" className="block mb-6">
                        <img
                            src={RC_Logo}
                            alt="Rapidcode Logo"
                            className="w-56 lg:w-80"
                        />
                    </a>
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-2">
                    {/* LEFT SIDE (Logo + Space) */}
                    <div className="col-span-12 lg:col-span-4">
                        <p className="text-sm text-white/70 mb-6 lg:ml-15 w-sm">
                            We enable enterprises to accelerate growth and
                            resilience by harnessing the power of data,
                            artificial intelligence, and advanced digital
                            transformation. Our solutions drive operational
                            excellence, intelligent decision-making, and
                            scalable innovation, helping organizations adapt
                            faster, compete smarter, and deliver measurable
                            business outcomes in an evolving digital economy.
                        </p>
                    </div>

                    {/* RIGHT SIDE LINKS */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-5 lg:ml-30">
                        {/* Company */}
                        <div>
                            <h4 className="font-bold mb-4 text-lg">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h4 className="font-bold mb-4 text-lg">
                                Solutions
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.solutions.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <h4 className="font-bold mb-4 text-lg">
                                Industries
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.industries.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="font-bold mb-4 text-lg">
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Rapidcode. All rights
                        reserved.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        {[
                            {
                                title: "Privacy Policy",
                                link: "/privacy-policy",
                            },
                            {
                                title: "Terms & Condition",
                                link: "/term-condition",
                            },
                            { title: "Cookie Policy", link: "/cookie-policy" },
                            {
                                title: "Refund & Cancellation",
                                link: "/refund-cancellation",
                            },
                            { title: "Accessibility", link: "/accessibility" },
                        ].map((item) => (
                            <a
                                key={item}
                                href={item.link}
                                className="text-sm text-white/60 hover:text-white transition mr-7 md:mr-0"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
