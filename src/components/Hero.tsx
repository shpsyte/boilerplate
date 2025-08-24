'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
  ctaDiscount?: string;
  image?: string;
  imageAlt?: string;
  socialProof?: SocialProofProps;
  badge?: {
    text?: string;
    href?: string;
  };
  className?: string;
};

export const Hero = ({
  title = '',
  subtitle,
  highlight,
  description = '',
  ctaText = '',
  ctaHref = '',
  onCtaClick,
  ctaDiscount,
  image,
  imageAlt = 'Hero image',
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
    <section
      className={cn(
        'container flex flex-col lg:flex-row items-center w-full justify-start gap-16 lg:gap-20 lg:items-start py-8 pb-20 lg:pb-24',
        className,
      )}
    >
      <div className="flex flex-col gap-12 items-center justify-center text-center lg:text-left lg:items-start">
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

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span className="relative">{title}</span>
          {subtitle && (
            <span className="whitespace-nowrap relative">
              <span className="mr-3 sm:mr-4 md:mr-5">{subtitle}</span>
              {highlight && (
                <span className="relative whitespace-nowrap">
                  <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                  <span className="relative text-neutral">{highlight}</span>
                </span>
              )}
            </span>
          )}
        </h1>

        {description && (
          <p className="text-lg opacity-80 leading-relaxed max-w-xl">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        )}

        <div className="space-y-4 w-full items-start flex flex-col ">
          <Button
            className="btn-primary group w-full lg:btn-wide"
            onClick={handleCtaClick}
          >
            {ctaHref !== '#' ? (
              <a href={ctaHref} className="flex items-center gap-2">
                {ctaText}
              </a>
            ) : (
              ctaText
            )}
          </Button>

          {ctaDiscount && (
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
              <span dangerouslySetInnerHTML={{ __html: ctaDiscount }} />
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
        <div className="relative max-md:-m-4 lg:w-full">
          <img
            alt={imageAlt}
            className="w-full max-w-xl ml-auto rounded-lg shadow-lg"
            src={image}
          />
        </div>
      )}
    </section>
  );
};
