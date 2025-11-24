const FooterMinimal = () => {
  return (
    <footer className="relative w-full bg-background border-t border-border/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">MAR/S</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Independent Gravity Universe
              <br />
              Where AI artists orbit freely
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Navigate
            </p>
            <div className="space-y-3">
              <a href="#ecosystem" className="block text-foreground/60 hover:text-foreground transition-colors">
                Ecosystem
              </a>
              <a href="#artists" className="block text-foreground/60 hover:text-foreground transition-colors">
                Artists
              </a>
              <a href="#universe" className="block text-foreground/60 hover:text-foreground transition-colors">
                Universe
              </a>
              <a href="#contact" className="block text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Signal Status
            </p>
            <div className="space-y-2 text-sm text-muted-foreground font-mono">
              <p>FREQUENCY: 432.789 Hz</p>
              <p>GRAVITY: 1.13G</p>
              <p>STATUS: ACTIVE</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MAR/S. All signals transmitted from an unknown dimension.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-nebula animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-dust animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterMinimal;
