"use client";
import { useLanguage } from "@/provider/LanguageProvider";

export default function LanguageButton() {
  const { isKor, setIsKor } = useLanguage();

  return (
    <div className="flex gap-1 text-gray">
      <button
        className={`transition-colors ${isKor ? "text-foreground" : "text-gray"}`}
        onClick={() => setIsKor(true)}
      >
        Kor
      </button>
      <span>/</span>
      <button
        className={`transition-colors ${!isKor ? "text-foreground" : "text-gray"}`}
        onClick={() => setIsKor(false)}
      >
        Eng
      </button>
    </div>
  );
}
