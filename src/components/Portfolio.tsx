
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sales Data Entry Automation",
      description: "Automated CSV to Google Sheets workflow that eliminated manual data entry",
      image: "📈",
      metrics: "70% time saved",
      technologies: ["n8n", "Google Sheets API", "JavaScript", "CSV Processing"],
      highlights: [
        "Automated file processing and validation",
        "Real-time error handling and notifications",
        "Custom data transformation logic",
        "Reduced processing time from hours to minutes"
      ],
      caseStudyUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Crypto Price Monitor",
      description: "Real-time BTC & ETH price tracking with automated email alerts",
      image: "₿",
      metrics: "Real-time alerts",
      technologies: ["Node.js", "Cryptocurrency APIs", "Email Automation", "Webhooks"],
      highlights: [
        "Multi-exchange price aggregation",
        "Customizable alert thresholds",
        "Daily/weekly summary reports",
        "Portfolio tracking capabilities"
      ],
      caseStudyUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI-Powered Email Assistant",
      description: "Intelligent email processing workflow using OpenAI and Telegram",
      image: "📧",
      metrics: "90% accuracy",
      technologies: ["n8n", "OpenAI GPT-4", "Telegram Bot", "Email APIs"],
      highlights: [
        "Natural language email classification",
        "Automated response generation",
        "Priority detection and routing",
        "Telegram notifications for urgent emails"
      ],
      caseStudyUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Internal Knowledge Chatbot",
      description: "Company knowledge base chatbot with high accuracy responses",
      image: "💬",
      metrics: "90%+ accuracy",
      technologies: ["OpenAI", "Vector Database", "RAG", "Custom Training"],
      highlights: [
        "Company-specific knowledge training",
        "Context-aware responses",
        "Multi-format document processing",
        "Continuous learning and improvement"
      ],
      caseStudyUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world automation solutions that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.metrics}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start space-x-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
