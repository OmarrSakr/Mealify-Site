# Mealify 🍽️

![Mealify](https://github.com/user-attachments/assets/77bb8fcb-e9e9-4fa5-97ef-28e4706a9d98)

`Mealify` is a modern, responsive restaurant website designed to showcase delicious meals, professional chefs, and provide an excellent user experience. The website features a clean design, interactive elements, and seamless navigation across all devices, making it perfect for food businesses looking to establish a strong online presence.

---

## Live Demo 🌐
- Check out the live demo of the project at [Mealify Site](https://omarrsakr.github.io/Mealify-Site/).

---

## 🛠 Website Features

<code>1. Fully Responsive Design:</code>
   - Optimized layout for all device sizes and screen resolutions.
   - Mobile-first approach with smooth hamburger menu navigation (below 992px).
   - Touch-friendly interface with swipe gestures support.

<code>2. Dark Mode Toggle:</code>
   - Seamless light/dark theme switching with persistent user preference.
   - Elegant sun/moon icon toggle with smooth transitions.
   - Enhanced readability in both modes.

<code>3. Interactive Navigation:</code>
   - Collapsible mobile menu with slide-in animation from the right.
   - Smooth scrolling between sections with active state indicators.
   - Multiple menu closing methods (close button, overlay click, link click, ESC key).

<code>4. Hero Section:</code>
   - Eye-catching animated food imagery with hover effects.
   - Clear call-to-action buttons for table booking and video watching.
   - Responsive text scaling for optimal readability.

<code>5. Professional Chefs Section:</code>
   - Showcase of three professional chefs with detailed profiles.
   - Hover-activated social media links (Twitter, Facebook, Instagram, LinkedIn).
   - Animated card effects with smooth transitions.

<code>6. Interactive Gallery:</code>
   - Masonry-style layout showcasing food photography.
   - Custom lightbox functionality for image viewing (click anywhere to close).
   - Responsive grid system adapting to different screen sizes.
   - Hover effects with overlay descriptions for each dish.

<code>7. Contact & Location:</code>
   - Integrated Google Maps iframe showing restaurant location.
   - Professional contact information display with icons.
   - Responsive contact form with validation and success/error messages.
   - Opening hours and business details clearly presented.

<code>8. Enhanced Footer:</code>
   - Newsletter subscription with email validation.
   - Quick navigation links and social media integration.
   - Business contact information and branding elements.

---

## 🚀 User Experience Features

- **Smooth Navigation**: Active section highlighting with intersection observer API.
- **Back to Top Button**: Appears on scroll with smooth animation.
- **Toast Notifications**: Success and error messages for form interactions.
- **Keyboard Accessibility**: Full keyboard navigation support with ESC key shortcuts.
- **Touch Gestures**: Mobile-optimized touch interactions and swipe support.
- **Loading Animations**: Smooth transitions and micro-interactions throughout.

---

## 🧑‍💻 Technologies & Libraries

<code>HTML5:</code>
- Semantic markup structure for improved accessibility and SEO.
- Proper heading hierarchy and ARIA attributes for screen readers.

<code>CSS3:</code>
- Modern CSS features including CSS Grid, Flexbox, and CSS Variables.
- Modular stylesheet architecture with separate files for organization:
  - `style.css` - Main stylesheet with core components
  - `media.css` - Responsive design and media queries
  - `general.css` - Global styles and CSS variables
  - `darkmode.css` - Dark theme implementation
  - `features.css` - Enhanced feature styles

<code>Vanilla JavaScript:</code>
- ES6+ features with modern JavaScript practices.
- Modular code structure with clear separation of concerns.
- Intersection Observer API for smooth scroll animations.
- LocalStorage integration for theme persistence.
- Custom lightbox implementation without external dependencies.

<code>Font Awesome:</code>
- Comprehensive icon library for navigation, social media, and UI elements.
- Scalable vector icons optimized for all screen densities.

<code>Google Fonts:</code>
- Typography stack: Open Sans (default), Amatic SC (primary headings), Inter (secondary).
- Optimized font loading with `font-display: swap` for performance.

<code>Google Maps Embed API:</code>
- Interactive map integration for location display.
- Responsive iframe implementation with fallback options.

---

## How to Use 🚀  

We welcome **contributions** to *Mealify*! Here's how you can get started:

1. **Fork the repository** - Click the "Fork" button at the top right of the repository page.
2. **Clone your fork** - Use the command:
   
   ```bash
   git clone https://github.com/YourUsername/Mealify-Site.git
   ```

3. **Navigate to project directory**:
   ```bash
   cd Mealify-Site
   ```

4. **Open with a local server** - Use Live Server extension in VS Code or any local development server.

5. **Make your changes** - Enhance features, fix bugs, or improve the design.

6. **Create a pull request** - Share your improvements with the community.

---

## 📂 Project Structure 
```
📦 task_5 Mealify
 ┣ 📂CSS
 ┃ ┣ 📜all.min.css
 ┃ ┣ 📜darkmode.css
 ┃ ┣ 📜general.css
 ┃ ┣ 📜media.css
 ┃ ┗ 📜style.css
 ┣ 📂JS
 ┃ ┗ 📜main.js
 ┣ 📂images-Mealify
 ┃ ┣ 📂Cheafs
 ┃ ┃ ┣ 📜chefs-1.jpg
 ┃ ┃ ┣ 📜chefs-2.jpg
 ┃ ┃ ┣ 📜chefs-3.jpg
 ┃ ┃ ┗ 📜team-shape.svg
 ┃ ┣ 📂Gallery
 ┃ ┃ ┣ 📜meal-1.jpg
 ┃ ┃ ┣ 📜meal-2.jpg
 ┃ ┃ ┣ 📜meal-3.jpg
 ┃ ┃ ┣ 📜meal-4.jpg
 ┃ ┃ ┣ 📜meal-5.jpg
 ┃ ┃ ┣ 📜meal-6.jpg
 ┃ ┃ ┗ 📜meal-7.jpg
 ┃ ┣ 📜favicon.png
 ┃ ┣ 📜main course-img.png
 ┃ ┣ 📜mealify0.png
 ┃ ┗ 📜textured-metal-background.jpg
 ┣ 📂webfonts
 ┃ ┣ 📜fa-brands-400.woff2
 ┃ ┣ 📜fa-regular-400.woff2
 ┃ ┗ 📜fa-solid-900.woff2
 ┣ 📜index.html
 ┣ 📜Mealify.png
 ┗ 📜README.md


```

---

## 🎨 Design Features

- **Color Scheme**: Professional red (#E71414) primary color with complementary palette.
- **Typography**: Hierarchical font system with proper contrast ratios.
- **Animations**: Subtle hover effects and smooth transitions throughout.
- **Responsive Images**: Optimized images with proper aspect ratios and lazy loading.
- **Accessibility**: WCAG compliant color contrast and keyboard navigation.

---

## 📱 Responsive Breakpoints

- **Desktop**: 1401px and above - Full layout with sidebar navigation
- **Large Tablet**: 1200px - 1400px - Compressed desktop layout
- **Tablet**: 768px - 1199px - Two-column layout with hamburger menu
- **Mobile**: 576px - 767px - Single column with optimized touch targets
- **Small Mobile**: Below 576px - Compact single column layout

---

## 🔧 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+, Samsung Internet 14+
- **Features**: CSS Grid, Flexbox, CSS Variables, ES6+ JavaScript

---

## Future Enhancements 📈

- **Online Ordering System**: Integration with food delivery platforms.
- **Reservation System**: Real-time table booking with calendar integration.
- **Multi-language Support**: Internationalization for global audience.
- **Performance Optimization**: Image lazy loading and service worker implementation.
- **CMS Integration**: Admin panel for easy content management.
- **SEO Enhancements**: Structured data markup and meta tag optimization.

---

## Contributing Guidelines 🤝

1. **Code Style**: Follow consistent naming conventions and indentation.
2. **Testing**: Test across multiple devices and browsers before submitting.
3. **Documentation**: Update README and comments for any new features.
4. **Performance**: Ensure changes don't negatively impact loading times.
5. **Accessibility**: Maintain WCAG compliance in all modifications.

---

## Contact & Support 📧

For questions, suggestions, or support, please:
- Open an issue on GitHub
- Contact the maintainer through the repository
- Check the live demo for feature examples

---

**Built with ❤️ for the food industry community**