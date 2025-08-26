'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

type PricingProps = {
  className?: string;
};

const tiers: PricingTier[] = [
  {
    name: 'Do It Yourself',
    price: 'Free',
    description: 'Perfect for makers and hackers',
    features: [
      'Launch-ready template',
      'Claude AI already integrated',
      'Responsive, modern layouts',
      'Built-in authentication',
      'Stripe payments configured',
      'Community support on demand',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'We handle the heavy lifting',
    features: [
      'Everything in Free',
      'We deploy it for you — zero setup',
      'We manage and keep it running',
      'Custom layout adjustments',
      'Automatic updates included',
      'Priority support when you need it',
    ],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for scale & serious teams',
    features: [
      'Everything in Pro',
      'Custom AI model integrations',
      'Dedicated support channel',
      'Frontend & backend split architecture',
      'Custom infrastructure setup',
      'Team training & onboarding',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div
      className={cn(
        'card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300',
        tier.highlight && 'ring-2 ring-primary shadow-primary/20',
      )}
    >
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <h3 className="card-title text-xl font-bold">{tier.name}</h3>
          {tier.highlight && <div className="badge badge-primary">Popular</div>}
        </div>

        <div className="mb-6">
          <span className="text-3xl font-bold">{tier.price}</span>
          {tier.price !== 'Free' && tier.price !== 'Custom' && (
            <span className="text-base-content/60"> /month</span>
          )}
        </div>

        <p className="text-base-content/80 mb-6">{tier.description}</p>

        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={16} className="text-success flex-shrink-0" />
              <span className="text-base-content/80">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions">
          <button
            className={cn(
              'btn w-full',
              tier.highlight ? 'btn-primary' : 'btn-outline',
            )}
          >
            {tier.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Pricing = ({ className }: PricingProps) => {
  return (
    <div className={cn('container mx-auto py-24', className)} id="pricing">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include updates and
            core features.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
};
