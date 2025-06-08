
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a PDF download
    console.log('Download CV clicked');
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Get to know the person behind the automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I build automations and AI agents that actually work… Let's tackle challenges together.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  With a passion for solving complex problems through intelligent automation, 
                  I specialize in creating workflows that eliminate repetitive tasks and enhance 
                  productivity. My expertise spans from custom JavaScript solutions to advanced 
                  AI agent development using the latest GPT models.
                </p>
              </div>
              
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Timeline Section */}
            <div className="space-y-6">
              {/* Education */}
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Education</h3>
                      <p className="text-muted-foreground mb-1">
                        <strong>B.Sc. in Computer Science</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Federal University of Lokoja
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2022–2026 (3rd year)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card className="border-l-4 border-l-neon-blue">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-neon-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Work Experience</h3>
                      <p className="text-muted-foreground mb-1">
                        <strong>Automation Intern</strong> at Rafdel.co
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        June–November 2025
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Designed and implemented workflow automation solutions</li>
                        <li>• Developed custom JavaScript error handling systems</li>
                        <li>• Conducted training sessions for team members</li>
                        <li>• Optimized existing processes for enhanced efficiency</li>
                      </ul>
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
