import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '../config/emailjs';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name:'Nilaksh Aggarwal'
      };
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'nilakshaggarwal1407@gmail.com',
      link: 'mailto:nilakshaggarwal1407@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9518007106',
      link: 'tel:+919518007106',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Mohali, Punjab, India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    /* {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    }, */
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/nilaksh-aggarwal-537435205',
      color: 'hover:text-blue-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'WhatsApp',
      url: 'https://wa.me/919518007106',
      color: 'hover:text-green-600'
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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm currently working as a Software Engineer at Ginilytics IT Solution and am always 
                interested in new challenges and opportunities. Whether you have a project in mind, 
                want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Project Collaboration"
                  />
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </motion.div>
                
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{statusMessage}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:nilakshaggarwal1407@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Email Me Directly
              </motion.a>
              <motion.a
                href="tel:+919518007106"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Call Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
