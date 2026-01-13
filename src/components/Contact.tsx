import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleEmailClick = () => {
    window.location.href = 'mailto:mmuktanandreddy22@ifheindia.org';
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl gradient-cta-bg p-12 md:p-16 lg:p-20"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Let's build something great together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            >
              I'm currently seeking internship opportunities and engineering roles. 
              If you're looking for a dedicated, detail-oriented developer with a 
              passion for building impactful solutions, let's connect!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
              >
                <a
                  href="https://linkedin.com/in/mukthanand21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
