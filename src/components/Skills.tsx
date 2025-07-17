import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: '.NET Core', level: 90, color: 'bg-green-500' },
        { name: 'C#', level: 85, color: 'bg-yellow-400' },
        { name: 'MVC', level: 80, color: 'bg-yellow-400' },
        { name: 'Entity Framework', level: 85, color: 'bg-yellow-400' },
        { name: 'Dapper', level: 75, color: 'bg-yellow-400' },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 85, color: 'bg-yellow-400' },
        { name: 'React Native', level: 80, color: 'bg-yellow-400' },
        { name: 'Next.js', level: 75, color: 'bg-yellow-400' },
        { name: 'JavaScript', level: 90, color: 'bg-green-500' },
        { name: 'TypeScript', level: 70, color: 'bg-orange-500' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'SQL', level: 85, color: 'bg-yellow-400' },
        { name: 'Git', level: 90, color: 'bg-green-500' },
        { name: 'Visual Studio', level: 85, color: 'bg-yellow-400' },
        { name: 'VS Code', level: 90, color: 'bg-green-500' },
        { name: 'CI/CD', level: 75, color: 'bg-yellow-400' },
      ]
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Other Technologies & Concepts
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'RESTful APIs',
              'Microservices',
              'Agile/Scrum',
              'Third-party Integrations',
              'Google Ads API',
              'Facebook Marketing API',
              'Bandwidth API',
              'Authorize.net',
              'GoHighLevel',
              'Inflatable Office',
              'Twilio',
              'Infobip',
              'Stripe',
              'Cross-platform Development',
              'Performance Optimization'
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Certifications & Learning
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              0 to 100 Web Development Course
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              by Harkirat Singh
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Comprehensive full-stack web development training covering modern technologies and best practices
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
