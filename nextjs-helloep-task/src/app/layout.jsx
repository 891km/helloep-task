import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/provider/LanguageProvider";
import Layout from "@/components/Layout";
import { LayoutProvider } from "@/provider/LayoutProvider";
import SideMenuProvider from "@/provider/SideMenuProvider";
import SideOpenProvider from "@/provider/SideOpenProvider";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "김민주 | 일상의실천 사전과제",
};

export default function RootLayout({ main, side, postDetail }) {
  return (
    <html lang="ko">
      <body className={`${interSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <LayoutProvider>
            <SideMenuProvider>
              <SideOpenProvider>
                <Layout main={main} side={side} postDetail={postDetail} />
              </SideOpenProvider>
            </SideMenuProvider>
          </LayoutProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
