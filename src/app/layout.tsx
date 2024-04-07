import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import NavBar from "./ui/navbar";
import { Providers } from "./providers";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

// import moreganicFont from "@fonts/moreganic-font";

// const moreganic = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Moreganic.woff",
//       weight: "400",
//     },
//   ],
//   variable: "--font-moreganic",
// });

export const metadata: Metadata = {
  title: "EcoToss Compostable Paper Bags",
  description: "Paper bag company based out of San Diego, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
