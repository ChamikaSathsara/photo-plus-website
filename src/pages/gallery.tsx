import React, { useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../layouts/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, universities, years, eventTypes } from '../data/gallery';

const GalleryPage: React.FC<PageProps> = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = galleryImages.filter(image => {
    const universityMatch = selectedUniversity === 'all' || image.university === selectedUniversity;
    const yearMatch = selectedYear === 'all' || image.year.toString() === selectedYear;
    const eventTypeMatch = selectedEventType === 'all' || image.eventType === selectedEventType;
    
    return universityMatch && yearMatch && eventTypeMatch;
  });

  return (
    <Layout>
      <div className="pt-20">
        {/* Page Header */}
        <section className="section-padding bg-gray-800">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Explore our collection of professional photography from universities across Sri Lanka
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-900 border-b border-gray-700">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {/* University Filter */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">University</label>
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-accent-500"
                >
                  <option value="all">All Universities</option>
                  {universities.map(university => (
                    <option key={university} value={university}>{university}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-accent-500"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Event Type Filter */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Event Type</label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-accent-500"
                >
                  <option value="all">All Events</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg card-hover cursor-pointer"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <div className="aspect-square bg-gray-700 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">📸</div>
                        <div className="text-sm text-gray-300 font-medium">{image.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{image.university}</div>
                        <div className="text-xs text-gray-500">{image.year}</div>
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
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No images found</h3>
                <p className="text-gray-400">Try adjusting your filters to see more results.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const image = galleryImages.find(img => img.id === selectedImage);
                  return image ? (
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center">
                          <div className="text-6xl mb-4">📸</div>
                          <div className="text-xl font-semibold text-white">{image.title}</div>
                          <div className="text-gray-400">{image.university} • {image.year}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{image.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {image.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-accent-600 text-white text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => (
  <>
    <title>Gallery - PhotoPlus</title>
    <meta name="description" content="Explore our gallery of professional photography from universities across Sri Lanka. Graduation ceremonies, events, and portrait sessions." />
    <meta property="og:title" content="Gallery - PhotoPlus" />
    <meta property="og:description" content="Explore our gallery of professional photography from universities across Sri Lanka. Graduation ceremonies, events, and portrait sessions." />
  </>
);
