import { ArrowRight } from "lucide-react";

function AIAssessmentBanner() {
  return (
    <section className="py-20 lg:py-28 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          How does your AI strategy stack up?
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Take our quick AI assessment and discover how your organization compares
          to industry benchmarks.
        </p>

        <button
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium
                     bg-white text-primary rounded-md hover:bg-white/90
                     transition-colors group"
        >
          Start the assessment
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}

export default AIAssessmentBanner;
