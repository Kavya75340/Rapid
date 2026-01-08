import { Linkedin, ArrowRight } from "lucide-react";

function ExpertVoicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Expert portrait"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Expert voices
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Harnessing the power of AI, responsibly
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our Responsible AI at RapidCode principles guide us in seeking the
              benefits of AI while helping us counteract its risks. Our robust
              governance framework includes an evaluation of the efficacy of using
              AI in certain situations; identification and consideration of the
              associated risks; and a technical review to help ensure that any AI
              deployment is fit for purpose.
            </p>

            {/* Expert Details */}
            <div className="flex items-center">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground">
                  Michael Bradshaw
                </h4>
                <p className="text-muted-foreground text-sm">
                  Global Practice Leader | Applications, Data and AI
                </p>
                <p className="text-primary text-sm font-medium">RapidCode</p>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center"
                >
                  View profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertVoicesSection;
