import { ScrollSection } from './ScrollSection';

const FeaturesMinimal = () => {
  const features = [
    {
      number: '001',
      title: 'Independent Gravity',
      description: 'The autonomous ecosystem that is formed inside MAR/S during the creation phase, isolates all industry rules and makes it the most independent label in the universe.',
      icon: '⚡',
    },
    {
      number: '002',
      title: 'Zero Friction',
      description: 'The independent gravity reduces limitations and allows artists to create with minimum friction on any concept. Creating your music will always be a planetary experience.',
      icon: '🌌',
    },
    {
      number: '003',
      title: 'Total Freedom',
      description: 'The MAR/S ecosystem cancels the noise caused by traditional industry. And it doesn\'t damage the most creative ideas. Extremely revolutionary, isn\'t it?',
      icon: '🔮',
    },
  ];

  return (
    <section className="relative w-full bg-background py-48 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Features Grid */}
        <div className="space-y-48">
          {features.map((feature, index) => (
            <ScrollSection key={feature.number}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Number & Icon */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-8xl md:text-9xl opacity-10">
                    {feature.icon}
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-signal font-mono tracking-wider">
                      {feature.number}
                    </p>
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesMinimal;
