
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold">Nasif Ahmed</h2>
            <p className="text-foreground/70 mt-2 max-w-md">
              Building innovative solutions with AI and software development.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nasif Ahmed. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-sm">
            "AI has never taken anyone's job; people who fail to adapt will simply become less relevant."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
