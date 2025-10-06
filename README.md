# Oh-Bhaisahab Experiences - Website

A modern, responsive website for Oh-Bhaisahab Experiences (OBS), a trekking and adventure company specializing in Himalayan adventures.

## 🏔️ About Oh-Bhaisahab Experiences

Oh-Bhaisahab Experiences is a trekking and adventure company that offers authentic Himalayan experiences including:

- **Kuari Pass Trek** - Winter wonderland trek in Garhwal Himalayas
- **Spiti Valley Adventure** - High-altitude desert exploration
- **Valley of Flowers** - Monsoon season floral paradise

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Built with Ant Design components for a professional look
- **Interactive Navigation** - Smooth routing between different sections
- **Image Carousel** - Showcasing previous adventures
- **Booking System** - Ready for payment gateway integration
- **Reviews Section** - Customer testimonials and ratings
- **About Us** - Company story, team, and values

## 🛠️ Technology Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Ant Design** - Professional UI component library
- **React Router** - Client-side routing
- **CSS3** - Custom styling and animations

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout with navigation
├── pages/
│   ├── HomePage.tsx        # Landing page with company info
│   ├── DiariesPage.tsx     # Previous adventures and reviews
│   ├── UpcomingPage.tsx    # Upcoming treks and booking
│   └── AboutPage.tsx       # Company information and team
├── App.tsx                 # Main app component with routing
├── App.css                 # Custom styles
└── main.tsx               # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd obs-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages Overview

### Home Page
- Company introduction and mission
- Signature activities showcase
- Image carousel of previous adventures
- Why choose OBS section

### Previous OBS Diaries
- Past adventure experiences
- Customer reviews and ratings
- Photo galleries from completed treks

### Upcoming Experiences
- Current available treks (Kuari Pass Trek)
- Detailed itinerary and pricing
- Booking system with QR code
- Inclusions and exclusions

### About Us
- Company story and mission
- Team member profiles
- Core values and principles
- Company timeline and milestones

## 🎨 Design Features

- **Gradient Backgrounds** - Modern gradient designs
- **Hover Effects** - Interactive card animations
- **Responsive Grid** - Adaptive layout for all devices
- **Professional Typography** - Clean and readable fonts
- **Color Scheme** - Blue and purple gradients with accent colors

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/Layout.tsx`

### Styling
- Global styles: `src/App.css`
- Component-specific styles: Inline styles or CSS modules
- Ant Design theme customization: `src/App.tsx` ConfigProvider

### Content Updates
- Update company information in respective page components
- Replace placeholder images with actual photos
- Modify pricing and dates in `UpcomingPage.tsx`

## 🚀 Deployment

The website is ready for deployment to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with drag-and-drop
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3** - Scalable cloud hosting

## 📞 Contact

For questions about the website or Oh-Bhaisahab Experiences:

- **Company**: Oh-Bhaisahab Experiences
- **Founder**: Yatharth Gairola
- **Specialization**: Himalayan Trekking and Adventure Tourism

## 📄 License

This project is created for Oh-Bhaisahab Experiences. All rights reserved.

---

Built with ❤️ for adventure seekers and mountain lovers.