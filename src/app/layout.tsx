import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Gourmet Haven | Fine Dining Experience",
  description: "Experience the finest culinary journey with our carefully crafted menu and exceptional service. Reserve your table today.",
  keywords: ["restaurant", "fine dining", "food", "reservations", "gourmet"],
  authors: [{ name: "Gourmet Haven" }],
  openGraph: {
    title: "Gourmet Haven | Fine Dining Experience",
    description: "Experience the finest culinary journey with our carefully crafted menu and exceptional service.",
    url: "https://gourmethaven.com",
    siteName: "Gourmet Haven",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
