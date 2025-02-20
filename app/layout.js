import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "XooX | Next.js E-Commerce",
  description: "Your one-stop shop for all things awesome!", // Add a description for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
