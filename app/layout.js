import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fixxit Physio",
  description: "Experienced Physiotherapists at your doorsteps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" lg:mx-20">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
