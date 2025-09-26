import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";
import LightRays from "../reactbits/LightRays/LightRays";


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
  "ITS Solution",
  "S&S Furnishing",
];

const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));

const ClientsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Hyperspeed Background (fills entire section) */}
      <div className="absolute inset-0 z-0">
           <LightRays />
      </div>

      {/* Content Layer */}
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
          <p className="text-dark-600 dark:text-gray-400 mt-2 py-2">
            Trusted by businesses across India, UAE, and Germany
          </p>
        </motion.div>

        {/* Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50/80 dark:from-dark-900/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50/80 dark:from-dark-900/80 to-transparent z-20"></div>

          {/* Row 1 */}
          <div className="flex space-x-6 animate-marquee">
            {[...firstRow, ...firstRow].map((client, i) => (
              <div
                key={`row1-${i}`}
                className="min-w-[200px] px-4 py-4 rounded-xl text-center 
                           bg-white/10 dark:bg-white/5 
                           backdrop-blur-md border border-white/20 
                           shadow-md text-dark-900 dark:text-gray-200 
                           font-medium hover:border-primary-500 hover:shadow-lg 
                           transition-all duration-300"
              >
                {client}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex space-x-6 animate-marquee-reverse mt-6">
            {[...secondRow, ...secondRow].map((client, i) => (
              <div
                key={`row2-${i}`}
                className="min-w-[200px] px-4 py-4 rounded-xl text-center
                           bg-white/10 dark:bg-white/5 
                           backdrop-blur-md border border-white/20 
                           shadow-md text-dark-900 dark:text-gray-200 
                           font-medium hover:border-primary-500 hover:shadow-lg 
                           transition-all duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
