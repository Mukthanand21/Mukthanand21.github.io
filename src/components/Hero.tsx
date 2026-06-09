import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero-bg noise-bg">
      <div className="container mx-auto px-6 py-28 md:py-36 lg:py-44 relative z-10">
        <div className="max-w-4xl text-left">
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-wide mb-6">
            // Hyderabad, India • Final Year CSE
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-primary">Mukthanand</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            I build production-ready full-stack applications and intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
            >
              View My Work →
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/35 text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Read Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
