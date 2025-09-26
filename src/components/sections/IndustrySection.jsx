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
  FaIndustry,
} from "react-icons/fa";

// ReactBits background
// import LightRays from "../reactbits/LightRays/LightRays";
import DarkVeil from "../reactbits/DarkVeil/DarkVeil";

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

const firstRow = industries.slice(0, Math.ceil(industries.length / 2));
const secondRow = industries.slice(Math.ceil(industries.length / 2));

const IndustrySection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-transparent">
      {/* Light Rays Background - only show in dark mode */}
      <div className="absolute inset-0 z-0 dark:block hidden">
        <DarkVeil />
      </div>

      {/* Light mode background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-50/50 via-gray-50 to-primary-100/30 dark:hidden"></div>

      {/* Content */}
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

        {/* Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 dark:from-dark-900/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 dark:from-dark-900/80 to-transparent z-20"></div>

          {/* Row 1 */}
          <div className="flex space-x-6 animate-marquee">
            {[...firstRow, ...firstRow].map((industry, i) => (
              <div
                key={`row1-${i}`}
                className="min-w-[220px] px-6 py-6 rounded-xl flex flex-col items-center justify-center
                           bg-white/80 dark:bg-white/10 
                           backdrop-blur-md border border-gray-200 dark:border-white/20 
                           shadow-md text-dark-900 dark:text-gray-200 
                           font-semibold hover:border-primary-500 hover:shadow-lg 
                           transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2 text-primary-600 dark:text-primary-400">
                  {industry.icon}
                </div>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex space-x-6 animate-marquee-reverse mt-6">
            {[...secondRow, ...secondRow].map((industry, i) => (
              <div
                key={`row2-${i}`}
                className="min-w-[220px] px-6 py-6 rounded-xl flex flex-col items-center justify-center
                           bg-white/80 dark:bg-white/10 
                           backdrop-blur-md border border-gray-200 dark:border-white/20 
                           shadow-md text-dark-900 dark:text-gray-200 
                           font-semibold hover:border-primary-500 hover:shadow-lg 
                           transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2 text-primary-600 dark:text-primary-400">
                  {industry.icon}
                </div>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
