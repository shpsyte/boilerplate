'use client';

import React, { useState } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { appConfig } from '@/config/app.config';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Typography, LinkButton } from '@/components/ui';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbar } = appConfig;

  // Filter enabled menu items
  const enabledMenuItems = navbar.menu.enabled
    ? navbar.menu.items.filter((item) => item.enabled)
    : [];

  return (
    <>
      <div className="navbar bg-transparent sticky top-0 z-50 backdrop-blur-md p-0 mb-7">
        <div className="navbar-start w-[100px]">
          {/* Mobile menu button */}
          {navbar.mobile.enabled && enabledMenuItems.length > 0 && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}

          {/* Brand/Logo */}
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
                <Typography as="span">{navbar.brand.text}</Typography>
              )}
            </Link>
          )}
        </div>

        {/* Desktop Menu */}
        {enabledMenuItems.length > 0 && (
          <div
            className={cn('flex-1 w-full navbar-center', {
              'justify-start': navbar.menu.position === 'start',
              'justify-center': navbar.menu.position === 'center',
              'justify-end': navbar.menu.position === 'end',
            })}
          >
            <div className="hidden lg:flex ">
              <ul
                className={cn('menu menu-horizontal px-1', {
                  [navbar.menu.spacing || 'py-0']: true,
                  [navbar.menu.gap || 'gap-0']: true,
                })}
              >
                {enabledMenuItems.map(({ enabled, href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'text-gray-600 hover:text-primary transition-colors',
                        {
                          'disabled:': !enabled,
                        },
                      )}
                    >
                      <Typography size="base" weight="light">
                        {label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Navbar End - Theme Switch and Auth */}
        <div className="navbar-end gap-2 w-auto">
          {/* Authentication Buttons */}
          {navbar.auth.signin.enabled && (
            <LinkButton
              href={navbar.auth.signin.href}
              text={navbar.auth.signin.text}
              className={navbar.auth.signin.classes}
            />
          )}

          {navbar.auth.signup.enabled && (
            <LinkButton
              href={navbar.auth.signup.href}
              text={navbar.auth.signup.text}
              className={navbar.auth.signup.classes}
            />
          )}

          {/* Theme Switch */}
          {navbar.themeSwitch.enabled && <ThemeSwitch />}
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && navbar.mobile.enabled && (
        <div className="lg:hidden shadow-lg rounded-b-lg w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
            {/* Mobile Menu Items */}
            {enabledMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Auth Buttons */}
            {navbar.mobile.showAuthInMobile && (
              <div className="pt-2 space-y-2">
                {navbar.auth.signin.enabled && (
                  <LinkButton
                    href={navbar.auth.signin.href}
                    text={navbar.auth.signin.text}
                    className={navbar.auth.signin.classes}
                    fullWidth
                  />
                )}

                {navbar.auth.signup.enabled && (
                  <LinkButton
                    href={navbar.auth.signup.href}
                    text={navbar.auth.signup.text}
                    className={navbar.auth.signup.classes}
                    fullWidth
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
