import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    /* {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com',
    }, */
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/nilaksh-aggarwal-537435205',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: 'Email',
      url: 'mailto:nilakshaggarwal1407@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      name: 'Phone',
      url: 'tel:+919518007106',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Nilaksh Aggarwal
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Software Engineer passionate about creating innovative solutions with 
                  modern technologies. Specializing in .NET Core, React.js, and full-stack development.
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>using React & TypeScript</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:nilakshaggarwal1407@gmail.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">nilakshaggarwal1407@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919518007106"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 9518007106</span>
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Nilaksh Aggarwal. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                Currently working at Ginilytics IT Solution
              </motion.span>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
