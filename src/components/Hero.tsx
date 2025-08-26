'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

type SocialProofProps = {
  rating?: number;
  userCount?: number;
  userLabel?: string;
  avatars?: string[];
};

type HeroProps = {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  ctaSubtitle?: string;
  image?: string;
  imageAlt?: string;
  imageBadge?: {
    text?: string;
    icon?: React.ReactNode;
  };
  socialProof?: SocialProofProps;
  badge?: {
    text?: string;
    href?: string;
  };
  className?: string;
};

const HeroComponent = ({
  title = '',
  subtitle,
  highlight,
  description = '',
  ctaText = '',
  ctaHref = '',
  onCtaClick,
  ctaSubtitle,
  image,
  imageAlt = 'Hero image',
  imageBadge,
  socialProof,
  badge,
  className,
}: HeroProps) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill={i < rating ? '#fbbf24' : '#d1d5db'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row items-center w-full justify-start gap-8',
        className,
      )}
    >
      <div className="flex flex-col gap-8 items-center justify-center text-center lg:text-left lg:items-start lg:flex-1">
        {badge && (
          <a
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="-mb-4 md:-mb-6 group"
          >
            <div className="badge badge-outline badge-lg hover:badge-primary transition-colors">
              {badge.text}
            </div>
          </a>
        )}

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-start">
          <span className="relative">{title}</span>
          <span className="whitespace-nowrap relative">
            {subtitle && (
              <span className="mr-3 sm:mr-4 md:mr-5">{subtitle}</span>
            )}
            {highlight && (
              <span className="relative whitespace-nowrap">
                <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-3"></span>
                <span className="relative text-neutral">{highlight}</span>
              </span>
            )}
          </span>
        </h1>

        {description && (
          <p className="text-lg opacity-80 leading-relaxed max-w-xl font-light mt-4">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        )}

        <div className="space-y-4 w-full items-start flex flex-col ">
          <Button
            className="btn-primary group w-full lg:btn-wide"
            onClick={handleCtaClick}
          >
            {ctaHref !== '#' ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={ctaHref}
                className="flex items-center gap-2"
              >
                {ctaText}
              </a>
            ) : (
              ctaText
            )}
          </Button>

          {ctaSubtitle && (
            <p className="text-sm md:text-base flex justify-center items-center gap-2">
              <svg
                className="w-4 h-4 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: ctaSubtitle }} />
            </p>
          )}
        </div>

        {socialProof && (
          <div className="flex flex-col md:flex-row justify-center align-center gap-3">
            {socialProof.avatars && socialProof.avatars.length > 0 && (
              <div className="-space-x-5 avatar-group justify-start">
                {socialProof.avatars.slice(0, 5).map((avatar, index) => (
                  <div key={index} className="avatar w-12 h-12">
                    <Image
                      alt={`User ${index + 1}`}
                      width={48}
                      height={48}
                      src={avatar}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col justify-center items-center md:items-start gap-1">
              {socialProof.rating && (
                <div className="flex gap-1">
                  {renderStars(socialProof.rating)}
                </div>
              )}
              {socialProof.userCount && (
                <div className="text-base text-base-content/80">
                  <span className="font-semibold text-base-content">
                    {socialProof.userCount.toLocaleString()}
                  </span>{' '}
                  {socialProof.userLabel || 'users'}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {image && (
        <div className="relative lg:flex-1 hidden lg:flex justify-start w-full lg:w-auto">
          <div className="relative w-full">
            <div className="absolute -left-2 -top-2 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-secondary/10 blur-2xl animate-pulse delay-1000"></div>

            <div className="relative rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl animate-float hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out animate-fade-in-up">
              <Image
                alt={imageAlt}
                width={800}
                height={600}
                src={image}
                className="rounded-lg shadow-md object-cover w-full h-auto"
                priority
              />

              {imageBadge && (
                <div className="absolute -bottom-4 -left-4 flex items-center space-x-3 rounded-full bg-base-100 p-4 shadow-lg border border-base-200">
                  {imageBadge.icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content">
                      {imageBadge.icon}
                    </div>
                  )}
                  {imageBadge.text && (
                    <div>
                      <p className="font-medium text-base-content text-sm">
                        {imageBadge.text}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = ({ className }: { className?: string } = {}) => {
  return (
    <div className={cn('container mx-auto mb-12', className)}>
      <HeroComponent
        title="Build your idea"
        highlight="10x Faster"
        description="A minimalist, production-ready Next.js boilerplate with code-built-in AI capabilities. Skip the setup and anoying stufs and focus on what matters most! Building your product."
        ctaText="Start building!"
        ctaSubtitle="AI-Powered Next.js Boilerplate"
        ctaHref="https://github.com/shpsyte/boilerplate"
        badge={{
          href: 'https://github.com/shpsyte/boilerplate',
          text: '⭐ Star us on GitHub',
        }}
        image="/hero-img.avif"
        imageAlt="Stripe + NextJS + Tailwind + BetterAuth = Build!Fast"
        imageBadge={{
          icon: <Sparkles size={20} className="text-white" />,
          text: 'Built by engineers, empowered by AI',
        }}
      />
    </div>
  );
};

export { Hero, HeroComponent };
