import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";


const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '700'],  // Regular & Bold
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '700'],  // Regular & Bold
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Roots and Routines",
  description: "personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child’s wellbeing.",
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  //   shortcut: "/shortcut-icon.png",
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  keywords: [
    "Roots and Routines",
    "Family Support",
    "Child Wellbeing",
    "Home Routines",
    "Parenting Tips",
  ],
  authors: [
    {
      name: "Roots and Routines",
      url: "https://rootsnroutines.com.uk",
    },
  ],
           
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${quicksand.variable} antialiased w-full bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
