import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Super Store | Everything you need",
  description: "Shop groceries, home essentials, electronics and more."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}