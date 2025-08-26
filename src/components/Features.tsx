'use client';

import { cn } from '@/lib/utils';
import {
  Zap,
  Code,
  Puzzle,
  Shield,
  Rocket,
  RefreshCw,
  Box,
  Key,
  CreditCard,
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeaturesProps = {
  className?: string;
};

const featuresList: FeatureProps[] = [
  {
    icon: <Zap size={24} />,
    title: 'Lightning Fast',
    description:
      'Optimized for speed with next-gen performance and minimal bundle sizes.',
  },
  {
    icon: <Code size={24} />,
    title: 'Clean Code',
    description:
      'Well-structured codebase following best practices and modern patterns.',
  },
  {
    icon: <Puzzle size={24} />,
    title: 'Fully open-source',
    description:
      'Our code is open for everyone to use, modify, and distribute.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure by Default',
    description: 'Security best practices baked in from the start.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Production Ready',
    description:
      'Deploy with confidence using our battle-tested configuration.',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Always Updated',
    description: 'Regularly maintained to keep dependencies fresh and secure.',
  },
];

const integrations = [
  {
    icon: <Box size={24} />,
    title: 'Tailwind CSS/DaisyUI',
    description:
      'Build beautiful, modern interfaces in minutes — no CSS hassle, just pure speed to launch.',
  },
  {
    icon: <Key size={24} />,
    title: 'Authentication',
    description:
      'Secure login out of the box. Social logins, user management, and better auth baked in from day one.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Payment Processing',
    description:
      'Stripe integration with subscription management, billing, and webhook handling configured.',
  },
];

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
      <div className="card-body">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="card-title text-xl font-bold">{title}</h3>
        <p className="text-base-content/80">{description}</p>
      </div>
    </div>
  );
};

export const Integrations = ({ className }: FeaturesProps) => {
  return (
    <div
      className={cn('w-full bg-base-200 py-24', className)}
      id="#integrations"
    >
      <div className="container mx-auto ">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto font-light">
              A minimalist approach with maximum flexibility. Only the essential
              features to get you started fast.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features = ({ className }: FeaturesProps) => {
  return (
    <div className={cn('container mx-auto py-24', className)} id="features">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
            Crafted by engineers, for everyone
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto font-light"></p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
