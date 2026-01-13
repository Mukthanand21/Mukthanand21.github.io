import { motion } from 'framer-motion';
import { Github, Gitlab, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Mukthanand21',
      label: 'GitHub',
    },
    {
      icon: Gitlab,
      href: 'https://gitlab.com/mukthanandreddy21',
      label: 'GitLab',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mukthanand21',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:mmuktanandreddy22@ifheindia.org',
      label: 'Email',
    },
  ];

  return (
    <footer className="py-10 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} Mukthanand. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
