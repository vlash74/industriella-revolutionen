import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industriella revolutionen – Quiz",
  description: "Instuderingsquiz till provet (Sol Nova 8, s. 67–108)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
