import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, fullWidth, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'px-4 py-12 mx-auto',
          {
            'w-full': fullWidth,
            container: !fullWidth,
          },
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Container.displayName = 'Container';
