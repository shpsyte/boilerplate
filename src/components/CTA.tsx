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

function CtaComponent({
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

const Cta = ({ className }: { className?: string }) => {
  return (
    <div className={cn('container mx-auto py-24', className)}>
      <CtaComponent
        title="Ready to Get Started?"
        description="Join thousands of developers who trust our boilerplate to build amazing applications faster than ever."
        primaryButton={{
          text: 'Start Building!',
          onClick: () =>
            window.open(
              'https://vercel.com/new/clone?repository-url=https://github.com/shpsyte/my-saas-template&project-name=saas-template&repository-name=saas-template&demo-title=Next.js+SaaS+Template&demo-description=The+first+boilerplate+with+AI+power&demo-url=https://my-saas-template.vercel.app&demo-image=https://raw.githubusercontent.com/shpsyte/my-saas-template/main/preview.png',
              '_blank',
            ),
        }}
        secondaryButton={{
          text: 'Documentation',
          onClick: () => console.log('View docs clicked'),
        }}
      />
    </div>
  );
};

export { CtaComponent, Cta };
