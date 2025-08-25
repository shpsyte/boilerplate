'use client';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Suspense } from 'react';
import Testimonial from '@/components/Testimonial';
import { Container } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen w-full">
        <Hero />
        <Features />
        <Pricing />
        <Container>
          <CTA
            title="Ready to Get Started?"
            description="Join thousands of developers who trust our boilerplate to build amazing applications faster than ever."
            primaryButton={{
              text: 'Start Building Now',
              onClick: () => console.log('Start building clicked'),
            }}
            secondaryButton={{
              text: 'View Documentation',
              onClick: () => console.log('View docs clicked'),
            }}
          />
        </Container>
        <Container fullWidth className="bg-base-200">
          <Testimonial
            quote="Great testimonial here"
            authorName="John Doe"
            authorRole="CEO"
            className="my-custom-spacing"
          />
        </Container>
        <Testimonial
          quote="Great testimonial here"
          authorName="John Doe"
          authorRole="CEO"
          className="my-custom-spacing"
        />
        {/* <Testimonial
          quote="This product changed everything for our team."
          authorName="Jane Doe"
          authorRole="CTO, TechCorp"
        /> */}
      </main>
      {/* <Footer /> */}
      {/* <Container className="mt-2">
        <Suspense>
          <Navbar />
        </Suspense>
      </Container>
      <Container className="mt-2">
        <HomeHero />
      </Container> */}
    </>
  );
}
