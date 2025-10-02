import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/undraw_data-reports_l2u3.svg";

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex  pt-20 pb-16 overflow-hidden"
    >
      {/* Gradient Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="h-full grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in flex flex-col gap-10 justify-end items-center">
            <h1 className="text-xl md:text-lg italic leading-tight">
              "Excepteur sint occaecat cupidatat non proident"
            </h1>
            <img
              src={heroIllustration}
              alt="undraw_data-reports_l2u3"
              className="w-[220px] h-[150px] rounded-2xl shadow-glow"
            />
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fade-in flex flex-col justify-start items-center" style={{ animationDelay: "0.2s" }}>
            <span className="text-xl md:text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum qui quam voluptas alias molestiae accusantium eum quo sequi praesentium obcaecati autem adipisci, aspernatur neque aliquam cumque distinctio odit soluta.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
