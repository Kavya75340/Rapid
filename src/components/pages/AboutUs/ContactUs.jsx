import ContactForm from "./contact-sections/ContactForm";
import ContactSection from "./contact-sections/ContactSection";
import HeroSection from "./contact-sections/HeroSection";
import SupportBanner from "./contact-sections/SupportBanner";

const ContactUs = () => {
    return (
        <>
            <HeroSection />
            <ContactSection />
            <SupportBanner />
            <ContactForm />
        </>
    );
};
export default ContactUs;
