import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../layouts/Layout';
import HeroSection from '../components/HeroSection';
import PartnersSlider from '../components/PartnersSlider';
import GalleryPreview from '../components/GalleryPreview';
import ServicesSection from '../components/ServicesSection';
import ContactCTA from '../components/ContactCTA';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnersSlider />
      <GalleryPreview />
      <ServicesSection />
      <ContactCTA />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>PhotoPlus - Leading Batch Photo Company in Sri Lanka</title>
    <meta name="description" content="Professional batch photography services for universities in Sri Lanka. Specializing in graduation photos, event photography, drone shots, and custom photo frames." />
    <meta name="keywords" content="batch photography, university photos, graduation photos, Sri Lanka, event photography, drone shots" />
    <meta property="og:title" content="PhotoPlus - Leading Batch Photo Company in Sri Lanka" />
    <meta property="og:description" content="Professional batch photography services for universities in Sri Lanka. Specializing in graduation photos, event photography, drone shots, and custom photo frames." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://photoplus.lk" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="PhotoPlus - Leading Batch Photo Company in Sri Lanka" />
    <meta name="twitter:description" content="Professional batch photography services for universities in Sri Lanka. Specializing in graduation photos, event photography, drone shots, and custom photo frames." />
  </>
);
