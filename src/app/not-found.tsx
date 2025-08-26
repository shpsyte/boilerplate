'use client';

import { LinkButton } from '@/components/ui';
import { useState, useEffect } from 'react';

const funnyPhrases = [
  'Oops! This page was abducted by aliens 👽',
  '404: Page not found, but your patience is! 😅',
  'This page is on permanent vacation 🏖️',
  'The page youre looking for went to buy milk... and never came back',
  '404: Page not found. Maybe its hiding behind the couch?',
  'This page joined a witness protection program',
  'Error 404: Page not found. Have you tried turning it off and on again? 🔌',
  'The page you seek has been consumed by the internet void',
  '404: This page is playing hide and seek... and winning',
  'Congratulations! You found our secret nothing here page! 🎉',
];

export default function NotFound() {
  const [randomPhrase, setRandomPhrase] = useState('');

  useEffect(() => {
    const phrase =
      funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)];
    setRandomPhrase(phrase);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 ">
      <div className="text-center max-w-md mx-auto space-y-8">
        {/* SVG 404 Illustration */}
        <div className="relative">
          <svg
            className="w-64 h-64 mx-auto animate-pulse"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary opacity-20"
            />

            {/* 404 Text */}
            <text
              x="100"
              y="110"
              textAnchor="middle"
              className="fill-primary text-4xl font-bold"
              style={{ fontSize: '32px' }}
            >
              404
            </text>

            {/* Sad face */}
            <circle cx="85" cy="80" r="3" className="fill-primary" />
            <circle cx="115" cy="80" r="3" className="fill-primary" />
            <path
              d="M 85 130 Q 100 140 115 130"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
            />

            {/* Floating dots */}
            <circle
              cx="60"
              cy="60"
              r="2"
              className="fill-secondary animate-bounce"
            />
            <circle
              cx="140"
              cy="70"
              r="2"
              className="fill-accent animate-bounce delay-300"
            />
            <circle
              cx="70"
              cy="140"
              r="2"
              className="fill-warning animate-bounce delay-500"
            />
            <circle
              cx="130"
              cy="150"
              r="2"
              className="fill-success animate-bounce delay-700"
            />
          </svg>
        </div>

        {/* Random funny phrase */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary text-center">
            Page Not Found
          </h1>

          <p className="text-lg font-normal text-base-content text-center italic min-h-[3rem] flex items-center justify-center">
            {randomPhrase}
          </p>
        </div>

        {/* Back to Home button */}
        <div className="pt-4">
          <LinkButton
            href="/"
            text="Back to Home"
            className="btn btn-primary btn-lg"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/5 rounded-full animate-ping delay-2000"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-accent/5 rounded-full animate-ping delay-3000"></div>
        </div>
      </div>
    </div>
  );
}
