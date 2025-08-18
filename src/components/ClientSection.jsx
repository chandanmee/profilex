import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";

const clients = [
  "Netclove Technologies",
  "Riyana Homes, UAE",
  "Plan The Unplanned",
  "JNK Nutrition, UAE",
  "R2R Furniture, UAE",
  "Le Zoyal, UAE",
  "Pharma Giant Healthcare Pvt. Ltd.",
  "Mbtech Life Science",
  "Ayush Group Pvt. Ltd.",
  "Edumoss",
  "Foodzee",
  "Jyoti Sikshya Bhawan",
  "ThePexel",
  "Fitmekart",
  "CodeMadeEasy",
  "DGS Media",
  "MVS Upholstery",
  "Jubiliant Institute",
  "Roadl",
  "WMA GmbH, Germany",
  "Laxmi Interiors",
  "IT Solution",
  "S&S Furnishing",
];

const ClientsSection = () => {
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
              <FaHandshake size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            My Clients
          </h2>
          <p className="text-dark-600 dark:text-gray-400 mt-2">
            Trusted by businesses across India, UAE, and Germany
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl 
                         bg-white/10 dark:bg-white/5 
                         backdrop-blur-md 
                         border-2 border-white/20 
                         shadow-lg 
                         text-dark-900 dark:text-gray-200 
                         font-medium 
                         transition-all duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-xl 
                         hover:border-primary-500"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
