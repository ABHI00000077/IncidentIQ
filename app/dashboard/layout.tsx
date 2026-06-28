import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Right */}

        <main className="flex-1 min-h-screen">

          <Topbar />

          <div className="px-8 py-8">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}