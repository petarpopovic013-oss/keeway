import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { absoluteUrl, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/seo";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter-local",
  weight: ["100", "200", "300", "400", "500", "700"],
});

const saira = localFont({
  src: [
    { path: "../fonts/SAIRA/static/Saira-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/SAIRA/static/Saira-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../fonts/SAIRA/static/Saira-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/SAIRA/static/Saira-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/SAIRA/static/Saira-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/SAIRA/static/Saira-Bold.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-saira-local",
});

const sairaLight = localFont({
  src: [
    { path: "../fonts/SAIRA/static/Saira-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/SAIRA/static/Saira-Light.ttf", weight: "300", style: "normal" }
  ],
  variable: "--font-saira-light-local",
});

const zuume = localFont({
  src: [
    { path: "../fonts/ZUUME/Zuume-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/ZUUME/Zuume-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/ZUUME/Zuume-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/ZUUME/Zuume-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/ZUUME/Zuume-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ZUUME/Zuume-Bold.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-zuume-local",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Keeway Srbija | Motocikli, skuteri, oprema i servisi", template: "%s | Keeway Srbija" },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "DDM Company doo",
  keywords: ["Keeway Srbija", "Keeway motocikli", "Keeway skuteri", "motocikli Srbija", "skuteri Srbija", "Keeway oprema", "Keeway servis", "Keeway prodaja"],
  category: "Motocikli i skuteri",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { type: "website", locale: "sr_RS", url: SITE_URL, siteName: SITE_NAME, title: "Keeway Srbija | Let's Ride Together", description: DEFAULT_DESCRIPTION, images: [{ url: "/heroimage.png", width: 2210, height: 1080, alt: "Keeway Srbija motocikli i skuteri" }] },
  twitter: { card: "summary_large_image", title: "Keeway Srbija | Let's Ride Together", description: DEFAULT_DESCRIPTION, images: ["/heroimage.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F54308", colorScheme: "light" };

const organizationStructuredData = {
  "@context": "https://schema.org", "@type": ["Organization", "MotorcycleDealer"], "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL,
  logo: absoluteUrl("/logos/Keeway-Worldmark-Orange.png"), image: absoluteUrl("/heroimage.png"), description: DEFAULT_DESCRIPTION,
  email: "ddmcompany@gmail.com", telephone: "+381641334589",
  address: { "@type": "PostalAddress", streetAddress: "Dr. Svetislava Kasapinovića 9", addressLocality: "Novi Sad", addressCountry: "RS" },
  areaServed: { "@type": "Country", name: "Srbija" }, sameAs: ["https://www.instagram.com/ddmcompany.ns/"],
  parentOrganization: { "@type": "Organization", name: "DDM Company doo", url: "https://ddmcompany.rs" },
};
const websiteStructuredData = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, description: DEFAULT_DESCRIPTION, inLanguage: "sr-RS", publisher: { "@id": `${SITE_URL}/#organization` } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr-Latn"
      className={`${saira.variable} ${sairaLight.variable} ${zuume.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface italic">
        <StructuredData data={[organizationStructuredData, websiteStructuredData]} />
        {children}
      </body>
    </html>
  );
}
