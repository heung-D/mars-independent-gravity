import { useState, useEffect } from 'react';

const MinimalNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-black tracking-tighter text-foreground">
          MAR/S
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#ecosystem" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
          >
            Ecosystem
          </a>
          <a 
            href="#artists" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
          >
            Artists
          </a>
          <a 
            href="#universe" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
          >
            Universe
          </a>
          <a 
            href="#contact" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MinimalNav;
