import { useEffect, useState } from 'react';

const HeroMinimal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Nebula Background - Multiple Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 texture-ai-terrain" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] opacity-30 animate-breathe" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-nebula/15 rounded-full blur-[180px] opacity-40 animate-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/10 rounded-full blur-[250px] opacity-20 animate-gravity-lens" />
      </div>

      {/* AI Signal Scan Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-signal/5 via-transparent to-transparent h-px animate-signal-scan" />
        <div className="absolute inset-0 bg-gradient-to-b from-nebula/5 via-transparent to-transparent h-px animate-signal-scan" style={{ animationDelay: '4s' }} />
      </div>

      {/* Frequency Lines Grid */}
      <div className="absolute inset-0 texture-synthetic-metal opacity-30" />

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-signal/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content with Gravity Distortion */}
      <div 
        className="relative z-10 max-w-7xl mx-auto text-center space-y-16"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Logo with Signal Effect */}
        <div 
          className={`relative transition-all duration-1500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Signal Glow Behind Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter text-signal/20 blur-xl">
              MAR/S
            </div>
          </div>
          
          {/* Main Logo */}
          <h1 className="relative text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter text-foreground">
            <span className="inline-block hover:text-primary transition-colors duration-500">M</span>
            <span className="inline-block hover:text-primary transition-colors duration-500">A</span>
            <span className="inline-block hover:text-primary transition-colors duration-500">R</span>
            <span className="inline-block text-signal/60">/</span>
            <span className="inline-block hover:text-primary transition-colors duration-500">S</span>
          </h1>

          {/* Frequency Lines Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent animate-signal-pulse" />
          </div>
        </div>

        {/* Tagline with Text Reveal */}
        <div 
          className={`transition-all duration-1500 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            The most <span className="text-primary font-normal">independent</span> label
            <br />
            in the <span className="text-signal/80">universe</span>.
          </p>
        </div>

        {/* Subtext with Signal Indicator */}
        <div 
          className={`transition-all duration-1500 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-signal rounded-full animate-signal-pulse" />
            <p className="text-xs text-signal font-mono tracking-widest uppercase">
              Signal Detected
            </p>
            <div className="w-2 h-2 bg-signal rounded-full animate-signal-pulse" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MAR/S crossed the atmosphere.
            <br />
            It is now <span className="text-nebula/80">among us</span>.
          </p>
        </div>
      </div>

      {/* Scroll Indicator with Signal */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float z-20">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase mb-2">Explore</p>
          <div className="relative">
            <div className="w-px h-16 bg-gradient-to-b from-signal/50 via-foreground/20 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-signal rounded-full animate-signal-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
