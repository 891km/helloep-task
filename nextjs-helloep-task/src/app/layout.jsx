import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/provider/LanguageProvider";
import Layout from "@/components/Layout";
import { LayoutProvider } from "@/provider/LayoutProvider";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "일상의실천 사전과제 - 김민주",
};

export default function RootLayout({ main, side }) {
  return (
    <html lang="ko">
      <body className={`${interSans.variable} antialiased`}>
        <LanguageProvider>
          <LayoutProvider>
            <Layout main={main} side={side} />
          </LayoutProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
