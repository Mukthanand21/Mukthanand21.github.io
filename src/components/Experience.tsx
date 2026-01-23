import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'AI Intern',
      company: 'Viswam AI',
      companyUrl: 'https://viswam.ai/',
      location: 'IIIT Hyderabad, India',
      period: 'Jan 2026 – Present',
      isCurrent: true,
      responsibilities: [
        'Contributing to research and development of AI/ML models for low-resource and Indian languages',
        'Performing data preprocessing, annotation, and exploratory analysis for NLP and speech-based systems',
        'Assisting in model evaluation, experimentation, and performance analysis',
        'Contributing to ethical, inclusive, and socially impactful AI research initiatives',
      ],
    },
    {
      title: 'Project Intern',
      company: 'Skillbanc',
      companyUrl: 'https://skillbanc.com/Home',
      location: 'Remote',
      period: 'June 2024 – July 2024',
      team: 'Ed-Tech Content Development Team',
      certificateUrl:
        'https://drive.google.com/file/d/15BHNV2Cd1YpJTfuHPRqbix3iYZ4BUaaB/view?usp=sharing',
      responsibilities: [
        'Built reusable animation templates using Manim to simplify high school math and science topics',
        'Wrote modular Python scripts to produce reusable, curriculum-focused educational animations',
        'Contributed to the Skillbanc mobile application using Flutter and Dart for UI enhancements',
        'Gained hands-on experience in animation workflows and cross-platform mobile app development',
      ],
    },
  ];

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
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-12 text-foreground"
          >
            Professional <span className="gradient-text">experience</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${
                      exp.isCurrent
                        ? 'bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)] animate-pulse'
                        : 'bg-primary/60'
                    }`}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="glass-card p-8 md:p-10 hover:shadow-card-hover transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            {exp.title}
                          </h3>

                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.4)] animate-pulse">
                              <Sparkles className="w-3 h-3" />
                              Current
                            </span>
                          )}
                        </div>

                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-primary font-semibold mt-1 inline-flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                        </a>

                        {exp.team && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {exp.team}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-4 mb-6">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + i * 0.08,
                          }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Certificate */}
                    {exp.certificateUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                      >
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Certificate
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
