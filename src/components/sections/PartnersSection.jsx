import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Microsoft",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
  },
  {
    name: "Google Cloud",
    logo:
      "https://img.icons8.com/color/600/google-cloud.png",
  },
  {
    name: "AWS",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "IBM",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
  },
];

function PartnersSection() {
  return (
    <section id="our-partners" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Our partners
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Global alliance partnerships enable our customers' complex hybrid IT ecosystems
          </h2>

          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Learn more about our alliance partners
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href="#"
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 lg:h-20 w-auto object-contain"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;
