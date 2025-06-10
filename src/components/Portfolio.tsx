import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sales Data Entry Automation",
      description: "Automated CSV to Google Sheets workflow that eliminated manual data entry",
      image: "📈",
      metrics: "70% time saved",
      metricIcon: TrendingUp,
      technologies: ["n8n", "Google Sheets API", "JavaScript", "CSV Processing"],
      highlights: [
        "Automated file processing and validation",
        "Real-time error handling and notifications",
        "Custom data transformation logic",
        "Reduced processing time from hours to minutes"
      ],
      caseStudyUrl: "#",
      codeUrl: "#",
      gradient: "from-primary/10 to-transparent",
      slug: "sales-data-entry-automation"
    },
    {
      title: "Crypto Price Monitor",
      description: "Real-time BTC & ETH price tracking with automated email alerts",
      image: "₿",
      metrics: "Real-time alerts",
      metricIcon: Zap,
      technologies: ["Node.js", "Cryptocurrency APIs", "Email Automation", "Webhooks"],
      highlights: [
        "Multi-exchange price aggregation",
        "Customizable alert thresholds",
        "Daily/weekly summary reports",
        "Portfolio tracking capabilities"
      ],
      caseStudyUrl: "#",
      codeUrl: "#",
      gradient: "from-neon-blue/10 to-transparent",
      slug: "crypto-price-monitor"
    },
    {
      title: "AI-Powered Email Assistant",
      description: "Intelligent email processing workflow using OpenAI and Telegram",
      image: "📧",
      metrics: "90% accuracy",
      metricIcon: TrendingUp,
      technologies: ["n8n", "OpenAI GPT-4", "Telegram Bot", "Email APIs"],
      highlights: [
        "Natural language email classification",
        "Automated response generation",
        "Priority detection and routing",
        "Telegram notifications for urgent emails"
      ],
      caseStudyUrl: "#",
      codeUrl: "#",
      gradient: "from-neon-green/10 to-transparent",
      slug: "ai-powered-email-assistant"
    },
    {
      title: "Internal Knowledge Chatbot",
      description: "Company knowledge base chatbot with high accuracy responses",
      image: "💬",
      metrics: "90%+ accuracy",
      metricIcon: TrendingUp,
      technologies: ["OpenAI", "Vector Database", "RAG", "Custom Training"],
      highlights: [
        "Company-specific knowledge training",
        "Context-aware responses",
        "Multi-format document processing",
        "Continuous learning and improvement"
      ],
      caseStudyUrl: "#",
      codeUrl: "#",
      gradient: "from-purple-500/10 to-transparent",
      slug: "internal-knowledge-chatbot"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5"></div>
      <div className="absolute top-32 left-10 w-40 h-40 border border-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-28 h-28 bg-neon-green/5 rounded-lg rotate-45 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world automation solutions that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden relative border-0 bg-card/50 backdrop-blur-sm animate-slide-in-left"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-bl-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {project.image}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2 leading-tight">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <project.metricIcon className="w-4 h-4 text-primary" />
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {project.metrics}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 hover:bg-primary/10 transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start space-x-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Summary */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Card className="inline-block border-2 border-dashed border-primary/30 bg-primary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">4+</span> featured projects • 
                  <span className="font-semibold text-primary"> 10+</span> technologies mastered • 
                  <span className="font-semibold text-primary">90%</span> client satisfaction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
