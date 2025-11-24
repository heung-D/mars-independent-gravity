import { useEffect, useRef, useState } from 'react';
import marsHero from '@/assets/mars-hero.jpg';
import signalOverlay from '@/assets/signal-overlay.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Breathing Nebula Background */}
      <div className="absolute inset-0 bg-gradient-planet opacity-50 animate-breathe" />
      
      {/* Mars Planet Surface */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(${isLoaded ? 1 : 1.2})`,
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <img 
          src={marsHero} 
          alt="Mars Surface" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* AI Signal Overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-screen animate-signal-pulse"
        style={{
          backgroundImage: `url(${signalOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Glitch Effect Layer */}
      <div className="absolute inset-0 bg-signal/5 animate-glitch opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Logo/Title with Orbit Effect */}
          <div className="relative">
            <h1 
              className="text-8xl md:text-9xl font-black tracking-tighter mb-4 gravity-warp"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
                background: 'var(--gradient-mars)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'var(--glow-mars)',
              }}
            >
              MAR/S
            </h1>
            
            {/* Orbital Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-signal/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-nebula/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Signal Detected Message */}
          <div className="space-y-2 animate-float">
            <p className="text-signal text-sm tracking-[0.3em] font-mono uppercase">
              Signal Detected
            </p>
            <p className="text-2xl md:text-4xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Independent Gravity Universe
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            지구가 아닌, MAR/S만의 중력이 작동하는 또다른 우주 생태계
          </p>

          {/* CTA - Signal Entry */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              className="group relative px-8 py-4 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-glow-mars"
            >
              <span className="relative z-10 text-foreground font-medium tracking-wider">
                Enter the Universe
              </span>
              <div className="absolute inset-0 bg-gradient-mars opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>
            
            <button 
              className="group relative px-8 py-4 bg-signal/10 backdrop-blur-sm border border-signal/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-signal hover:shadow-glow-signal"
            >
              <span className="relative z-10 text-foreground font-medium tracking-wider">
                Explore Signals
              </span>
              <div className="absolute inset-0 bg-gradient-signal opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>
          </div>

          {/* Frequency Indicator */}
          <div className="pt-12 space-y-2">
            <div className="flex justify-center gap-1">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 bg-signal/50 animate-signal-pulse"
                  style={{
                    height: `${Math.random() * 40 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-signal/70 font-mono tracking-widest">
              FREQUENCY: 432.789 Hz
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground tracking-widest font-mono">SCROLL TO EXPLORE</p>
          <div className="w-px h-16 bg-gradient-to-b from-signal/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
