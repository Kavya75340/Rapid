import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        country: "",
        interest: "",
        message: "",
        consent: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contact-form" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-1">
                        Send us a message
                    </h2>
                    <div className="w-12 h-1 bg-primary mb-8" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-foreground mb-2">
                                    First name{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 text-foreground focus:border-primary focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-foreground mb-2">
                                    Last name{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 text-foreground focus:border-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-foreground mb-2">
                                    Business email{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 text-foreground focus:border-primary focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-foreground mb-2">
                                    Company name{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            company: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 text-foreground focus:border-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="block text-sm text-foreground mb-2">
                                    Country/Region{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <select
                                    required
                                    value={formData.country}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            country: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 appearance-none cursor-pointer"
                                >
                                    <option value="">Select country</option>
                                    <option value="india">India</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="australia">Australia</option>
                                    <option value="germany">Germany</option>
                                    <option value="other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-9 w-4 h-4 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <label className="block text-sm text-foreground mb-2">
                                    Area of interest{" "}
                                    <span className="text-primary">*</span>
                                </label>
                                <select
                                    required
                                    value={formData.interest}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            interest: e.target.value,
                                        })
                                    }
                                    className="w-full border-b border-border bg-transparent py-2 appearance-none cursor-pointer"
                                >
                                    <option value="">Select area</option>
                                    <option value="cloud">
                                        Cloud Services
                                    </option>
                                    <option value="infrastructure">
                                        Infrastructure
                                    </option>
                                    <option value="security">Security</option>
                                    <option value="consulting">
                                        Consulting
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-9 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-foreground mb-2">
                                How can we help you?
                            </label>
                            <textarea
                                rows={4}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full border border-border bg-transparent p-3 resize-none"
                            />
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                checked={formData.consent}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        consent: e.target.checked,
                                    })
                                }
                                className="mt-1 w-4 h-4 accent-primary"
                            />
                            <p className="text-sm text-muted-foreground">
                                I agree to receive communications from
                                Rapidcode. I have read and agree to the{" "}
                                <a
                                    href="#"
                                    className="underline hover:text-primary"
                                >
                                    Privacy Statement
                                </a>
                                .
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
