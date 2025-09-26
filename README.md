# Chandan Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a sleek design with dark/light mode support, smooth animations, and a comprehensive showcase of skills, projects, and professional experience.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **SEO Friendly**: Optimized for search engines with proper meta tags and structure

### Sections & Pages
- **Hero Section**: Eye-catching introduction with animated elements
- **About Page**: Detailed professional background and experience
- **Skills Section**: Interactive showcase of technical skills and expertise
- **Projects Showcase**: Portfolio of completed projects with descriptions
- **Services Section**: Professional services offered
- **Industry Areas**: Industries and domains of expertise
- **Mission & Vision**: Professional goals and vision statements
- **Clients Section**: Client testimonials and partnerships
- **Achievements**: Professional accomplishments and milestones
- **Blog System**: Dynamic blog with admin panel for content management
- **Contact Page**: Contact form and professional contact information

### Technical Features
- **Authentication System**: Secure admin login for blog management
- **Protected Routes**: Admin-only sections with route protection
- **API Integration**: Axios for API calls and data management
- **3D Graphics**: Three.js integration for interactive visual elements
- **Custom Animations**: Framer Motion for smooth, professional animations
- **Icon Library**: React Icons for consistent iconography
- **Modern CSS**: Tailwind CSS with custom configurations and themes

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.0.6** - Next-generation frontend tooling
- **React Router DOM 7.7.1** - Client-side routing
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library

### UI & Graphics
- **React Icons 5.5.0** - Popular icon library
- **Three.js 0.167.1** - 3D graphics library
- **OGL 1.0.11** - Minimal WebGL library
- **Postprocessing 6.37.7** - Post-processing effects

### Development Tools
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS transformation tool
- **Vite React Plugin** - React support for Vite

### Backend Integration
- **Axios 1.11.0** - HTTP client for API requests

## 📁 Project Structure

```
chandan-portfolio/
├── public/                     # Static assets
├── src/
│   ├── api/                   # API integration
│   │   ├── blog.js           # Blog API endpoints
│   │   └── contact.js        # Contact form API
│   ├── assets/               # Images and static files
│   │   ├── chandan_mee.png   # Profile images
│   │   ├── chandan_mee_lt.png
│   │   ├── gallery/          # Image gallery
│   │   ├── icons/            # Custom icons
│   │   └── illustrations/    # Illustration assets
│   ├── components/           # Reusable components
│   │   ├── CTA.jsx          # Call-to-action component
│   │   ├── CustomCursor.jsx  # Custom cursor effect
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── ProtectedRoute.jsx # Route protection
│   │   ├── reactbits/        # Utility components
│   │   └── sections/         # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── SkillsSection.jsx
│   │       ├── ProjectsShowcase.jsx
│   │       ├── ServiceSection.jsx
│   │       ├── IndustrySection.jsx
│   │       ├── MissionVision.jsx
│   │       ├── ClientSection.jsx
│   │       └── AchievementSection.jsx
│   ├── context/              # React Context
│   │   ├── AuthContext.jsx   # Authentication state
│   │   └── ThemeContext.jsx  # Theme management
│   ├── pages/                # Main pages
│   │   ├── Home.jsx          # Homepage
│   │   ├── About.jsx         # About page
│   │   ├── Projects.jsx      # Projects page
│   │   ├── Contact.jsx       # Contact page
│   │   ├── Blog.jsx          # Blog listing
│   │   ├── BlogPost.jsx      # Individual blog post
│   │   ├── AdminBlog.jsx     # Blog admin panel
│   │   └── Login.jsx         # Admin login
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── .gitignore                # Git ignore rules
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS config
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chandanmee/profilex.git
   cd chandan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Theme Configuration
The project uses a custom Tailwind CSS configuration with:
- **Primary Colors**: Custom purple/indigo color palette
- **Dark Mode**: Class-based dark mode implementation
- **Custom Animations**: Fade-in, slide-up, and slide-down animations
- **Typography**: Inter font family with Fira Code for monospace

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to the desired page
3. Follow the existing pattern for animations and styling

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## 🔧 Configuration

### Vite Configuration
- **Port**: 3000
- **Host**: 0.0.0.0 (accessible on local network)
- **Auto-open**: Browser opens automatically
- **Path Aliases**: `@assets` for asset imports

### Environment Setup
Create a `.env` file for environment variables:
```env
VITE_API_BASE_URL=your_api_url
VITE_CONTACT_API=your_contact_api
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🌟 Key Features Explained

### Authentication System
- JWT-based authentication for admin access
- Protected routes for blog management
- Secure login/logout functionality

### Blog Management
- Admin panel for creating/editing blog posts
- Dynamic blog post rendering
- SEO-optimized blog structure

### Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size with Vite
- Efficient re-renders with React best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

**Chandan Mee**
- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using React, Vite, and Tailwind CSS