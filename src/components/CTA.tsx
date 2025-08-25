import { cn } from '@/lib/utils';

type CTAProps = {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  className?: string;
};

export function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
}: CTAProps) {
  return (
    <div className={cn('text-center space-y-6', className)}>
      <h2 className="text-4xl md:text-6xl font-bold text-base-content">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        {primaryButton && (
          <button
            className="btn btn-primary btn-lg"
            onClick={primaryButton.onClick}
          >
            {primaryButton.text}
          </button>
        )}
        {secondaryButton && (
          <button
            className="btn btn-outline btn-lg"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.text}
          </button>
        )}
      </div>
    </div>
  );
}
