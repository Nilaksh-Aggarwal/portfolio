import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParticleBackground />
        
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              
              <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Achievements />
                <Contact />
              </main>
              
              <Footer />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
