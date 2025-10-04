# Best Practices Guidelines - Ceylon Surf Diary

## 🎯 Overview
This document outlines the best practices for developing components and features in the Ceylon Surf Diary project. All developers should follow these guidelines to ensure consistency, maintainability, and quality.

## 📋 Component Development Best Practices

### 1. Component Structure
```typescript
// ✅ Good: Proper component structure
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ComponentProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ComponentNameProps {
  // Define all props with proper types
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // State declarations
  const [state, setState] = useState<Type>(initialValue);
  
  // Refs
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Render
  return (
    <section ref={elementRef} className="component-styles">
      {/* Component JSX */}
    </section>
  );
}
```

### 2. TypeScript Usage
- **Always use TypeScript interfaces** for props, state, and data structures
- **Define types in the types directory** for reusable interfaces
- **Use proper type annotations** for all variables and functions
- **Avoid `any` type** - use specific types or `unknown` when necessary

```typescript
// ✅ Good: Proper TypeScript usage
interface SurfStory {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
}

// ❌ Bad: Using any type
const story: any = { /* ... */ };
```

### 3. Animation Best Practices

#### GSAP Animations
```typescript
// ✅ Good: Proper GSAP usage
useEffect(() => {
  if (!elementRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
  });

  return () => ctx.revert(); // Cleanup
}, []);
```

#### Framer Motion Animations
```typescript
// ✅ Good: Proper Framer Motion usage
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
>
  Content
</motion.div>
```

### 4. Styling Best Practices

#### Tailwind CSS Usage
```typescript
// ✅ Good: Organized Tailwind classes
<div className="
  relative h-screen w-full 
  bg-background 
  flex items-center justify-center
  text-primary-text
  overflow-hidden
">
  Content
</div>

// ✅ Good: Conditional classes
<div className={`
  base-classes
  ${isActive ? 'active-classes' : 'inactive-classes'}
  ${variant === 'primary' ? 'primary-classes' : 'secondary-classes'}
`}>
```

#### Custom Styles
```typescript
// ✅ Good: Inline styles for dynamic values
<div 
  style={{ 
    fontFamily: 'Bebas Neue, sans-serif',
    letterSpacing: '0.05em'
  }}
>
```

### 5. State Management
```typescript
// ✅ Good: Proper state management
const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<DataType[]>([]);

// ✅ Good: State updates
const handleSubmit = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const result = await apiCall();
    setData(result);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  } finally {
    setIsLoading(false);
  }
};
```

### 6. Event Handling
```typescript
// ✅ Good: Proper event handling
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission
};
```

### 7. Performance Optimization
```typescript
// ✅ Good: Memoization when needed
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const memoizedCallback = useCallback((id: number) => {
  // Callback logic
}, [dependency]);

// ✅ Good: Conditional rendering
{isVisible && <ExpensiveComponent />}
```

## 🎨 Design System Adherence

### 1. Color Usage
```typescript
// ✅ Good: Use defined color variables
className="bg-background text-primary-text"

// ❌ Bad: Hardcoded colors
className="bg-[#F7F7F5] text-[#121212]"
```

### 2. Typography
```typescript
// ✅ Good: Use defined font families
style={{ fontFamily: 'Bebas Neue, sans-serif' }}
className="font-tangerine font-josefin"

// ✅ Good: Consistent text sizing
className="text-6xl md:text-8xl font-bold"
```

### 3. Spacing and Layout
```typescript
// ✅ Good: Consistent spacing
className="py-20 px-8 lg:px-16"
className="mb-8 space-y-6"

// ✅ Good: Responsive design
className="grid grid-cols-1 lg:grid-cols-2 gap-12"
```

## 🧪 Testing Best Practices

### 1. Component Testing
- Test component rendering
- Test user interactions
- Test prop variations
- Test error states

### 2. Animation Testing
- Test animation completion
- Test scroll triggers
- Test responsive behavior
- Test performance impact

## 📱 Accessibility Best Practices

### 1. Semantic HTML
```typescript
// ✅ Good: Semantic elements
<section aria-label="Hero section">
  <h1>Main Title</h1>
  <p>Description</p>
  <button aria-label="View portfolio">View Portfolio</button>
</section>
```

### 2. Keyboard Navigation
```typescript
// ✅ Good: Keyboard support
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  aria-label="Close menu"
>
```

### 3. Screen Reader Support
```typescript
// ✅ Good: Screen reader support
<img 
  src={image.src} 
  alt={image.alt}
  role="img"
  aria-describedby="image-description"
/>
```

## 🔧 Code Quality Standards

### 1. Code Organization
- Keep components under 200 lines when possible
- Extract complex logic into custom hooks
- Use meaningful variable and function names
- Add comments for complex logic

### 2. Error Handling
```typescript
// ✅ Good: Proper error handling
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.error('API call failed:', error);
  throw new Error('Failed to fetch data');
}
```

### 3. Documentation
- Add JSDoc comments for complex functions
- Document component props and usage
- Keep README files updated
- Document any non-obvious code logic

## 🚀 Performance Guidelines

### 1. Image Optimization
- Use appropriate image formats (WebP when possible)
- Implement lazy loading for images
- Use responsive images with srcSet
- Optimize image sizes for different viewports

### 2. Bundle Optimization
- Use dynamic imports for code splitting
- Avoid importing entire libraries when only using specific functions
- Remove unused dependencies
- Monitor bundle size regularly

### 3. Animation Performance
- Use transform and opacity for animations
- Avoid animating layout properties
- Use will-change property sparingly
- Test animations on lower-end devices

## 📋 Checklist for New Components

- [ ] Component follows proper TypeScript patterns
- [ ] All props have proper type definitions
- [ ] Component is responsive across all screen sizes
- [ ] Animations are smooth and performant
- [ ] Accessibility requirements are met
- [ ] Error states are handled properly
- [ ] Component is properly documented
- [ ] Code follows established patterns
- [ ] Performance impact is minimal
- [ ] Component integrates well with existing design system

---

*Follow these best practices to ensure high-quality, maintainable code that aligns with the project's standards and goals.*