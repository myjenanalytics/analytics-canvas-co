import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hero-overlay/90 to-hero-overlay/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Data Into
          <br />
          <span className="text-accent">Strategic Insights</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Expert data analytics consulting to help your business make informed decisions,
          optimize operations, and drive measurable growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@myjenanalytics.com"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
