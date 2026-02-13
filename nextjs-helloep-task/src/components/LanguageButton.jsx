"use client";
import { useLanguage } from "@/provider/LanguageProvider";

export default function LanguageButton() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 text-gray">
      <button
        className={`${language === "kor" ? "text-foreground" : "text-gray"}`}
        onClick={() => setLanguage("kor")}
      >
        Kor
      </button>
      <span>/</span>
      <button
        className={`${language === "eng" ? "text-foreground" : "text-gray"}`}
        onClick={() => setLanguage("eng")}
      >
        Eng
      </button>
    </div>
  );
}
