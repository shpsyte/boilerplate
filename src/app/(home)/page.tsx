'use client';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Cta } from '@/components/CTA';
import { Suspense } from 'react';
import { Testimonial } from '@/components/Testimonial';

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
        <Cta />
        <Testimonial />
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
