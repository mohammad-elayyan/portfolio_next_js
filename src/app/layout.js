import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFlieisBackground from "@/components/FireFlieisBackground";
import Sound from "@/components/Sound";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Elayyan",
  description: "Elayyan portfolio",
  favIcon: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFlieisBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
