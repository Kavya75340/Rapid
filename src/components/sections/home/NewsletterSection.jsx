import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      toast({
        title: "Please agree to receive communications",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for subscribing!",
      description: "You will receive our latest updates.",
    });

    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Stay connected
          </span>

          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
            Get latest news and updates about Rapidcode
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </div>

            <div className="flex items-start gap-3 text-left">
              <Checkbox
                id="consent"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I agree to receive communications from Rapidcode. I understand and
                agree that the information submitted in this form will be
                transmitted to, stored and processed by Rapidcode, in accordance
                with their{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Notice
                </a>.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};