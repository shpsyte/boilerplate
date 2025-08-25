import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  className?: string;
}

export default function Testimonial({
  quote,
  authorName,
  authorRole,
  authorImage,
  className = '',
}: TestimonialProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-6 md:gap-8 lg:gap-11',
        className,
      )}
    >
      <blockquote className="text-center text-foreground leading-7 md:leading-10 lg:leading-[64px] font-medium text-lg md:text-3xl lg:text-6xl max-w-4xl">
        {quote}
      </blockquote>

      <div className="flex items-center gap-5">
        {authorImage && (
          <Image
            src={authorImage}
            alt={`${authorName} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-black/8"
          />
        )}
        <div className="flex flex-col items-start">
          <div className="text-foreground text-base font-medium leading-6">
            {authorName}
          </div>
          <div className="text-muted-foreground text-sm font-normal leading-6">
            {authorRole}
          </div>
        </div>
      </div>
    </div>
  );
}
