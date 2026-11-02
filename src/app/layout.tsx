import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProviders } from "@/src/components/providers/theme-provider";

const imbue = localFont({
  src: "../fonts/imbue-400.woff2",
  weight: "400",
  variable: "--font-imbue",
  display: "swap",
});

const albert = localFont({
  src: "../fonts/albert-sans-var.woff2",
  weight: "100 900",
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
    title: "Gabriel Leandro, front-end e sistemas",
  description:
    "Portfólio de Gabriel Leandro, desenvolvedor front-end e analista de sistemas. Seis projetos, com interface, código e links no ar.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
  title: "Gabriel Leandro, front-end e sistemas",
    description:
      "Seis projetos, de um escritório de advocacia a ferramentas de desenvolvimento.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e7e0" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${imbue.variable} ${albert.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
