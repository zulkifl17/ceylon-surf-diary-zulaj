# Ceylon Surf Diary - Project Documentation

## 🌊 Special Guide

### How to Use This Documentation

This documentation serves as a comprehensive guide to the Ceylon Surf Diary project. It outlines the current state of development, technical implementation details, and future development roadmap.

#### For Understanding the Project Structure
1. Review the **Existing Pages** section to understand what has been implemented.
2. Examine the **Pages to be Added** section to see what needs to be developed.
3. For each page, detailed information is provided about:
   - Implemented sections
   - Sections to be added
   - Design details
   - Technical implementation
   - Current status

#### For Starting Implementation
1. Identify a page or section marked as "Pending" in the documentation.
2. Review the design and technical requirements outlined for that component.
3. Reference existing components with similar functionality for consistency.
4. Follow the established patterns for styling (Tailwind CSS), animations (GSAP, Framer Motion), and component structure.

#### For Updating Documentation
After completing or modifying a component:
1. Update the status of the component from "Pending" to "Done".
2. Add any relevant implementation details that might differ from the original plan.
3. If you've made significant changes to an existing component, add a note in the "Change Log" section for that component.

---

## 📋 Project Overview

### Technology Stack
- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Animation Libraries:** 
  - GSAP with ScrollTrigger for scroll-based animations
  - Framer Motion for component animations
- **Build Tool:** Vite
- **Icons:** Lucide React

### Existing Pages
- Home Page (implemented as a single page with multiple sections)

### Pages to be Added
- Gallery
- Services & Pricing
- Our Story
- Booking / Contact (partial implementation exists in the Home Page)
- Blog / Surf Diary
- Testimonials

### Project Structure
- **Components:** Individual sections that make up the pages
- **Types:** TypeScript interfaces for data structures
- **Styling:** Global styles in index.css and component-specific styles using Tailwind

---

## 📌 Home Page

**Sections:**
- Hero Section (Implemented)
- About Section (Implemented)
- Horizontal Gallery (Implemented)
- Surf Stories (Implemented)
- Immersive Section (Implemented)
- Contact Section (Implemented)
- Testimonials (Not Implemented)

---

### 🔸 Hero Section

**Design:**
- **Layout:** Full-screen, with a background video and centered text content.
- **Typography:** Uses "Tangerine" for the main heading ("Surf Through My Lens") and "Josefin Sans" for the paragraph.
- **Color Scheme:** Primarily uses `#121212` for text and `#F7F7F5` for the background overlay.
- **Animations:**
  - The main text and button fade in on load using Framer Motion.
  - The text and video blur and fade out on scroll, powered by GSAP and ScrollTrigger.
  - A subtle "SCROLL" indicator with a bouncing arrow at the bottom.

**Technical Implementation:**
- **Component:** `src/components/Hero.tsx`
- **Styling:** Tailwind CSS for layout and styling.
- **Libraries:**
  - `react`: For building the component.
  - `framer-motion`: For the initial text animation.
  - `gsap` with `ScrollTrigger`: For scroll-based animations.
  - `lucide-react`: For the `ChevronDown` icon.
- **Responsive Design:** Should be done.

**Current Status:** ✅ Done

---

### 🔸 About Section

**Design:**
- **Layout:** A two-column grid on larger screens, with a sticky image on the left and scrolling text on the right. On smaller screens, it's a single column.
- **Typography:** "Bebas Neue" or "Oswald" for the heading and "Inter" for the body text.
- **Color Scheme:** Matches the site's primary colors.
- **Interactions:** The image scales up slightly on hover, and the grayscale filter is removed.

**Technical Implementation:**
- **Component:** `src/components/About.tsx`
- **Styling:** Tailwind CSS.
- **Libraries:**
  - `gsap` with `ScrollTrigger`: To create the parallax effect on the text.
  - `react`: For the component and state management (`useState` for hover).

**Current Status:** ✅ Done

---

### 🔸 Horizontal Gallery

**Design:**
- **Layout:** A horizontally scrolling gallery that is pinned to the screen as the user scrolls.
- **Typography:** "Bebas Neue" or "Oswald" for the "PORTFOLIO" heading.
- **Interactions:** Images transition from grayscale to color and scale up on hover.

**Technical Implementation:**
- **Component:** `src/components/HorizontalGallery.tsx`
- **Styling:** Tailwind CSS.
- **Libraries:**
  - `gsap` with `ScrollTrigger`: For the horizontal scrolling effect.
  - `react`: For the component and state management.

**Current Status:** ✅ Done

---

### 🔸 Surf Stories

**Design:**
- **Layout:** A series of full-screen sections, each with an image and text. The layout alternates between image-left/text-right and vice-versa.
- **Typography:** "Bebas Neue" or "Oswald" for titles and "Inter" for descriptions.
- **Interactions:** Images transition from grayscale to color and scale up on hover. The sections fade in as they are scrolled into view.

**Technical Implementation:**
- **Component:** `src/components/SurfStories.tsx`
- **Styling:** Tailwind CSS.
- **Libraries:**
  - `gsap` with `ScrollTrigger`: For the fade-in animation of each story card.
  - `react`: For the component and state management.

**Current Status:** ✅ Done

---

### 🔸 Immersive Section

**Design:**
- **Layout:** A full-screen, pinned section with a background image. Text content fades in and out as the user scrolls.
- **Typography:** "Bebas Neue" or "Oswald" for the large, impactful text.
- **Color Scheme:** Dark background with light text.

**Technical Implementation:**
- **Component:** `src/components/ImmersiveSection.tsx`
- **Styling:** Tailwind CSS.
- **Libraries:**
  - `gsap` with `ScrollTrigger`: To create the pinning and text animation sequence.
  - `react`: For the component.

**Current Status:** ✅ Done

---

### 🔸 Contact Section

**Design:**
- **Layout:** A clean and simple contact form with social media links and a footer.
- **Typography:** "Bebas Neue" or "Oswald" for headings.
- **Interactions:** Form inputs animate in on scroll.

**Technical Implementation:**
- **Component:** `src/components/Contact.tsx`
- **Styling:** Tailwind CSS.
- **Libraries:**
  - `gsap` with `ScrollTrigger`: For the form input animations.
  - `react`: For the component and form state management.
  - `lucide-react`: For icons.

**Current Status:** ✅ Done

---

## 📌 Gallery Page

**Sections:**
- Gallery Grid (Not Implemented)
- Category Filters (Not Implemented)

---

### 🔸 Gallery Grid

**Design:**
- **Layout:** A responsive grid of images (e.g., masonry layout) that fills the page.
- **Interactions:**
  - Images should have a subtle hover effect (e.g., zoom, overlay).
  - Clicking on an image should open it in a full-screen lightbox with navigation to the next/previous image.
- **Performance:** Images should be optimized for fast loading, possibly using lazy loading.

**Technical Implementation:**
- **Component:** `src/pages/Gallery.tsx` (to be created)
- **Styling:** Tailwind CSS.
- **Libraries:**
  - A lightbox library (e.g., `yet-another-react-lightbox`).
  - A library for masonry layout if needed (e.g., `react-masonry-css`).

**Current Status:** 🚧 Pending

---

### 🔸 Category Filters

**Design:**
- **Layout:** A set of filter buttons or a dropdown menu at the top of the gallery.
- **Categories:** Surf Action, Lifestyle, Sunset Shoots, etc.
- **Interactions:** Clicking a filter should smoothly animate the gallery to show only images from that category.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Gallery.tsx`.
- **State Management:** Use React state to manage the active filter and the displayed images.
- **Animation:** Use a library like `framer-motion` to animate the filtering process.

**Current Status:** 🚧 Pending

---

## 📌 Services & Pricing Page

**Sections:**
- Pricing Packages (Not Implemented)
- Add-ons Section (Not Implemented)
- Booking Call-to-Action (Not Implemented)

---

### 🔸 Pricing Packages

**Design:**
- **Layout:** A clean, comparable layout of pricing tiers (e.g., 3-column cards).
- **Content:** Each package should clearly list what's included (e.g., session duration, number of photos, location).
- **Typography:** Clear, legible fonts for pricing and features.

**Technical Implementation:**
- **Component:** `src/pages/Services.tsx` (to be created)
- **Styling:** Tailwind CSS.

**Current Status:** 🚧 Pending

---

### 🔸 Add-ons Section

**Design:**
- **Layout:** A section below the main packages detailing optional extras.
- **Content:** List add-ons like video reels, drone shots, same-day delivery, etc., with their prices.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Services.tsx`.

**Current Status:** 🚧 Pending

---

### 🔸 Booking Call-to-Action

**Design:**
- **Layout:** A prominent button or section that encourages users to book a session.
- **Interaction:** The button should link to the "Booking / Contact" page.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Services.tsx`.

**Current Status:** 🚧 Pending

---

## 📌 Our Story Page

**Sections:**
- Bio Section (Not Implemented)
- Philosophy/Mission (Not Implemented)

---

### 🔸 Bio Section

**Design:**
- **Layout:** A personal introduction with a friendly, high-quality photo of the photographer.
- **Content:** A short story about the photographer's passion for surfing and photography, and their experience.
- **Typography:** A warm, personal font that is easy to read.

**Technical Implementation:**
- **Component:** `src/pages/OurStory.tsx` (to be created)
- **Styling:** Tailwind CSS.

**Current Status:** 🚧 Pending

---

### 🔸 Philosophy/Mission

**Design:**
- **Layout:** A section that complements the bio, perhaps with a supporting image or a pull quote.
- **Content:** A brief explanation of the photographer's approach to capturing surf culture and what they aim to convey through their work.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/OurStory.tsx`.

**Current Status:** 🚧 Pending

---

## 📌 Booking / Contact Page

**Note:** A contact section already exists on the Home Page, but a dedicated page may be needed.

**Sections:**
- Booking Form (Not Implemented)
- Contact Information (Not Implemented)
- Location Map (Not Implemented)

---

### 🔸 Booking Form

**Design:**
- **Layout:** A clean, user-friendly form with fields for name, date, location, and contact information.
- **Validation:** Form validation to ensure all required fields are filled correctly.
- **Submission:** Clear feedback when the form is submitted successfully.

**Technical Implementation:**
- **Component:** `src/pages/Booking.tsx` (to be created)
- **Styling:** Tailwind CSS.
- **Libraries:**
  - A form validation library (e.g., `react-hook-form`).
  - Potentially a date picker component.

**Current Status:** 🚧 Pending

---

### 🔸 Contact Information

**Design:**
- **Layout:** Clear display of contact methods (WhatsApp, Instagram, email).
- **Interactions:** Direct links that open the respective apps or services.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Booking.tsx`.

**Current Status:** 🚧 Pending

---

### 🔸 Location Map

**Design:**
- **Layout:** An embedded map showing the photographer's base location.
- **Interaction:** Possibly clickable to open in Google Maps.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Booking.tsx`.
- **Libraries:**
  - A map library (e.g., Google Maps API, Leaflet).

**Current Status:** 🚧 Pending

---

## 📌 Blog / Surf Diary Page

**Sections:**
- Blog Post Grid (Not Implemented)
- Individual Blog Post Template (Not Implemented)
- Categories/Tags (Not Implemented)

---

### 🔸 Blog Post Grid

**Design:**
- **Layout:** A grid of blog post cards, each with a featured image, title, excerpt, and date.
- **Pagination:** If there are many posts, implement pagination or infinite scrolling.

**Technical Implementation:**
- **Component:** `src/pages/Blog.tsx` (to be created)
- **Styling:** Tailwind CSS.

**Current Status:** 🚧 Pending

---

### 🔸 Individual Blog Post Template

**Design:**
- **Layout:** A clean, readable layout for individual blog posts with a featured image, title, content, and metadata.
- **Typography:** Optimized for reading comfort.

**Technical Implementation:**
- **Component:** `src/pages/BlogPost.tsx` (to be created)
- **Styling:** Tailwind CSS.
- **Routing:** Implement dynamic routing for individual blog posts.

**Current Status:** 🚧 Pending

---

### 🔸 Categories/Tags

**Design:**
- **Layout:** A sidebar or section showing blog categories or tags.
- **Interaction:** Clicking a category should filter the blog posts.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Blog.tsx`.

**Current Status:** 🚧 Pending

---

## 📌 Testimonials Page

**Sections:**
- Testimonial Grid/Slider (Not Implemented)
- Submission Form (Optional) (Not Implemented)

---

### 🔸 Testimonial Grid/Slider

**Design:**
- **Layout:** A grid or slider of testimonial cards, each with a quote, name, and possibly a photo.
- **Interactions:** If implemented as a slider, include navigation controls.

**Technical Implementation:**
- **Component:** `src/pages/Testimonials.tsx` (to be created)
- **Styling:** Tailwind CSS.
- **Libraries:**
  - If using a slider, consider a library like `swiper` or `react-slick`.

**Current Status:** 🚧 Pending

---

### 🔸 Submission Form (Optional)

**Design:**
- **Layout:** A simple form allowing clients to submit their testimonials.
- **Validation:** Form validation to ensure all required fields are filled correctly.

**Technical Implementation:**
- **Component:** To be integrated into `src/pages/Testimonials.tsx`.
- **Styling:** Tailwind CSS.

**Current Status:** 🚧 Pending

---

## 🔄 Project Restructuring

Currently, the project is structured with all components directly in the `src/components` directory, and the entire site is rendered as a single page in `App.tsx`. To support multiple pages, the following restructuring is needed:

### Tasks:

1. **Create a Pages Directory:**
   - Create a `src/pages` directory to house individual page components.
   - Move appropriate sections from the Home Page to their respective page components.

2. **Implement Routing:**
   - Add a routing library (e.g., React Router).
   - Set up routes for each page in the application.
   - Update the navigation menu to use these routes.

3. **Refactor Components:**
   - Organize components into subdirectories based on their purpose (e.g., `src/components/layout`, `src/components/ui`).
   - Create reusable components for common elements (e.g., buttons, cards).

4. **Update Navigation:**
   - Modify the `Navbar.tsx` component to support navigation between pages.
   - Add active state styling for the current page.

**Current Status:** 🚧 Pending

---

## 📝 Change Log

### [Date] - Initial Documentation
- Created comprehensive project documentation.
- Documented existing components and outlined future development.

---