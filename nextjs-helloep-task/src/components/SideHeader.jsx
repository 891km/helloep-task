export default function SideHeader() {
  return (
    <header className="shrink-0 h-10 px-2.5 border-b border-b-gray bg-background">
      <nav className="w-full h-full flex items-center justify-end">
        <ul className="flex gap-2.5 text-xl text-gray">
          <ListItem>Contact</ListItem>
          <ListItem>CV</ListItem>
          <ListItem>Client</ListItem>
        </ul>
      </nav>
    </header>
  );
}

function ListItem({ children }) {
  return <li className="hover:text-foreground cursor-pointer">{children}</li>;
}
