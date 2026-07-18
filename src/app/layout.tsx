import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/site/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Emmanuel Senyo Amekplenu — Service. Excellence. Accountability.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "Official campaign website for Emmanuel Senyo Amekplenu, Volta Regional Youth Organizer Hopeful. Building a better future together through unity, integrity, and development. Join the movement, volunteer, donate, and read our manifesto.",
  keywords: [
    "Emmanuel Senyo Amekplenu",
    "Emmanuel Amekplenu",
    "political campaign",
    "leadership",
    "manifesto",
    "volunteer",
    "donate",
    "national development",
    "election",
    "unity",
    "integrity",
  ],
  authors: [{ name: "Amekplenu Campaign 2026" }],
  openGraph: {
    title: "Emmanuel Senyo Amekplenu — Service. Excellence. Accountability.",
    description:
      "Building a Better Future Together Through Unity, Integrity, and Development.",
    siteName: "Amekplenu Campaign 2026",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Senyo Amekplenu — Service. Excellence. Accountability.",
    description:
      "Building a Better Future Together Through Unity, Integrity, and Development.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Senyo Amekplenu",
              jobTitle: "Volta Regional Youth Organizer Hopeful",
              description:
                "Volta Regional Youth Organizer Hopeful. Building a better future for young people through unity, integrity, and development.",
              url: "https://amekplenu-campaign.example",
              sameAs: [
                "https://twitter.com/amekplenucamp",
                "https://facebook.com/amekplenucamp",
                "https://instagram.com/amekplenucamp",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
