import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviders } from "@/src/components/theme-provider";

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
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
