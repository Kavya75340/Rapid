import { ArrowRight } from "lucide-react";

function MarqueeBanner() {
  const content = (
    <>
      <span className="text-foreground">RapidCode and WIRED</span>
      <span className="mx-2">—</span>

      <a
        href="#"
        className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
      >
        Watch now on demand
        <ArrowRight className="ml-1 w-3 h-3" />
      </a>

      <span className="mx-2">—</span>

      <span className="text-foreground">
        'Rethink AI', brought to you by RapidCode and WIRED
      </span>

      <span className="mx-8"></span>
    </>
  );

  return (
    <div className="bg-background border-b border-border overflow-hidden">
      <div className="py-3 whitespace-nowrap animate-marquee">
        <div className="inline-flex items-center text-sm">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}

export default MarqueeBanner;
