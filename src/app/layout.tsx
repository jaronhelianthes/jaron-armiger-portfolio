import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaron Armiger | Helianthes Studio",
  description:
    "Agentic AI for Capital Markets. Multi-Agent RAG. Founder @ Helianthes Studio.",
  icons: {
    icon: "/branding/logos/coat_of_arms.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
