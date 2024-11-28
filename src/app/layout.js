import localFont from "next/font/local";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./globals.css";

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
  title: "Moviie search",
  description: "Generated by Philip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header><Nav /></header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
