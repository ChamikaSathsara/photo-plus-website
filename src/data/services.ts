export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'batch-photoshoot',
    title: 'Unlimited Candidate Batch Photoshoot',
    description: 'Professional batch photography services for graduation ceremonies and university events with unlimited photo sessions.',
    icon: '📸',
    features: [
      'Unlimited photo sessions',
      'High-resolution images',
      'Professional lighting setup',
      'Multiple background options',
      'Same-day photo delivery'
    ]
  },
  {
    id: 'custom-frames',
    title: 'Custom Photo Frames',
    description: 'Beautiful custom photo frames designed specifically for your graduation photos and special moments.',
    icon: '🖼️',
    features: [
      'Custom design options',
      'Premium materials',
      'Various sizes available',
      'Personalized engraving',
      'Fast delivery'
    ]
  },
  {
    id: 'drone-shots',
    title: 'Drone Shots and Aerial Videos',
    description: 'Stunning aerial photography and videography services using professional drone technology.',
    icon: '🚁',
    features: [
      '4K aerial videos',
      'High-resolution aerial photos',
      'Multiple angle coverage',
      'Professional pilot',
      'Weather-dependent scheduling'
    ]
  },
  {
    id: 'video-editing',
    title: 'Short Videos and TikTok Edits',
    description: 'Creative video editing services for social media platforms including TikTok, Instagram, and YouTube.',
    icon: '🎬',
    features: [
      'TikTok-optimized edits',
      'Instagram Reels',
      'YouTube Shorts',
      'Trending music integration',
      'Fast turnaround time'
    ]
  },
  {
    id: 'photo-booth-360',
    title: '360° Photo Booth',
    description: 'Interactive 360-degree photo booth experience for events and celebrations.',
    icon: '📱',
    features: [
      '360-degree capture',
      'Instant sharing',
      'Social media integration',
      'Custom branding options',
      'Professional setup'
    ]
  },
  {
    id: 'instant-photo-booth',
    title: 'Instant Photo Booth',
    description: 'Traditional instant photo booth with props and fun backgrounds for memorable moments.',
    icon: '📷',
    features: [
      'Instant photo printing',
      'Fun props and costumes',
      'Multiple background options',
      'Group photo capabilities',
      'Event customization'
    ]
  }
];
