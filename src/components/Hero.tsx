
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
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=3274')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-accent/10 rounded-full filter blur-2xl opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <span className="inline-block py-1 px-3 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent opacity-0 animate-fade-in animate-delay-100">
          Computer Science & AI Enthusiast
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in animate-delay-200">
          Hi, I'm <span className="text-accent whitespace-nowrap relative">
            Nasif Ahmed Nafi
            <span className="absolute bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-300">
          Building innovative solutions with AI and software development, while exploring the endless possibilities of technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in animate-delay-400">
          <a 
            href="https://github.com/nasif952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full font-medium bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            View My Work
          </a>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nasif.ahmed95@gmail.com&su=Subject&body=Body%20Text%20Here"
            className="flex items-center gap-2 py-2.5 px-5 rounded-full font-medium bg-background border border-border hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fade-in animate-delay-500"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
          <ArrowDown className="h-8 w-8 text-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
