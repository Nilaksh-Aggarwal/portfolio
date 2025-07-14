import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Amity University Online',
      location: 'Noida, Uttar Pradesh, India',
      duration: 'July 2024 – July 2026',
      status: 'In Progress',
      description: 'Pursuing advanced studies in computer applications with focus on modern software development practices and emerging technologies.',
      highlights: ['Blockchain', 'Software Engineering', 'Database Management', 'Web Technologies']
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Tilak Raj Chadha Institute of Management & Technology',
      location: 'Yamuna Nagar, Haryana, India',
      duration: 'July 2020 – June 2023',
      status: 'Completed',
      description: 'Comprehensive undergraduate program covering fundamental and advanced concepts in computer science and applications.',
      highlights: ['Programming Fundamentals', 'Data Structures', 'Database Systems', 'Software Development']
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'SD Public School',
      location: 'Jagadhari, Haryana, India',
      duration: 'April 2019 - April 2020',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on science and mathematics.',
      highlights: ['Mathematics', 'Accounts', 'Business Studies', 'Economics']
    },
    {
      degree: 'Senior Secondary (10th)',
      institution: 'New Happy Public School',
      location: 'Bilaspur, Haryana, India',
      duration: 'April 2017 - April 2018',
      status: 'Completed',
      description: 'Foundation education with strong academic performance.',
      highlights: ['Core Subjects', 'Mathematics', 'Science', 'English']
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
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
            Educational <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My academic background and continuous learning path in computer science
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
                  edu.status === 'In Progress' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                }`}></div>
                
                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Subjects:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: <GraduationCap className="w-6 h-6" />, number: '4', label: 'Degrees & Certifications' },
            { icon: <Award className="w-6 h-6" />, number: '6+', label: 'Years of Study' },
            { icon: <Calendar className="w-6 h-6" />, number: '2024', label: 'Current MCA Year' },
            { icon: <MapPin className="w-6 h-6" />, number: '3', label: 'Educational Institutions' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
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

        {/* Current Focus */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Pursuing MCA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm currently in my Master's program at Amity University Online, focusing on advanced 
              computer applications, software engineering principles, and emerging technologies. 
              This program complements my professional experience and keeps me updated with the latest 
              industry trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
