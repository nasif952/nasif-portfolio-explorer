
import { GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "BRAC University",
      period: "2021 – Expected Graduation: June 2025",
      gpa: "3.72/4.00"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science",
      period: "2020",
      gpa: "5.00/5.00"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Science",
      period: "2018",
      gpa: "5.00/5.00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 text-sm font-medium text-accent mb-2">
              <GraduationCap className="h-4 w-4" />
              <span>EDUCATION</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Academic Background</h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              My educational journey shaped my knowledge and skills in computer science and technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index} 
                className="glass-morph rounded-xl p-8 card-hover transition-all duration-300 hover:translate-y-[-4px]"
              >
                <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                <p className="text-lg text-foreground/70 mb-1">{item.institution}</p>
                <p className="text-foreground/60 mb-3">{item.period}</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  GPA: {item.gpa}
                </div>

                {index === 0 && (
                  <div className="mt-6 p-6 rounded-lg bg-muted/50 border border-border/40">
                    <h4 className="text-lg font-semibold mb-3">Key Achievements & Courses</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>Dean's List achievement for academic excellence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>Advanced courses in AI, Machine Learning, and Data Structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>Research project on Retrieval-Augmented Generation systems</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
