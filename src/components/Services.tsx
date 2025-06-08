
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Services = () => {
  const services = [
    {
      title: "Custom Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: "⚡",
      details: "I design and implement custom automation workflows that eliminate repetitive tasks, reduce errors, and increase efficiency. Using tools like n8n and custom JavaScript, I create solutions that integrate seamlessly with your existing systems.",
      benefits: ["70% reduction in manual tasks", "Error-free processing", "24/7 automated operations", "Seamless integrations"]
    },
    {
      title: "AI Agent Development",
      description: "Build intelligent agents that understand and respond to your specific needs",
      icon: "🤖",
      details: "Leverage the power of GPT-3.5 and GPT-4 to create AI agents that can handle complex conversations, process information, and execute tasks autonomously. Perfect for customer support, internal assistance, and data processing.",
      benefits: ["90%+ accuracy rates", "Natural language processing", "Context-aware responses", "Continuous learning"]
    },
    {
      title: "API & Integration Solutions",
      description: "Connect your tools and systems for seamless data flow",
      icon: "🔗",
      details: "Create robust API integrations that connect disparate systems, enabling smooth data flow and communication between your tools. From webhook setup to complex third-party integrations.",
      benefits: ["Real-time data sync", "Secure connections", "Scalable architecture", "Comprehensive monitoring"]
    },
    {
      title: "Data Automation & Reporting",
      description: "Transform raw data into actionable insights automatically",
      icon: "📊",
      details: "Automate your data collection, processing, and reporting workflows. From Google Sheets automation to PostgreSQL database management, get insights delivered when you need them.",
      benefits: ["Automated reporting", "Real-time dashboards", "Data validation", "Custom analytics"]
    },
    {
      title: "Consultation & Training",
      description: "Learn how to implement and maintain automation solutions",
      icon: "🎓",
      details: "Receive expert guidance on automation strategies and hands-on training for your team. I help you understand the best practices and maintain your automated systems effectively.",
      benefits: ["Strategic planning", "Team training", "Best practices", "Knowledge transfer"]
    },
    {
      title: "Ongoing Support & Optimization",
      description: "Keep your automated systems running smoothly and efficiently",
      icon: "🔧",
      details: "Continuous monitoring, maintenance, and optimization of your automation solutions. I ensure your systems evolve with your business needs and maintain peak performance.",
      benefits: ["24/7 monitoring", "Performance optimization", "Regular updates", "Proactive maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive automation solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          <span className="text-2xl">{service.icon}</span>
                          <span>{service.title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-base pt-4">
                          {service.details}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
