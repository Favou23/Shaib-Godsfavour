import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteSettings } from "@/lib/cms";
import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import process from "node:process";
import { URL } from "node:url";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteDescription =
  "AI engineer and backend developer building intelligent systems with modern backend and AI technologies.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shaib Godsfavour - AI Engineer & Backend Developer",
    template: "%s | Shaib Godsfavour",
  },
  description: siteDescription,
  keywords: [
    "Shaib Godsfavour",
    "AI Engineer",
    "Backend Engineer",
    "AI systems",
    "LLM applications",
    "Agentic AI",
    "python",
    "RAG",
    "Typescript",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Shaib Godsfavour", url: siteUrl }],
  creator: "Shaib Godsfavour",
  publisher: "Shaib Godsfavour",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shaib Godsfavour",
    description: siteDescription,
    url: "/",
    siteName: "Shaib Godsfavour",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AI engineer and backend developer building intelligent systems with modern backend and AI technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaib Godsfavour",
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/img/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      url: "/img/favicon.svg",
    },
  ],
  manifest: "/manifest.json",
  // verification: {
  //   google: "ZnbKzL4y7SZDMOuyp5S-FGRdAlkQ_xE6rzyx8jWpXgA",
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${syne.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="site-shell">
            <Header navLinks={siteSettings.navLinks} />
            <main className="pt-10 sm:pt-14">{children}</main>
            <Footer
              columns={siteSettings.footerColumns}
              socialLinks={siteSettings.socialLinks}
              brand={siteSettings.footer}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
