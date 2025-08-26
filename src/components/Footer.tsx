'use client';
import { appConfig } from '@/config/app.config';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const { navbar } = appConfig;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {navbar.brand.enabled && (
                <Link href={navbar.brand.href} className="">
                  {navbar.brand.logo ? (
                    <Image
                      src={navbar.brand.logo}
                      alt="Logo"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <span className="font-medium">{navbar.brand.text}</span>
                  )}
                </Link>
              )}
              <span className="text-2xl font-bold text-base-content">
                {navbar.brand.text}
              </span>
            </div>
            <p className="text-base-content/70 mb-6 max-w-md leading-relaxed">
              {appConfig.metadata.description}
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-base-content text-lg mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-base-content/70 hover:text-primary transition-colors hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base-content/70 hover:text-primary transition-colors hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors hover:underline"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-semibold text-base-content text-lg mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors hover:underline"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-base-content/70 hover:text-primary transition-colors hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="divider my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/60 text-sm">
            © {currentYear} {appConfig.navbar.brand.text}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-base-content/60 hover:text-primary transition-colors hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-base-content/60 hover:text-primary transition-colors hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
