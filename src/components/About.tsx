
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a PDF download
    console.log('Download CV clicked');
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-lg rotate-12 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">About Joshua</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Main Bio Card */}
              <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">My Story</h3>
                    </div>
                    
                    <div className="prose prose-lg dark:prose-invert">
                      <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                        I build automations and AI agents that actually work… Let's tackle challenges together.
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        With a passion for solving complex problems through intelligent automation, 
                        I specialize in creating workflows that eliminate repetitive tasks and enhance 
                        productivity. My expertise spans from custom JavaScript solutions to advanced 
                        AI agent development using the latest GPT models.
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={handleDownloadCV}
                        className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Download CV
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 hover:scale-105 transition-all duration-300 border border-primary/20">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover:scale-105 transition-all duration-300 border border-neon-green/20">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              {/* Education */}
              <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="font-bold text-xl">Education</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground font-semibold">
                          B.Sc. in Computer Science
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Federal University of Lokoja</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          2022–2026 (3rd year)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card className="border-l-4 border-l-neon-blue shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-bl-3xl"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-neon-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="font-bold text-xl">Work Experience</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/30 to-transparent"></div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-muted-foreground font-semibold">
                          Automation Intern at Rafdel.co
                        </p>
                        <p className="text-sm text-muted-foreground">
                          June–November 2025
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Designed and implemented workflow automation solutions",
                            "Developed custom JavaScript error handling systems",
                            "Conducted training sessions for team members",
                            "Optimized existing processes for enhanced efficiency"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
