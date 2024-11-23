import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestão de Consultório Dental",
  description: "Sistema para gerenciamento de consultório dentario.",
};

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '700'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
