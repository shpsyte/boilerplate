import { Bricolage_Grotesque } from 'next/font/google';

const primaryFont = Bricolage_Grotesque({
  variable: '--font-main',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});
export const appConfig = {
  // font
  fonts: {
    primary: primaryFont,
    className: primaryFont.className,
  },

  // Application metadata
  metadata: {
    canonicalUrl: 'https://buildfast.dev',
    title: 'Build!Fast',
    description:
      'A modern React boilerplate supercharged with AI-powered features, designed for rapid development, scalability, and seamless user experience.',
    version: '1.0.0',
    author: 'LuizB!',
    ctaMainAction:
      'https://vercel.com/new/clone?repository-url=https://github.com/shpsyte/boilerplate&project-name=nextjs-boilerplate&repository-name=nextjs-boilerplate&demo-title=Next.js+AI+Boilerplate&demo-description=A modern React boilerplate supercharged with AI-powered features, designed for rapid development, scalability, and seamless user experience.&demo-url=https://buildfast.dev&demo-image=https://raw.githubusercontent.com/shpsyte/boilerplate/refs/heads/main/public/hero-img.avif',
  },

  // Theme configuration with DaisyUI themes
  themes: {
    default: 'light',
    // Light themes
    light: [
      { name: 'light', label: 'Light', category: 'light', enabled: true },
      { name: 'cupcake', label: 'Cupcake', category: 'light', enabled: true },
      {
        name: 'bumblebee',
        label: 'Bumblebee',
        category: 'light',
        enabled: true,
      },
      { name: 'emerald', label: 'Emerald', category: 'light', enabled: true },
      {
        name: 'corporate',
        label: 'Corporate',
        category: 'light',
        enabled: true,
      },
      {
        name: 'valentine',
        label: 'Valentine',
        category: 'light',
        enabled: true,
      },
      { name: 'garden', label: 'Garden', category: 'light', enabled: true },
      { name: 'lofi', label: 'Lo-Fi', category: 'light', enabled: true },
      { name: 'pastel', label: 'Pastel', category: 'light', enabled: true },
      { name: 'fantasy', label: 'Fantasy', category: 'light', enabled: true },
      {
        name: 'wireframe',
        label: 'Wireframe',
        category: 'light',
        enabled: true,
      },
      { name: 'cmyk', label: 'CMYK', category: 'light', enabled: true },
      { name: 'autumn', label: 'Autumn', category: 'light', enabled: true },
      { name: 'acid', label: 'Acid', category: 'light', enabled: true },
      { name: 'lemonade', label: 'Lemonade', category: 'light', enabled: true },
      { name: 'winter', label: 'Winter', category: 'light', enabled: true },
    ],
    // Dark themes
    dark: [
      { name: 'dark', label: 'Dark', category: 'dark', enabled: true },
      {
        name: 'synthwave',
        label: 'Synthwave',
        category: 'dark',
        enabled: true,
      },
      { name: 'retro', label: 'Retro', category: 'dark', enabled: true },
      {
        name: 'cyberpunk',
        label: 'Cyberpunk',
        category: 'dark',
        enabled: true,
      },
      {
        name: 'halloween',
        label: 'Halloween',
        category: 'dark',
        enabled: true,
      },
      { name: 'forest', label: 'Forest', category: 'dark', enabled: true },
      { name: 'aqua', label: 'Aqua', category: 'dark', enabled: true },
      { name: 'black', label: 'Black', category: 'dark', enabled: true },
      { name: 'luxury', label: 'Luxury', category: 'dark', enabled: true },
      { name: 'dracula', label: 'Dracula', category: 'dark', enabled: true },
      { name: 'business', label: 'Business', category: 'dark', enabled: true },
      { name: 'night', label: 'Night', category: 'dark', enabled: true },
      { name: 'coffee', label: 'Coffee', category: 'dark', enabled: true },
      { name: 'dim', label: 'Dim', category: 'dark', enabled: true },
      { name: 'nord', label: 'Nord', category: 'dark', enabled: true },
      { name: 'sunset', label: 'Sunset', category: 'dark', enabled: true },
    ],
  },

  // Get all themes as flat array for compatibility
  getAllThemes() {
    return [...this.themes.light, ...this.themes.dark].filter(
      (theme) => theme.enabled,
    );
  },

  // Get theme names only
  getThemeNames() {
    return this.getAllThemes().map((theme) => theme.name);
  },

  // FAQ configuration
  faq: {
    title: 'FAQ',
    subtitle:
      'Everything you need to know about Build!Fast and how it can transform your development workflow',
    items: [
      {
        question: 'What is Build!Fast?',
        answer:
          'Build!Fast is a modern Next.js 15 boilerplate designed as a SaaS template with AI-powered features, DaisyUI + Tailwind CSS 4, and TypeScript. It helps developers ship products faster by providing a solid foundation.',
      },
      {
        question: 'What technologies are included?',
        answer:
          'Next.js 15 with App Router, TypeScript, DaisyUI + Tailwind CSS 4, 32 pre-configured themes, component library, and a centralized configuration system for easy customization.',
      },
      {
        question: 'Is it suitable for production?',
        answer:
          'Yes! Build!Fast is production-ready with optimized performance, proper TypeScript configuration, ESLint with Prettier, and follows Next.js best practices.',
      },

      {
        question: 'Can I add my own components?',
        answer:
          'Absolutely! The boilerplate includes a component library structure in src/components/ui/ and follows clear conventions for adding new components.',
      },
      {
        question: 'Is there ongoing support?',
        answer:
          'Yes, we provide documentation, examples, and community support. The boilerplate is actively maintained and updated with new features.',
      },
    ],
  },

  // Navbar configuration for dynamic rendering
  navbar: {
    // Brand/Logo configuration
    brand: {
      text: 'Build!Fast',
      logo: '/logo.svg',
      href: '/',
      enabled: true,
      textClasses: 'text-xl font-bold text-primary', // customizable styles
    },

    // Menu items configuration
    menu: {
      enabled: true,
      position: 'start', // start, center, end
      spacing: 'pl-2',
      gap: 'gap-4',
      items: [
        { label: 'Features', href: '#features', enabled: true },
        { label: 'Pricing', href: '#pricing', enabled: true },
        { label: 'Contact', href: '#contact', enabled: true },
        { label: 'FAQ', href: '#faq', enabled: true }, // example disabled item
      ],
    },

    // Authentication buttons configuration
    auth: {
      signup: {
        enabled: false,
        text: 'Sign Up',
        href: '/signup',
        variant: 'primary', // DaisyUI button variants
        classes: 'btn btn-primary', // customizable classes
      },
      signin: {
        enabled: false,
        text: 'Sign In',
        href: '/signin',
        variant: 'ghost',
        classes: 'btn btn-ghost',
      },
    },

    // Theme switcher configuration
    themeSwitch: {
      enabled: true,
    },

    // Mobile menu configuration
    mobile: {
      enabled: true,
      showAuthInMobile: true, // show auth buttons in mobile menu
    },
  },

  // Footer configuration
  footer: {
    enabled: true,
    menu: {
      product: {
        title: 'Product',
        enabled: true,
        items: [
          { label: 'Features', href: '#features', enabled: true },
          { label: 'Pricing', href: '#pricing', enabled: true },
          { label: 'Documentation', href: '#', enabled: true },
        ],
      },
      resources: {
        title: 'Resources',
        enabled: true,
        items: [
          { label: 'Community', href: '#', enabled: true },
          { label: 'Contact', href: '#contact', enabled: true },
        ],
      },
    },
    social: {
      github: { href: '#', enabled: true },
      twitter: { href: '#', enabled: false },
      linkedin: { href: '#', enabled: false },
    },
    legal: {
      privacy: { label: 'Privacy Policy', href: '#', enabled: false },
      terms: { label: 'Terms of Service', href: '#', enabled: false },
    },
  },
};
