import React,{useRef} from "react";
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
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsShowcase from "../components/sections/ProjectsShowcase";
import ClientsSection from "../components/sections/ClientSection";
import IndustrySection from "../components/sections/IndustrySection";
import AchievementSection from "../components/sections/AchievementSection";
import HeroSection from "../components/sections/HeroSection";
import ServiceSection from "../components/sections/ServiceSection";
import CTA from "../components/CTA";
import MissionVision from "../components/sections/MissionVision";

// Assets
import chandanHero from "../assets/illustrations/chandanmee-hero.png";

const Home = () => {
  return (
    <>
      {/* Hero Section - chandanmee */}
   <HeroSection />
      {/* Mission & Vision Section */}
      <MissionVision />
      {/* Services Section */}
      <ServiceSection />

      {/* Skills Section */}
      <SkillsSection />

         {/* Clients Section */}
      <ClientsSection />

      {/* Projects Showcase */}
      <ProjectsShowcase />


      {/* Industry Section */}
      <IndustrySection />

      {/* Achievements Section */}
      <AchievementSection />
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Home;
