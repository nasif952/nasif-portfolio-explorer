
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <span className="inline-block py-1 px-3 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent opacity-0 animate-fade-in animate-delay-100">
          Computer Science & AI Enthusiast
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in animate-delay-200">
          Hi, I'm <span className="text-accent whitespace-nowrap">Nasif Ahmed Nafi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-300">
          Building innovative solutions with AI and software development, while exploring the endless possibilities of technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in animate-delay-400">
          <a 
            href="https://github.com/nasif952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full font-medium bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            View My Work
          </a>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nasif.ahmed95@gmail.com&su=Subject&body=Body%20Text%20Here"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full font-medium bg-background border border-border hover:bg-muted/50 transition-transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fade-in animate-delay-500"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-8 w-8 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
