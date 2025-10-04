# Data Files Documentation - Ceylon Surf Diary

## 🎯 Overview
This document defines how data files should be structured and used in the Ceylon Surf Diary project. Separating data from components improves maintainability, reusability, and makes content management easier.

## 📁 Data File Structure

### Recommended Directory Structure
```
src/
├── data/
│   ├── gallery/
│   │   ├── portfolioImages.ts
│   │   ├── categoryImages.ts
│   │   └── index.ts
│   ├── stories/
│   │   ├── surfStories.ts
│   │   ├── blogPosts.ts
│   │   └── index.ts
│   ├── navigation/
│   │   ├── menuItems.ts
│   │   ├── footerLinks.ts
│   │   └── index.ts
│   ├── contact/
│   │   ├── contactInfo.ts
│   │   ├── socialLinks.ts
│   │   └── index.ts
│   └── index.ts (main data exports)
```

## 🏗️ Data File Patterns

### 1. Basic Data File Structure
```typescript
// src/data/gallery/portfolioImages.ts
import type { PortfolioImage } from '../../types/dataTypes';

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    src: '/images/gallery/surf-sunset-1.jpg',
    alt: 'Surfer at sunset in Weligama Bay',
    colorSrc: '/images/gallery/surf-sunset-1-color.jpg',
    category: 'sunset',
    location: 'Weligama Bay',
    photographer: 'Ceylon Surf Lens',
    date: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    src: '/images/gallery/wave-barrel-1.jpg',
    alt: 'Perfect barrel wave at Mirissa Point',
    colorSrc: '/images/gallery/wave-barrel-1-color.jpg',
    category: 'action',
    location: 'Mirissa Point',
    photographer: 'Ceylon Surf Lens',
    date: '2024-01-20',
    featured: false
  }
  // ... more images
];

export default portfolioImages;
```

### 2. Data with Metadata
```typescript
// src/data/stories/surfStories.ts
import type { SurfStory } from '../../types/dataTypes';

export const surfStoriesData: SurfStory[] = [
  {
    id: 1,
    title: 'DAWN PATROL',
    description: 'The first light breaks over Weligama Bay. A lone surfer paddles out, chasing the perfect wave before the crowds arrive.',
    location: 'Weligama Bay, 5:47 AM',
    image: '/images/stories/dawn-patrol.jpg',
    colorImage: '/images/stories/dawn-patrol-color.jpg',
    category: 'lifestyle',
    tags: ['dawn', 'weligama', 'solitude'],
    publishDate: '2024-01-10',
    featured: true,
    photographer: 'Ceylon Surf Lens',
    equipment: {
      camera: 'Canon EOS R5',
      lens: '70-200mm f/2.8',
      settings: 'f/4, 1/500s, ISO 400'
    }
  }
  // ... more stories
];

export const featuredStories = surfStoriesData.filter(story => story.featured);
export const storiesByCategory = (category: string) => 
  surfStoriesData.filter(story => story.category === category);

export default surfStoriesData;
```

### 3. Configuration Data
```typescript
// src/data/navigation/menuItems.ts
import type { NavigationItem } from '../../types/dataTypes';

export const mainMenuItems: NavigationItem[] = [
  {
    id: 'home',
    name: 'Home',
    href: '#hero',
    active: true,
    order: 1
  },
  {
    id: 'gallery',
    name: 'Gallery',
    href: '#gallery',
    active: false,
    order: 2
  },
  {
    id: 'services',
    name: 'Services',
    href: '#services',
    active: false,
    order: 3
  },
  {
    id: 'story',
    name: 'Our Story',
    href: '#about',
    active: false,
    order: 4
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    href: '#testimonials',
    active: false,
    order: 5
  },
  {
    id: 'contact',
    name: 'Contact Us',
    href: '#contact',
    active: false,
    order: 6
  }
];

export const footerMenuItems: NavigationItem[] = [
  {
    id: 'privacy',
    name: 'Privacy Policy',
    href: '/privacy',
    active: false,
    order: 1
  },
  {
    id: 'terms',
    name: 'Terms of Service',
    href: '/terms',
    active: false,
    order: 2
  }
];

export default mainMenuItems;
```

### 4. Contact Information Data
```typescript
// src/data/contact/contactInfo.ts
import type { ContactInfo, SocialLink } from '../../types/dataTypes';

export const contactInfo: ContactInfo = {
  email: 'hello@weligamasurf.com',
  phone: '+94 123 456 789',
  location: {
    address: 'Weligama Bay',
    city: 'Weligama',
    country: 'Sri Lanka',
    description: "Sri Lanka's surf capital"
  },
  businessHours: {
    weekdays: '6:00 AM - 6:00 PM',
    weekends: '5:00 AM - 7:00 PM',
    timezone: 'IST (UTC+5:30)'
  }
};

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/weligama_surf_lens',
    handle: '@weligama_surf_lens',
    icon: 'Instagram',
    primary: true
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:hello@weligamasurf.com',
    handle: 'hello@weligamasurf.com',
    icon: 'Mail',
    primary: true
  },
  {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+94123456789',
    handle: '+94 123 456 789',
    icon: 'Phone',
    primary: true
  }
];

export default { contactInfo, socialLinks };
```

## 🔧 Data File Best Practices

### 1. Type Safety
```typescript
// ✅ Good: Always use TypeScript interfaces
import type { SurfStory } from '../../types/dataTypes';

export const stories: SurfStory[] = [
  // Data with proper typing
];

// ❌ Bad: No type safety
export const stories = [
  // Untyped data
];
```

### 2. Data Validation
```typescript
// src/data/validation/dataValidation.ts
import type { SurfStory } from '../../types/dataTypes';

export const validateSurfStory = (story: SurfStory): boolean => {
  return !!(
    story.id &&
    story.title &&
    story.description &&
    story.image &&
    story.location
  );
};

export const validateImageData = (image: PortfolioImage): boolean => {
  return !!(
    image.id &&
    image.src &&
    image.alt &&
    image.colorSrc
  );
};
```

### 3. Data Transformation Utilities
```typescript
// src/data/utils/dataTransformers.ts
import type { SurfStory, PortfolioImage } from '../../types/dataTypes';

export const transformStoryForDisplay = (story: SurfStory) => ({
  ...story,
  shortDescription: story.description.substring(0, 150) + '...',
  formattedDate: new Date(story.publishDate).toLocaleDateString(),
  slug: story.title.toLowerCase().replace(/\s+/g, '-')
});

export const groupImagesByCategory = (images: PortfolioImage[]) => {
  return images.reduce((acc, image) => {
    const category = image.category || 'uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(image);
    return acc;
  }, {} as Record<string, PortfolioImage[]>);
};
```

### 4. Data Filtering and Sorting
```typescript
// src/data/utils/dataFilters.ts
import type { SurfStory, PortfolioImage } from '../../types/dataTypes';

export const getStoriesByCategory = (
  stories: SurfStory[], 
  category: string
): SurfStory[] => {
  return stories.filter(story => story.category === category);
};

export const getFeaturedStories = (stories: SurfStory[]): SurfStory[] => {
  return stories.filter(story => story.featured);
};

export const sortStoriesByDate = (stories: SurfStory[]): SurfStory[] => {
  return [...stories].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

export const getRandomImages = (
  images: PortfolioImage[], 
  count: number
): PortfolioImage[] => {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
```

## 📊 Data File Organization

### 1. Index Files for Easy Imports
```typescript
// src/data/index.ts
export { portfolioImages } from './gallery/portfolioImages';
export { surfStoriesData } from './stories/surfStories';
export { mainMenuItems } from './navigation/menuItems';
export { contactInfo, socialLinks } from './contact/contactInfo';

// Re-export utilities
export * from './utils/dataFilters';
export * from './utils/dataTransformers';
export * from './validation/dataValidation';
```

### 2. Category-Specific Index Files
```typescript
// src/data/gallery/index.ts
export { portfolioImages } from './portfolioImages';
export { categoryImages } from './categoryImages';
export { featuredImages } from './featuredImages';

// src/data/stories/index.ts
export { surfStoriesData } from './surfStories';
export { blogPosts } from './blogPosts';
export { testimonials } from './testimonials';
```

## 🎯 Usage in Components

### 1. Importing Data in Components
```typescript
// ✅ Good: Import specific data
import { surfStoriesData, getFeaturedStories } from '../data/stories';
import { portfolioImages } from '../data/gallery';

export default function SurfStories() {
  const featuredStories = getFeaturedStories(surfStoriesData);
  
  return (
    <section>
      {featuredStories.map(story => (
        <StoryCard key={story.id} story={story} />
      ))}
    </section>
  );
}

// ❌ Bad: Hardcoded data in component
export default function SurfStories() {
  const stories = [
    {
      id: 1,
      title: 'Story 1',
      // ... hardcoded data
    }
  ];
  
  return (
    // Component JSX
  );
}
```

### 2. Dynamic Data Loading
```typescript
// src/hooks/useDataLoader.ts
import { useState, useEffect } from 'react';
import type { SurfStory } from '../types/dataTypes';

export const useSurfStories = () => {
  const [stories, setStories] = useState<SurfStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        // In future: const data = await fetchStoriesFromAPI();
        const { surfStoriesData } = await import('../data/stories');
        setStories(surfStoriesData);
      } catch (err) {
        setError('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  return { stories, loading, error };
};
```

## 🔄 Data Management Patterns

### 1. Environment-Based Data
```typescript
// src/data/config/environment.ts
const isDevelopment = process.env.NODE_ENV === 'development';

export const apiConfig = {
  baseUrl: isDevelopment 
    ? 'http://localhost:3000/api' 
    : 'https://api.ceylonsurf.com',
  timeout: 5000,
  retries: 3
};

export const imageConfig = {
  basePath: isDevelopment 
    ? '/images' 
    : 'https://cdn.ceylonsurf.com/images',
  quality: isDevelopment ? 80 : 90,
  formats: ['webp', 'jpg']
};
```

### 2. Data Caching Strategy
```typescript
// src/data/cache/dataCache.ts
class DataCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const dataCache = new DataCache();
```

## 📋 Data File Checklist

### Before Creating New Data Files:
- [ ] Data structure is properly typed with TypeScript interfaces
- [ ] File follows naming conventions (camelCase)
- [ ] Data is organized logically by category/purpose
- [ ] Validation functions are created for complex data
- [ ] Utility functions are provided for common operations
- [ ] Data is exported properly for easy importing
- [ ] Documentation is added for complex data structures

### Before Using Data in Components:
- [ ] Import only the data you need
- [ ] Use proper TypeScript types
- [ ] Handle loading and error states
- [ ] Implement proper data validation
- [ ] Consider caching for performance
- [ ] Follow established data access patterns

## 🚨 Common Data File Mistakes to Avoid

### 1. Hardcoding Data in Components
```typescript
// ❌ Bad: Data mixed with component logic
export default function Gallery() {
  const images = [
    { id: 1, src: '/image1.jpg' },
    { id: 2, src: '/image2.jpg' }
  ];
  
  return <div>{/* Component JSX */}</div>;
}

// ✅ Good: Data separated from component
import { portfolioImages } from '../data/gallery';

export default function Gallery() {
  return <div>{/* Component JSX */}</div>;
}
```

### 2. Inconsistent Data Structure
```typescript
// ❌ Bad: Inconsistent structure
const story1 = { id: 1, title: 'Title', desc: 'Description' };
const story2 = { id: 2, name: 'Title', description: 'Description' };

// ✅ Good: Consistent structure with types
interface SurfStory {
  id: number;
  title: string;
  description: string;
}
```

### 3. Missing Type Safety
```typescript
// ❌ Bad: No type safety
export const stories = [
  { id: 1, title: 'Story' }
];

// ✅ Good: Proper typing
import type { SurfStory } from '../types/dataTypes';

export const stories: SurfStory[] = [
  { id: 1, title: 'Story', description: 'Description', /* ... */ }
];
```

---

*Following these data file guidelines ensures consistent, maintainable, and scalable data management throughout the Ceylon Surf Diary project.*