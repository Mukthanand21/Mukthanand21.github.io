import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Globe,
  Database,
  Wrench,
  FileCode,
  Server,
  Boxes,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'Java', 'C'],
  },
  {
    title: 'Web & Backend',
    icon: Globe,
    skills: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Flask', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'AI & ML',
    icon: Boxes,
    skills: ['LangChain', 'RAG', 'FAISS', 'Sentence-Transformers', 'wav2vec2', 'Groq API'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Docker', 'GitLab CI/CD', 'Git', 'Linux', 'Postman', 'VS Code'],
  },
];

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Python: FileCode,
  Java: FileCode,
  C: FileCode,
  React: Globe,
  Vite: Globe,
  'Tailwind CSS': Globe,
  FastAPI: Server,
  Flask: Server,
  'Spring Boot': Server,
  'REST APIs': Boxes,
  MySQL: Database,
  PostgreSQL: Database,
  LangChain: Boxes,
  RAG: Boxes,
  FAISS: Boxes,
  'Sentence-Transformers': Boxes,
  wav2vec2: Boxes,
  'Groq API': Boxes,
  Docker: Wrench,
  'GitLab CI/CD': Wrench,
  Git: Wrench,
  Linux: Wrench,
  Postman: Wrench,
  'VS Code': Wrench,
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const row1 = skillCategories.slice(0, 2);
  const row2 = skillCategories.slice(2);

  return (
    <section id="skills" className="py-16 md:py-20">
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
              Skills
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            >
              Technical{' '}
              <span className="gradient-text">expertise</span>
            </motion.h2>
          </div>

          {/* Row 1: 2 wide cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {row1.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
                isInView={isInView}
                iconMap={iconMap}
              />
            ))}
          </div>

          {/* Row 2: 3 normal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row2.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index + 2}
                isInView={isInView}
                iconMap={iconMap}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: (typeof skillCategories)[number];
  index: number;
  isInView: boolean;
  iconMap: Record<string, React.FC<{ className?: string }>>;
}

const SkillCard = ({ category, index, isInView, iconMap }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="glass-card p-6 hover:shadow-card-hover transition-all duration-300 group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <category.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-display font-semibold text-foreground">
        {category.title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, skillIndex) => {
        const Icon = iconMap[skill] || FileCode;
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: 0.4 + index * 0.1 + skillIndex * 0.05,
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/skill"
          >
            <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover/skill:text-primary transition-colors" />
            <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
              {skill}
            </span>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);
