import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoginDialog from "@/components/LoginDialog";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </div>
  );
};

export default Index;
