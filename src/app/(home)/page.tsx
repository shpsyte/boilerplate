'use client';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features, Integrations } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Cta } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';
import { FAQ } from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="w-full">
        <Hero />
        <Integrations />
        <Features />
        <Pricing />
        <Cta className="py-8" />
        <FAQ />
      </main>
      <Footer />
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
