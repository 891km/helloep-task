import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/provider/LanguageProvider";
import Header from "@/components/Header";

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
          <div className="flex w-screen h-screen overflow-hidden">
            <div className="flex-1">
              <Header />
              <main className="p-2.5">{main}</main>
            </div>
            <div className="border-l border-l-gray p-2.5 w-1/3 min-w-100 max-w-[80%] h-full">
              {side}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
