import React from "react";
import { motion } from "framer-motion";
// assets
import skillsBg from "@assets/illustrations/dots-pattern-bg.png";

// Import your own icons
import htmlIcon from "@assets/icons/html5.png";
import cssIcon from "@assets/icons/css.png";
import jsIcon from "@assets/icons/javascript.png";
import tailwindIcon from "@assets/icons/tailwind.png";
import reactIcon from "@assets/icons/react.png";
import figmaIcon from "@assets/icons/figma.png";
import uxIcon from "@assets/icons/illustrator.png";
import gitIcon from "@assets/icons/git.png";
import apiIcon from "@assets/icons/api.png";
import prototypeIcon from "@assets/icons/illustrator.png";
import accessIcon from "@assets/icons/figma.png";
import responsiveIcon from "@assets/icons/responsive.png";
import illustratorIcon from "@assets/icons/illustrator.png";
import performanceIcon from "@assets/icons/illustrator.png";
import seoIcon from "@assets/icons/seo.png";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },

    // { name: "UI/UX Design", icon: uxIcon },
    { name: "Git", icon: gitIcon },
    { name: "REST APIs", icon: apiIcon },
    // { name: "Prototyping", icon: prototypeIcon },
    { name: "Accessibility", icon: accessIcon },
    { name: "Responsive Design", icon: responsiveIcon },
    { name: "SEO", icon: seoIcon },

    { name: "Figma", icon: figmaIcon },
    { name: "Illustrator", icon: illustratorIcon },
    // { name: "Web Performance", icon: performanceIcon },
  ];

  // Slide-in animation variants
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // 👈 alternate left/right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.35)",
      borderColor: "rgba(56, 189, 248, 0.5)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.97, transition: { duration: 0.1 } },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-gray-50 to-primary-100/30 dark:hidden"></div>
        
        {/* Dark mode background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse hidden dark:block"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 hidden dark:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500 hidden dark:block"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-dark-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md 
                            border border-gray-200 dark:border-gray-800/50 
                            shadow-md hover:shadow-xl 
                            transition-all duration-300 
                            hover:border-primary-500 dark:hover:border-primary-400">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-xl">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-dark-900 dark:text-white text-sm">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
