
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Publications', href: '/#publications' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    // For education page, navigate normally
    if (sectionId === '/education') {
      setMobileMenuOpen(false);
      return;
    }
    
    // For homepage sections on the homepage
    if (location.pathname === '/' && sectionId.startsWith('/#')) {
      const element = document.querySelector(sectionId.substring(1));
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
        setMobileMenuOpen(false);
      }
    } 
    // For homepage sections when on a different page
    else if (sectionId.startsWith('/#')) {
      setMobileMenuOpen(false);
      // Let the Link component handle the navigation
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-display font-bold tracking-tight opacity-90 hover:opacity-100 transition-opacity"
        >
          Nasif Ahmed Nafi
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <Link 
                key={link.name}
                to={link.href}
                className="nav-link"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
              >
                {link.name}
              </Link>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button 
            variant="outline"
            className="ml-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
            onClick={() => window.open('nasif952/nasif-portfolio-explorer/public/cv/cv_nasifahmednafi.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg border-t border-border/40 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground py-2 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground py-2 font-medium transition-colors duration-200"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 w-full mt-2"
              onClick={() => window.open('/nasif-cv.pdf', '_blank')}
            >
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
