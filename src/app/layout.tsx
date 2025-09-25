import type { Metadata } from "next";
import { Quicksand, Nunito, Antonio } from "next/font/google";
import "./globals.css";
import { FloatingIcons, Footer, Header } from "@/components";
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

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
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
        className={`${quicksand.variable} ${nunito.variable} ${antonio.variable} font-quicksand antialiased w-full text-primary bg-primary`}
      >
          {/* Floating Icons - covers entire page */}
          <FloatingIcons 
            count={12}
            iconSize="md"
            enableAnimation={true}
            opacityRange={[0.3, 0.7]}
            colorVariants={['accent', 'secondary', 'complementary', 'secondary-light']}
            containerClassName="fixed inset-0 z-0"
          />
          {/* Main content - positioned above floating icons */}
          <main className="w-full flex min-h-screen flex-col absolute z-10">
            <Header />
            <div className="w-full h-full">{children}</div>
            <Footer />
          </main>
      </body>
    </html>
  );
}
