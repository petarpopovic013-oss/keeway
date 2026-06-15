import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

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
  title: "Keeway Srbija",
  description: "Dizajnirano za hrabre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${saira.variable} ${sairaLight.variable} ${zuume.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface italic">
        {children}
      </body>
    </html>
  );
}
