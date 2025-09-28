# PhotoPlus - Batch Photography Website

A modern, responsive website built with Gatsby, TypeScript, and Tailwind CSS for PhotoPlus, Sri Lanka's leading batch photography company.

## Features

- **Modern Design**: Dark, minimalistic, and professional design using Tailwind CSS
- **Responsive Layout**: Mobile-first responsive design that works on all devices
- **TypeScript**: Full TypeScript support for better development experience
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and robots.txt
- **Performance**: Optimized images and fast loading times with Gatsby

## Pages

- **Homepage**: Hero section, partners slider, gallery preview, services, and contact CTA
- **Gallery**: Filterable gallery with lightbox functionality
- **About**: Company vision, mission, values, and team information
- **Contact**: Contact form, company information, and FAQ section

## Tech Stack

- **Gatsby 5**: Static site generator
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Helmet**: SEO management
- **Google Fonts**: Raleway font family

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:ChamikaSathsara/photo-plus-website.git
cd photo-plus-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run develop
```

4. Open your browser and visit `http://localhost:8000`

### Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── HeroSection.tsx
│   ├── PartnersSlider.tsx
│   ├── GalleryPreview.tsx
│   ├── ServicesSection.tsx
│   └── ContactCTA.tsx
├── layouts/             # Layout components
│   └── Layout.tsx
├── pages/               # Page components
│   ├── index.tsx
│   ├── gallery.tsx
│   ├── about.tsx
│   └── contact.tsx
├── data/                # Data files
│   ├── partners.ts
│   ├── services.ts
│   └── gallery.ts
├── styles/              # Global styles
│   └── global.css
└── assets/              # Static assets
    ├── images/
    └── videos/
```

## Customization

### Adding New Services

Edit `src/data/services.ts` to add or modify services:

```typescript
{
  id: 'new-service',
  title: 'New Service',
  description: 'Service description',
  icon: '🎯',
  features: ['Feature 1', 'Feature 2']
}
```

### Adding Gallery Images

Edit `src/data/gallery.ts` to add new gallery images:

```typescript
{
  id: 'new-image',
  title: 'Image Title',
  description: 'Image description',
  image: '/path/to/image.jpg',
  thumbnail: '/path/to/thumbnail.jpg',
  university: 'University Name',
  year: 2024,
  eventType: 'graduation',
  tags: ['tag1', 'tag2']
}
```

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Modify colors in the `theme.extend.colors` section
- Add custom animations in the `theme.extend.animation` section
- Update global styles in `src/styles/global.css`

## SEO Configuration

The site includes comprehensive SEO setup:

- Meta tags for all pages
- Open Graph and Twitter Card support
- Sitemap generation
- Robots.txt file
- Structured data (can be added)

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Set framework preset to Gatsby
3. Deploy!

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `public` folder to your web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@photoplus.lk
- Phone: +94 77 123 4567

---

Built with ❤️ for PhotoPlus - Sri Lanka's Leading Batch Photography Company
