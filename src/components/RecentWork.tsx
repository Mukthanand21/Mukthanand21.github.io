import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Trophy, ExternalLink } from 'lucide-react';

export const RecentWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const works = [
    {
      title: 'AI Coding Agents Hackathon',
      context: 'Viswam AI',
      description:
        'Built prompt-driven coding agents focused on error analysis, structured fixes, and automated reasoning using large language models.',
      tags: ['Prompt Engineering', 'LLMs', 'Hackathon'],
      icon: Brain,
      link: 'https://code.swecha.org/viswam/internships/custom-agents',
    },
    {
      title: 'RAG-based FAQ Assistant (Hackathon)',
      context: 'Viswam AI',
      description:
        'Developed a Retrieval-Augmented Generation (RAG) application using embeddings and vector search to answer domain-specific FAQs.',
      tags: ['RAG', 'Streamlit', 'Vector Search'],
      icon: Code2,
      link: 'https://faqsense.streamlit.app/',
    },
    {
      title: 'Group Portfolio Website',
      context: 'Viswam AI (V6 Group)',
      description:
        'Collaborated on a group portfolio website using GitLab Pages, modern UI tooling, and CI/CD workflows.',
      tags: ['GitLab Pages', 'CI/CD', 'React'],
      icon: Trophy,
      link: 'https://v6groupportfolio-fd9a3e.gitlab.io/#/',
    },
  ];

  return (
    <section id="recent-work" className="py-16 md:py-20">
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
            Recent <span className="gradient-text">work</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => {
              const Icon = work.icon;

              return (
                <motion.a
                  key={work.title}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group block"
                >
                  {/* Icon + Link indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>

                  {/* Context */}
                  <p className="text-sm text-primary font-medium mb-4">
                    {work.context}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {work.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
