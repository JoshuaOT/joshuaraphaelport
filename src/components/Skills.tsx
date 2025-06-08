
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Workflow Design",
      icon: "🔄",
      skills: ["n8n", "JavaScript", "Error Handling", "Process Optimization"],
      color: "border-l-primary",
      bgGradient: "from-primary/10 to-transparent"
    },
    {
      title: "AI Agent Development",
      icon: "🤖",
      skills: ["GPT-3.5", "GPT-4", "Prompt Engineering", "Conversational AI"],
      color: "border-l-neon-blue",
      bgGradient: "from-neon-blue/10 to-transparent"
    },
    {
      title: "API & Integration",
      icon: "🔌",
      skills: ["Node.js", "REST APIs", "Webhooks", "Third-party Integrations"],
      color: "border-l-neon-green",
      bgGradient: "from-neon-green/10 to-transparent"
    },
    {
      title: "Data Tools",
      icon: "📊",
      skills: ["Google Sheets", "PostgreSQL", "Data Processing", "Reporting"],
      color: "border-l-purple-500",
      bgGradient: "from-purple-500/10 to-transparent"
    },
    {
      title: "Project Management",
      icon: "📋",
      skills: ["Agile", "Git", "Documentation", "Team Collaboration"],
      color: "border-l-orange-500",
      bgGradient: "from-orange-500/10 to-transparent"
    },
    {
      title: "Soft Skills",
      icon: "💡",
      skills: ["Problem-solving", "Communication", "Adaptability", "Critical Thinking"],
      color: "border-l-pink-500",
      bgGradient: "from-pink-500/10 to-transparent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5"></div>
      <div className="absolute top-32 left-10 w-40 h-40 border border-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-28 h-28 bg-neon-green/5 rounded-lg rotate-45 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and methodologies I use to deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`border-l-4 ${category.color} hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden animate-slide-in-left`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.bgGradient} rounded-bl-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Card className="inline-block border-2 border-dashed border-primary/30 bg-primary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">50+</span> successful automation projects • 
                  <span className="font-semibold text-primary"> 90%+</span> client satisfaction rate • 
                  <span className="font-semibold text-primary">70%</span> average time savings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
