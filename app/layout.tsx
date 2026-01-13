import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kwaku Ntiri - Software Developer | Portfolio",
  description: "Software engineer specializing in building exceptional digital experiences. Based in Kumasi, Ghana. Expert in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Kwaku Ntiri", "Software Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Ghana", "Kumasi"],
  authors: [{ name: "Kwaku Ntiri" }],
  creator: "Kwaku Ntiri",
  publisher: "Kwaku Ntiri",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" }
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Kwaku Ntiri - Software Developer",
    description: "Software engineer specializing in building exceptional digital experiences",
    siteName: "Kwaku Ntiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwaku Ntiri - Software Developer",
    description: "Software engineer specializing in building exceptional digital experiences",
    creator: "@Aninakwageorge1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
