export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  university: string;
  year: number;
  eventType: 'graduation' | 'event' | 'portrait' | 'group';
  tags: string[];
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'grad-2024-colombo-1',
    title: 'University of Colombo Graduation 2024',
    description: 'Beautiful graduation ceremony photos from University of Colombo',
    image: '/images/gallery/colombo-grad-2024-1.jpg',
    thumbnail: '/images/gallery/thumbs/colombo-grad-2024-1.jpg',
    university: 'University of Colombo',
    year: 2024,
    eventType: 'graduation',
    tags: ['graduation', 'colombo', '2024', 'ceremony']
  },
  {
    id: 'grad-2024-peradeniya-1',
    title: 'University of Peradeniya Graduation 2024',
    description: 'Stunning graduation photos from University of Peradeniya',
    image: '/images/gallery/peradeniya-grad-2024-1.jpg',
    thumbnail: '/images/gallery/thumbs/peradeniya-grad-2024-1.jpg',
    university: 'University of Peradeniya',
    year: 2024,
    eventType: 'graduation',
    tags: ['graduation', 'peradeniya', '2024', 'ceremony']
  },
  {
    id: 'event-2024-kelaniya-1',
    title: 'University of Kelaniya Cultural Event 2024',
    description: 'Cultural event photography at University of Kelaniya',
    image: '/images/gallery/kelaniya-event-2024-1.jpg',
    thumbnail: '/images/gallery/thumbs/kelaniya-event-2024-1.jpg',
    university: 'University of Kelaniya',
    year: 2024,
    eventType: 'event',
    tags: ['cultural', 'kelaniya', '2024', 'event']
  },
  {
    id: 'portrait-2024-moratuwa-1',
    title: 'University of Moratuwa Portrait Session',
    description: 'Professional portrait photography for University of Moratuwa students',
    image: '/images/gallery/moratuwa-portrait-2024-1.jpg',
    thumbnail: '/images/gallery/thumbs/moratuwa-portrait-2024-1.jpg',
    university: 'University of Moratuwa',
    year: 2024,
    eventType: 'portrait',
    tags: ['portrait', 'moratuwa', '2024', 'professional']
  },
  {
    id: 'group-2024-jaffna-1',
    title: 'University of Jaffna Group Photos',
    description: 'Group photography session at University of Jaffna',
    image: '/images/gallery/jaffna-group-2024-1.jpg',
    thumbnail: '/images/gallery/thumbs/jaffna-group-2024-1.jpg',
    university: 'University of Jaffna',
    year: 2024,
    eventType: 'group',
    tags: ['group', 'jaffna', '2024', 'students']
  },
  {
    id: 'grad-2023-ruhuna-1',
    title: 'University of Ruhuna Graduation 2023',
    description: 'Memorable graduation ceremony at University of Ruhuna',
    image: '/images/gallery/ruhuna-grad-2023-1.jpg',
    thumbnail: '/images/gallery/thumbs/ruhuna-grad-2023-1.jpg',
    university: 'University of Ruhuna',
    year: 2023,
    eventType: 'graduation',
    tags: ['graduation', 'ruhuna', '2023', 'ceremony']
  },
  {
    id: 'event-2023-sjp-1',
    title: 'SJP University Sports Event 2023',
    description: 'Sports event photography at University of Sri Jayewardenepura',
    image: '/images/gallery/sjp-sports-2023-1.jpg',
    thumbnail: '/images/gallery/thumbs/sjp-sports-2023-1.jpg',
    university: 'University of Sri Jayewardenepura',
    year: 2023,
    eventType: 'event',
    tags: ['sports', 'sjp', '2023', 'event']
  },
  {
    id: 'portrait-2023-open-1',
    title: 'Open University Professional Portraits',
    description: 'Professional portrait session for Open University students',
    image: '/images/gallery/open-portrait-2023-1.jpg',
    thumbnail: '/images/gallery/thumbs/open-portrait-2023-1.jpg',
    university: 'Open University of Sri Lanka',
    year: 2023,
    eventType: 'portrait',
    tags: ['portrait', 'open-university', '2023', 'professional']
  }
];

export const universities = Array.from(new Set(galleryImages.map(img => img.university)));
export const years = Array.from(new Set(galleryImages.map(img => img.year))).sort((a, b) => b - a);
export const eventTypes = Array.from(new Set(galleryImages.map(img => img.eventType)));
