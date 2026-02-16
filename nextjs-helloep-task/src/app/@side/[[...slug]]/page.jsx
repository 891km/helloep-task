import SideContent from "@/components/side/SideContent";
import { fetchClients, fetchContact, fetchCV } from "@/sanity/queries";

export default async function SideDetailPage() {
  const [contact, cv, clients] = await Promise.all([
    fetchContact(),
    fetchCV(),
    fetchClients(),
  ]);

  return (
    <div className="p-2.5 flex-1 overflow-y-auto pb-20">
      <SideContent content={{ contact, cv, clients }} />
    </div>
  );
}
