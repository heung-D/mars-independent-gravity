import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PlanetSection from '@/components/PlanetSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PlanetSection />
      
      {/* Signal Footer */}
      <footer className="relative py-12 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-nebula animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-dust animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="text-sm text-muted-foreground font-mono tracking-widest">
            MAR/S — INDEPENDENT GRAVITY UNIVERSE
          </p>
          <p className="text-xs text-muted-foreground/50">
            © 2024 MAR/S. All signals transmitted from an unknown dimension.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
