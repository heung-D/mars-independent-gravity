import { useEffect, useState } from 'react';

const HeroMinimal = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-16">
        {/* Logo */}
        <div 
          className={`transition-all duration-1500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter text-foreground">
            MAR/S
          </h1>
        </div>

        {/* Tagline */}
        <div 
          className={`transition-all duration-1500 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            The most independent label
            <br />
            in the universe.
          </p>
        </div>

        {/* Subtext */}
        <div 
          className={`transition-all duration-1500 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            MAR/S crossed the atmosphere.
            <br />
            It is now among us.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-foreground/20" />
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
