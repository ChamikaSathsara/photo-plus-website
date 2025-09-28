import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '../data/partners';

const PartnersSlider: React.FC = () => {
  return (
    <section className="section-padding bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Universities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We have established trusted partnerships with universities across Sri Lanka, 
            providing professional photography services for their most important events.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 items-center"
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-32 h-16 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-500 mb-2">8+</div>
            <div className="text-gray-400">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-500 mb-2">5000+</div>
            <div className="text-gray-400">Students Photographed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-500 mb-2">100+</div>
            <div className="text-gray-400">Events Covered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSlider;
