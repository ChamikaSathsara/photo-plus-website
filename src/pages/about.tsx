import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../layouts/Layout';
import { motion } from 'framer-motion';

const AboutPage: React.FC<PageProps> = () => {
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
              About PhotoPlus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Leading the way in professional batch photography across Sri Lanka
            </motion.p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  To be the premier photography company in Sri Lanka, known for our exceptional 
                  quality, innovative techniques, and unwavering commitment to capturing life's 
                  most precious moments with artistic excellence.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We envision a future where every university student's graduation and special 
                  moments are preserved with the highest standards of professionalism and creativity, 
                  creating lasting memories that will be treasured for generations.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Excellence in Every Shot</h3>
                  <p className="text-gray-400">
                    Our vision drives us to continuously innovate and improve our services, 
                    ensuring that every photograph we capture meets the highest standards of quality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-8 order-2 lg:order-1"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">💫</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-400">
                    To provide exceptional photography services that capture the essence of 
                    important moments with creativity, professionalism, and attention to detail.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  We are dedicated to providing comprehensive photography solutions that exceed 
                  expectations. Our mission is to deliver exceptional service through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">Professional equipment and cutting-edge technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">Experienced and skilled photographers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">Personalized service tailored to each client</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">Timely delivery and exceptional customer support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at PhotoPlus
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🎨',
                  title: 'Creativity',
                  description: 'We bring artistic vision to every photograph, ensuring unique and memorable results.'
                },
                {
                  icon: '⚡',
                  title: 'Excellence',
                  description: 'We maintain the highest standards of quality in all our photography services.'
                },
                {
                  icon: '🤝',
                  title: 'Integrity',
                  description: 'We build trust through honest communication and reliable service delivery.'
                },
                {
                  icon: '🚀',
                  title: 'Innovation',
                  description: 'We embrace new technologies and techniques to stay ahead of the industry.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Meet the passionate professionals behind PhotoPlus
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chamika Pathirage',
                  role: 'Lead Photographer & Founder',
                  description: 'With over 10 years of experience in professional photography, Chamika leads our team with passion and expertise.',
                  image: '👨‍💼'
                },
                {
                  name: 'Sarah Fernando',
                  role: 'Event Coordinator',
                  description: 'Sarah ensures every event runs smoothly, coordinating with universities and managing logistics.',
                  image: '👩‍💼'
                },
                {
                  name: 'Rajesh Kumar',
                  role: 'Technical Specialist',
                  description: 'Rajesh handles our drone operations and technical equipment, bringing innovation to every shoot.',
                  image: '👨‍🔧'
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-6 text-center card-hover"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-accent-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>About Us - PhotoPlus</title>
    <meta name="description" content="Learn about PhotoPlus, Sri Lanka's leading batch photography company. Our vision, mission, and dedicated team of professionals." />
    <meta property="og:title" content="About Us - PhotoPlus" />
    <meta property="og:description" content="Learn about PhotoPlus, Sri Lanka's leading batch photography company. Our vision, mission, and dedicated team of professionals." />
  </>
);
