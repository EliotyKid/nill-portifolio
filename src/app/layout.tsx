import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="bg-bk flex flex-col items-center ">
          <Header/>
          {children}
          <div className="w-full h-[5000px]"></div>
          <Footer/>
        </body>
    </html>
  );
}
