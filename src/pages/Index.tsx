import MinimalNav from '@/components/MinimalNav';
import HeroMinimal from '@/components/HeroMinimal';
import StorySection from '@/components/StorySection';
import FeaturesMinimal from '@/components/FeaturesMinimal';
import FooterMinimal from '@/components/FooterMinimal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNav />
      <HeroMinimal />
      <StorySection />
      <FeaturesMinimal />
      <FooterMinimal />
    </div>
  );
};

export default Index;
