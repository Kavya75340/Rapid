import { useEffect, useState, useRef } from "react";

const stats = [
    {
        value: 350,
        suffix: "+",
        label: "Fortune 1,000 and Global 2,000 clients",
    },
    { value: 18, suffix: "", label: "of Top 20 US, UK, and AU insurers" },
    { value: 9, suffix: "", label: "of Top 10 US health payers" },
    { value: 15, suffix: "", label: "of Top 19 US, UK & AU banks" },
];

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [hasStarted, end, duration]);

    return { count, ref };
};

export const ImpactSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-hero text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                            Rapidcode impact
                        </span>

                        <h2 className="mt-4 text-3xl lg:text-5xl font-bold leading-tight">
                            Powering the success of global industry leaders
                        </h2>

                        <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
                            Rapidcode's comprehensive data- and AI-led solutions
                            combine advanced analytics, deep domain expertise,
                            and robust data foundations to deliver better
                            business outcomes with speed.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 lg:gap-8">
                        {stats.map((stat, index) => {
                            const { count, ref } = useCountUp(stat.value);

                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 lg:p-8"
                                >
                                    <div className="text-4xl lg:text-5xl font-bold text-accent">
                                        {count}
                                        {stat.suffix}
                                    </div>

                                    <p className="mt-2 text-sm lg:text-base text-primary-foreground/70">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
