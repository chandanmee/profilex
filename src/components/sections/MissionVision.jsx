import React from "react";
import { motion } from "framer-motion";
import { BullseyeIcon, LightbulbIcon } from "../InlineIcons";

const MissionVision = () => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-950 text-dark-900 dark:text-white overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-gray-50 to-gray-100 dark:from-cyan-900/20 dark:via-gray-900 dark:to-gray-950"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 dark:bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 dark:text-white">
            Mission & Vision
          </h2>
          <p className="mt-4 text-dark-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Defining our purpose and shaping the future we're building.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-primary-100 dark:bg-cyan-600/20 rounded-full">
              <BullseyeIcon className="w-8 h-8 text-primary-600 dark:text-cyan-400" />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-dark-900 dark:text-white">My Mission</h3>
            </div>
            <p className="text-dark-700 dark:text-gray-300 leading-relaxed">
             To craft efficient, user-focused solutions that transform complex challenges into seamless and meaningful digital experiences.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-primary-100 dark:bg-indigo-600/20 rounded-full">
              <LightbulbIcon className="w-8 h-8 text-primary-600 dark:text-indigo-400" />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-dark-900 dark:text-white">My Vision</h3>
            </div>
            <p className="text-dark-700 dark:text-gray-300 leading-relaxed">
              To create digital products where technology and design work seamlessly together—delivering efficiency, clarity, and lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
