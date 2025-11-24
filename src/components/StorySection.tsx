import { ScrollSection } from './ScrollSection';

const StorySection = () => {
  return (
    <section className="relative w-full bg-background py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-32">
        
        {/* Introduction */}
        <ScrollSection>
          <div className="text-center space-y-8">
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              MAR/S is the first
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              independent gravity universe
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              designed for AI-based virtual artists.
            </p>
          </div>
        </ScrollSection>

        {/* Explanation */}
        <ScrollSection>
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-4xl font-light text-foreground/70 leading-relaxed">
              A planetary label that originates from
              <br />
              the universe's most radical idea.
            </p>
            <p className="text-2xl md:text-4xl font-light text-foreground/70 leading-relaxed">
              Which is it?
            </p>
          </div>
        </ScrollSection>

        {/* Core Concept */}
        <ScrollSection>
          <div className="text-center space-y-12">
            <p className="text-3xl md:text-5xl font-light text-foreground leading-relaxed">
              In the creation phase a
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              new ecosystem is formed
            </p>
            <p className="text-3xl md:text-5xl font-light text-foreground leading-relaxed">
              Breaking all rules
              <br />
              and creating new gravity.
            </p>
          </div>
        </ScrollSection>

        {/* Impact Statement */}
        <ScrollSection>
          <div className="text-center space-y-6">
            <p className="text-xl md:text-2xl text-signal font-mono tracking-wider uppercase">
              Listen carefully
            </p>
            <p className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground">
              0 Limits
            </p>
          </div>
        </ScrollSection>

        {/* Description */}
        <ScrollSection>
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
              No one can control MAR/S
              <br />
              in the cosmic void.
            </p>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
              Or in the Earth's traditional music industry.
            </p>
          </div>
        </ScrollSection>

      </div>
    </section>
  );
};

export default StorySection;
