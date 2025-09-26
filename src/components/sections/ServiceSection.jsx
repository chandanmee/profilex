import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiRefreshCw,
  FiFeather,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Web Development",
    description:
      "Building responsive, fast, and user-friendly websites using modern technologies like React, Tailwind CSS, and more.",
  },
  {
    icon: <FiLayout />,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces and experiences that users love, with a focus on accessibility and usability.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Digital Marketing & SEO",
    description:
      "Optimizing websites for search engines and implementing effective digital marketing strategies to increase visibility.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Re-Designing",
    description:
      "I love to help in redesigning sites that boost revenue, lower bounce rates, and improve user experience.",
  },
  {
    icon: <FiFeather />,
    title: "Creative Design",
    description:
      "This is what I am more passionate about. It always takes time but comes with more creative solutions that really break the ice!",
  },
  {
    icon: <FiZap />,
    title: "Experiment",
    description:
      "Try Try Try...! That’s what I love to play with. Trying New, Creating New, Delivering New!",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent)]"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
          Learn, Update, Work & Execute!​​
          </h2>

             <p className="text-dark-600 dark:text-gray-400 mt-2 py-2">
             Make your website fast, easy to use, SEO friendly that helps you
            to find success online!
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-xl bg-white dark:bg-dark-800 shadow-md border border-gray-200 dark:border-white/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary-500/60"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-primary-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-primary-600 dark:text-primary-400 text-4xl mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
