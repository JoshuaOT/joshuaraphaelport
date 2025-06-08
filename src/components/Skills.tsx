
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Workflow Design",
      icon: "🔄",
      skills: ["n8n", "JavaScript", "Error Handling", "Process Optimization"],
      color: "border-l-primary"
    },
    {
      title: "AI Agent Development",
      icon: "🤖",
      skills: ["GPT-3.5", "GPT-4", "Prompt Engineering", "Conversational AI"],
      color: "border-l-neon-blue"
    },
    {
      title: "API & Integration",
      icon: "🔌",
      skills: ["Node.js", "REST APIs", "Webhooks", "Third-party Integrations"],
      color: "border-l-neon-green"
    },
    {
      title: "Data Tools",
      icon: "📊",
      skills: ["Google Sheets", "PostgreSQL", "Data Processing", "Reporting"],
      color: "border-l-purple-500"
    },
    {
      title: "Project Management",
      icon: "📋",
      skills: ["Agile", "Git", "Documentation", "Team Collaboration"],
      color: "border-l-orange-500"
    },
    {
      title: "Soft Skills",
      icon: "💡",
      skills: ["Problem-solving", "Communication", "Adaptability", "Critical Thinking"],
      color: "border-l-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and methodologies I use to deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`border-l-4 ${category.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
