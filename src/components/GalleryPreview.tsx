import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/gallery';

const GalleryPreview: React.FC = () => {
  const previewImages = galleryImages.slice(0, 8);

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Event Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest work from graduation ceremonies and university events across Sri Lanka.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg card-hover"
            >
              <div className="aspect-square bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm text-gray-300 font-medium">{image.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{image.university}</div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white text-center"
                >
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="text-sm font-medium">View Details</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              View Full Gallery
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
