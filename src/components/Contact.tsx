
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/nasif952", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "http://linkedin.com/in/nasif-ahmed-nafi-66a533211", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/nasif951/", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, url: "https://www.youtube.com/@TecholicBangladesh", label: "YouTube" }
  ];

  return (
    <section id="contact" className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            GET IN TOUCH
          </span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-morph rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Email</p>
                    <a href="mailto:nasif.ahmed95@gmail.com" className="font-medium hover:text-accent transition-colors">
                      nasif.ahmed95@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Phone</p>
                    <a href="tel:+8801757458800" className="font-medium hover:text-accent transition-colors">
                      +880 1757 458800
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Location</p>
                    <p className="font-medium">Mirpur 12, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground/70 mb-4">FIND ME ON</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background hover:bg-accent hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-morph rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus-visible:ring-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-background/50 border-border/50 focus-visible:ring-accent"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Subject of your message"
                    className="bg-background/50 border-border/50 focus-visible:ring-accent"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-accent"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
