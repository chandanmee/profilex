# Chandan Portfolio

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js). Features a sleek design with dark/light mode support, smooth animations, admin dashboard for content management, and a comprehensive showcase of skills, projects, and professional experience.

## 🚀 Features

### Backend Features
- **RESTful API**: Express.js server with comprehensive endpoints
- **MongoDB Database**: NoSQL database with Mongoose ODM
- **JWT Authentication**: Secure admin authentication system
- **Error Handling**: Centralized error handling with Winston logging
- **Input Validation**: Request validation and sanitization
- **Rate Limiting**: Protection against API abuse
- **CORS Configuration**: Cross-origin resource sharing setup

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

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Winston** - Logging library
- **express-rate-limit** - Rate limiting
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing

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
├── server/                     # Backend application
│   ├── controllers/           # Route controllers
│   ├── middleware/            # Custom middleware
│   ├── models/               # Database models
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── docs/                 # API documentation
│   ├── scripts/              # Utility scripts
│   └── server.js             # Entry point
├── public/                     # Static assets
├── src/
│   ├── api/                   # API integration
│   │   ├── auth.js           # Authentication API
│   │   ├── blog.js           # Blog API endpoints
│   │   ├── contact.js        # Contact form API
│   │   └── config.js         # API configuration
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
│   ├── contexts/              # React Context
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
│   ├── utils/                # Frontend utilities
│   │   ├── errorHandler.js   # Error handling utilities
│   │   └── logger.js         # Frontend logging
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
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chandanmee/profilex.git
   cd chandan-portfolio
   ```

2. **Backend Setup**
   ```bash
   # Navigate to server directory
   cd server
   
   # Install dependencies
   npm install
   
   # Create environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   # Required variables:
   # - MONGODB_URI
   # - JWT_SECRET
   # - ADMIN_EMAIL
   # - ADMIN_PASSWORD
   
   # Create admin user (first time only)
   npm run create-admin
   
   # Start development server
   npm run dev
   ```
   
   The backend server will start on `http://localhost:5000`

3. **Frontend Setup**
   ```bash
   # Navigate back to project root
   cd ../
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```
   
   The frontend application will start on `http://localhost:3001`

### Available Scripts

#### Backend (`server/`)
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run create-admin` - Create admin user

#### Frontend
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

### Backend Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/chandan-portfolio

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Admin User
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password

# CORS
FRONTEND_URL=http://localhost:3001

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend Configuration

Update `src/api/config.js` if needed:
```javascript
export const API_BASE_URL = 'http://localhost:5000/api';
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔐 Authentication

The application uses JWT-based authentication:

1. **Admin Login**: Use the credentials set in your `.env` file
2. **Token Storage**: Tokens are stored in localStorage
3. **Protected Routes**: Admin routes require authentication
4. **Token Expiry**: Tokens expire based on `JWT_EXPIRES_IN` setting

### Default Admin Credentials

After running `npm run create-admin`, use:
- **Email**: Value from `ADMIN_EMAIL` in `.env`
- **Password**: Value from `ADMIN_PASSWORD` in `.env`

## 📚 API Documentation

Comprehensive API documentation is available at `server/docs/API.md`. It includes:

- Authentication endpoints
- Blog management endpoints
- Contact form endpoints
- Request/response examples
- Error codes and handling
- Rate limiting information

## 🌟 Key Features Explained

### Full-Stack Architecture
- **Backend API**: RESTful API with Express.js and MongoDB
- **Frontend SPA**: React application with modern hooks and context
- **Real-time Integration**: Seamless frontend-backend communication
- **Error Handling**: Comprehensive error handling on both ends

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