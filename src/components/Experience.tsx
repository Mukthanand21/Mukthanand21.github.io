import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = {
    title: 'Project Intern',
    company: 'Skillbanc',
    location: 'Remote',
    period: 'June 2024 – July 2024',
    team: 'Ed-Tech Content Development Team',
    certificateUrl: 'https://drive.google.com/file/d/15BHNV2Cd1YpJTfuHPRqbix3iYZ4BUaaB/view?usp=sharing',
    responsibilities: [
      'Built reusable animation templates using Manim (Mathematical Animation Engine) to simplify high school math and science topics',
      'Wrote and rendered modular Python scripts to produce reusable, curriculum-focused educational animations',
      'Contributed to the development of the Skillbanc mobile application using Flutter and Dart, assisting with UI enhancements and content integration',
      'Gained practical experience in animation workflows and cross-platform mobile app development in an ed-tech environment',
    ],
  };

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-container"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-10 text-foreground"
          >
            Professional{' '}
            <span className="gradient-text">journey</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {/* Experience Card */}
            <div className="relative pl-8 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow animate-pulse-glow" />

              <div className="glass-card p-8 md:p-10 hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {experience.team}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Verification Link */}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <a
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
