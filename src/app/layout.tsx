import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokin Labs — Fun, Sharp & Thoughtful Digital Products",
  description:
    "An independent digital product lab. We get an idea and we don't let it go until it's live.",
  metadataBase: new URL("https://lokinlabs.com.ng"),
  openGraph: {
    title: "Lokin Labs — Fun, Sharp & Thoughtful Digital Products",
    description:
      "Independent product lab building sharp, enjoyable software experiences across vocal cognition, AI tools, fintech parsers, and delivery systems.",
    url: "https://lokinlabs.com.ng",
    siteName: "Lokin Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokin Labs — Digital Product Lab",
    description:
      "We get an idea and we don't let it go until it's live.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans selection:bg-terra-crimson selection:text-white bg-canvas text-ink-dark">
        {children}
      </body>
    </html>
  );
}
