import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    company: 'Ginilytics IT Solution Pvt. Limited',
    location: 'Mohali',
    position: 'Software Engineer',
    duration: 'January 2023 – Present',
    description: 'I currently work at Ginilytics IT Solution as a Software Engineer, where I use industry-leading tools such as Git and CI/CD pipelines to streamline development and ensure high-quality outcomes. My role involves crafting custom solutions that are precisely aligned with our clients\' unique needs.',
    responsibilities: [
      'Develop features laid out in Sprint planning sessions',
      'Update project status to Project Manager and Tech Lead',
      'Estimate time requirements for task delivery',
      'Work independently with direct client communication',
      'Deploy applications to staging and production environments',
      'Lead end-to-end development of complex applications',
      'Handle core integrations and system design',
      'Guide development teams to deliver robust, scalable solutions'
    ],
    technologies: ['.NET Core', 'React.js', 'Next.js', 'React Native', 'JavaScript', 'SQL', 'Git', 'CI/CD']
  };

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
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and contributions in software development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {/* Experience Card */}
            <div className="relative pl-20 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Calendar size={16} />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {responsibility}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.05 * index }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Current Status */}
            <motion.div
              variants={itemVariants}
              className="relative pl-20"
            >
              <div className="absolute left-6 top-2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-600 dark:text-green-400 font-semibold">Currently Active</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Continuing to deliver innovative solutions and expand technical expertise at Ginilytics IT Solution
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '3+', label: 'Projects Delivered' },
            { number: '3', label: 'Major Applications' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
