# Naming Conventions & Project Structure Guidelines

## 🎯 Overview
This document defines the naming conventions and project structure guidelines for the Ceylon Surf Diary project. Consistent naming and organization improve code readability, maintainability, and team collaboration.

## 📁 Project Structure Guidelines

### Root Directory Structure
```
ceylon-surf-diary-zulaj/
├── docs/                     # Documentation files
│   ├── PROJECT_DOCUMENTATION.md
│   ├── BEST_PRACTICES.md
│   ├── NAMING_CONVENTIONS.md
│   └── DATA_FILES.md
├── public/                   # Static assets
│   ├── images/              # Image assets
│   │   ├── gallery/         # Gallery images
│   │   ├── stories/         # Story images
│   │   └── icons/           # Icon files
│   └── videos/              # Video assets
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Layout components
│   │   └── sections/        # Page sections
│   ├── data/                # Data files
│   │   ├── gallery.ts       # Gallery data
│   │   ├── stories.ts       # Stories data
│   │   ├── navigation.ts    # Navigation data
│   │   └── contact.ts       # Contact data
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles and themes
│   └── constants/           # Application constants
├── tests/                   # Test files
└── config/                  # Configuration files
```

## 🏷️ File Naming Conventions

### Component Files
- **Format**: PascalCase with descriptive names
- **Extension**: `.tsx` for React components
- **Examples**:
  ```
  ✅ Good:
  Hero.tsx
  SurfStories.tsx
  HorizontalGallery.tsx
  ContactForm.tsx
  NavigationMenu.tsx
  
  ❌ Bad:
  hero.tsx
  surf-stories.tsx
  horizontalGallery.tsx
  contact_form.tsx
  ```

### Data Files
- **Format**: camelCase with descriptive names
- **Extension**: `.ts` for TypeScript data files
- **Examples**:
  ```
  ✅ Good:
  galleryData.ts
  surfStories.ts
  navigationItems.ts
  contactInfo.ts
  
  ❌ Bad:
  gallery-data.ts
  SurfStories.ts
  navigation_items.ts
  ```

### Utility Files
- **Format**: camelCase with descriptive names
- **Extension**: `.ts` for TypeScript utilities
- **Examples**:
  ```
  ✅ Good:
  imageUtils.ts
  animationHelpers.ts
  formValidation.ts
  
  ❌ Bad:
  image-utils.ts
  AnimationHelpers.ts
  form_validation.ts
  ```

### Type Definition Files
- **Format**: camelCase with descriptive names
- **Extension**: `.ts` for TypeScript types
- **Examples**:
  ```
  ✅ Good:
  componentTypes.ts
  dataTypes.ts
  apiTypes.ts
  
  ❌ Bad:
  component-types.ts
  DataTypes.ts
  api_types.ts
  ```

## 🧩 Component Naming Conventions

### Component Names
- **Format**: PascalCase
- **Pattern**: `[Purpose][Type]` or `[Section][Component]`
- **Examples**:
  ```typescript
  // ✅ Good: Clear, descriptive names
  export default function Hero() { }
  export default function SurfStories() { }
  export default function ContactForm() { }
  export default function NavigationMenu() { }
  export default function ImageGallery() { }
  
  // ❌ Bad: Unclear or inconsistent names
  export default function hero() { }
  export default function Stories() { }
  export default function Form() { }
  export default function Nav() { }
  ```

### Component Props Interfaces
- **Format**: `[ComponentName]Props`
- **Examples**:
  ```typescript
  // ✅ Good:
  interface HeroProps {
    title: string;
    subtitle: string;
  }
  
  interface SurfStoriesProps {
    stories: SurfStory[];
    showAll?: boolean;
  }
  
  // ❌ Bad:
  interface Props {
    title: string;
  }
  
  interface heroProps {
    title: string;
  }
  ```

## 🔤 Variable and Function Naming

### Variables
- **Format**: camelCase
- **Pattern**: Descriptive and meaningful names
- **Examples**:
  ```typescript
  // ✅ Good:
  const isMenuOpen = useState(false);
  const surfStoryData = getSurfStories();
  const currentImageIndex = 0;
  const animationDuration = 0.8;
  
  // ❌ Bad:
  const isOpen = useState(false);
  const data = getSurfStories();
  const index = 0;
  const duration = 0.8;
  ```

### Functions
- **Format**: camelCase
- **Pattern**: Verb + noun or descriptive action
- **Examples**:
  ```typescript
  // ✅ Good:
  const handleMenuToggle = () => { };
  const fetchSurfStories = async () => { };
  const validateContactForm = (data) => { };
  const animateImageEntry = (element) => { };
  
  // ❌ Bad:
  const toggle = () => { };
  const fetch = async () => { };
  const validate = (data) => { };
  const animate = (element) => { };
  ```

### Event Handlers
- **Format**: `handle[Event][Element]` or `on[Event][Element]`
- **Examples**:
  ```typescript
  // ✅ Good:
  const handleSubmitForm = (e: React.FormEvent) => { };
  const handleImageHover = (imageId: number) => { };
  const handleMenuItemClick = (item: string) => { };
  const onScrollTrigger = () => { };
  
  // ❌ Bad:
  const submit = (e: React.FormEvent) => { };
  const hover = (imageId: number) => { };
  const click = (item: string) => { };
  const scroll = () => { };
  ```

## 🎨 CSS Class Naming

### Tailwind CSS Classes
- **Format**: Use Tailwind's utility classes
- **Organization**: Group related classes together
- **Examples**:
  ```typescript
  // ✅ Good: Organized and readable
  <div className="
    relative h-screen w-full
    bg-background
    flex items-center justify-center
    text-primary-text
    overflow-hidden
  ">
  
  // ❌ Bad: Unorganized and hard to read
  <div className="relative bg-background h-screen text-primary-text w-full flex overflow-hidden items-center justify-center">
  ```

### Custom CSS Classes
- **Format**: kebab-case with BEM methodology when needed
- **Examples**:
  ```css
  /* ✅ Good: */
  .hero-section { }
  .surf-story-card { }
  .navigation-menu { }
  .contact-form__input { }
  .gallery-image--active { }
  
  /* ❌ Bad: */
  .heroSection { }
  .SurfStoryCard { }
  .navigation_menu { }
  ```

## 📊 Data Structure Naming

### TypeScript Interfaces
- **Format**: PascalCase with descriptive names
- **Examples**:
  ```typescript
  // ✅ Good:
  interface SurfStory {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    location: string;
  }
  
  interface PortfolioImage {
    id: number;
    src: string;
    alt: string;
    colorSrc: string;
  }
  
  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  // ❌ Bad:
  interface story {
    id: number;
    title: string;
  }
  
  interface Image {
    src: string;
  }
  ```

### Enum Naming
- **Format**: PascalCase for enum name, UPPER_CASE for values
- **Examples**:
  ```typescript
  // ✅ Good:
  enum AnimationType {
    FADE_IN = 'fadeIn',
    SLIDE_UP = 'slideUp',
    SCALE_IN = 'scaleIn'
  }
  
  enum PageSection {
    HERO = 'hero',
    ABOUT = 'about',
    GALLERY = 'gallery',
    STORIES = 'stories',
    CONTACT = 'contact'
  }
  
  // ❌ Bad:
  enum animationType {
    fadein = 'fadeIn',
    slideup = 'slideUp'
  }
  ```

## 🗂️ Import and Export Conventions

### Import Statements
- **Order**: External libraries, internal modules, relative imports
- **Grouping**: Group related imports together
- **Examples**:
  ```typescript
  // ✅ Good: Organized imports
  import { useEffect, useRef, useState } from 'react';
  import { motion } from 'framer-motion';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  import { SurfStory } from '../types/dataTypes';
  import { surfStoriesData } from '../data/surfStories';
  import { animateStoryCard } from '../utils/animationHelpers';
  
  import './SurfStories.css';
  
  // ❌ Bad: Unorganized imports
  import { gsap } from 'gsap';
  import { useState } from 'react';
  import { SurfStory } from '../types/dataTypes';
  import { motion } from 'framer-motion';
  ```

### Export Statements
- **Default Exports**: Use for main component
- **Named Exports**: Use for utilities and types
- **Examples**:
  ```typescript
  // ✅ Good: Clear exports
  export default function SurfStories() { }
  export { type SurfStoriesProps };
  export { animateStoryCard, validateStoryData };
  
  // ❌ Bad: Unclear exports
  export { SurfStories as default };
  ```

## 🔧 Configuration File Naming

### Configuration Files
- **Format**: kebab-case or camelCase depending on convention
- **Examples**:
  ```
  ✅ Good:
  tailwind.config.js
  vite.config.ts
  tsconfig.json
  package.json
  .eslintrc.js
  
  ❌ Bad:
  TailwindConfig.js
  vite_config.ts
  ts-config.json
  ```

## 📋 Naming Checklist

### Before Creating New Files/Components:
- [ ] Does the name clearly describe the purpose?
- [ ] Does it follow the established naming convention?
- [ ] Is it consistent with existing similar files?
- [ ] Does it avoid abbreviations and unclear terms?
- [ ] Is it appropriately descriptive without being too long?

### Before Naming Variables/Functions:
- [ ] Is the name self-documenting?
- [ ] Does it follow camelCase convention?
- [ ] Does it clearly indicate the data type or action?
- [ ] Is it consistent with similar variables in the codebase?
- [ ] Does it avoid misleading or ambiguous terms?

## 🚨 Common Naming Mistakes to Avoid

### 1. Inconsistent Casing
```typescript
// ❌ Bad:
const UserName = 'John';
const user_age = 25;
const UserEmail = 'john@example.com';

// ✅ Good:
const userName = 'John';
const userAge = 25;
const userEmail = 'john@example.com';
```

### 2. Unclear Abbreviations
```typescript
// ❌ Bad:
const usr = getCurrentUser();
const img = getImage();
const btn = document.querySelector('button');

// ✅ Good:
const currentUser = getCurrentUser();
const heroImage = getImage();
const submitButton = document.querySelector('button');
```

### 3. Non-Descriptive Names
```typescript
// ❌ Bad:
const data = fetchStories();
const item = stories[0];
const temp = processImage(image);

// ✅ Good:
const surfStories = fetchStories();
const firstStory = stories[0];
const processedImage = processImage(image);
```

---

*Following these naming conventions ensures consistency, readability, and maintainability across the entire Ceylon Surf Diary project.*