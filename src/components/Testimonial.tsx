import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui';

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  className?: string;
}

// Pure component - reusable core functionality
function TestimonialCore({
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
      <Typography
        as="span"
        className="text-center text-base-content leading-7 md:leading-10 lg:leading-[64px] font-medium text-lg md:text-3xl lg:text-6xl max-w-4xl"
      >
        {quote}
      </Typography>

      <div className="flex items-center gap-5">
        {authorImage && (
          <Image
            src={authorImage}
            alt={`${authorName} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-base-300"
          />
        )}
        <div className="flex flex-col items-start">
          <Typography
            as="div"
            className="text-base-content text-base font-medium leading-6"
          >
            {authorName}
          </Typography>
          <Typography
            as="div"
            className="text-base-content/70 text-sm font-normal leading-6"
          >
            {authorRole}
          </Typography>
        </div>
      </div>
    </div>
  );
}

// Wrapper with default layout - ready to use
const Testimonial = () => {
  return (
    <div className="container mx-auto py-12">
      <TestimonialCore
        quote="This product changed everything for our team."
        authorName="Jane Doe"
        authorRole="CTO, TechCorp"
      />
    </div>
  );
};

// Export both for flexibility
export { TestimonialCore, Testimonial };
export default Testimonial;
