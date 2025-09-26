import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's collaborate to bring your ideas to life with modern web
            technologies and creative design.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-white text-primary-700 font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
