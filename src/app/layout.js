import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Program Hub",
  description: "Program Hub is web application that allows users to browse and view details of a specific program. This application is user-friendly, visually appealing, and follow modern UI/UX principles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}