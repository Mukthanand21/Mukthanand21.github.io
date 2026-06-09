import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'MediFlow.ai',
    period: 'Jan 2025 – May 2025',
    impact:
      'Reduced manual pharmacy operations by unifying inventory, billing, and supplier workflows into one production-ready system with predictive stock planning.',
    features: [
      'Built backend using Flask and PostgreSQL with REST APIs',
      'Frontend with React.js, Tailwind CSS, and ShadCN/UI',
      'AI-based feature to predict future inventory needs',
      'Real-time communication between frontend and backend',
    ],
    techStack: ['Flask', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'REST APIs', 'AI/ML'],
    demoLabel: 'System Demo',
    demoLink: 'https://github.com/Mukthanand21/MediFlow.ai',
    github: 'https://github.com/Mukthanand21/MediFlow.ai',
  },
  {
    title: 'Rebus Puzzle Web Application',
    period: 'Aug 2025',
    impact:
      'Improved gameplay continuity with dynamic puzzle delivery and real-time answer validation without page reloads.',
    features: [
      'Spring Boot backend for puzzle serving and validation',
      'Responsive frontend with HTML, CSS, and JavaScript',
      'Image-based puzzles with hints system',
      'Seamless puzzle loading without page reloads',
    ],
    techStack: ['Spring Boot', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    demoLabel: 'System Demo',
    demoLink: 'https://github.com/Mukthanand21/rebus-game',
    github: 'https://github.com/Mukthanand21/rebus-game',
  },
  {
    title: 'FAQSense',
    period: 'Oct 2024',
    impact:
      'Delivered sub-second FAQ resolution through semantic retrieval, reducing repeated support queries with RAG-powered answers.',
    features: [
      'FAISS vector store with Sentence-Transformers embeddings',
      'Groq API for fast LLM inference',
      'Deployed on Streamlit Cloud with live demo',
      'Sub-second semantic retrieval on FAQ corpus',
    ],
    techStack: ['FAISS', 'Sentence-Transformers', 'Groq API', 'Streamlit', 'Python'],
    demoLabel: 'Live Demo',
    demoLink: 'https://faqsense.streamlit.app',
    github: 'https://github.com/Mukthanand21/FAQSense',
  },
  {
    title: 'FixIt — Coding Agent',
    period: 'Dec 2024',
    impact:
      'Accelerated debugging workflows by automatically analyzing compiler/runtime errors and returning corrected code suggestions.',
    features: [
      'Groq-powered LLM backend for fast error analysis',
      'Accepts code + error message, returns fixed code',
      'Built and shipped in under 24 hours at hackathon',
    ],
    techStack: ['Groq API', 'Python', 'LangChain', 'Streamlit'],
    demoLabel: 'System Demo',
    demoLink: 'https://github.com/Mukthanand21/FixIt',
    github: 'https://github.com/Mukthanand21/FixIt',
  },
  {
    title: 'Scheme Saathi',
    period: 'Mar 2026 — Autonomous Agents Hackathon',
    impact:
      'Improved scheme discoverability for Telugu-speaking small business owners using multilingual, voice-first interactions.',
    features: [
      'Agentic scheme matching powered by Groq LLM for intelligent, context-aware recommendations',
      'STT (Speech-to-Text) & TTS (Text-to-Speech) for voice-first, non-literate user support',
      'Built and deployed in under 2 days; community-focused tool aligned with Swecha/FOSS values',
    ],
    techStack: ['Python', 'nanobot', 'python-telegram-bot', 'Groq API'],
    demoLabel: 'Live Demo',
    demoLink: 'https://t.me/scheme_saathi_bot',
    github: 'https://github.com/Mukthanand21/scheme-saathi',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <div className="section-container">
          <div className="text-left mb-12">
            <p className="font-mono text-sm md:text-base text-muted-foreground tracking-wide mb-4">
              // Selected engineering work
            </p>
            <h2 id="projects-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Projects
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Production-focused systems built to solve real problems with measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-card h-full p-8 border border-border/60 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                    Problem solved / Impact
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.impact}</p>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/80 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-border/70 bg-secondary/35 text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.demoLabel}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
