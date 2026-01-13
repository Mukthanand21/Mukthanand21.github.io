import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'MediFlow.ai',
    period: 'Jan 2025 – May 2025',
    description:
      'A full-stack web application to manage pharmacy operations including inventory, sales, suppliers, and medicine tracking with AI-powered inventory predictions.',
    highlights: [
      'Built backend using Flask and PostgreSQL with REST APIs',
      'Frontend with React.js, Tailwind CSS, and ShadCN/UI',
      'AI-based feature to predict future inventory needs',
      'Real-time communication between frontend and backend',
    ],
    techStack: ['Flask', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'REST APIs', 'AI/ML'],
    github: 'https://github.com/Mukthanand21/MediFlow.ai',
  },
  {
    title: 'Rebus Puzzle Web Application',
    period: 'Aug 2025',
    description:
      'A browser-based puzzle game with dynamic API calls, real-time feedback, and responsive design for an engaging gameplay experience.',
    highlights: [
      'Spring Boot backend for puzzle serving and validation',
      'Responsive frontend with HTML, CSS, and JavaScript',
      'Image-based puzzles with hints system',
      'Seamless puzzle loading without page reloads',
    ],
    techStack: ['Spring Boot', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Mukthanand21/rebus-game',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-container"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Projects
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            >
              Featured{' '}
              <span className="gradient-text">work</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group"
              >
                <div className="glass-card h-full p-8 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {/* <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group/btn border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
