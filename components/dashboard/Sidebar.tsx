"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Server,
  AlertTriangle,
  FileText,
  BarChart3,
  Settings,
  Activity,
  LogOut,
} from "lucide-react";

const links = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Servers",
    href: "/dashboard/servers",
    icon: Server,
  },
  {
    title: "Incidents",
    href: "/dashboard/incidents",
    icon: AlertTriangle,
  },
  {
    title: "Logs",
    href: "/dashboard/logs",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-[270px] border-r border-gray-200 bg-white">

      <div className="flex h-full flex-col">

        {/* Logo */}

        <div className="flex items-center gap-3 border-b border-gray-100 px-8 py-7">

          <Activity
            className="text-red-600"
            size={28}
          />

          <div>

            <h1 className="text-xl font-bold">

              Incident<span className="text-red-600">IQ</span>

            </h1>

            <p className="text-xs text-gray-500">

              Infrastructure Monitoring

            </p>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 py-6">

          <div className="space-y-2">

            {links.map((item) => {

              const Icon = item.icon;

              const active = pathname === item.href;

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                    active
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >

                  <Icon size={20} />

                  {item.title}

                </Link>

              );

            })}

          </div>

        </nav>

        {/* Bottom */}

        <div className="border-t border-gray-100 p-4">

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </div>

    </aside>
  );
}