import TextHeading from "@/components/side/TextHeading";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClientContent({ content: clients }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentClient = searchParams.get("client") || "";

  const handleClientClick = (client) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("client");
    params.delete("page");

    if (client) {
      params.set("client", client);
    } else {
      params.delete("client");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <TextHeading>clients</TextHeading>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-x-4 gap-y-1">
        {clients.map((client) => {
          return (
            <li className="text-base/5" key={client}>
              <button
                className={`text-left transition-opacity hover:opacity-50 ${currentClient === client && "opacity-50"}`}
                onClick={() => handleClientClick(client)}
              >
                {client}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
