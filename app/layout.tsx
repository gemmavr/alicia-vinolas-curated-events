import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alicia | Diseño y coordinación de eventos",
  description:
    "Landing provisional para Alicia, especialista en eventos cuidados, memorables y bien coordinados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
