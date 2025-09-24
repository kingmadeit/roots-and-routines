import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { FloatingIcons, Footer, Header } from "@/components";
import Image from "next/image";
// Load fonts

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "700"], // Regular & Bold
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"], // Regular & Bold
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roots and Routines",
  description:
    "personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child’s wellbeing.",
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
  other: {
    "color-scheme": "light",
    "darkreader-lock": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light" suppressHydrationWarning={true}>
      <body
        className={`${quicksand.variable} ${nunito.variable} font-quicksand antialiased w-full text-primary bg-primary`}
      >
        <main className="w-full flex min-h-screen flex-col absolute z-10">
          <div className="relative z-5">
            {/* Floating Icons - covers entire page */}
            <FloatingIcons 
              count={8}
              iconSize="md"
              enableAnimation={true}
              opacityRange={[0.2, 0.5]}
              colorVariants={['accent', 'secondary']}
              containerClassName="fixed inset-0 z-0"
            />
          </div>
          {/* Main content - positioned above floating icons */}
          <Header />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
