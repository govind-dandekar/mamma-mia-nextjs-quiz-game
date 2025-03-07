import { Analytics } from "@vercel/analytics/react";

import { Bodoni_Moda } from "next/font/google";

import "./globals.css";
import CustomFooter from "@/components/custom-footer";

const bodiniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mamma Mia Musical Quiz Game",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={bodiniModa.className}>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-50">
          <div className="flex flex-col bg-sky-950 rounded-2xl w-3/4 h-[40rem] text-white text-center items-center justify-center">
            {children}
            <Analytics />
          </div>
          <CustomFooter />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
