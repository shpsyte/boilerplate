import { Hero } from '@/components/Hero';

export const HomeHero = () => {
  return (
    <Hero
      title="Build your app"
      subtitle="in days,"
      highlight="not months"
      description="The first <b><i class='text-accent'>minimalistc</i></b> Next.js boilerplate with AI power and ready-made templates! Crafted by senior engineers to build fast."
      ctaText="Get This Template"
      ctaDiscount='<span className="text-accent">$99</span> off for the first 7460 customers (10 left)'
      onCtaClick={() => {
        window.location.href = 'https://github.com/shpsyte/boilerplate';
      }}
      ctaHref="https://buy.stripe.com/test_13k8yU4mK4gQ0g"
      socialProof={{
        rating: 4,
        userCount: 7449,
        userLabel: 'makers ship faster',
        avatars: [
          '/dunsin.c6d35d82.jpeg',
          '/dunsin.c6d35d82.jpeg',
          '/dunsin.c6d35d82.jpeg',
          '/dunsin.c6d35d82.jpeg',
          '/dunsin.c6d35d82.jpeg',
          '/dunsin.c6d35d82.jpeg',
        ],
      }}
      image="/_next/static/media/demo.752bdb0f.png"
      imageAlt="Mongo + Mailgun + Stripe + NextJS + Tailwind + NextAuth = ShipFast"
    />
  );
};
