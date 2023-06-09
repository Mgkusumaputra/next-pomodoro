"use client";

import Navbar from "@components/navbar";
import "./styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Next Pomodoro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-gray-800 text-slate-100 flex flex-col p-3`}
      >
        {children}
      </body>
    </html>
  );
}
