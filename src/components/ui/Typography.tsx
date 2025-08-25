import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

// Valid HTML elements for typography
type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div';

// Typography component props interface
interface TypographyOwnProps {
  as?: TypographyElement;
  variant?: 'display' | 'headline' | 'title' | 'body' | 'caption' | 'overline';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
  weight?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'base-content'
    | 'error'
    | 'warning'
    | 'success';
  children: React.ReactNode;
}

// Merge component own props with HTML element props
type TypographyProps<T extends ElementType = 'span'> = TypographyOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps> & {
    as?: T;
  };

// Map props to Tailwind/DaisyUI classes
const getSizeClasses = (size: TypographyOwnProps['size']) => {
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };
  return sizeMap[size ?? 'base'];
};

const getWeightClasses = (weight: TypographyOwnProps['weight']) => {
  const weightMap = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };
  return weightMap[weight || 'medium'];
};

const getColorClasses = (color: TypographyOwnProps['color']) => {
  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',
    'base-content': 'text-base-content',
    error: 'text-error',
    warning: 'text-warning',
    success: 'text-success',
  };
  return colorMap[color ?? 'base-content'];
};

const getAlignClasses = (align: TypographyOwnProps['align']) => {
  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };
  return alignMap[align ?? 'left'];
};

const getVariantClasses = (
  variant: TypographyOwnProps['variant'],
  as: TypographyOwnProps['as'],
) => {
  const variantMap = {
    display: 'text-4xl font-bold tracking-tight',
    headline: 'text-3xl font-semibold',
    title: 'text-xl font-semibold',
    body: 'text-base font-normal',
    caption: 'text-sm font-normal',
    overline: 'text-xs font-medium uppercase tracking-wider',
  };

  if (variant) {
    return variantMap[variant];
  }

  // Default semantic styles based on element
  const elementDefaults = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base font-normal',
  };

  return elementDefaults[as as keyof typeof elementDefaults] || '';
};

export const Typography = <T extends TypographyElement = 'span'>({
  as,
  variant,
  size,
  weight,
  align,
  color,
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = (as || 'span') as TypographyElement;

  const classes = cn(
    // Base typography classes
    getVariantClasses(variant, as),
    getSizeClasses(size),
    getWeightClasses(weight),
    getColorClasses(color),
    getAlignClasses(align),
    // Custom className
    className,
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
