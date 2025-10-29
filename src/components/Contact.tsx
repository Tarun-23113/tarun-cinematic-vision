import { useState } from "react";
import { Mail, Instagram, Youtube, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
    { icon: Mail, label: "Email", href: "mailto:tarun@example.com", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            Let's Create{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-glow text-background font-semibold transition-all duration-300 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card/60 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
              
              <div className="space-y-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/60 hover:bg-muted border border-border/50 hover:border-secondary/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
              <h4 className="text-lg font-bold mb-3 text-primary">Response Time</h4>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond within 24-48 hours. For urgent projects, 
                please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
