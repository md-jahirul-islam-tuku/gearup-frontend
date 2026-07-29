import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "GearUp",
  description: "Sports & Outdoor Gear Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster richColors position="bottom-center" />
        </Providers>
      </body>
    </html>
  );
}
