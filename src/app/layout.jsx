import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ExecutiveMentorWebpage",
  description: "Личная страница Георга",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" style={{ scrollBehavior: 'smooth' }} className="html">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="body">{children}</body>
    </html>
  );
}
