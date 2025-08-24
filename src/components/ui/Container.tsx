import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, fullWidth, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(fullWidth ? 'w-full' : 'container ', 'px-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
