import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import favicon from "@/public/favicon.svg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MinLink - Best URL Shortener",
  description: "A small URL shortener app that makes it easy for you to browse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
