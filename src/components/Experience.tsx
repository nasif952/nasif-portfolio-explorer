
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [

    {
      title: "AI Engineer",
      company: "Diamond AI Tech",
      period: "2025 - Present",
      description: "As an AI Engineer at Diamond AI Tech, I specialize in automating workflows, integrating in-house AI applications, and utilizing market standard tools for seamless automation. My focus is on enhancing operational efficiency through innovative AI solutions and workflow automation.",
      tags: ["Automation", "Ai Workflows", "AI Integration", "In-House AI Applications", "Tech Solutions"]
    },
    {
      title: "Research Analyst",
      company: "Techolic Bangladesh",
      period: "2023 - Present",
      description: "Conducted in-depth benchmarking and tech product reviews. Provided expert guidance on purchasing decisions. Ensured accuracy and reliability in evaluations.",
      tags: ["Product Analysis", "Tech Reviews", "Benchmarking"]
    },
    {
      title: "Founder",
      company: "Talking Tech",
      period: "2021 - Present",
      description: "Established a tech-focused educational platform. Created insightful content on emerging technologies and industry trends. Bridged the gap between theoretical knowledge and real-world applications.",
      tags: ["Content Creation", "Tech Education", "Community Building"]
    },
    {
      title: "Founder",
      company: "Gaming Buddy",
      period: "2020 - 2022",
      description: "Launched a gaming service business during COVID-19. Provided PlayStation game card sales, digital rentals, and customer support.",
      tags: ["E-commerce", "Customer Service", "Digital Products"]
    }
  ];

  return (
    <section id="experience" className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            CAREER
          </span>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey through the tech industry, showcasing key roles and achievements.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background rounded-full border-4 border-accent -ml-4 md:ml-[-1rem] z-10 flex items-center justify-center">
                  {index === 0 ? (
                    <Award className="h-3 w-3 text-accent" />
                  ) : (
                    <Briefcase className="h-3 w-3 text-accent" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-morph rounded-xl p-6 card-hover">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <p className="text-sm text-foreground/60">{exp.period}</p>
                    </div>
                    <p className="text-foreground/80 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
