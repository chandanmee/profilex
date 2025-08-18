import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaShoppingCart,
  FaPlane,
  FaCalendarAlt,
  FaSeedling,
  FaCouch,
  FaFilm,
  FaBuilding,
  FaPencilRuler,
  FaCar,
  FaUser,
  FaBriefcase,
  FaCamera,
  FaMobileAlt,
} from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";

const industries = [
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Healthcare", icon: <FaHospital /> },
  { name: "Hospitality", icon: <FaHotel /> },
  { name: "Super Market", icon: <FaShoppingCart /> },
  { name: "Tour & Travels", icon: <FaPlane /> },
  { name: "Event Organizer", icon: <FaCalendarAlt /> },
  { name: "Agriculture", icon: <FaSeedling /> },
  { name: "Electronics & Furniture", icon: <FaCouch /> },
  { name: "Entertainment", icon: <FaFilm /> },
  { name: "Real Estate", icon: <FaBuilding /> },
  { name: "Interior Designer", icon: <FaPencilRuler /> },
  { name: "Automobiles", icon: <FaCar /> },
  { name: "Personal Portfolio", icon: <FaUser /> },
  { name: "Consultancy", icon: <FaBriefcase /> },
  { name: "Studio", icon: <FaCamera /> },
  { name: "On-Demand", icon: <FaMobileAlt /> },
];

const IndustrySection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-600 dark:text-primary-400">
              <FaIndustry size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            Industry Areas
          </h2>
          <p className="text-dark-600 dark:text-gray-400 mt-2">
            We deliver tailored solutions across multiple industries
          </p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 h-30 flex flex-col items-center justify-center
                         rounded-2xl 
                         bg-white/10 dark:bg-white/5 
                         backdrop-blur-lg 
                         border border-white/20 
                         shadow-lg 
                         text-dark-900 dark:text-gray-200 
                         font-semibold 
                         transition-all duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-xl 
                         hover:border-primary-500 
                         cursor-pointer"
            >
              <div className="text-3xl mb-3 text-primary-600 dark:text-primary-400">
                {industry.icon}
              </div>
              <span>{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;
