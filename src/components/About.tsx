import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="about" className="pt-20 -mt-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://i.imgur.com/Vbx10VA.png"
              alt="Johnray M. De Luna"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Johnray M. De Luna
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400"
          >
            Cybersecurity Professional & Full Stack Developer
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3 hover:text-blue-500 transition-colors"
            >
              <MapPin className="text-blue-500" />
              <span>Caloocan, Philippines</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3 hover:text-blue-500 transition-colors"
            >
              <Phone className="text-blue-500" />
              <span>+639355618179</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <Mail className="text-blue-500" />
              <div className="flex flex-col">
                <a href="mailto:Jdeluna@nbi.gov.ph" className="hover:text-blue-500 transition-colors">
                  Jdeluna@nbi.gov.ph
                </a>
                <a href="mailto:Johnraydeluna@gmail.com" className="hover:text-blue-500 transition-colors">
                  Johnraydeluna@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <Linkedin className="text-blue-500" />
              <a 
                href="https://linkedin.com/in/johnray-de-luna-a4a892301" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors"
              >
                /johnray-de-luna-a4a892301
              </a>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <Github className="text-blue-500" />
              <a 
                href="http://54.193.105.168" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors"
              >
                Portfolio
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}