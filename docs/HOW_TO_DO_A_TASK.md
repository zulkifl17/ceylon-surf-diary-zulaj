# How to Do a Task - Ceylon Surf Diary

## 🎯 Overview
This document provides a step-by-step guide for implementing new features, fixing bugs, or making improvements to the Ceylon Surf Diary project. Following this structured approach ensures consistency, quality, and proper documentation.

## 📋 Pre-Task Preparation

### 1. Understand the Project Context
Before starting any task, familiarize yourself with:
- **PROJECT_DOCUMENTATION.md** - Complete project overview and structure
- **BEST_PRACTICES.md** - Coding standards and patterns
- **NAMING_CONVENTIONS.md** - File and component naming guidelines
- **DATA_FILES.md** - Data management patterns

### 2. Review the TODO List
- Check `PROJECT_DOCUMENTATION.md` for the comprehensive TODO list
- Identify if your task already exists in the list
- If not, add it to the appropriate section (Pages/Sections or Other Tasks)
- Mark the task as `[ ]` (pending) initially

### 3. Analyze Similar Components
- Examine existing components that are similar to what you're building
- Study their structure, patterns, and implementation
- Note any reusable patterns or utilities

## 🚀 Task Implementation Process

### Step 1: Planning and Design
```markdown
## Task: [Task Name]
**Type**: [Feature/Bug Fix/Improvement/Refactor]
**Priority**: [High/Medium/Low]
**Estimated Time**: [Time estimate]

### Requirements:
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

### Technical Approach:
- Component structure
- Data requirements
- Animation needs
- Responsive considerations

### Dependencies:
- Required data files
- New types needed
- Utility functions
```

### Step 2: Environment Setup
```bash
# Ensure development environment is ready
npm install
npm run dev

# Check for any linting issues
npm run lint

# Verify TypeScript compilation
npm run typecheck
```

### Step 3: Create Required Files

#### For New Components:
```typescript
// 1. Create component file (PascalCase)
// src/components/[ComponentName].tsx

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ComponentProps } from '../types/componentTypes';

gsap.registerPlugin(ScrollTrigger);

interface ComponentNameProps {
  // Define props with proper types
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component implementation following best practices
  
  return (
    <section className="component-styles">
      {/* Component JSX */}
    </section>
  );
}
```

#### For Data Files:
```typescript
// 2. Create data file (camelCase)
// src/data/[dataName].ts

import type { DataType } from '../types/dataTypes';

export const dataName: DataType[] = [
  // Data following established patterns
];

export default dataName;
```

#### For Types:
```typescript
// 3. Update or create type definitions
// src/types/[typeCategory].ts

export interface NewDataType {
  id: number;
  // Other properties with proper types
}
```

### Step 4: Implementation Guidelines

#### Component Development:
1. **Follow the established structure**:
   - Imports (external → internal → relative)
   - Interface definitions
   - Component function
   - State and refs
   - Effects and event handlers
   - Render JSX

2. **Apply best practices**:
   - Use TypeScript interfaces for all props
   - Implement proper error handling
   - Add loading states where needed
   - Follow responsive design patterns
   - Use established animation patterns

3. **Maintain consistency**:
   - Follow naming conventions
   - Use the design system colors and fonts
   - Apply consistent spacing and layout
   - Match existing component patterns

#### Animation Implementation:
```typescript
// GSAP Animations
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

  return () => ctx.revert();
}, []);

// Framer Motion Animations
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

#### Styling Guidelines:
```typescript
// Organized Tailwind classes
<div className="
  relative h-screen w-full
  bg-background
  flex items-center justify-center
  text-primary-text
  overflow-hidden
">

// Responsive design
<div className="
  text-lg md:text-xl lg:text-2xl
  px-4 md:px-8 lg:px-16
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

### Step 5: Integration

#### Update Main App:
```typescript
// src/App.tsx
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="bg-[#F7F7F5]">
      {/* Existing components */}
      <NewComponent />
      {/* Other components */}
    </div>
  );
}
```

#### Update Data Exports:
```typescript
// src/data/index.ts
export { newData } from './newDataFile';
```

#### Update Type Exports:
```typescript
// src/types/index.ts
export type { NewDataType } from './newTypes';
```

## 🧪 Testing and Validation

### Step 6: Component Testing
1. **Visual Testing**:
   ```bash
   npm run dev
   # Open http://localhost:5173
   # Test on different screen sizes
   # Verify animations work correctly
   # Check hover states and interactions
   ```

2. **Functionality Testing**:
   - Test all interactive elements
   - Verify data loading and display
   - Test error states and edge cases
   - Ensure accessibility requirements

3. **Performance Testing**:
   - Check animation performance
   - Verify image loading optimization
   - Test scroll performance
   - Monitor bundle size impact

### Step 7: Code Quality Check
```bash
# Run linting
npm run lint

# Check TypeScript compilation
npm run typecheck

# Verify no console errors
# Check browser developer tools
```

## 📝 Documentation and Finalization

### Step 8: Update Documentation

#### Update TODO List:
```markdown
# In PROJECT_DOCUMENTATION.md
- [x] **Task Name** - Brief description of what was implemented
```

#### Document the Implementation:
```markdown
### New Section/Component Name
**Status**: ✅ Done
**Component**: `ComponentName.tsx`
**Description**: Detailed description of the component
**Features**:
- Feature 1
- Feature 2
- Feature 3

**Technical Implementation**:
- Implementation details
- Animation patterns used
- Data sources
- Responsive considerations

**Last Updated**: [Date]
**Changes Made**: [Description of changes if updating existing component]
```

### Step 9: User Review and Feedback

#### Present the Work:
1. **Demo the feature** in the development environment
2. **Explain the implementation** and design decisions
3. **Highlight key features** and interactions
4. **Show responsive behavior** on different screen sizes

#### Gather Feedback:
- Ask for specific feedback on functionality
- Request opinions on design and user experience
- Note any requested changes or improvements
- Confirm user satisfaction before marking complete

#### Iterate if Needed:
- Make requested changes
- Re-test the implementation
- Update documentation if changes are significant
- Present updated version for final approval

### Step 10: Mark as Complete
Only after user satisfaction and approval:
```markdown
- [x] **Task Name** - Completed and approved
```

## 🔄 Post-Implementation

### Code Review Checklist:
- [ ] Code follows established patterns and best practices
- [ ] TypeScript types are properly defined
- [ ] Component is responsive across all screen sizes
- [ ] Animations are smooth and performant
- [ ] Error handling is implemented
- [ ] Code is properly documented
- [ ] TODO list is updated
- [ ] User has approved the implementation

### Future Maintenance:
- Monitor for any issues or bugs
- Be prepared to make minor adjustments
- Keep documentation updated with any changes
- Consider the component for future refactoring initiatives

## 🚨 Common Pitfalls to Avoid

### 1. Skipping Planning
- Don't start coding without understanding requirements
- Always plan the component structure first
- Consider data needs and dependencies

### 2. Ignoring Existing Patterns
- Don't reinvent existing solutions
- Follow established component patterns
- Reuse existing utilities and helpers

### 3. Poor Testing
- Don't skip testing on different screen sizes
- Always test animations and interactions
- Verify accessibility requirements

### 4. Incomplete Documentation
- Don't forget to update the TODO list
- Always document new components thoroughly
- Keep implementation notes for future reference

### 5. Rushing to Completion
- Don't mark tasks complete without user approval
- Always gather feedback before finalizing
- Be prepared to iterate based on feedback

## 📋 Quick Reference Checklist

### Before Starting:
- [ ] Read relevant documentation
- [ ] Check TODO list
- [ ] Add task if not present
- [ ] Study similar components
- [ ] Plan the implementation

### During Implementation:
- [ ] Follow naming conventions
- [ ] Apply best practices
- [ ] Use proper TypeScript types
- [ ] Implement responsive design
- [ ] Add proper animations
- [ ] Handle error states

### Before Completion:
- [ ] Test thoroughly
- [ ] Run quality checks
- [ ] Update documentation
- [ ] Get user feedback
- [ ] Make necessary adjustments
- [ ] Confirm user satisfaction

### After Completion:
- [ ] Mark task as complete
- [ ] Update project documentation
- [ ] Consider future improvements
- [ ] Monitor for issues

---

*Following this structured approach ensures high-quality implementations that align with project standards and user expectations.*