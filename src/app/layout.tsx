import { Metadata } from "next";
import "./globals.css";
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import { Background, ThemeProvider, Flex, Column } from "@/once-ui/components";
import { Inter } from "next/font/google";
import { style } from "@/app/resources/config";
import classNames from "classnames";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-primary",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Tonify",
  description: "Web3 музыкальная платформа на TON, интегрированная с Telegram. Питч-дек для инвесторов.",
  keywords: ["Tonify", "Music-to-Earn", "TON", "Telegram", "Web3", "blockchain", "crypto", "music"],
  authors: [{ name: "Brok3", url: "https://t.me/brok3dev" }],
  openGraph: {
    title: "Tonify",
    description: "Web3 музыкальная платформа на TON, интегрированная с Telegram. Питч-дек для инвесторов.",
    type: "website",
    url: "https://tonify.space",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tonify Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonify - Музыка, которая платит",
    description: "Первая Music-to-Earn платформа на блокчейне TON",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ru"
      suppressHydrationWarning
      className={classNames(inter.variable)}
    >
      <Flex
        as="body"
        data-theme={style.theme}
        data-brand={style.brand}
        data-accent={style.accent}
        data-neutral={style.neutral}
        data-solid={style.solid}
        data-solid-style={style.solidStyle}
        data-border={style.border}
        data-surface={style.surface}
        data-transition={style.transition}
        background="page"
      >
        <ThemeProvider>
          <Background
            gradient={{
              display: true,
              opacity: 80,
              x: 50,
              y: 60,
              width: 100,
              height: 50,
              tilt: 0,
              colorStart: "brand-background-strong",
              colorEnd: "page-background",
            }}
            dots={{
              display: true,
              opacity: 40,
              size: "2",
              color: "brand-background-strong",
            }}
          />
          <Column
            as="main"
            position="relative"
            zIndex={1}
            fillWidth
            horizontal="center"
            style={{ minHeight: "100vh" }}
          >
            {children}
          </Column>
        </ThemeProvider>
      </Flex>
    </html>
  );
}
