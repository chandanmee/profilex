import { motion } from "framer-motion";
// Assets
import bgPattern from "@assets/illustrations/dots-pattern-bg.png"; 
import pmCertificate from "@assets/certificate/pm-linkedin.png"; 
import reactCertificate from "@assets/certificate/reactjs-linkedin.png"; 
import reactCertificate2 from "@assets/certificate/learntube_react.jpg"; 
import googleDigitalCertificate from "@assets/certificate/googele_digital_garage.png"; 
import accentureCertificate from "@assets/certificate/accenture_certificate.png"; 
import accentureCertificate2 from "@assets/certificate/accenture_certificate2.png"; 
import tcsCertificate from "@assets/certificate/tcs_certificate.png"; 
import productUiux from "@assets/certificate/product_uiux.jpg"; 
import outSkillAi from "@assets/certificate/outskill_ai.png"; 

// Sample Achievements
const achievements = [
  {
    image: outSkillAi,
    title: "Generative AI Mastermind",
    brand: "Outskill",
  },
    {
    image:  productUiux,
    title: "Product/UX Strategy Assessment",
    brand: "Leartube.ai",
  },
     {
    image:  reactCertificate2,
    title: "React.js Developer Assessment",
    brand: "Leartube.ai",
  },
     {
    image: reactCertificate,
    title: "React.Js Essential Learning",
    brand: "LinkedIn",
  },
  {
    image: pmCertificate,
    title: "Certified Associate in Project Management(CAPM)",
    brand: "LinkedIn",
  },
  
  {
    image: googleDigitalCertificate,
    title: "Google Digital garage",
    brand: "Google",
  },
    {
    image: tcsCertificate,
    title: "TCS iON Career Edge - Young Professional",
    brand: "TCS",
  },
  {
    image: accentureCertificate,
    title: "Accenture DIscovery Program",
    brand: "Accenture",
  },
  {
    image: accentureCertificate2,
    title: "Developer Program",
    brand: "Accenture",
  },
];

const AchievementSection = () => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundAttachment: "fixed", // makes it stay while scrolling
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-dark-900/80 backdrop-blur-sm" />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-dark-600 dark:text-gray-400 mt-2">
            Recognitions that shaped my journey
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-white/30 dark:bg-dark-700/40 backdrop-blur-md shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg w-full h-60 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-dark-800 dark:text-gray-100">
                {cert.title}
              </h3>
              <p className="text-sm text-dark-600 dark:text-gray-400">
                {cert.brand}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
