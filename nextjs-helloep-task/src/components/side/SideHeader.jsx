"use client";
import { useSideMenu } from "@/provider/SideMenuProvider";
import { useRouter, useSearchParams } from "next/navigation";

export default function SideHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentMenu, setCurrentMenu } = useSideMenu();

  const menus = ["Contact", "CV", "Client"];

  const handleMenuClick = (menu) => {
    const params = new URLSearchParams(searchParams);
    router.push(`/?${params.toString()}`);

    setCurrentMenu(menu);
  };

  return (
    <header className="shrink-0 h-10 px-2.5 border-b border-b-gray bg-background">
      <nav
        className={
          "w-full h-full flex items-center justify-end tablet:justify-start"
        }
      >
        <ul className="flex gap-2.5 text-xl text-gray">
          {menus.map((menu) => (
            <MenuItem
              key={menu}
              menu={menu}
              currentMenu={currentMenu}
              onClick={() => handleMenuClick(menu)}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MenuItem({ menu, currentMenu, onClick }) {
  return (
    <li
      className={`hover:text-foreground cursor-pointer ${currentMenu === menu && "text-foreground"}`}
    >
      <button onClick={onClick}>{menu}</button>
    </li>
  );
}
