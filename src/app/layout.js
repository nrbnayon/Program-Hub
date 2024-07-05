import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Program Hub",
  description:
    "Program Hub is a web application that allows users to browse and view details of specific programs. This application is user-friendly, visually appealing, and follows modern UI/UX principles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Header />
        <main className="max-w-7xl mx-auto overflow-x-auto">
          <div className="min-h-screen">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
