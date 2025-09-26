import React from "react";
import { motion } from "framer-motion";
// assets
import skillsBg from "@assets/illustrations/dots-pattern-bg.png";

// Import your own icons
import htmlIcon from "@assets/icons/figma.png";
import cssIcon from "@assets/icons/framer.png";
import reactIcon from "@assets/icons/figma.png";
import jsIcon from "@assets/icons/framer.png";
import tailwindIcon from "@assets/icons/framer.png";
import figmaIcon from "@assets/icons/figma.png";
import uxIcon from "@assets/icons/illustrator.png";
import gitIcon from "@assets/icons/figma.png";
import apiIcon from "@assets/icons/figma.png";
import prototypeIcon from "@assets/icons/illustrator.png";
import accessIcon from "@assets/icons/figma.png";
import responsiveIcon from "@assets/icons/illustrator.png";
import illustratorIcon from "@assets/icons/figma.png";
import performanceIcon from "@assets/icons/illustrator.png";
import seoIcon from "@assets/icons/framer.png";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "UI/UX Design", icon: uxIcon },
    { name: "Git", icon: gitIcon },
    { name: "REST APIs", icon: apiIcon },
    { name: "Prototyping", icon: prototypeIcon },
    { name: "Accessibility", icon: accessIcon },
    { name: "Responsive Design", icon: responsiveIcon },
    { name: "Illustrator", icon: illustratorIcon },
    // { name: "Web Performance", icon: performanceIcon },
    { name: "SEO", icon: seoIcon },
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
    <section
      className="relative py-20 bg-gray-950 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${skillsBg})` }}
    >
    {/* Hyperspeed Background */}
      {/* glowing blobs like mission/vision */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Building intuitive, high-performance web experiences with modern
            tools and design principles.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative bg-gray-900/70 backdrop-blur-xl border border-white/10 
                         rounded-2xl p-6 text-center text-white shadow-md 
                         hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gray-800/50 rounded-xl">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-sm md:text-base font-medium text-gray-200">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
