import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Apr 2025',
    credentialUrl:
      'https://www.credly.com/badges/26cfa958-c647-43fb-9616-c94a3dd1c7e6/print',
    badge: '☁️',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Coursera (Meta)',
    date: 'Sep 2024',
    grade: '91.15%',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/OBWQM74M4TS5',
    badge: '💻',
  },
  {
    title: 'Exploratory Data Analysis',
    issuer: 'FutureSkills Prime (NASSCOM)',
    date: 'Oct 2023',
    credentialUrl:
      'https://drive.google.com/file/d/1S0TWllB8g1fkS7PU1RRGUUH_djrRN5ww/view',
    badge: '📊',
  },
];

export const Certifications = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-container"
        >
          {/* Section Heading */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            >
              {/* Verified <span className="gradient-text">Credentials</span> */}
              Certi<span className="gradient-text">fications</span>

            </motion.h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="glass-card h-full p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover flex flex-col">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{cert.badge}</span>
                    <Award className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Clickable Title */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title"
                  >
                    <h3
                      className="flex items-center gap-2 text-lg font-display font-semibold text-foreground mb-3 leading-tight
                                 transition-colors hover:text-primary hover:underline underline-offset-4 cursor-pointer"
                    >
                      {cert.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/title:opacity-60 transition-opacity" />
                    </h3>
                  </a>

                  {/* Details */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.grade && (
                      <div className="inline-block mt-2 px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                        Grade: {cert.grade}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
