
import { useState } from 'react';
import { ExternalLink, Github, Database, Server, Globe, BookOpen, Bot, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "PC Building Simulator",
      description: "A website where users can configure their PC builds with pricing and estimated power requirements.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React.js", "Java", "Spring Boot", "MongoDB"],
      category: "web",
      icon: <Globe className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 2,
      title: "Student Room Rental Management System",
      description: "A web platform for students to find and rent accommodations near their campus.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["PHP", "CSS", "SQL", "HTML"],
      category: "web",
      icon: <Database className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 3,
      title: "Car Servicing Centre",
      description: "A website allowing car owners to book mechanics, with an admin system for request approvals and workspace management.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      technologies: ["Python", "HTML", "CSS", "MySQL"],
      category: "web",
      icon: <Server className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 4,
      title: "Brain Stroke Analysis and Classification",
      description: "Applied ML algorithms to train datasets and analyze stroke risks.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      category: "ai",
      icon: <BookOpen className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 5,
      title: "Agriculture Bot Using NLP",
      description: "RAG-based chatbot retrieving agricultural data from Pinecone DB and providing answers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Pinecone", "GPT-4o", "DeepSeek R1", "LangChain", "Whisper"],
      category: "ai",
      icon: <Bot className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 6,
      title: "Last Minute AI Book (Medical Student Bot)",
      description: "An AI bot trained on medical books to provide instant responses for medical students.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Pinecone", "GPT-4o", "DeepSeek R1", "LangChain"],
      category: "ai",
      icon: <MessageSquare className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-md" />
    },
    {
      id: 7,
      title: "Smart Tele",
      description: "A Telegram bot that converses with AI, answers critical questions from images, manages and creates events for work-life balance automatically, and supports multiple languages.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Telegram API", "AI Chatbot", "Image Recognition", "Multilingual NLP"],
      category: "ai",
      icon: <MessageSquare className=\"h-10 w-10 text-accent p-2 bg-accent/10 rounded-md\" />
    },
    {
      id: 8,
      title: "Whatsai",
      description: "A highly intelligent WhatsApp integration that automates personal email workflows from sending to receiving and provides concise overviews.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["WhatsApp API", "AI Automation", "NLP", "Email Integration"],
      category: "ai",
      icon: "<MessageSquare className=\"h-10 w-10 text-accent p-2 bg-accent/10 rounded-md\" />"
    },
    {
      id: 9,
      title: "Smart Rebot",
      description: "A React-based bot that understands English and Arabic, assisting potential clients by providing precise information from documents using a RAG-based approach.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["React", "RAG", "NLP", "Multilingual Support"],
      category: "web",
      icon: "<MessageSquare className=\"h-10 w-10 text-accent p-2 bg-accent/10 rounded-md\" />"
    },
    {
      id: 10,
      title: "Windo-Copycat",
      description: "An automation tool that replicates exact patterns of mouse, keyboard, and gamepad inputs to streamline repetitive tasks on a PC.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Automation", "Input Simulation", "Cross-Platform Compatibility"],
      category: "ai",
      icon: "<MessageSquare className=\"h-10 w-10 text-accent p-2 bg-accent/10 rounded-md\" />"
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-muted/30 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            MY WORK
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of my recent work spanning web development, AI, and machine learning applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button 
            variant={activeFilter === 'all' ? "default" : "outline"}
            onClick={() => setActiveFilter('all')}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'web' ? "default" : "outline"}
            onClick={() => setActiveFilter('web')}
            className="rounded-full"
          >
            Web Development
          </Button>
          <Button 
            variant={activeFilter === 'ai' ? "default" : "outline"}
            onClick={() => setActiveFilter('ai')}
            className="rounded-full"
          >
            AI & ML
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden glass-morph card-hover border-none">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader className="relative">
                <div className="absolute -top-8 left-4">
                  {project.icon}
                </div>
                <CardTitle className="mt-6">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-background/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
