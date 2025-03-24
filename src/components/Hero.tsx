
import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const typedRef = useRef(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize Typed.js
    if (typedRef.current) {
      const options = {
        strings: [
          'Building innovative solutions with AI',
          'Creating software that matters',
          'Exploring the endless possibilities of technology'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        cursorChar: '|'
      };

      typedInstanceRef.current = new Typed(typedRef.current, options);
    }

    // Cleanup function
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

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
      {/* Enhanced dynamic background elements with improved visibility */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main background image with increased opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-20"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 dark:from-accent/20 dark:to-primary/10 opacity-80 animate-gradient-x"></div>

        {/* Animated gradient orbs with increased size and opacity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/30 to-primary/10 opacity-30 blur-3xl animate-float"
          style={{ animationDuration: '15s' }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-30 blur-3xl animate-float-slow"
          style={{ animationDuration: '20s', animationDelay: '2s' }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-accent/25 to-primary/15 opacity-30 blur-3xl animate-float"
          style={{ animationDuration: '25s', animationDelay: '5s' }}
        ></motion.div>
        
        {/* More visible animated particles with increased size and quantity */}
        <div className="particles-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.7 + 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
              className="absolute rounded-full bg-accent/40 animate-pulse"
              style={{
                width: `${Math.random() * 15 + 8}px`,
                height: `${Math.random() * 15 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Additional floating elements with staggered animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-md animate-pulse" 
          style={{ animationDuration: '4s' }}
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-accent/15 rounded-full blur-md animate-pulse" 
          style={{ animationDuration: '3s', animationDelay: '1s' }}
        ></motion.div>
        
        {/* Enhanced grid pattern with higher opacity */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMjAyMDIwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0gMCA2MCBMIDAGMCI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgb3BhY2l0eT0iMC4xMCI+PC9yZWN0Pjwvc3ZnPg==')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block py-1 px-3 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent"
        >
          Computer Science & AI Enthusiast
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Hi, I'm <span className="text-accent whitespace-nowrap relative">
            Nasif Ahmed Nafi
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"
            ></motion.span>
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto h-16"
        >
          <span ref={typedRef}></span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            href="https://github.com/nasif952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-6 rounded-full font-medium btn-gradient transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nasif.ahmed95@gmail.com&su=Subject&body=Body%20Text%20Here"
            className="flex items-center gap-2 py-2.5 px-6 rounded-full font-medium bg-background/80 backdrop-blur-sm border border-border hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            target="_blank"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
          <ArrowDown className="h-8 w-8 text-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
