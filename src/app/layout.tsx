import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Luis Cortes | Software Engineer",
  description: "Portafolio profesional de Luis Eligio Cortes Rodarte, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-mesh min-height-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}