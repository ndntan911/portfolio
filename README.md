# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and TailwindCSS. Features dark/light mode toggle, project showcase, blog, contact form, and more.

## ✨ Features

- 🌙 **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- 📱 **Mobile-Responsive Design** - Optimized for all device sizes
- 🎨 **Beautiful UI/UX** - Modern design with smooth animations and transitions
- 💼 **Project Showcase** - Featured projects with code snippets and live demos
- 📝 **Blog Section** - Markdown-based blog with search and filtering
- 📄 **Resume Page** - Downloadable CV with professional layout
- 📧 **Contact Form** - Email integration using EmailJS
- ⚡ **Performance Optimized** - Fast loading with code splitting and lazy loading
- 🔍 **SEO Friendly** - Meta tags and semantic HTML
- 🚀 **CI/CD Ready** - Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Email**: EmailJS
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
personal-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Resume.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .github/
│   └── workflows/         # CI/CD workflows
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## ⚙️ Configuration

### EmailJS Setup

1. Sign up for an [EmailJS](https://www.emailjs.com/) account
2. Create an email service and template
3. Update the EmailJS configuration in `src/pages/Contact.tsx`:
   ```typescript
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',    // Replace with your service ID
     'YOUR_TEMPLATE_ID',   // Replace with your template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'     // Replace with your public key
   );
   ```

### Personalization

Update the following files with your information:

- **Personal Info**: `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/Resume.tsx`
- **Projects**: `src/pages/Projects.tsx`
- **Blog Posts**: `src/pages/Blog.tsx`
- **Contact Info**: `src/pages/Contact.tsx`, `src/components/Footer.tsx`
- **Social Links**: Update all GitHub, LinkedIn, Twitter URLs

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary colors
      }
    }
  }
}
```

### Fonts

Update font imports in `index.html` and font families in `tailwind.config.js`.

### Animations

Customize animations in `tailwind.config.js` under the `keyframes` and `animation` sections.

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings
2. **Update repository name** in `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/' // Replace with your repo name
   ```
3. **Push to main branch** - GitHub Actions will automatically deploy

### Manual Deployment

```bash
npm run build
# Deploy the `dist` folder to your hosting provider
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌟 Features Showcase

### Dark/Light Mode
- System preference detection
- Smooth theme transitions
- Persistent theme selection
- Optimized color schemes

### Project Showcase
- Featured projects section
- Code snippet modal
- Live demo links
- Technology tags
- Category filtering

### Blog System
- Markdown support
- Search functionality
- Category filtering
- Reading time estimation
- Responsive modal for posts

### Contact Form
- Email integration
- Form validation
- Loading states
- Success/error notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service

## 📞 Contact

- Portfolio: [https://yourwebsite.com](https://yourwebsite.com)
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [https://linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- GitHub: [https://github.com/yourusername](https://github.com/yourusername)

---

⭐ If you like this portfolio, please give it a star!
