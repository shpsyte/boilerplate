import type { Metadata } from 'next';
import './globals.css';
import { appConfig } from '@/config/app.config.js';

export const metadata: Metadata = {
  title: appConfig.metadata.title,
  description: appConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={appConfig.themes.default}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme') || '${appConfig.themes.default}';
                document.documentElement.setAttribute('data-theme', savedTheme);
              } catch (e) {
                document.documentElement.setAttribute('data-theme', '${appConfig.themes.default}');
              }
            `,
          }}
        />
      </head>
      <body className={`${appConfig.fonts.className} antialiased`}>
        <div className="flex flex-col h-full items-center w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
