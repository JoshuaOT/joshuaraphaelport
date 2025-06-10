
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '@/lib/emailjs';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Prepare template parameters with recipient email
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Joshua Raphael',
        to_email: 'raphaelotjoshua@gmail.com', // Add recipient email
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('EmailJS result:', result);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raphaelotjoshua@gmail.com",
      link: "mailto:raphaelotjoshua@gmail.com",
      color: "text-primary"
    },
    {
    icon: Phone,
    label: "Phone",
    numbers: [   // ← new
      { display: "+234 813 359 1265", link: "tel:+2348133591265" },
      { display: "+234 815 533 0562", link: "tel:+2348155330562" }
    ],
    color: "text-primary"
  },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/joshua-raphael-152a7130b",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      link: "#",
      color: "text-primary"
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon-Fri, 9AM-6PM WAT",
      link: "#",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-lg rotate-12 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to automate your workflows? Let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-left">
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
                <CardTitle className="text-2xl flex items-center space-x-3 relative z-10">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Lebron James"
                      className="border-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="automate@aiagent.n8n"
                      className="border-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="We’re looking for an experienced automation professional skilled in n8n"
                      className="border-primary/20 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or automation needs..."
                      rows={5}
                      className="border-primary/20 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Whether you need custom automation, AI agent development, or consultation 
                  on workflow optimization, I'm here to help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => {
  const Icon = info.icon;
  return (
    <Card key={info.label} className="border-l-4 border-l-primary/30 …">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="…icon wrapper…">
            <Icon className={`w-5 h-5 ${info.color}`} />
          </div>
          <div>
            <p className="font-medium text-sm mb-1">{info.label}</p>

            {/* PHONE SPECIAL CASE */}
            {info.numbers ? (
              info.numbers.map((phone, i) => (
                <a
                  key={i}
                  href={phone.link}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {phone.display}
                </a>
              ))
            ) : info.link && info.value ? (
              <a
                href={info.link}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {info.value}
              </a>
            ) : (
              <p className="text-muted-foreground font-medium">{info.value}</p>
            )}

          </div>
        </div>
      </CardContent>
    </Card>
  );
})}
              </div>

              {/* LinkedIn Link Card */}
<a
  href="https://linkedin.com/in/joshua-raphael-152a7130b"
  target="_blank"
  rel="noopener noreferrer"
  className="block"                    // so the link fills the card
>
  <Card className="cursor-pointer border-2 border-dashed border-primary/30 bg-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
    <CardContent className="p-6 text-center">
      <Linkedin className="w-12 h-12 text-primary mx-auto mb-4" />
      <h4 className="font-medium mb-2">Connect on LinkedIn</h4>
      <p className="text-xs text-muted-foreground">
        View my full profile
      </p>
    </CardContent>
  </Card>
</a>


              {/* Availability Status */}
              <Card className="border border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-sm">Available for new projects</p>
                      <p className="text-xs text-muted-foreground">Typically responds within 24 hours</p>
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

export default Contact;
