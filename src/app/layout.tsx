import Navbar from "@/components/navbar/Navbar";
import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/topbar/topbar";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sneatgram",
  description: "home",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <Navbar />
          {children}
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }
}
