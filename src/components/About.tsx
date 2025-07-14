import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      number: '2+',
      label: 'Years Experience',
      description: 'Professional web development'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '3+',
      label: 'Projects Completed',
      description: 'Across various domains'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '1st',
      label: 'Prize Winner',
      description: 'Technical Quiz Competition'
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: '100%',
      label: 'Dedication',
      description: 'To quality and excellence'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Passionate software engineer with expertise in modern web technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I have 2+ years of experience in software development and specialize in the areas of 
                .NET Core, JavaScript, and React Native. My professional knowledge and problem-solving 
                attitude help me to break through every barrier.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I would like to work in a place where I can improve my knowledge and contribute to 
                meaningful projects. I have developed applications for Legal Firms, Fleet Management, 
                EOS, Political Campaign management, and Project Management Tools.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently working at Ginilytics IT Solution as a Software Engineer, where I use 
                industry-leading tools such as Git and CI/CD pipelines to streamline development 
                and ensure high-quality outcomes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My Strengths
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Always ready for change
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Decision making quality
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Dedication to work
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Keeping a friendly environment among everyone
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Hobbies & Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Cricket', 'Listening Music', 'Chess'].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Languages
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">English</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Hindi</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
