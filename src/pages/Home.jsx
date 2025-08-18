import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiGithub,
} from "react-icons/fi";
import { FaReact, FaNodeJs,FaBullseye, FaLightbulb } from "react-icons/fa";
// Components
import SkillsSection from "../components/SkillsSection";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ClientsSection from "../components/ClientSection";
import IndustrySection from "../components/IndustrySection";
import AchievementSection from "../components/AchievementSection";
// Assets
import chandanHero from "../assets/illustrations/chandanmee-hero.png";

const Home = () => {
  return (
    <>
      {/* Hero Section - chandanmee */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-[#151515] dark:bg-[#040404] overflow-hidden relative">
        {/* Background grid pattern - chandanmee inspired */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 h-full w-full absolute top-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-b border-white w-full"></div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-[20%] md:left-[40%]  text-primary-400 opacity-20 text-6xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-[15%] text-primary-600 opacity-20 text-5xl"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <FaNodeJs />
        </motion.div>

        <motion.div
          className="absolute top-[40%] left-[10%] text-white opacity-10 text-4xl"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        >
          <FiCode />
        </motion.div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="mb-4 flex items-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="inline-flex items-center justify-center px-3 py-1 mr-3 text-xs font-medium rounded-full bg-primary-900/30 text-primary-400 border border-primary-700/50"
                >
                  <FiGithub className="mr-1" /> Design. Develop. Deliver.
                </motion.span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40px" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-[1px] bg-primary-600/30"
                />
              </div>

              <h1 className="text-[42px] md:text-[46px] lg:text-[55px] font-bold text-white mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block"
                >
                  Catalyzing Innovation
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block"
                >
                  for a <span className="text-primary-400">better world!</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-400 mb-8 leading-relaxed"
              >
               Hi, I’m Chandan - I build transformative digital solutions that merge technology, creativity, and innovation. From concept to execution, my work focuses on scalable design, seamless development, and future-ready experiences that empower businesses and people.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-300 flex items-center group"
                >
                Explore My Work
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-block ml-2"
                  >
                    <FiArrowRight />
                  </motion.span>
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/5 text-white border border-white/20 font-medium transition-all duration-300"
                >
                 Let’s Build Together
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2 relative"
            >
              {/* chandanmee inspired hero image with transparent background */}
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-full blur-3xl opacity-30"></div>

                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-[#1E1E1E]/80 to-[#2D2D2D]/80 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-2xl">
                  {/* Code editor-like header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 px-2 py-1 rounded bg-black/30">
                      developer.jsx
                    </div>
                  </div>

                  {/* Developer illustration */}
                  <div className="flex justify-center items-center">
                    <div className="relative">
                      <img
                        src={chandanHero}
                        alt="Hero Image"
                        className="w-64 md:w-[360px] max-w-full"
                      />

                      {/* Animated code particles */}
                      <motion.div
                        className="absolute -top-4 -right-0 text-primary-400 text-xl"
                        animate={{ y: [-10, 0, -10], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        &lt;/&gt;
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 -left-6 text-primary-400 text-xl"
                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      >
                        {}
                      </motion.div>
                    </div>
                  </div>

                  {/* Code-like footer */}
                  <div className="mt-6 p-3 bg-black/30 rounded-lg border border-white/5">
                    <div className="flex items-center">
                      <div className="w-2 h-4 bg-primary-400 animate-pulse mr-2"></div>
                      <div className="text-gray-400 font-mono text-sm">
                        const{" "}
                        <span className="text-primary-400">experience</span> ={" "}
                        <span className="text-green-400">"5+ years"</span>;
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-10 -right-6 bg-[#1A1A1A] p-4 rounded-lg shadow-lg border border-white/10"
                >
                  <div className="text-xl font-bold text-primary-400">
                    5+ Years
                  </div>
                  <div className="text-gray-400">Professional Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
  Crafting Innovative Solutions<br/>for a Smarter Future
</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8 rounded-2xl shadow-md bg-gray-50 dark:bg-dark-700 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-600 dark:text-primary-400">
                <FaBullseye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Mission
              </h3>
            </div>
            <p className="text-dark-600 dark:text-gray-300 text-lg">
              To design & develop the most efficient business solutions that help 
              individuals and organizations achieve more with fewer resources.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 rounded-2xl shadow-md bg-gray-50 dark:bg-dark-700 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-600 dark:text-primary-400">
                <FaLightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Vision
              </h3>
            </div>
            <p className="text-dark-600 dark:text-gray-300 text-lg">
              To be the most professional mentor and assist all small-scale 
              businesses to maximize their abilities.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            >
              Explore Me <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              Make your website fast, easy to use, SEO friendly that helps you
              to find success online!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <div className="text-primary-600 dark:text-primary-400 text-4xl mb-4">
                <FiCode />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                Web Development
              </h3>
              <p className="text-dark-600 dark:text-gray-300">
                Building responsive, fast, and user-friendly websites using
                modern technologies like React, Tailwind CSS, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              <div className="text-primary-600 dark:text-primary-400 text-4xl mb-4">
                <FiLayout />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                UI/UX Design
              </h3>
              <p className="text-dark-600 dark:text-gray-300">
                Creating beautiful, intuitive interfaces and experiences that
                users love, with a focus on accessibility and usability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8"
            >
              <div className="text-primary-600 dark:text-primary-400 text-4xl mb-4">
                <FiTrendingUp />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                Digital Marketing & SEO
              </h3>
              <p className="text-dark-600 dark:text-gray-300">
                Optimizing websites for search engines and implementing
                effective digital marketing strategies to increase visibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Clients Section */}
      <ClientsSection />

      {/* Industry Section */}
      <IndustrySection />

      {/* Achievements Section */}
      <AchievementSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with modern web
              technologies and creative design.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
