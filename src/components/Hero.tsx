
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-6xl font-bold text-white">
                JR
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Joshua</span>
              <span className="block text-gradient">Raphael</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Automation & AI Agent Developer
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building intelligent workflows that work.
            </p>
            
            <div className="pt-8 space-y-4">
              <Button 
                onClick={scrollToPortfolio}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
              >
                View My Work
              </Button>
              
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
