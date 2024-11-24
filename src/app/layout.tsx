import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestão de Consultório Dental",
  description: "Sistema para gerenciamento de consultório dentario.",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins text-light-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
