
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/30 rotate-12 animate-spin-slow"></div>
      
      {/* Floating icons */}
      <div className="absolute top-32 right-32 animate-float">
        <Code className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float-delayed">
        <Zap className="w-6 h-6 text-primary/30" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative w-52 h-52 mx-auto">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border border-primary/20 animate-pulse"></div>
              
              {/* Profile container */}
              <div className="relative w-48 h-48 mx-auto mt-2 rounded-full border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-2xl">
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-6xl font-bold text-white shadow-inner">
                  JR
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Name with enhanced styling */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
                <span className="block relative">
                  Joshua
                  <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-primary animate-pulse" />
                </span>
                <span className="block text-gradient relative">
                  Raphael
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
                </span>
              </h1>
            </div>
            
            {/* Enhanced title with badge */}
            <div className="relative">
              <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Automation & AI Agent Developer
                </p>
              </div>
            </div>
            
            {/* Enhanced tagline */}
            <div className="relative max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed">
                Building intelligent workflows that{' '}
                <span className="text-gradient font-semibold">work</span>.
              </p>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30"></div>
            </div>
            
            {/* Enhanced CTA section */}
            <div className="pt-12 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={scrollToPortfolio}
                  className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 animate-glow shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
                >
                  Download CV
                </Button>
              </div>
              
              {/* Enhanced scroll indicator */}
              <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
