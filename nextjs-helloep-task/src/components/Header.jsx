import LanguageButton from "@/components/LanguageButton";

export default function Header() {
  return (
    <header className="px-2.5 h-10 text-xl flex justify-between items-center whitespace-nowrap border-b border-b-gray sticky">
      <a href="/">EVERYDAY PRACTICE</a>

      <LanguageButton />

      <a href="mailto:hello@everyday-practice.com" className="text-xl">
        hello@everyday-practice.com
      </a>
    </header>
  );
}
