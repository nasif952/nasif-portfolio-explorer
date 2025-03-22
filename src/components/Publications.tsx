
import { FileText, Book, Youtube, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "Modern AI-Driven Gaming Industry",
      type: "article",
      platform: "Medium",
      description: "An exploration of how AI is transforming the modern gaming industry.",
      link: "https://medium.com/@nasif.ahmed95/modern-ai-driven-gaming-industry-and-one-of-its-finest-concepts-06402995f159",
      icon: <Book className="h-6 w-6" />
    },
    {
      title: "Google AI Studio: Innovations in Learning",
      type: "article",
      platform: "Medium",
      description: "An examination of Google AI Studio and its impact on learning and education.",
      link: "https://medium.com/@nasif.ahmed95/google-ai-studio-an-example-of-simple-innovations-that-can-make-a-real-difference-in-learning-29d62e43977c",
      icon: <Book className="h-6 w-6" />
    },
    {
      title: "HOW DLSS EVOLVED?",
      type: "video",
      platform: "YouTube",
      description: "A video tutorial explaining the evolution of NVIDIA's DLSS technology.",
      link: "#",
      icon: <Youtube className="h-6 w-6" />
    },
    {
      title: "From Noise to Clear Images! Stable Diffusion Model Explained",
      type: "video",
      platform: "YouTube",
      description: "A comprehensive tutorial on how Stable Diffusion models work.",
      link: "#",
      icon: <Youtube className="h-6 w-6" />
    }
  ];

  return (
    <section id="publications" className="section-padding bg-muted/30 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            CONTENT
          </span>
          <h2 className="section-heading">Publications & Media</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Articles, videos, and tutorials I've created to share knowledge and insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <a 
              key={index} 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="glass-morph h-full card-hover border-none">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-accent/10 text-accent">
                        {pub.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {pub.type === "article" ? "ARTICLE" : "VIDEO"}
                        </div>
                        <div className="text-foreground/80">
                          {pub.platform}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="mt-3 group-hover:text-accent transition-colors">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {pub.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="inline-flex items-center text-sm font-medium text-accent underline-accent">
                    Read More
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
