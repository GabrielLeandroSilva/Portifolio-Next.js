import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviders } from "@/src/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Aplicação para exibição de projetos",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="
            bg-radial bg-fixed from-[var(--background-from-color)] from-40%
            to-[var(--background-to-color)]">
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
