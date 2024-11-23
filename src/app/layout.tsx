import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestão de Consultório Dental",
  description: "Sistema para gerenciamento de consultório dentario.",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
