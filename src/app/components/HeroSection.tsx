import { PromptBar } from './PromptBar';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Prompt Bar and Controls */}
        <div className="space-y-8">
          <PromptBar />
        </div>

        {/* Right side - Robot Image */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={heroImage} 
            alt="Botless Robot holding Return sign" 
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}