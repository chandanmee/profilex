import { motion } from "framer-motion";
// Assets
import bgPattern from "../assets/illustrations/dots-pattern-bg.png"; 
import reactCertificate from "../assets/gallery/tcs_certificate.png"; 
import awsCertificate from "../assets/gallery/tcs_certificate.png"; 
import accentureCertificate from "../assets/gallery/tcs_certificate.png"; 
import tcsCertificate from "../assets/gallery/tcs_certificate.png"; 
import jsFreeCodeCertificate from "../assets/gallery/tcs_certificate.png"; 
import responsiveFreeCodeCertificate from "../assets/gallery/tcs_certificate.png"; 
import googleDigitalCertificate from "../assets/gallery/tcs_certificate.png"; 

// Sample Achievements
const achievements = [
  {
    image: reactCertificate,
    title: "React Developer Certification",
    brand: "Meta",
  },
  {
    image: reactCertificate,
    title: "Cloud Practitioner",
    brand: "AWS",
  },
  {
    image: reactCertificate,
    title: "UI/UX Design Mastery",
    brand: "Coursera",
  },
    {
    image: reactCertificate,
    title: "React Developer Certification",
    brand: "Meta",
  },
  {
    image: reactCertificate,
    title: "Cloud Practitioner",
    brand: "AWS",
  },
  {
    image: reactCertificate,
    title: "UI/UX Design Mastery",
    brand: "Coursera",
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
