import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokin Labs — Software Built With Obsession",
  description:
    "An independent digital product lab in Abuja & Global. Creators of Fey (Vocal Articulation Platform), Creed, Roost AI, Vantage, Qore SD-PIS & Lokin Study.",
  metadataBase: new URL("https://lokinlabs.com.ng"),
  openGraph: {
    title: "Lokin Labs — Software Built With Obsession",
    description:
      "Independent digital product lab forging sharp, tactile software across vocal cognition, AI meeting intelligence, fintech parsers, and delivery systems.",
    url: "https://lokinlabs.com.ng",
    siteName: "Lokin Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokin Labs — Digital Product Lab",
    description:
      "Software built with obsession. Impossible to put down.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon-192.png",
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
