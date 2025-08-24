'use client';
import { Navbar } from '@/components/Navbar';
import { Container } from '@/components/ui';
import { HomeHero } from '@/features/home/Hero';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Container className="mt-2">
        <Suspense>
          <Navbar />
        </Suspense>
      </Container>
      <Container className="mt-2">
        <HomeHero />
      </Container>
    </>
  );
}
