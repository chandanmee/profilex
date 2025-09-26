import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-gray-950"></div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mission & Vision
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Defining our purpose and shaping the future we’re building.
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
            className="relative bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-cyan-600/20 rounded-full">
                <FaBullseye className="text-cyan-400 text-3xl" />
              </div>
              <h3 className="ml-4 text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses and individuals by building efficient,
              innovative, and scalable digital solutions that seamlessly
              integrate technology, people, and processes — fostering growth and
              lasting impact.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-indigo-600/20 rounded-full">
                <FaLightbulb className="text-indigo-400 text-3xl" />
              </div>
              <h3 className="ml-4 text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become a global leader in next-generation enterprise solutions,
              where technology bridges innovation and humanity — creating a
              sustainable and connected digital future for all.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
