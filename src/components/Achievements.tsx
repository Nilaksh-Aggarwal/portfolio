import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: '1st Prize in Technical Quiz',
      organization: 'Tilak Raj Chadha Institute of Management and Technology',
      description: 'Won first place in the technical quiz competition, demonstrating strong knowledge in computer science fundamentals and problem-solving skills.',
      year: '2022',
      category: 'Academic Excellence',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '0 to 100 Web Development Course',
      organization: 'by Harkirat Singh',
      description: 'Successfully completed comprehensive full-stack web development training covering modern technologies, best practices, and industry standards.',
      year: '2024',
      category: 'Professional Development',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Software Engineer at Ginilytics',
      organization: 'Ginilytics IT Solution Pvt. Limited',
      description: 'Successfully transitioned from student to professional software engineer, contributing to multiple high-impact projects and client solutions.',
      year: '2023',
      category: 'Career Milestone',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Multi-Domain Project Leadership',
      organization: 'Various Client Projects',
      description: 'Led development of applications across healthcare, political campaign management, and marketing analytics domains.',
      year: '2024-2025',
      category: 'Leadership',
      color: 'from-purple-400 to-pink-500'
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
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
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
            Awards & <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Recognition and milestones that mark my journey in technology and professional growth
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full text-white mb-6`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {achievement.organization}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '1st', label: 'Prize Winner', icon: <Trophy className="w-5 h-5" /> },
            { number: '100%', label: 'Course Completion', icon: <BookOpen className="w-5 h-5" /> },
            { number: '2+', label: 'Years Professional', icon: <Award className="w-5 h-5" /> },
            { number: '1+', label: 'Projects Led', icon: <Star className="w-5 h-5" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Growth & Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I believe in continuous learning and improvement. Currently pursuing my MCA degree while 
              working professionally, I'm always looking for new challenges and opportunities to expand 
              my technical expertise and contribute to innovative projects. My goal is to become a 
              technology leader who can drive digital transformation and create meaningful impact 
              through software solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
