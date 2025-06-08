
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Custom Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: "⚡",
      details: "I design and implement custom automation workflows that eliminate repetitive tasks, reduce errors, and increase efficiency. Using tools like n8n and custom JavaScript, I create solutions that integrate seamlessly with your existing systems.",
      benefits: ["70% reduction in manual tasks", "Error-free processing", "24/7 automated operations", "Seamless integrations"],
      gradient: "from-primary/10 to-transparent"
    },
    {
      title: "AI Agent Development",
      description: "Build intelligent agents that understand and respond to your specific needs",
      icon: "🤖",
      details: "Leverage the power of GPT-3.5 and GPT-4 to create AI agents that can handle complex conversations, process information, and execute tasks autonomously. Perfect for customer support, internal assistance, and data processing.",
      benefits: ["90%+ accuracy rates", "Natural language processing", "Context-aware responses", "Continuous learning"],
      gradient: "from-neon-blue/10 to-transparent"
    },
    {
      title: "API & Integration Solutions",
      description: "Connect your tools and systems for seamless data flow",
      icon: "🔗",
      details: "Create robust API integrations that connect disparate systems, enabling smooth data flow and communication between your tools. From webhook setup to complex third-party integrations.",
      benefits: ["Real-time data sync", "Secure connections", "Scalable architecture", "Comprehensive monitoring"],
      gradient: "from-neon-green/10 to-transparent"
    },
    {
      title: "Data Automation & Reporting",
      description: "Transform raw data into actionable insights automatically",
      icon: "📊",
      details: "Automate your data collection, processing, and reporting workflows. From Google Sheets automation to PostgreSQL database management, get insights delivered when you need them.",
      benefits: ["Automated reporting", "Real-time dashboards", "Data validation", "Custom analytics"],
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      title: "Consultation & Training",
      description: "Learn how to implement and maintain automation solutions",
      icon: "🎓",
      details: "Receive expert guidance on automation strategies and hands-on training for your team. I help you understand the best practices and maintain your automated systems effectively.",
      benefits: ["Strategic planning", "Team training", "Best practices", "Knowledge transfer"],
      gradient: "from-orange-500/10 to-transparent"
    },
    {
      title: "Ongoing Support & Optimization",
      description: "Keep your automated systems running smoothly and efficiently",
      icon: "🔧",
      details: "Continuous monitoring, maintenance, and optimization of your automation solutions. I ensure your systems evolve with your business needs and maintain peak performance.",
      benefits: ["24/7 monitoring", "Performance optimization", "Regular updates", "Proactive maintenance"],
      gradient: "from-pink-500/10 to-transparent"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-lg rotate-12 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden animate-slide-in-left border-0 bg-card/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-bl-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full group border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3 text-2xl">
                          <span className="text-3xl">{service.icon}</span>
                          <span>{service.title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-base pt-4 leading-relaxed">
                          {service.details}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-4 text-lg">Key Benefits:</h4>
                        <div className="grid gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={benefit} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Card className="inline-block border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-4">Let's discuss how automation can transform your business</p>
                <Button 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
