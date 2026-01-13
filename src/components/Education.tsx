import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-16 md:py-20">
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
            Education
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-10 text-foreground"
          >
            Academic{' '}
            <span className="gradient-text">background</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 md:p-10 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                <a href="https://www.ifheindia.org/icfai-tech-school-hyderabad">ICFAI Tech School, Hyderabad</a>
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>

                {/* <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <a
                    href="https://www.ifheindia.org/icfai-tech-school-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Institution
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
