
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata = {
  title: "Nova Promotional",
  description: "Nova Promotional Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
