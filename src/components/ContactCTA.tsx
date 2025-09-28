import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your photography needs and create unforgettable memories for your special occasion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Contact Us Today
              </motion.button>
            </Link>
            <a href="tel:+94771234567">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Call Now: +94 77 123 4567
              </motion.button>
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                We respond to all inquiries within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Custom Packages</h4>
              <p className="text-gray-400 text-sm">
                Tailored solutions for every event size
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Guarantee</h4>
              <p className="text-gray-400 text-sm">
                100% satisfaction or we'll make it right
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
