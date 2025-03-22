
import { User, Code, Brain, Languages, Laptop } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "AI & Machine Learning",
      items: ["RAG-based chatbot development", "AI agent building (N8n)", "ML model training"]
    },
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Programming",
      items: ["Python", "Java", "PHP", "HTML", "CSS", "C"]
    },
    {
      icon: <Laptop className="h-6 w-6 text-accent" />,
      title: "Tech & Media",
      items: ["Hardware reviews", "AI image generation (ComfyUI)", "Video editing", "Presentation"]
    },
    {
      icon: <Languages className="h-6 w-6 text-accent" />,
      title: "Languages",
      items: ["English", "Bengali"]
    }
  ];

  return (
    <section id="about" className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-2">
                <User className="h-4 w-4" />
                <span>ABOUT ME</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A passionate computer science student with a focus on AI innovation
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert mb-8">
                <p>
                  I am a highly motivated Computer Science student at BRAC University with a strong passion for technology and innovation. 
                  I'm enthusiastic about Artificial Intelligence, with hands-on experience in Generative AI services, building RAG architectures, 
                  and leveraging N8n workflows for AI agents.
                </p>
                <p>
                  Proficient in various programming languages, I have a solid foundation in software development and AI model implementation. 
                  My technical expertise is complemented by strong leadership, problem-solving, and communication skills from my experiences 
                  in customer service and digital product sales.
                </p>
                <blockquote>
                  "AI has never taken anyone's job; people who fail to adapt will simply become less relevant."
                </blockquote>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href="https://github.com/nasif952" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/nasif-ahmed-nafi-66a533211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://medium.com/@nasif.ahmed95" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors"
                >
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-2">
                <Code className="h-4 w-4" />
                <span>SKILLS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="glass-morph rounded-xl p-6 card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      {skill.icon}
                      <h3 className="text-lg font-bold">{skill.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
