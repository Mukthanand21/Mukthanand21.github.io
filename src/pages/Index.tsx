import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { RecentWork } from '@/components/RecentWork';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <RecentWork />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
