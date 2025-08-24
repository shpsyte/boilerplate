import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  text: string;
  className: string;
  fullWidth?: boolean;
}

export function LinkButton({ href, text, className, fullWidth }: LinkProps) {
  return (
    <Link
      href={href}
      className={cn('btn', className, {
        'w-full': fullWidth,
      })}
    >
      {text}
    </Link>
  );
}
