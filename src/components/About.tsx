import { CheckCircle2 } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.png";

const About = () => {
  const features = [
    "Real-time inventory tracking",
    "Automated profit calculations",
    "Advanced analytics & reporting",
    "Cloud-based data security",
    "Multi-device accessibility",
    "AI-powered predictions"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <img
              src={aboutIllustration}
              alt="About ERP"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ERP?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              ERP is the ultimate ERP solution designed specifically for entrepreneurs and small businesses. We understand your challenges and provide tools that grow with your business.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform combines powerful inventory management with intelligent profit tracking, giving you complete visibility into your business operations. Make data-driven decisions with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
