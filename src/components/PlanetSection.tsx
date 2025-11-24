import { useEffect, useRef, useState } from 'react';

const PlanetSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ecosystems = [
    {
      title: "Core Protocol",
      subtitle: "AI Genesis Layer",
      description: "가상 아티스트가 생성되는 핵심 AI 프로토콜",
      icon: "⚡",
      color: "signal",
    },
    {
      title: "Creative Biome",
      subtitle: "Content Ecosystem",
      description: "음악, 비주얼, 스토리가 융합되는 창작 생태계",
      icon: "🌌",
      color: "nebula",
    },
    {
      title: "Fandom Zone",
      subtitle: "Community Network",
      description: "팬과 아티스트가 교류하는 커뮤니티 네트워크",
      icon: "🔮",
      color: "dust",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full py-32 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--signal)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--signal)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-6">
          <div 
            className="inline-block"
            style={{
              transform: `scale(${0.8 + scrollProgress * 0.2})`,
              opacity: scrollProgress,
            }}
          >
            <p className="text-signal text-sm tracking-[0.3em] font-mono uppercase mb-4">
              Planetary Structure
            </p>
            <h2 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-mars bg-clip-text text-transparent">
              The MAR/S Ecosystem
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MAR/S는 독립된 중력·세계·법칙을 가진 또 다른 행성입니다
          </p>
        </div>

        {/* Ecosystem Zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystems.map((eco, index) => (
            <div
              key={eco.title}
              className="group relative"
              style={{
                transform: `translateY(${Math.max(0, 1 - scrollProgress) * 100}px)`,
                opacity: scrollProgress,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-signal hover:shadow-glow-signal">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-${eco.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {eco.icon}
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {eco.title}
                    </h3>
                    <p className={`text-sm text-${eco.color} font-mono tracking-wider uppercase`}>
                      {eco.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {eco.description}
                  </p>

                  {/* Signal Line */}
                  <div className="pt-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${eco.color}/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
              </div>

              {/* Orbital Ring */}
              <div className="absolute inset-0 rounded-2xl border border-signal/0 group-hover:border-signal/30 transition-all duration-500" style={{ transform: 'scale(1.05)' }} />
            </div>
          ))}
        </div>

        {/* Planet Core Visualization */}
        <div className="mt-32 text-center">
          <div className="relative inline-block">
            {/* Core Rings */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-planet opacity-50 blur-2xl animate-breathe" />
              <div className="absolute inset-8 rounded-full border-2 border-signal/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-16 rounded-full border-2 border-nebula/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              <div className="absolute inset-24 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl font-black text-foreground">
                  MAR/S
                </span>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground font-mono tracking-widest">
            CORE TEMPERATURE: 2,847°K | GRAVITY: 1.13G
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;
