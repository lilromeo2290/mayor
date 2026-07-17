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
  title: "Hon. Alexander K. Mensah — Service. Excellence. Accountability.",
  description:
    "Official campaign website for Hon. Alexander K. Mensah. Building a better future together through unity, integrity, and development. Join the movement, volunteer, donate, and read our manifesto.",
  keywords: [
    "Alexander Mensah",
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
  authors: [{ name: "Mensah Campaign 2026" }],
  openGraph: {
    title: "Hon. Alexander K. Mensah — Service. Excellence. Accountability.",
    description:
      "Building a Better Future Together Through Unity, Integrity, and Development.",
    siteName: "Mensah Campaign 2026",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hon. Alexander K. Mensah — Service. Excellence. Accountability.",
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
              name: "Hon. Alexander K. Mensah",
              jobTitle: "Political Candidate",
              description:
                "Candidate for national office. Building a better future through unity, integrity, and development.",
              url: "https://mensah-campaign.example",
              sameAs: [
                "https://twitter.com/mensahcampaign",
                "https://facebook.com/mensahcampaign",
                "https://instagram.com/mensahcampaign",
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
