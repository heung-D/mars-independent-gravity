import { useState, useEffect } from 'react';

const Navigation = () => {
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
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full bg-gradient-mars opacity-50 blur-md" />
            <div className="relative w-full h-full rounded-full border-2 border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <span className="text-primary font-black text-sm">M/S</span>
            </div>
          </div>
          <span className="text-xl font-black tracking-tighter bg-gradient-mars bg-clip-text text-transparent">
            MAR/S
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#ecosystem" 
            className="text-sm text-muted-foreground hover:text-signal transition-colors duration-300 tracking-wider uppercase font-medium"
          >
            Ecosystem
          </a>
          <a 
            href="#artists" 
            className="text-sm text-muted-foreground hover:text-signal transition-colors duration-300 tracking-wider uppercase font-medium"
          >
            Artists
          </a>
          <a 
            href="#signals" 
            className="text-sm text-muted-foreground hover:text-signal transition-colors duration-300 tracking-wider uppercase font-medium"
          >
            Signals
          </a>
        </div>

        {/* CTA Button */}
        <button className="group relative px-6 py-2 bg-signal/10 backdrop-blur-sm border border-signal/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-signal hover:shadow-glow-signal">
          <span className="relative z-10 text-sm text-foreground font-medium tracking-wider uppercase">
            Enter
          </span>
          <div className="absolute inset-0 bg-gradient-signal opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
