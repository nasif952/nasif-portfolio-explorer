
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
      {/* Enhanced dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main background image with reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-10"></div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/20 to-primary/5 opacity-20 blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-20 blur-3xl animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/15 to-primary/5 opacity-20 blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
        
        {/* Animated particles */}
        <div className="particles-container absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-accent/30 animate-pulse"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMjAyMDIwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0gMCA2MCBMIDAGMCI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgb3BhY2l0eT0iMC4wNSI+PC9yZWN0Pjwvc3ZnPg==')] opacity-30"></div>
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
