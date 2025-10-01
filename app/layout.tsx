import type { Metadata } from "next";
import { Freeman } from "next/font/google"
import "./globals.css";

const freeman = Freeman({
   weight: "400",
  subsets: ["latin"],
  variable: "--font-freeman",
})



export const metadata: Metadata = {
  title: "DK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${freeman.className} text-[.8rem] md:text-[1rem] antialiased bg-cover bg-center bg-[url('/background-image.png')]`}
      >
        {children}
      </body>
    </html>
  );
}
