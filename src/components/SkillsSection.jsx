import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
const skills = [
  { name: 'HTML', level: 'Expert', percentage: 85 },
  { name: 'CSS', level: 'Expert', percentage: 85 },
  { name: 'JS', level: 'Intermediate', percentage: 70 },
  { name: 'Bootstrap', level: 'Advanced', percentage: 80 },
  { name: 'React', level: 'Intermediate', percentage: 70 },
  { name: 'Wordpress, WooCommerce, LMS', level: 'Advanced', percentage: 85 },
  { name: 'Figma/Illustrator', level: 'Advanced', percentage: 85 },
  { name: 'Node.js', level: 'Intermediate', percentage: 70 },
  // { name: 'Express.js', level: 'Intermediate', percentage: 70 },
  // { name: 'MongoDB', level: 'Intermediate', percentage: 70 },
  // { name: 'Git/GitHub', level: 'Advanced', percentage: 85 },
  // { name: 'SEO', level: 'Advanced', percentage: 85 },
  // { name: 'Tailwind CSS', level: 'Advanced', percentage: 85 },
  // { name: 'Next.js', level: 'Intermediate', percentage: 70 },
];


  return (
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            My Skills
          </h2>
          <p className="text-xl text-dark-600 dark:text-gray-300">
            Area of My Interest!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-dark-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-primary-600 dark:text-primary-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="bg-primary-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {skills.slice(4).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-dark-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-primary-600 dark:text-primary-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="bg-primary-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
            Learn, Update, Work & Execute!​​
          </h3>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies and trends in the industry.
            This approach helps me deliver the best solutions for my clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;