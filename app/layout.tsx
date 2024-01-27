import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "Archinradius",
  description: "An application for architects",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
