import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Calendar, Users, Code } from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Metric Hub",
      description:
        "A mobile marketing analytics app where users connect platforms like Google Ads, Meta Ads, Analytics, and GoHighLevel to track KPIs such as ad spend, revenue, clicks, and impressions in one unified dashboard.",
      longDescription:
        "Metric Hub consolidates marketing data from multiple platforms into a single, comprehensive dashboard. Built with React Native and .NET Core, it provides real-time insights and analytics for marketing professionals.",
      technologies: [
        "React Native",
        ".NET Core",
        "Google Ads API",
        "Facebook Marketing API",
        "GoHighLevel API",
        "Inflatable Office API",
        "Stripe"
      ],
      features: [
        "Multi-platform integration",
        "Real-time KPI tracking",
        "Unified analytics dashboard",
        "Custom reporting tools",
        "Mobile-first design",
        "Data visualization charts",
      ],
      responsibilities: [
        "Led end-to-end development",
        "Handled core integrations and system design",
        "Guided development team",
        "Delivered robust, scalable solution",
      ],
      category: "Analytics",
      status: "Completed",
      year: "2025",
    },
    {
      title: "Nexus",
      description:
        "A political campaign management application for US political candidates to register, import contact lists, manage them by tags, send bulk messages, and conduct surveys via SMS and MMS.",
      longDescription:
        "Nexus is a comprehensive political campaign management platform that enables politicians to effectively manage their campaigns through contact management, bulk messaging, and survey capabilities.",
      technologies: ["Next.js", ".NET Core", "Bandwidth API", "Authorize.net"],
      features: [
        "Contact list import and management",
        "Tag-based contact organization",
        "Bulk SMS/MMS messaging",
        "Survey creation and management",
        "Campaign analytics dashboard",
        "Payment processing integration",
      ],
      responsibilities: [
        "Independent development and client communication",
        "Requirements analysis and implementation",
        "Deployment to staging and production environments",
      ],
      category: "Political",
      status: "Completed",
      year: "2024",
    },
    {
      title: "Avita Transportation",
      description:
        "A transportation automation solution for a medical clinic that manages transport facilities for elderly patients. The solution automates pick-up and drop-off scheduling, replacing manual spreadsheet management with a robust, scalable system.",
      longDescription:
        "This comprehensive solution transformed how the medical clinic manages transportation services. Previously managed manually using spreadsheets and phone calls, the new system provides automated scheduling, real-time tracking, and efficient resource management.",
      technologies: [".NET Core", "React.js", "SQL Server", "Entity Framework"],
      features: [
        "Automated scheduling system",
        "Real-time vehicle tracking",
        "Patient management dashboard",
        "Driver assignment optimization",
        "Reporting and analytics",
      ],
      responsibilities: [
        "Develop features laid out in Sprint planning",
        "Update project status to Project Manager",
        "Estimate delivery timelines for tasks",
      ],
      category: "Healthcare",
      status: "Completed",
      year: "2023",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section
      id="projects"
      className="section-padding bg-white dark:bg-gray-900"
    >
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Showcasing my work across various domains including healthcare,
            politics, and analytics
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Role */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    My Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map(
                      (responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {responsibility}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Source Code
                  </motion.button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Code className="w-6 h-6" />,
              number: "3",
              label: "Major Projects",
            },
            {
              icon: <Users className="w-6 h-6" />,
              number: "5+",
              label: "Domains Covered",
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              number: "2+",
              label: "Years Active",
            },
            {
              icon: <ExternalLink className="w-6 h-6" />,
              number: "100%",
              label: "Success Rate",
            },
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
      </div>
    </section>
  );
};

export default Projects;
