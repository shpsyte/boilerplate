# CLAUDE.react.md

This file provides React component development guidelines and UI standards for this Next.js + DaisyUI boilerplate.

## DaisyUI-First Development Approach

**CRITICAL**: This project follows a **DaisyUI-first approach**. Always use DaisyUI semantic classes and avoid custom CSS.

### Import UI Components

Always import basic components from the UI library:

```tsx
import { Typography, Button, Container, LinkButton } from '@/components/ui';
```

### ✅ Correct DaisyUI Usage

```jsx
// Buttons
<Button className="btn-primary btn-lg">Primary Action</Button>
<Button className="btn-outline btn-sm">Secondary</Button>

// Layout
<section className="py-16 bg-base-200">
  <Container className="mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* content */}
    </div>
  </Container>
</section>

// Typography
<Typography as="h1" className="text-4xl font-bold text-base-content">
  Main Heading
</Typography>
<Typography as="p" className="text-base-content/70">
  Description text with opacity
</Typography>

// Cards & Components
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content goes here</p>
    <div className="card-actions justify-end">
      <Button className="btn-primary">Action</Button>
    </div>
  </div>
</div>

// Badges and States
<div className="badge badge-primary">New</div>
<div className="badge badge-outline">Draft</div>
```

### ❌ Avoid These Patterns

```jsx
// Don't use raw HTML buttons
<button className="bg-blue-500 text-white px-4 py-2 rounded">

// Don't create custom CSS classes
<div className="my-custom-card-class">

// Don't use arbitrary colors
<div className="bg-[#3b82f6] text-[#ffffff]">

// Don't use raw typography elements without Typography component
<h1 className="text-2xl font-bold">
```

## Component Architecture

### UI Component Library Structure

```
src/components/ui/
├── index.ts          # Centralized exports
├── Typography.tsx    # Semantic typography component
├── Button.tsx        # DaisyUI button wrapper
├── Container.tsx     # Layout container
└── LinkButton.tsx    # Link + button combination
```

### Standard Component Template

Here's the standard template following the dual export pattern:

```tsx
import { cn } from '@/lib/utils';
import { appConfig } from '@/config/app.config';
import { Typography, Button } from '@/components/ui';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: 'default' | 'featured';
  className?: string;
};

// Pure component - reusable core functionality
function FeatureCardCore({
  title,
  description,
  icon,
  href,
  variant = 'default',
  className,
}: FeatureCardProps) {
  const isClickable = !!href;

  return (
    <div
      className={cn(
        // Base DaisyUI classes
        'card bg-base-100 shadow-lg hover:shadow-xl transition-shadow',
        {
          'card-bordered': variant === 'featured',
          'cursor-pointer hover:bg-base-200': isClickable,
        },
        className,
      )}
      onClick={isClickable ? () => window.open(href) : undefined}
    >
      <div className="card-body">
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          </div>
        )}
        <Typography
          as="h3"
          className="card-title text-base-content justify-center"
        >
          {title}
        </Typography>
        <Typography as="p" className="text-base-content/70 text-center">
          {description}
        </Typography>
        {variant === 'featured' && (
          <div className="card-actions justify-center mt-4">
            <div className="badge badge-primary">Featured</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Wrapper with default layout
const FeatureCard = () => {
  return (
    <div className="p-4">
      <FeatureCardCore
        title="Default Feature"
        description="Default feature description"
      />
    </div>
  );
};

// Export both for flexibility
export { FeatureCardCore, FeatureCard };
```

## Component Development Guidelines

### 1. TypeScript Props

Always define proper TypeScript interfaces:

```tsx
type ComponentProps = {
  title: string;
  description?: string;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};
```

### 2. Props-Driven Design

Components should be highly configurable through props:

```tsx
export function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
}: CTAProps) {
  return (
    <section className={cn('py-16 bg-base-200', className)}>
      {/* component content */}
    </section>
  );
}
```

### 3. AppConfig Integration

Read from configuration when possible:

```tsx
import { appConfig } from '@/config/app.config';

export function Header() {
  const { navbar } = appConfig;

  return (
    <nav>
      {navbar.brand.enabled && (
        <Link href={navbar.brand.href}>{navbar.brand.text}</Link>
      )}
    </nav>
  );
}
```

### 4. Conditional Classes with cn()

Use the `cn()` utility for dynamic classes:

```tsx
<div
  className={cn(
    'base classes',
    {
      'conditional-class': condition,
      'another-class': anotherCondition,
    },
    className
  )}
>
```

### 5. Component Architecture - Pure Component + Layout Wrapper Pattern

Use the dual export pattern: export both a pure component and a wrapper with default layout. This provides maximum flexibility while maintaining good defaults.

```tsx
// ✅ Pure component - no layout constraints
function MyComponentCore({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn('text-center space-y-6', className)}>
      <Typography
        as="h2"
        className="text-4xl md:text-6xl font-bold text-base-content"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
      >
        {description}
      </Typography>
    </div>
  );
}

// ✅ Wrapper with default layout - ready to use
const MyComponent = ({ className }: { className: string }) => {
  return (
    <div className={cn('container mx-auto py-12', className)}>
      <MyComponentCore
        title="Default Title"
        description="Default description with standard layout"
      />
    </div>
  );
};

// Export both for flexibility
export { MyComponentCore, MyComponent };
```

**Usage Examples:**

```tsx
// Use the wrapper for standard layouts
<MyComponent />

// Use the pure component for custom layouts
<section className="py-20 bg-base-200">
  <div className="max-w-6xl mx-auto">
    <MyComponentCore
      title="Custom Title"
      description="Custom layout with more control"
      className="text-left"
    />
  </div>
</section>

// Use with Container component for different layouts
<Container className="py-16 bg-gradient-to-r from-primary to-secondary">
  <MyComponentCore title="Gradient Background" description="Using Container wrapper" />
</Container>
```

## DaisyUI Class Reference

### Layout Classes

- `container` - Responsive container
- `section` - Section wrapper
- `hero` - Hero section layout
- `grid` - Grid layout
- `flex` - Flexbox layout

### Component Classes

- `btn btn-primary` - Primary button
- `btn btn-outline` - Outline button
- `btn btn-ghost` - Ghost button
- `card bg-base-100` - Card component
- `badge badge-primary` - Badge component
- `dropdown` - Dropdown component
- `navbar` - Navigation bar

### Color Classes

- `text-base-content` - Main text color
- `text-base-content/70` - Text with 70% opacity
- `bg-base-100` - Background color
- `bg-base-200` - Secondary background
- `text-primary` - Primary brand color
- `bg-primary/10` - Primary color with 10% opacity

### Spacing & Sizing

- `py-16` - Padding Y-axis
- `gap-6` - Grid/flex gap
- `space-y-4` - Vertical spacing between children
- `w-12 h-12` - Fixed dimensions
- `max-w-4xl` - Max width constraint

## Responsive Design

Always include responsive classes for mobile-first design:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<Typography as="h1" className="text-2xl md:text-4xl lg:text-6xl">
<section className="py-8 md:py-16">
<div className="flex flex-col lg:flex-row items-center gap-8">
```

## Theme Compatibility

Ensure components work with all DaisyUI themes by:

- Using semantic color classes (`text-base-content`, `bg-base-100`)
- Avoiding hardcoded colors
- Testing with both light and dark themes
- Using opacity variants for subtle text (`text-base-content/70`)
