import type { Metadata } from "next";
import "./ui/globals.css";
import NavBar from "./ui/navbar";
import { Providers } from "./providers";

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
