import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">NA</span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Nilaksh Aggarwal</span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  '.NET Core Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I have 2+ years of experience in software development, specializing in .NET Core, JavaScript, and React Native. 
            I'm passionate about creating innovative solutions and breaking through every barrier with my problem-solving attitude.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href="mailto:nilakshaggarwal1407@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">nilakshaggarwal1407@gmail.com</span>
            </a>
            <a
              href="tel:+919518007106"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Phone size={20} />
              <span>+91 9518007106</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mb-12"
          >
            {/* <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <Github size={24} />
            </motion.a> */}
            <motion.a
              href="https://in.linkedin.com/in/nilaksh-aggarwal-537435205"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
