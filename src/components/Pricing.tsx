import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      tier: "TIER 1",
      price: "$19",
      description: "Perfect for getting started",
      features: [
        "Record incoming items",
        "Record outgoing items",
        "Record profit results",
        "Basic dashboard",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Business",
      tier: "TIER 2",
      price: "$49",
      description: "Most popular choice",
      features: [
        "Record incoming and outgoing items",
        "Record profits",
        "Analyze sales results with charts",
        "Advanced reporting",
        "24/7 Support",
        "Priority assistance"
      ],
      highlighted: true
    },
    {
      name: "Entrepreneur",
      tier: "TIER 3",
      price: "$99",
      description: "For serious growth",
      features: [
        "All Business features",
        "Analyze sales results with charts",
        "24/7 Premium Support",
        "Export data to Excel",
        "AI-based income prediction",
        "Custom integrations",
        "Dedicated account manager"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the tier that best fits your business needs. All plans include secure cloud storage and regular updates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-glow animate-fade-in ${
                plan.highlighted
                  ? "border-primary shadow-soft scale-105"
                  : "hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              )}
              
              <CardHeader>
                {plan.highlighted && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="text-sm font-semibold text-primary mb-2">{plan.tier}</div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
