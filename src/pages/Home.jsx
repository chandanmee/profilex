import React, { useRef, useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Removed unused react-icons imports to reduce bundle size
// Components
import HeroSection from "../components/sections/HeroSection";
import ServiceSection from "../components/sections/ServiceSection";
import MissionVision from "../components/sections/MissionVision";
// Lazy-loaded below-the-fold sections
const SkillsSection = React.lazy(() => import("../components/sections/SkillsSection"));
const ProjectsShowcase = React.lazy(() => import("../components/sections/ProjectsShowcase"));
const ClientsSection = React.lazy(() => import("../components/sections/ClientSection"));
const IndustrySection = React.lazy(() => import("../components/sections/IndustrySection"));
const AchievementSection = React.lazy(() => import("../components/sections/AchievementSection"));
const CTA = React.lazy(() => import("../components/CTA"));

// Assets
import chandanHero from "../assets/illustrations/chandanmee-hero.webp";

// Render children only when visible, to trigger lazy imports on demand
const LazyOnVisible = ({ children, minHeight = 300 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ minHeight }}>
      {visible ? children : null}
    </div>
  );
};

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
      <LazyOnVisible minHeight={400}>
        <Suspense fallback={<div className="h-40" />}> 
          <SkillsSection />
        </Suspense>
      </LazyOnVisible>

         {/* Clients Section */}
      <LazyOnVisible minHeight={350}>
        <Suspense fallback={<div className="h-36" />}> 
          <ClientsSection />
        </Suspense>
      </LazyOnVisible>

      {/* Projects Showcase */}
      <LazyOnVisible minHeight={500}>
        <Suspense fallback={<div className="h-48" />}> 
          <ProjectsShowcase />
        </Suspense>
      </LazyOnVisible>


      {/* Industry Section */}
      <LazyOnVisible minHeight={400}>
        <Suspense fallback={<div className="h-40" />}> 
          <IndustrySection />
        </Suspense>
      </LazyOnVisible>

      {/* Achievements Section */}
      <LazyOnVisible minHeight={400}>
        <Suspense fallback={<div className="h-40" />}> 
          <AchievementSection />
        </Suspense>
      </LazyOnVisible>
      
      {/* CTA Section */}
      <LazyOnVisible minHeight={200}>
        <Suspense fallback={<div className="h-24" />}> 
          <CTA />
        </Suspense>
      </LazyOnVisible>
    </>
  );
};

export default Home;
